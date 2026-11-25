/**
 * Post-build image sitemap generator.
 *
 * Runs after `astro build` (see package.json "build"). Parses the rendered
 * dist/**\/*.html for the CONTENT images each page actually shows and writes
 * dist/image-sitemap.xml in Google's image-sitemap format. This is a discovery
 * aid (helps Google find/index all of Joe's photos for Google Images); it does
 * NOT carry licensing, which lives in the on-page ImageObject JSON-LD.
 *
 * Zero dependencies on purpose: it must not break the Cloudflare Pages build if
 * devDependencies (cheerio etc.) are skipped, so it uses node:fs + regex only.
 *
 * Scope: local content images only (/_astro/* optimized output + /images/*).
 * Excludes external hosts (YouTube thumbs), data: URIs, SVGs, UI icons,
 * favicons, and noindex pages (e.g. /thank-you/).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  SITE_URL, DIST, esc, attributes, htmlTags, isIndexable, pagePath, walkIndexHtml,
} from "./sitemap-lib.mjs";

const SVG_RE = /\.svg(\?|$)/i;
// UI / brand / icon assets that aren't content photos
const ICON_RE = /(reverb-icon|fair-cash|favicon|apple-touch|logo-footer|[-/]icon[-.])/i;
// The shared contact form repeats the brand logo inside main, outside the header.
const BRAND_RE = /(?:^|\/)logo-joe-2[.-]/i;

function contentImages(html, filterChrome = true) {
  const urls = new Set();
  const chrome = [];
  for (const { tag, name, closing } of htmlTags(html)) {
    if (["header", "footer", "nav"].includes(name)) {
      if (!closing) chrome.push(name);
      else {
        const index = chrome.lastIndexOf(name);
        if (index !== -1) chrome.splice(index);
      }
    }
    if (closing || name !== "img") continue;
    const attrs = attributes(tag);
    if (filterChrome && (chrome.length || attrs["aria-hidden"]?.toLowerCase() === "true" ||
        attrs.role?.toLowerCase() === "presentation")) continue;
    // alt="" is not used as a filter: some of Joe's licensed photos render with an empty alt
    // (a card thumbnail of the same photo), and dropping them breaks the sitemap-to-schema match.
    const u = (attrs.src ?? "").trim();
    if (!u || u.startsWith("data:")) continue;
    if (!(u.startsWith("/_astro/") || u.startsWith("/images/"))) continue; // local content only
    if (SVG_RE.test(u) || ICON_RE.test(u) || (filterChrome && BRAND_RE.test(u))) continue;
    urls.add(SITE_URL + u);
  }
  // Every photo the page licenses in ImageObject schema is listed, whatever its markup.
  if (filterChrome) {
    for (const m of html.matchAll(/"contentUrl"\s*:\s*"([^"]+)"/g)) {
      const u = m[1].startsWith(SITE_URL) ? m[1].slice(SITE_URL.length) : m[1];
      if (!(u.startsWith("/_astro/") || u.startsWith("/images/"))) continue;
      if (SVG_RE.test(u) || ICON_RE.test(u) || BRAND_RE.test(u)) continue;
      urls.add(SITE_URL + u);
    }
  }
  return [...urls];
}

const entries = [];
let totalImgs = 0;
let before = 0;
let beforePages = 0;
let eligibleBefore = 0;
for (const f of walkIndexHtml()) {
  const html = readFileSync(f, "utf8");
  // Preserve the old eligibility rule for the baseline count.
  if (!/<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    const old = contentImages(html, false);
    before += old.length;
    if (old.length) beforePages++;
  }
  const path = pagePath(f);
  if (!isIndexable(html, path)) continue;
  eligibleBefore += contentImages(html, false).length;
  const imgs = contentImages(html);
  if (imgs.length === 0) continue;
  entries.push({ url: SITE_URL + path, imgs });
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
console.log(`[image-sitemap] Before: ${beforePages} pages, ${before} images; eligible before chrome filtering: ${eligibleBefore}; after: ${entries.length} pages, ${totalImgs} image entries -> dist/image-sitemap.xml`);
