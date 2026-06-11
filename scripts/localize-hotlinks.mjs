#!/usr/bin/env node
/**
 * localize-hotlinks: SEO v2 Prompt 4. Kills every cross-origin image hot-link
 * to the live WordPress uploads directory.
 *
 * What it does, in order:
 *   1. Builds the full reference manifest: literal wp-content URLs in src/
 *      plus every `${IMG}/...` template usage on the two pages whose IMG
 *      constant is still remote (fender-guitars-serial-number-guide,
 *      sell-my-fender-guitar), plus the HERO_BG / OG_IMAGE constants.
 *   2. HEAD-checks every URL against the live site (refuses to proceed on
 *      non-200 unless --force).
 *   3. Downloads each file once:
 *        - content images        -> src/assets/images/<page>/  (pipeline-visible)
 *        - OG / JSON-LD images   -> public/images/og/          (stable absolute URLs)
 *        - CSS backgrounds, SVGs -> public/images/<page>/      (pipeline cannot rewrite css url())
 *      Filenames are sanitized (en dashes and friends become hyphens).
 *   4. Rewrites the source references:
 *        - `${IMG}/.../file.jpg` template usages become img("file.jpg") calls
 *          backed by src/lib/images.ts (added separately).
 *        - literal URLs are swapped via an explicit lookup table.
 *
 * Usage:
 *   node scripts/localize-hotlinks.mjs            # dry run
 *   node scripts/localize-hotlinks.mjs --write    # download + rewrite
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const WRITE = process.argv.includes("--write");
const FORCE = process.argv.includes("--force");
const ORIGIN = "https://www.joesvintageguitarsaz.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";

const sanitize = (name) => name.replace(/[‒–—―−]/g, "-").replace(/%E2%80%93/gi, "-");

/** pageKey -> { file, kind } for the template-based pages. */
const TEMPLATE_PAGES = [
  { file: "src/pages/fender-guitars-serial-number-guide.astro", assetDir: "fender-sn", helper: "fsnImg" },
  { file: "src/pages/sell-my-fender-guitar.astro", assetDir: "sell-fender", helper: "smfImg" },
];

/**
 * Literal URL rewrites: url -> { dest ("src-assets" | "public"), destPath, newRef }.
 * newRef is the exact replacement string for the URL inside the source file.
 */
const LITERALS = [
  // sell-my-gibson content images -> src/assets (referenced via gibImg helper)
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2024/06/Guitar22.png`, dest: "src/assets/images/sell-gibson/Guitar22.png", ref: `{gibImg("Guitar22.png")}`, attr: true },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2026/03/1961-gibson-es-175-d-sunburst-1024x683.jpg`, dest: "src/assets/images/sell-gibson/1961-gibson-es-175-d-sunburst-1024x683.jpg", ref: `{gibImg("1961-gibson-es-175-d-sunburst-1024x683.jpg")}`, attr: true },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2026/03/1966-gibson-trini-lopez-cherry-finish-1024x683.jpg`, dest: "src/assets/images/sell-gibson/1966-gibson-trini-lopez-cherry-finish-1024x683.jpg", ref: `{gibImg("1966-gibson-trini-lopez-cherry-finish-1024x683.jpg")}`, attr: true },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2026/02/1956-gibson-les-paul-standard-goldtop-1024x683.jpg`, dest: "src/assets/images/sell-gibson/1956-gibson-les-paul-standard-goldtop-1024x683.jpg", ref: `{gibImg("1956-gibson-les-paul-standard-goldtop-1024x683.jpg")}`, attr: true },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2026/03/vintage-gibson-guitar-seller-768x1024.jpg`, dest: "src/assets/images/sell-gibson/vintage-gibson-guitar-seller-768x1024.jpg", ref: `{gibImg("vintage-gibson-guitar-seller-768x1024.jpg")}`, attr: true },
  // sell-my-gibson SVG icons: no pipeline benefit, keep public
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2024/12/Fair-Cash-1.svg`, dest: "public/images/sell-gibson/Fair-Cash-1.svg", ref: `/images/sell-gibson/Fair-Cash-1.svg` },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2024/12/Fair-Cash-2.svg`, dest: "public/images/sell-gibson/Fair-Cash-2.svg", ref: `/images/sell-gibson/Fair-Cash-2.svg` },
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2024/12/Fair-Cash-3-1.svg`, dest: "public/images/sell-gibson/Fair-Cash-3-1.svg", ref: `/images/sell-gibson/Fair-Cash-3-1.svg` },
  // sell-my-gibson CSS background: stays public (pipeline cannot rewrite css url())
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2022/08/rickenbacker-reviews-bg.jpg`, dest: "public/images/sell-gibson/rickenbacker-reviews-bg.jpg", ref: `/images/sell-gibson/rickenbacker-reviews-bg.jpg` },
  // Shared sell-page hero background (inline style attr = CSS territory, stays public)
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/background.jpg`, dest: "public/images/sell-hero-background.jpg", ref: `/images/sell-hero-background.jpg` },
  { file: "src/pages/sell-my-fender-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/background.jpg`, dest: "public/images/sell-hero-background.jpg", ref: `/images/sell-hero-background.jpg` },
  // OG and JSON-LD images: stable absolute URLs, public/images/og/
  { file: "src/pages/sell-my-gibson-guitar.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/Sell-My-Gibson-Guitar.jpg`, dest: "public/images/og/sell-my-gibson-guitar.jpg", ref: `${ORIGIN}/images/og/sell-my-gibson-guitar.jpg` },
  { file: "src/pages/about-me.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/About-Me.jpg`, dest: "public/images/og/about-me.jpg", ref: `${ORIGIN}/images/og/about-me.jpg` },
  { file: "src/pages/free-appraisal.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/Vintage-Guitar-Appraisal-Expert.jpg`, dest: "public/images/og/vintage-guitar-appraisal-expert.jpg", ref: `${ORIGIN}/images/og/vintage-guitar-appraisal-expert.jpg` },
  // Homepage OG doubles as Layout.astro's default og image path, so the file
  // must land at exactly /images/homepage-featured-image.jpg (Layout already
  // points there; the file was missing locally until now).
  { file: "src/pages/index.astro", url: `${ORIGIN}/wp-content/uploads/2025/07/homepage-featured-image.jpg`, dest: "public/images/homepage-featured-image.jpg", ref: `${ORIGIN}/images/homepage-featured-image.jpg` },
  { file: "src/pages/rickenbacker-serial-numbers.astro", url: "${SITE_URL}/wp-content/uploads/2026/04/1960s-rickenbacker-360-2-scaled.jpg", dest: "public/images/og/1960s-rickenbacker-360-2-scaled.jpg", ref: "${SITE_URL}/images/og/1960s-rickenbacker-360-2-scaled.jpg", template: true, realUrl: `${ORIGIN}/wp-content/uploads/2026/04/1960s-rickenbacker-360-2-scaled.jpg` },
  { file: "src/pages/guild-serial-number-lookup.astro", url: `${ORIGIN}/wp-content/uploads/2026/02/guild-serial-number-guide-lookup-1024x683.jpg`, dest: "public/images/og/guild-serial-number-guide-lookup-1024x683.jpg", ref: `${ORIGIN}/images/og/guild-serial-number-guide-lookup-1024x683.jpg` },
  { file: "src/pages/how-to-read-gibson-serial-numbers.astro", url: "${SITE_URL}/wp-content/uploads/2026/03/1955-gibson-les-paul-custom-ink-stamp-serial-number-scaled.jpg", dest: "public/images/og/1955-gibson-les-paul-custom-ink-stamp-serial-number-scaled.jpg", ref: "${SITE_URL}/images/og/1955-gibson-les-paul-custom-ink-stamp-serial-number-scaled.jpg", template: true, realUrl: `${ORIGIN}/wp-content/uploads/2026/03/1955-gibson-les-paul-custom-ink-stamp-serial-number-scaled.jpg` },
  // Author photo already exists locally at public/images/about-me-joe-1.jpg
  { file: "src/pages/how-to-read-gibson-serial-numbers.astro", url: "${SITE_URL}/wp-content/uploads/2026/02/about-me-joe-1.jpg", dest: null, ref: "${SITE_URL}/images/about-me-joe-1.jpg", template: true },
];

/** Comment-only mentions of wp-content, reworded so the acceptance grep is clean. */
const COMMENT_FIXES = [
  { file: "src/pages/sell-a-guitar-collection.astro", from: "// Source URLs (preserved in commit history): /wp-content/uploads/<year>/<month>/<file>.", to: "// Source URLs (preserved in commit history) lived under the live WP uploads directory." },
  { file: "src/pages/sell-my-gibson-guitar.astro", from: "// `--awb-background-image:url(.../wp-content/uploads/2025/07/background.jpg)`", to: "// `--awb-background-image:url(<live WP uploads>/2025/07/background.jpg)`" },
  { file: "src/pages/sell-my-martin-guitar.astro", from: "// Files live in public/images/sell-martin/ and were sourced from the live WP /wp-content/uploads/", to: "// Files live in public/images/sell-martin/ and were sourced from the live WP uploads directory" },
];

async function headOk(url) {
  try {
    const res = await fetch(url, { method: "HEAD", headers: { "User-Agent": UA }, redirect: "follow" });
    return res.ok;
  } catch {
    return false;
  }
}

async function download(url, destRel) {
  const dest = join(ROOT, destRel);
  if (existsSync(dest)) return "exists";
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (WRITE) {
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, buf);
  }
  return `${(buf.length / 1024).toFixed(0)}KB`;
}

// ---------- 1. Template pages: collect ${IMG}/ usages ----------
const downloads = new Map(); // url -> destRel
const failures = [];

for (const page of TEMPLATE_PAGES) {
  const full = join(ROOT, page.file);
  const text = readFileSync(full, "utf-8");
  const matches = [...text.matchAll(/`\$\{IMG\}\/([^`]+)`/g)];
  console.log(`${page.file}: ${matches.length} \${IMG} template usages`);
  for (const m of matches) {
    const relPath = m[1]; // e.g. 2026/03/foo.jpg
    const url = `${ORIGIN}/wp-content/uploads/${relPath}`;
    const base = sanitize(decodeURIComponent(relPath.split("/").pop()));
    downloads.set(url, `src/assets/images/${page.assetDir}/${base}`);
  }
}

// ---------- 2. Literals ----------
for (const lit of LITERALS) {
  if (!lit.dest) continue;
  const url = lit.realUrl ?? lit.url;
  downloads.set(url, lit.dest);
}

// ---------- 3. HEAD-check + download ----------
console.log(`\n${downloads.size} unique remote files to localize.`);
for (const [url, destRel] of downloads) {
  const ok = await headOk(url);
  if (!ok) {
    failures.push(url);
    console.log(`  404/ERR  ${url}`);
    continue;
  }
  const result = await download(url, destRel);
  console.log(`  ${result.padStart(8)}  ${destRel}`);
}
if (failures.length && !FORCE) {
  console.error(`\n${failures.length} URL(s) failed the HEAD check. Fix or rerun with --force.`);
  process.exit(1);
}

// ---------- 4. Rewrites ----------
let rewrites = 0;
for (const page of TEMPLATE_PAGES) {
  const full = join(ROOT, page.file);
  let text = readFileSync(full, "utf-8");
  text = text.replace(/`\$\{IMG\}\/([^`]+)`/g, (_, relPath) => {
    rewrites++;
    const base = sanitize(decodeURIComponent(relPath.split("/").pop()));
    return `${page.helper}("${base}")`;
  });
  // Replace the remote IMG constant with the shim-backed helper.
  text = text.replace(
    /const IMG = "https:\/\/www\.joesvintageguitarsaz\.com\/wp-content\/uploads";?[^\n]*/,
    `const ${page.helper} = (file: string) => assetSrc("images/${page.assetDir}/" + file);`
  );
  // Add the import after the first existing import line, once.
  if (!text.includes('from "../lib/images"')) {
    text = text.replace(/^(import [^\n]+\n)/m, `$1import { assetSrc } from "../lib/images";\n`);
  }
  if (WRITE) writeFileSync(full, text, "utf-8");
}

const byFile = new Map();
for (const lit of LITERALS) (byFile.get(lit.file) ?? byFile.set(lit.file, []).get(lit.file)).push(lit);
for (const [fileRel, lits] of byFile) {
  const full = join(ROOT, fileRel);
  let text = readFileSync(full, "utf-8");
  for (const lit of lits) {
    if (!text.includes(lit.url)) { console.log(`  WARN ${fileRel}: pattern not found: ${lit.url.slice(0, 80)}`); continue; }
    if (lit.attr) {
      // src="<url>" attribute becomes src={helper("file")}
      text = text.split(`"${lit.url}"`).join(lit.ref);
    } else {
      text = text.split(lit.url).join(lit.ref);
    }
    rewrites++;
  }
  if (fileRel === "src/pages/sell-my-gibson-guitar.astro" && !text.includes('from "../lib/images"')) {
    text = text.replace(/^(import [^\n]+\n)/m, `$1import { assetSrc } from "../lib/images";\n`);
    text = text.replace(/(const HERO_BG = )/, `const gibImg = (file: string) => assetSrc("images/sell-gibson/" + file);\n$1`);
  }
  if (WRITE) writeFileSync(full, text, "utf-8");
}

for (const fix of COMMENT_FIXES) {
  const full = join(ROOT, fix.file);
  let text = readFileSync(full, "utf-8");
  if (!text.includes(fix.from)) { console.log(`  WARN comment not found in ${fix.file}`); continue; }
  text = text.split(fix.from).join(fix.to);
  rewrites++;
  if (WRITE) writeFileSync(full, text, "utf-8");
}

console.log(`\n${WRITE ? "Applied" : "Would apply"} ${rewrites} reference rewrites. Failures: ${failures.length}`);
