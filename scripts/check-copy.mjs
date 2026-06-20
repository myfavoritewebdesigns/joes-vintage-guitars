#!/usr/bin/env node
/**
 * check-copy: AI-tell + dash detector over the BUILT dist/ output.
 *
 * Why rendered output and not source: template strings multiply at build time
 * (the Martin serial page renders roughly 135 em dashes from one source line)
 * and markdown entities render as literal characters, so source counts and
 * rendered counts legitimately differ. The reader sees dist/, so dist/ is what
 * gets gated. Run `npm run build` first.
 *
 * Surfaces scanned per page, beyond visible body text: img alt, a/link title
 * attributes, meta description, og:description, twitter:description, and every
 * string value inside JSON-LD blocks. These metadata surfaces are where
 * mechanical de-AI passes forget to look, and they are exactly what shows up
 * in search results and AI citations. <script> (other than parsed JSON-LD),
 * <style>, <code>, and <pre> contents are excluded.
 *
 * Entity-form dashes (&mdash; &ndash; &#8211; &#8212; &#x2013; &#x2014;) decode
 * to their literal characters when the HTML is parsed, so the literal-character
 * scan catches them too. Curly apostrophes are normalized to straight ones
 * before pattern matching so "it’s" matches /it'?s/.
 *
 * Two tiers:
 *   HARD-FAIL (exits non-zero): dashes (U+2012/2013/2014/2015/2212 and " -- "
 *     as prose punctuation), a high-precision AI-tell lexicon, AI-pattern
 *     regexes, lowercase significant words in h1/h2 headings, emoji in prose.
 *   WARN (report only, never gates): a softer lexicon and the same Title Case
 *     check on h3.
 *
 * Allowlist: reports/seo-v2/copy-allowlist.json, entries keyed by {url, phrase}
 * for adjudicated exceptions (brand tokens, real product names). url is the
 * page route ("/free-appraisal/") or "*" for every page; phrase is compared
 * case-insensitively against the exact matched text.
 *
 * Usage:
 *   npm run audit:copy
 *   node scripts/check-copy.mjs [--dist <dir>] [--allowlist <path>] [--out <path>]
 *
 * Exit codes:
 *   0 — no hard-fails
 *   1 — at least one hard-fail
 *   2 — script error (missing dist/, unreadable file, etc.)
 *
 * Cost: free + offline. Pure static analysis of the build output.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ---------- Args ----------
const args = parseArgs(process.argv.slice(2));
const DIST = args.dist ? join(ROOT, args.dist) : join(ROOT, "dist");
const ALLOWLIST_PATH = args.allowlist ? join(ROOT, args.allowlist) : join(ROOT, "reports", "seo-v2", "copy-allowlist.json");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const OUT_PATH = args.out ? join(ROOT, args.out) : join(ROOT, "reports", "seo-v2", `check-copy-${stamp}.md`);

if (!existsSync(DIST)) {
  console.error(`dist/ not found at ${DIST}. Run \`npm run build\` first.`);
  process.exit(2);
}

// ---------- Check definitions ----------

// (a) Dash characters. Entity forms decode to these at parse time (see header).
const DASH_CHARS = /[‒–—―−]/g;
const DASH_NAMES = {
  "‒": "figure dash U+2012",
  "–": "en dash U+2013",
  "—": "em dash U+2014",
  "―": "horizontal bar U+2015",
  "−": "minus sign U+2212",
};
const DOUBLE_HYPHEN = / -- /g;

// (b) High-precision hard-fail lexicon. Word-boundary, case-insensitive.
const HARD_LEXICON = [
  "delve", "tapestry", "realm", "embark", "testament to", "treasure trove",
  "look no further", "game-changer", "unlock the", "elevate your", "boasts",
  "nestled", "plethora", "myriad",
];

// (c) Pattern tells. Applied to apostrophe-normalized text.
const HARD_PATTERNS = [
  { name: "not-just-x-its-y", re: /not (just|only) [^.]{0,60}(it'?s|but)/i },
  { name: "whether-youre-x-or", re: /whether you(')?re [^.]{0,40} or /i },
  { name: "its-important-noting", re: /it'?s (important|worth) not(ing|e)/i },
  { name: "in-the-world-of", re: /in the world of/i },
  { name: "when-it-comes-to", re: /when it comes to/i },
];
// Paragraph-initial only (anchored), checked against each block unit's start.
const PARA_INITIAL = { name: "paragraph-initial-transition", re: /^(in conclusion|in summary|ultimately,|moreover,|furthermore,)/i };

// (d) Title Case small-words list. Significant = more than 3 letters and not here.
const SMALL_WORDS = new Set(["the", "for", "to", "and", "or", "in", "on", "by", "with", "a", "an", "of", "at", "as", "but", "nor", "per", "via"]);

// (e) Emoji in prose.
const EMOJI = /\p{Extended_Pictographic}/gu;
// Copyright / trademark / service-mark glyphs are classified as
// Extended_Pictographic by Unicode but are legitimate legal marks, not AI-tell
// emoji. They appear deliberately in image-license JSON-LD (creditText,
// copyrightNotice) and brand copy, so they must not hard-fail the copy gate.
const ALLOWED_PICTOGRAPHIC = new Set(["©", "®", "™", "℠"]);

// WARN tier lexicon. Report only, never gates.
const WARN_LEXICON = [
  "leverage", "seamless", "robust", "comprehensive", "holistic", "navigate",
  "landscape", "journey", "crucial", "pivotal", "dive into",
];

const lexiconRe = (words) =>
  words.map((w) => ({ word: w, re: new RegExp(`\\b${w.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "gi") }));
const HARD_LEX = lexiconRe(HARD_LEXICON);
const WARN_LEX = lexiconRe(WARN_LEXICON);

// Tags whose text never counts as prose.
const EXCLUDE_TAGS = new Set(["script", "style", "code", "pre", "noscript", "template", "svg"]);
// Block-level tags that define a reporting unit (and paragraph starts).
const BLOCK_TAGS = new Set([
  "p", "li", "h1", "h2", "h3", "h4", "h5", "h6", "figcaption", "blockquote",
  "td", "th", "dt", "dd", "caption", "summary",
]);

// ---------- Allowlist ----------
let allowlist = [];
if (existsSync(ALLOWLIST_PATH)) {
  try {
    const parsed = JSON.parse(readFileSync(ALLOWLIST_PATH, "utf-8"));
    allowlist = Array.isArray(parsed.entries) ? parsed.entries : [];
  } catch (e) {
    console.error(`Could not parse allowlist at ${ALLOWLIST_PATH}: ${e.message}`);
    process.exit(2);
  }
}
function isAllowed(route, matchedText) {
  const m = matchedText.toLowerCase();
  return allowlist.some(
    (e) => (e.url === "*" || e.url === route) && typeof e.phrase === "string" && e.phrase.toLowerCase() === m
  );
}

// ---------- Walk dist ----------
function walkHtml(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walkHtml(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}
const files = walkHtml(DIST).sort();
const routeOf = (file) => {
  const rel = relative(DIST, file).split(sep).join("/");
  return "/" + rel.replace(/index\.html$/, "");
};

// ---------- Extraction ----------
/**
 * Returns text units for a page: [{ surface, where, text, isBlockStart }].
 * Visible text is grouped by nearest block ancestor so paragraph-initial
 * checks and report context stay meaningful.
 */
function extractUnits($) {
  const units = [];

  // Visible body text, grouped by nearest block ancestor.
  const blockText = new Map(); // cheerio element -> string[]
  const walk = (node, blockEl, excluded) => {
    if (node.type === "text") {
      if (!excluded && node.data && node.data.trim()) {
        const arr = blockText.get(blockEl) ?? [];
        arr.push(node.data);
        blockText.set(blockEl, arr);
      }
      return;
    }
    if (node.type !== "tag") return;
    const tag = node.name?.toLowerCase();
    const nowExcluded = excluded || EXCLUDE_TAGS.has(tag);
    const nowBlock = BLOCK_TAGS.has(tag) ? node : blockEl;
    for (const child of node.children ?? []) walk(child, nowBlock, nowExcluded);
  };
  const body = $("body").get(0);
  if (body) walk(body, body, false);
  for (const [el, parts] of blockText) {
    const tag = el.name?.toLowerCase() ?? "body";
    const text = parts.join(" ").replace(/\s+/g, " ").trim();
    if (!text) continue;
    units.push({ surface: "text", where: tag, text, isBlockStart: ["p", "li", "blockquote"].includes(tag) });
  }

  // Headings as dedicated units for the Title Case checks.
  for (const tag of ["h1", "h2", "h3"]) {
    $(tag).each((_, el) => {
      const text = $(el).text().replace(/\s+/g, " ").trim();
      if (text) units.push({ surface: `heading-${tag}`, where: tag, text, isBlockStart: false });
    });
  }

  // Attribute surfaces.
  $("img[alt]").each((_, el) => {
    const text = ($(el).attr("alt") ?? "").trim();
    if (text) units.push({ surface: "img-alt", where: "img[alt]", text, isBlockStart: false });
  });
  $("a[title], link[title]").each((_, el) => {
    const text = ($(el).attr("title") ?? "").trim();
    if (text) units.push({ surface: "link-title", where: "title attr", text, isBlockStart: false });
  });
  for (const sel of [
    ['meta[name="description"]', "meta-description"],
    ['meta[property="og:description"]', "og-description"],
    ['meta[name="twitter:description"]', "twitter-description"],
  ]) {
    $(sel[0]).each((_, el) => {
      const text = ($(el).attr("content") ?? "").trim();
      if (text) units.push({ surface: sel[1], where: sel[0], text, isBlockStart: false });
    });
  }

  // JSON-LD string values, walked recursively.
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).text();
    try {
      const collect = (v, path) => {
        if (typeof v === "string") {
          if (v.trim() && !/^https?:\/\//.test(v)) {
            units.push({ surface: "jsonld", where: path, text: v.trim(), isBlockStart: false });
          }
        } else if (Array.isArray(v)) v.forEach((x, i) => collect(x, `${path}[${i}]`));
        else if (v && typeof v === "object") {
          for (const [k, x] of Object.entries(v)) collect(x, path ? `${path}.${k}` : k);
        }
      };
      collect(JSON.parse(raw), "");
    } catch {
      units.push({ surface: "jsonld", where: "PARSE ERROR", text: "", isBlockStart: false, parseError: true });
    }
  });

  return units;
}

// ---------- Checks ----------
const normalizeApostrophes = (s) => s.replace(/[‘’]/g, "'");
const context = (text, index, len) => {
  const from = Math.max(0, index - 40);
  const to = Math.min(text.length, index + len + 40);
  return `${from > 0 ? "…" : ""}${text.slice(from, to)}${to < text.length ? "…" : ""}`.replace(/\s+/g, " ");
};

function titleCaseViolations(text) {
  const out = [];
  for (const token of text.split(/\s+/)) {
    const word = token.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "");
    if (!word || /[^A-Za-z]/.test(word)) continue; // skip serials, model numbers, mixed tokens
    if (word.length <= 3) continue;
    if (SMALL_WORDS.has(word.toLowerCase())) continue;
    if (/^[a-z]/.test(word)) out.push(word);
  }
  return out;
}

// Pages whose visible text is entirely verbatim third-party content are exempt
// from the copy gate per project policy (quoted reviews stay intact). The Reverb
// reviews page renders 2,191 real buyer reviews: emoji, dashes, and non-Title-Case
// item names the customers wrote, none of which is our copy. Allowlisting 2,191
// phrases is impractical, so the whole route is skipped.
const SKIP_ROUTES = new Set(["/reverb-reviews/"]);

function checkPage(file) {
  const route = routeOf(file);
  if (SKIP_ROUTES.has(route)) return { route, hard: [], warn: [] };
  const html = readFileSync(file, "utf-8");
  const $ = cheerio.load(html);
  const units = extractUnits($);
  const hard = [];
  const warn = [];
  const add = (tier, check, unit, matched, ctx) => {
    if (isAllowed(route, matched)) return;
    (tier === "hard" ? hard : warn).push({ route, check, surface: unit.surface, where: unit.where, matched, context: ctx });
  };

  for (const unit of units) {
    if (unit.parseError) {
      add("hard", "jsonld-parse-error", unit, "(unparseable JSON-LD block)", "");
      continue;
    }
    const text = unit.text;
    const norm = normalizeApostrophes(text);
    const isHeading = unit.surface.startsWith("heading-");

    // Heading units only carry the Title Case checks; their text is already
    // covered by the visible-text units, so skip the rest to avoid double counting.
    if (isHeading) {
      const bad = titleCaseViolations(text);
      if (bad.length) {
        const tier = unit.surface === "heading-h3" ? "warn" : "hard";
        add(tier, `title-case-${unit.where}`, unit, bad.join(", "), text.slice(0, 120));
      }
      continue;
    }

    // (a) dashes
    for (const m of text.matchAll(DASH_CHARS)) {
      add("hard", DASH_NAMES[m[0]], unit, m[0], context(text, m.index, 1));
    }
    for (const m of text.matchAll(DOUBLE_HYPHEN)) {
      add("hard", "double-hyphen-prose", unit, m[0].trim(), context(text, m.index, m[0].length));
    }

    // (b) hard lexicon
    for (const { word, re } of HARD_LEX) {
      for (const m of norm.matchAll(re)) add("hard", `lexicon:${word}`, unit, m[0], context(text, m.index, m[0].length));
    }

    // (c) pattern tells
    for (const { name, re } of HARD_PATTERNS) {
      const m = norm.match(re);
      if (m) add("hard", `pattern:${name}`, unit, m[0], context(text, m.index ?? 0, m[0].length));
    }
    if (unit.isBlockStart) {
      const m = norm.match(PARA_INITIAL.re);
      if (m) add("hard", `pattern:${PARA_INITIAL.name}`, unit, m[0], text.slice(0, 100));
    }

    // (e) emoji in prose (visible text and alt only; JSON-LD/meta covered too
    // since emoji never belongs in any of these surfaces). Copyright/trademark
    // marks are exempt — see ALLOWED_PICTOGRAPHIC.
    for (const m of text.matchAll(EMOJI)) {
      if (ALLOWED_PICTOGRAPHIC.has(m[0])) continue;
      add("hard", "emoji", unit, m[0], context(text, m.index, m[0].length));
    }

    // WARN lexicon
    for (const { word, re } of WARN_LEX) {
      for (const m of norm.matchAll(re)) add("warn", `lexicon:${word}`, unit, m[0], context(text, m.index, m[0].length));
    }
  }
  return { route, hard, warn };
}

// ---------- Run ----------
const results = files.map(checkPage);
const allHard = results.flatMap((r) => r.hard);
const allWarn = results.flatMap((r) => r.warn);

// ---------- Report ----------
const countBy = (items, key) =>
  items.reduce((acc, i) => ((acc[i[key]] ??= 0), acc[i[key]]++, acc), {});

const lines = [];
lines.push(`# check-copy report`);
lines.push("");
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push(`Scanned: ${files.length} HTML pages in ${relative(ROOT, DIST)}`);
lines.push(`Allowlist: ${existsSync(ALLOWLIST_PATH) ? `${allowlist.length} entr${allowlist.length === 1 ? "y" : "ies"}` : "none"}`);
lines.push("");
lines.push(`## Summary`);
lines.push("");
lines.push(`| Tier | Findings |`);
lines.push(`|---|---|`);
lines.push(`| 🔴 hard-fail | ${allHard.length} |`);
lines.push(`| 🟡 warn | ${allWarn.length} |`);
lines.push("");
lines.push(`### Hard-Fails By Check`);
lines.push("");
lines.push(`| Check | Count |`);
lines.push(`|---|---|`);
for (const [check, n] of Object.entries(countBy(allHard, "check")).sort((a, b) => b[1] - a[1])) {
  lines.push(`| ${check} | ${n} |`);
}
lines.push("");
lines.push(`### Findings By Page`);
lines.push("");
lines.push(`| Page | Hard-Fails | Warns |`);
lines.push(`|---|---|---|`);
for (const r of results.filter((r) => r.hard.length || r.warn.length).sort((a, b) => b.hard.length - a.hard.length)) {
  lines.push(`| ${r.route} | ${r.hard.length} | ${r.warn.length} |`);
}
lines.push("");
for (const r of results.filter((r) => r.hard.length || r.warn.length)) {
  lines.push(`## ${r.route}`);
  lines.push("");
  if (r.hard.length) {
    lines.push(`### 🔴 Hard-Fails (${r.hard.length})`);
    lines.push("");
    lines.push(`| Check | Surface | Matched | Context |`);
    lines.push(`|---|---|---|---|`);
    for (const f of r.hard) {
      lines.push(`| ${f.check} | ${f.surface} | ${esc(f.matched)} | ${esc(f.context)} |`);
    }
    lines.push("");
  }
  if (r.warn.length) {
    const cap = 30;
    lines.push(`### 🟡 Warns (${r.warn.length}${r.warn.length > cap ? `, first ${cap} shown` : ""})`);
    lines.push("");
    lines.push(`| Check | Surface | Matched | Context |`);
    lines.push(`|---|---|---|---|`);
    for (const f of r.warn.slice(0, cap)) {
      lines.push(`| ${f.check} | ${f.surface} | ${esc(f.matched)} | ${esc(f.context)} |`);
    }
    lines.push("");
  }
}
function esc(s) {
  return String(s).replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 160);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, lines.join("\n"), "utf-8");

// ---------- Console summary ----------
console.log("");
console.log(`Scanned ${files.length} pages.`);
console.log(`Report: ${relative(ROOT, OUT_PATH)}`);
console.log("");
if (allHard.length === 0) {
  console.log("✓ 0 hard-fails. Copy gate is clean.");
} else {
  console.log(`🔴 ${allHard.length} hard-fail(s) across ${results.filter((r) => r.hard.length).length} page(s):`);
  const byCheck = Object.entries(countBy(allHard, "check")).sort((a, b) => b[1] - a[1]);
  for (const [check, n] of byCheck) console.log(`   ${String(n).padStart(5)}  ${check}`);
  console.log("");
  const CAP = 30;
  for (const f of allHard.slice(0, CAP)) {
    console.log(`  ${f.route} [${f.surface}] ${f.check}: "${f.matched}" :: ${f.context.slice(0, 100)}`);
  }
  if (allHard.length > CAP) console.log(`  …and ${allHard.length - CAP} more (see report).`);
}
if (allWarn.length) console.log(`🟡 ${allWarn.length} warn(s) (report only, never gates).`);

process.exit(allHard.length > 0 ? 1 : 0);

/* ---------- helpers ---------- */
function parseArgs(argList) {
  const out = { _: [] };
  for (let i = 0; i < argList.length; i++) {
    const a = argList[i];
    if (!a.startsWith("--")) { out._.push(a); continue; }
    const key = a.slice(2);
    const next = argList[i + 1];
    if (!next || next.startsWith("--")) { out[key] = true; } else { out[key] = next; i++; }
  }
  return out;
}
