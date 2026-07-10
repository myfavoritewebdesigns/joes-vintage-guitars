// One-off content fixer for the migrated blog posts.
//
//   node scripts/fix-blog-format.mjs         # DRY RUN: print planned changes
//   node scripts/fix-blog-format.mjs --apply # write the changes
//
// Fixes two migration artifacts:
//  (1) DUPLICATE HERO IMAGE — the featured image (frontmatter `heroImage`, rendered
//      by post/[slug].astro) is ALSO the first image in the Markdown body, so it shows
//      twice at the top. Removes the leading duplicate (figure / img / image-in-heading).
//  (2) BROKEN TOC JUMP LINKS — the in-body Table of Contents links to short anchors
//      (#intro, #es125-origins ...) but the target Markdown `##` headings only get
//      auto-slugged ids, so the anchors 404. Gives those headings the intended id by
//      converting `## Title` -> `<h2 id="anchor">Title</h2>` (matching the raw-HTML
//      heading pattern the posts already use for their sub-sections).
//
// A few posts need bespoke handling (id rename / missing heading / dead TOC entries);
// those are encoded explicitly below.

import fs from "node:fs";
import path from "node:path";

const APPLY = process.argv.includes("--apply");
const BLOG = path.resolve("src/content/blog");

// ---------- helpers ----------
const slug = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, "").replace(/ /g, "-");
const normImg = (p) =>
  path.basename(String(p)).toLowerCase()
    .replace(/\.(jpe?g|png|webp|gif|avif)$/i, "").replace(/-scaled$/i, "").replace(/-\d{2,4}x\d{2,4}$/i, "");

function heroOf(src) {
  const m = src.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  if (!m) return "";
  const h = m[1].match(/^heroImage:\s*(.*)$/m);
  if (!h) return "";
  let v = h[1].trim();
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
  return v;
}

function tokens(s) {
  return new Set(
    s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[*_`\\]/g, "")
     .replace(/&amp;/g, "and").replace(/&/g, "and").toLowerCase()
     .replace(/[""'']/g, "").split(/[^\p{L}\p{N}]+/u)
     .filter((w) => w && !/^(the|a|an|of|to|and|in|on|is|it|for|with)$/.test(w) && !/^[ivx]+$/.test(w))
  );
}
const score = (a, b) => { let n = 0; for (const t of a) if (b.has(t)) n++; return n / Math.max(1, Math.min(a.size, b.size)); };

// ---------- bespoke, per-file rules ----------
// 1952-fender-telecaster: headings already have ids, but they don't match the TOC anchors.
const ID_RENAMES = {
  "1952-fender-telecaster-authentication-guide.md": {
    "the-body": "body-section", "the-neck": "neck-section", "the-hardware": "hardware-section",
    "the-electronics": "electronics-section", "the-checklist": "checklist-section", "the-buying": "buying-section",
  },
};
// gibson-shipping-totals: the "Les Paul Special" section lost its heading in migration.
const INSERT_HEADING = {
  "gibson-shipping-totals-1948-1979.md": {
    beforeLineIncludes: "The shipping totals for the Gibson Les Paul Special from",
    html: '<h2 id="lp-spec-55-61">Les Paul Special Shipping Totals (1955-1961)</h2>',
  },
};
// jazzmaster: these 4 TOC entries point to sections that were never written -> drop them.
const DROP_TOC_ANCHORS = {
  "fender-jazzmaster-evolution-guide-1958-1971.md": new Set(["years", "master", "checklist", "links"]),
};

// ---------- core ----------
function processFile(file) {
  const abs = path.join(BLOG, file);
  const raw = fs.readFileSync(abs, "utf8");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  let lines = raw.split(/\r?\n/);
  const changes = [];

  const bodyStart = (() => {
    // index of first line after the closing frontmatter '---'
    let seen = 0;
    for (let i = 0; i < lines.length; i++) { if (lines[i] === "---") { seen++; if (seen === 2) return i + 1; } }
    return 0;
  })();

  const hero = heroOf(raw);
  const heroBase = hero ? normImg(hero) : null;

  // ---- (1) duplicate hero image ----
  if (heroBase) {
    // find first body line holding ANY image, and whether it is the hero
    let firstImgLine = -1, firstImgIsHero = false;
    for (let i = bodyStart; i < lines.length; i++) {
      const ln = lines[i];
      const mdm = ln.match(/!\[[^\]]*\]\(([^)]+)\)/);
      const htm = ln.match(/<img[^>]*\bsrc=["']([^"']+)["']/i);
      const src = mdm ? mdm[1] : htm ? htm[1] : null;
      if (src) { firstImgLine = i; firstImgIsHero = normImg(src) === heroBase; break; }
    }
    if (firstImgLine >= 0 && firstImgIsHero) {
      // determine the unit to remove
      let start = firstImgLine, end = firstImgLine;
      if (/<figure/i.test(lines[firstImgLine]) && !/<\/figure>/i.test(lines[firstImgLine])) {
        while (end < lines.length && !/<\/figure>/i.test(lines[end])) end++;
      }
      const removed = lines.slice(start, end + 1).join(" ").slice(0, 90);
      // also swallow one adjacent blank line to avoid a double gap
      let delFrom = start, delTo = end;
      if (lines[delTo + 1] === "") delTo++;
      else if (lines[delFrom - 1] === "") delFrom--;
      lines.splice(delFrom, delTo - delFrom + 1);
      changes.push(`  [img] removed duplicate hero: ${removed}…`);
    }
  }

  // ---- bespoke id renames ----
  if (ID_RENAMES[file]) {
    for (const [from, to] of Object.entries(ID_RENAMES[file])) {
      let hit = false;
      lines = lines.map((ln) => {
        if (ln.includes(`id="${from}"`)) { hit = true; return ln.replace(`id="${from}"`, `id="${to}"`); }
        return ln;
      });
      if (hit) changes.push(`  [toc] renamed heading id #${from} -> #${to}`);
    }
  }

  // ---- bespoke insert missing heading ----
  if (INSERT_HEADING[file]) {
    const { beforeLineIncludes, html } = INSERT_HEADING[file];
    const idx = lines.findIndex((ln) => ln.includes(beforeLineIncludes));
    if (idx >= 0 && !lines.some((ln) => ln.includes(html))) {
      lines.splice(idx, 0, html, "");
      changes.push(`  [toc] inserted missing heading: ${html}`);
    }
  }

  // ---- bespoke drop dead TOC entries ----
  if (DROP_TOC_ANCHORS[file]) {
    const drop = DROP_TOC_ANCHORS[file];
    const before = lines.length;
    lines = lines.filter((ln) => {
      const m = ln.match(/^\s*(?:[-*]|\d+\.)\s+\[[^\]]*\]\(#([a-z0-9-]+)\)\s*$/i);
      if (m && drop.has(m[1])) { changes.push(`  [toc] dropped dead TOC entry -> #${m[1]}`); return false; }
      return true;
    });
    void before;
  }

  // ---- (2) TOC heading ids: convert matched `## Title` -> `<h2 id="anchor">Title</h2>` ----
  // available ids after the above edits
  const bodyText = lines.slice(bodyStart).join("\n");
  const ids = new Set();
  for (const m of bodyText.matchAll(/\bid=["']([^"']+)["']/gi)) ids.add(m[1]);
  for (const m of bodyText.matchAll(/<a[^>]*\bname=["']([^"']+)["']/gi)) ids.add(m[1]);
  const sc = Object.create(null);
  // collect markdown headings with line refs; also register their auto-slug ids
  const mdHeads = [];
  for (let i = bodyStart; i < lines.length; i++) {
    const m = lines[i].match(/^(#{1,6})[ \t]+(.*?)[ \t]*$/);
    if (!m) continue;
    let text = m[2];
    const idm = text.match(/\{#([^}]+)\}[ \t]*$/);
    if (idm) { ids.add(idm[1]); continue; }
    const id = (() => { let s = slug(text); if (s in sc) { sc[s]++; return `${s}-${sc[s]}`; } sc[s] = 0; return s; })();
    ids.add(id);
    if (m[1].length === 2 && !/^!\[/.test(text) && !/table of contents/i.test(text))
      mdHeads.push({ line: i, text, tok: tokens(text) });
  }
  // broken toc anchors in order
  const toc = [...bodyText.matchAll(/\[([^\]]*)\]\(#([a-z0-9][a-z0-9-]*)\)/gi)].map((m) => ({ text: m[1], anchor: m[2] }));
  const broken = toc.filter((t) => !ids.has(t.anchor));

  // order-constrained match against H2-only candidates, positional fallback
  let ptr = 0;
  const assign = []; // {line, anchor, text}
  const usedLines = new Set();
  for (const t of broken) {
    const ttok = tokens(t.text);
    let best = -1, bestScore = -1;
    for (let i = ptr; i < mdHeads.length && i <= ptr + 3; i++) {
      const s = score(ttok, mdHeads[i].tok);
      if (s > bestScore) { bestScore = s; best = i; }
    }
    if (best < 0) { changes.push(`  [toc] !! UNRESOLVED #${t.anchor} ("${t.text}")`); continue; }
    if (bestScore < 0.45) best = ptr; // positional fallback
    const h = mdHeads[best];
    if (usedLines.has(h.line)) { changes.push(`  [toc] !! collision on #${t.anchor}`); continue; }
    usedLines.add(h.line);
    assign.push({ line: h.line, anchor: t.anchor, text: h.text, score: bestScore });
    ptr = best + 1;
  }
  for (const a of assign) {
    lines[a.line] = `<h2 id="${a.anchor}">${a.text}</h2>`;
    changes.push(`  [toc] #${a.anchor.padEnd(20)} (${a.score.toFixed(2)}) <- "${a.text}"`);
  }

  const out = lines.join(eol);
  return { changed: out !== raw, out, changes, abs };
}

// ---------- run ----------
const files = fs.readdirSync(BLOG).filter((f) => f.endsWith(".md")).sort();
let touched = 0;
for (const f of files) {
  const r = processFile(f);
  if (!r.changes.length) continue;
  touched++;
  console.log(`\n### ${f}`);
  for (const c of r.changes) console.log(c);
  if (APPLY && r.changed) fs.writeFileSync(r.abs, r.out);
}
console.log(`\n${APPLY ? "APPLIED" : "DRY RUN"} — ${touched} files affected.`);
