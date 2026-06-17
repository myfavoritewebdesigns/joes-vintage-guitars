/**
 * Post-build image sitemap generator.
 *
 * Runs after `astro build` (see package.json "build"). Parses the rendered
 * dist/**\/*.html for the CONTENT images each page actually shows and writes
 * dist/image-sitemap.xml in Google's image-sitemap format. This is a discovery
 * aid (helps Google find/index all of Joe's photos for Google Images); it does
 * NOT carry licensing — that lives in the on-page ImageObject JSON-LD.
 *
 * Zero dependencies on purpose: it must not break the Cloudflare Pages build if
 * devDependencies (cheerio etc.) are skipped, so it uses node:fs + regex only.
 *
 * Scope: local content images only (/_astro/* optimized output + /images/*).
 * Excludes external hosts (YouTube thumbs), data: URIs, SVGs, UI icons,
 * favicons, and noindex pages (e.g. /thank-you/).
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE = "https://www.joesvintageguitarsaz.com";
const DIST = "dist";

const SVG_RE = /\.svg(\?|$)/i;
// UI / brand / icon assets that aren't content photos
const ICON_RE = /(reverb-icon|fair-cash|favicon|apple-touch|logo-footer|[-/]icon[-.])/i;

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function pageUrl(htmlPath) {
  const rel = relative(DIST, htmlPath).split(sep).join("/");
  if (rel === "index.html") return `${SITE}/`;
  if (rel.endsWith("/index.html")) return `${SITE}/${rel.slice(0, -"index.html".length)}`; // keeps trailing slash
  return `${SITE}/${rel}`;
}

function contentImages(html) {
  const urls = new Set();
  const imgRe = /<img\b[^>]*?\ssrc=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    const u = m[1].trim();
    if (!u || u.startsWith("data:")) continue;
    if (!(u.startsWith("/_astro/") || u.startsWith("/images/"))) continue; // local content only
    if (SVG_RE.test(u) || ICON_RE.test(u)) continue;
    urls.add(SITE + u);
  }
  return [...urls];
}

const entries = [];
let totalImgs = 0;
for (const f of walk(DIST)) {
  const html = readFileSync(f, "utf8");
  if (/<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) continue;
  const imgs = contentImages(html);
  if (imgs.length === 0) continue;
  entries.push({ url: pageUrl(f), imgs });
  totalImgs += imgs.length;
}
entries.sort((a, b) => a.url.localeCompare(b.url));

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  entries
    .map(
      (e) =>
        `  <url>\n    <loc>${esc(e.url)}</loc>\n` +
        e.imgs.map((i) => `    <image:image>\n      <image:loc>${esc(i)}</image:loc>\n    </image:image>`).join("\n") +
        `\n  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(join(DIST, "image-sitemap.xml"), xml, "utf8");
console.log(`[image-sitemap] ${entries.length} pages, ${totalImgs} image entries -> dist/image-sitemap.xml`);
