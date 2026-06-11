#!/usr/bin/env node
/**
 * check-dist-images: SEO v2 Prompt 4 acceptance check. Walks every HTML file
 * in dist (plus dist CSS) and asserts that every LOCAL image reference resolves to a
 * real file in dist. audit:live-diff only HEAD-checks external URLs, so a
 * broken internal /images/ or /_astro/ path would otherwise ship silently.
 *
 * Checked surfaces: <img src>, <img srcset>, <source src/srcset>, inline
 * style url(...), <style> url(...), CSS file url(...), og:image / twitter:image
 * meta (same-origin only), and <link rel="icon"/apple-touch-icon>.
 *
 * Exit codes: 0 all resolve, 1 broken references found.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const ORIGIN = "https://www.joesvintageguitarsaz.com";

function walk(dir, exts) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, exts));
    else if (exts.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
}

const refs = new Map(); // localPath -> [where]
const note = (url, where) => {
  if (!url) return;
  url = url.trim();
  if (url.startsWith("data:") || url.startsWith("#")) return;
  if (url.startsWith(ORIGIN)) url = url.slice(ORIGIN.length);
  if (/^https?:\/\//.test(url)) return; // external, out of scope here
  if (!/\.(jpg|jpeg|png|webp|gif|avif|svg|ico)(\?|$)/i.test(url)) return;
  const local = decodeURIComponent(url.split("?")[0]);
  const arr = refs.get(local) ?? [];
  if (arr.length < 3) arr.push(where);
  refs.set(local, arr);
};

for (const f of walk(DIST, [".html"])) {
  const where = "/" + relative(DIST, f).split(sep).join("/");
  const html = readFileSync(f, "utf-8");
  for (const m of html.matchAll(/<(?:img|source)[^>]*\ssrc="([^"]+)"/g)) note(m[1], where);
  for (const m of html.matchAll(/<(?:img|source)[^>]*\ssrcset="([^"]+)"/g)) {
    for (const part of m[1].split(",")) note(part.trim().split(/\s+/)[0], where);
  }
  for (const m of html.matchAll(/url\(\s*['"]?([^)'"]+?)['"]?\s*\)/g)) note(m[1], where);
  for (const m of html.matchAll(/<meta[^>]*(?:property="og:image(?::secure_url)?"|name="twitter:image")[^>]*content="([^"]+)"/g)) note(m[1], where);
  for (const m of html.matchAll(/<link[^>]*rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g)) note(m[1], where);
}
for (const f of walk(DIST, [".css"])) {
  const where = "/" + relative(DIST, f).split(sep).join("/");
  for (const m of readFileSync(f, "utf-8").matchAll(/url\(\s*['"]?([^)'"]+?)['"]?\s*\)/g)) note(m[1], where);
}

let broken = 0;
for (const [local, where] of refs) {
  if (!existsSync(join(DIST, local))) {
    broken++;
    console.log(`BROKEN ${local}\n  referenced by: ${where.join(", ")}`);
  }
}
console.log(`\nChecked ${refs.size} unique local image references across dist. Broken: ${broken}`);
process.exit(broken ? 1 : 0);
