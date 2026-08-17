/**
 * Generates functions/api/_serial-knowledge.json — the grounding corpus for the
 * AI guitar identifier (/api/identify).
 *
 * Extracts the main text content of the six brand serial-number guide pages
 * (plus the Fender amp guide) from the BUILT site in dist/, so the AI's
 * knowledge can never drift from what the pages actually say. Tables are
 * serialized row-wise ("cell | cell | cell") because the serial ranges ARE the
 * knowledge on these pages.
 *
 * Run after `astro build`:  pnpm run gen:knowledge
 * The JSON is COMMITTED so the Pages Function bundles it without needing a
 * build-order dependency; re-run this script whenever guide content changes.
 */
import { load } from "cheerio";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const DIST = resolve(import.meta.dirname, "../dist");
const OUT = resolve(import.meta.dirname, "../functions/api/_serial-knowledge.json");

// brand key → built page slug (all live at /<slug>/index.html)
const PAGES = [
  ["fender", "fender-guitars-serial-number-guide"],
  ["gibson", "how-to-read-gibson-serial-numbers"],
  ["gretsch", "gretsch-serial-number-lookup"],
  ["guild", "guild-serial-number-lookup"],
  ["martin", "martin-serial-and-model-numbers"],
  ["rickenbacker", "rickenbacker-serial-numbers"],
  ["fender_amps", "vintage-fender-amplifier-serial-numbers-how-to-find-the-year"],
];

// Keep each brand's text bounded so a single get_brand_guide tool result stays
// a sane token count (~60K chars ≈ 15K tokens).
const MAX_CHARS_PER_BRAND = 60_000;

const clean = (s) => s.replace(/\s+/g, " ").trim();

function extractPage(slug) {
  const file = resolve(DIST, slug, "index.html");
  if (!existsSync(file)) {
    throw new Error(`Missing built page: ${file} — run astro build first.`);
  }
  const $ = load(readFileSync(file, "utf8"));
  $("script, style, noscript, svg, form, iframe").remove();
  // Site chrome carries no serial knowledge.
  $("header, footer, nav").remove();

  const root = $("main").length ? $("main") : $("body");
  const lines = [];
  const pushed = new Set();

  root.find("h1, h2, h3, h4, p, li, figcaption, blockquote, table").each((_, el) => {
    // Skip elements nested inside a table we'll serialize whole.
    if ($(el).parents("table").length) return;
    if (el.tagName === "table") {
      $(el)
        .find("tr")
        .each((_, tr) => {
          const cells = $(tr)
            .find("th, td")
            .map((_, c) => clean($(c).text()))
            .get()
            .filter(Boolean);
          if (cells.length) lines.push(cells.join(" | "));
        });
      return;
    }
    const text = clean($(el).text());
    if (!text || text.length < 3) return;
    // Headings get a marker so structure survives flattening; dedupe repeats
    // (e.g. a heading text also swept up inside a parent element).
    const line = /^h\d$/.test(el.tagName) ? `\n## ${text}` : text;
    if (pushed.has(line)) return;
    pushed.add(line);
    lines.push(line);
  });

  const title = clean($("title").text());
  let text = lines.join("\n");
  if (text.length > MAX_CHARS_PER_BRAND) {
    text = text.slice(0, MAX_CHARS_PER_BRAND) + "\n[guide truncated]";
  }
  return { title, url: `/${slug}/`, text };
}

const brands = {};
for (const [key, slug] of PAGES) {
  brands[key] = extractPage(slug);
  console.log(`${key}: ${brands[key].text.length} chars from /${slug}/`);
}

writeFileSync(OUT, JSON.stringify({ brands }, null, 1));
console.log(`\nWrote ${OUT}`);
