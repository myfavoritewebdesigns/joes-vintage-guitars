/**
 * Post-build: give every page's share image (og:image, og:image:secure_url,
 * twitter:image) a permanent address.
 *
 * Why: Astro names optimized images /_astro/<name>.<hash>.<ext>, and the hash
 * changes whenever the photo or the build changes. Facebook, LinkedIn, iMessage,
 * Slack and Google cache the share image address they saw, so after a rebuild
 * the cached address answers 404 and the preview shows a blank box.
 *
 * What it does: for each built page whose share image is under /_astro/, copy
 * that exact file to /og/<page-slug>.<ext> and point the share tags there.
 * The file is byte-for-byte the one Astro produced, so width, height and type
 * tags stay correct. The address stays the same across rebuilds and photo swaps;
 * public/_headers gives /og/* a revalidating cache so a swapped photo shows up.
 *
 * Only the share tags change. Page images, srcsets and structured data
 * (ImageObject contentUrl must match the rendered image) are left alone.
 * Runs after `astro build`, before the image sitemap and the IndexNow manifest.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join, relative, sep, extname } from "node:path";

const SITE = "https://www.joesvintageguitarsaz.com";
const DIST = "dist";
const OG_DIR = join(DIST, "og");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function pageSlug(htmlPath) {
  const rel = relative(DIST, htmlPath).split(sep).join("/");
  if (rel === "index.html") return "home";
  const path = rel.endsWith("/index.html") ? rel.slice(0, -"/index.html".length) : rel.replace(/\.html$/, "");
  return path.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase();
}

const TAG_RE = /(<meta\s+(?:property|name)=["'](?:og:image|og:image:secure_url|twitter:image)["']\s+content=["'])([^"']+)(["'][^>]*>)/gi;

mkdirSync(OG_DIR, { recursive: true });
let changed = 0;
let missing = 0;
const slugs = new Map();

for (const f of walk(DIST)) {
  const html = readFileSync(f, "utf8");
  const urls = new Set();
  let m;
  TAG_RE.lastIndex = 0;
  while ((m = TAG_RE.exec(html))) {
    const u = m[2].replace(SITE, "");
    if (u.startsWith("/_astro/")) urls.add(m[2]);
  }
  if (urls.size === 0) continue;
  const slug = pageSlug(f);
  if (slugs.has(slug)) throw new Error(`[stable-share-images] two pages map to /og/${slug}: ${slugs.get(slug)} and ${f}`);
  slugs.set(slug, f);
  const map = new Map();
  for (const u of urls) {
    const local = join(DIST, u.replace(SITE, "").split("?")[0]);
    if (!existsSync(local)) {
      missing++;
      console.warn(`[stable-share-images] ${f}: share image not in dist, left as is: ${u}`);
      continue;
    }
    const target = `/og/${slug}${urls.size > 1 ? "-" + map.size : ""}${extname(local).toLowerCase()}`;
    copyFileSync(local, join(DIST, target));
    map.set(u, `${SITE}${target}`);
  }
  if (map.size === 0) continue;
  const out = html.replace(TAG_RE, (all, a, u, b) => (map.has(u) ? `${a}${map.get(u)}${b}` : all));
  writeFileSync(f, out, "utf8");
  changed++;
}

console.log(`[stable-share-images] ${changed} pages now share a permanent /og/ image${missing ? `, ${missing} left unchanged (file not found)` : ""}`);
if (missing) process.exitCode = 1;
