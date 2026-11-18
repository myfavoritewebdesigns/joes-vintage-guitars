/**
 * Post-build sitemap generator (replaces @astrojs/sitemap and gen-image-sitemap.mjs).
 *
 * Reads the rendered dist/**\/index.html, so every sitemap describes what the
 * site actually serves. Writes:
 *   sitemap-index.xml     index of the four files below, each with its newest lastmod
 *   sitemap-pages.xml     stand-alone pages (sell, appraisal, guides, value guides, legal)
 *   sitemap-posts.xml     /post/* blog articles
 *   sitemap-archives.xml  /blog/ and /category/ listings, including their page/N/ pages
 *   sitemap-videos.xml    video watch pages (/videos/*), with Google video tags
 *   image-sitemap.xml     the content photos each listed page renders (same URL as before)
 *
 * A page is listed only when it is an index.html page, not excluded below, not noindex,
 * not a redirect stub, and its canonical is its own URL.
 *
 * lastmod, per URL, from the first source that has one (never the build date):
 *   1. The page's own schema: dateModified (else datePublished) on its main node,
 *      chosen the same way Layout.astro picks the node for src/data/page-dates.ts:
 *      an Article type first, then a WebPage type, then FAQPage. This keeps the
 *      sitemap and the schema on one source, by construction.
 *   2. Archive listings: the newest lastmod among the posts and guides the listing shows.
 *   3. The last git commit that touched the page's route file in src/pages/. Skipped
 *      when the checkout is shallow, because there every file would carry the newest
 *      commit's date.
 *   Otherwise the URL is listed without a lastmod.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { execFileSync } from "node:child_process";

const SITE = "https://www.joesvintageguitarsaz.com";
const DIST = "dist";

// Pages that must stay out even if they ever lose their noindex tag.
const EXCLUDE = new Set([
  "/thank-you/",
  "/jvg-shipping-process/",
  "/jvg-shipping-process-2/",
  "/404/",
  "/fender-serial-tool-v2/", // internal test page for the v2 serial tool (noIndex)
]);
// Only true watch pages (the video is the page's main content) go in the video
// sitemap. Google does not give video results to pages where a video is secondary.
const WATCH_PAGE = /^\/videos\/[^/]+\/$/;

const ARTICLE = ["Article", "BlogPosting", "NewsArticle", "TechArticle"];
const WEB = ["WebPage", "AboutPage", "ProfilePage", "ContactPage", "CollectionPage", "ItemPage"];
const SVG_RE = /\.svg(\?|$)/i;
const ICON_RE = /(reverb-icon|fair-cash|favicon|apple-touch|logo-footer|[-/]icon[-.])/i;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name === "index.html") out.push(p);
  }
  return out;
}

const pathOf = (file) => {
  const rel = relative(DIST, file).split(sep).join("/");
  return rel === "index.html" ? "/" : `/${rel.slice(0, -"index.html".length)}`;
};

const typesOf = (n) => [].concat(n?.["@type"] ?? []).map(String);

function schemaNodes(html) {
  const nodes = [];
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let json;
    try { json = JSON.parse(m[1]); } catch { continue; }
    for (const x of [].concat(json)) {
      if (Array.isArray(x?.["@graph"])) nodes.push(...x["@graph"]);
      else if (x) nodes.push(x);
    }
  }
  return nodes;
}

// Accept W3C datetime (YYYY-MM-DD or full ISO with zone); normalize anything else.
function w3cDate(value) {
  if (typeof value !== "string" || !value) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(value)) return value;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
const time = (d) => new Date(d).getTime();
const newest = (dates) => dates.filter(Boolean).sort((a, b) => time(b) - time(a))[0] ?? null;

function schemaDate(nodes) {
  const find = (list) => nodes.find((n) => typesOf(n).some((t) => list.includes(t)));
  const main = find(ARTICLE) ?? find(WEB) ?? find(["FAQPage"]);
  return main ? w3cDate(main.dateModified) ?? w3cDate(main.datePublished) : null;
}

function contentImages(html) {
  const urls = new Set();
  for (const m of html.matchAll(/<img\b[^>]*?\ssrc=["']([^"']+)["'][^>]*>/gi)) {
    const u = decode(m[1].trim());
    if (!(u.startsWith("/_astro/") || u.startsWith("/images/"))) continue; // local content only
    if (SVG_RE.test(u) || ICON_RE.test(u)) continue;
    if (!existsSync(join(DIST, u.split("?")[0]))) continue; // never list a file the build did not emit
    urls.add(SITE + u);
  }
  return [...urls];
}

function isoSeconds(duration) {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration || "");
  return m ? (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + (+(m[3] || 0)) : null;
}

function videoEntries(nodes) {
  return nodes.filter((n) => typesOf(n).includes("VideoObject")).flatMap((v) => {
    const thumb = [].concat(v.thumbnailUrl ?? [])[0];
    if (!thumb || !v.name || !v.description || !v.embedUrl) return [];
    return [{
      thumb,
      title: v.name,
      description: String(v.description).slice(0, 2048),
      player: v.embedUrl,
      duration: isoSeconds(v.duration),
      published: w3cDate(v.uploadDate),
      familyFriendly: v.isFamilyFriendly,
    }];
  });
}

// Git fallback: last commit touching the route file. Shallow clones would give every
// file the same newest date, which is worse than no date, so skip git there.
// Cloudflare Pages clones shallow, so first try to fetch the full commit history
// without file contents (commits and trees only, a few MB, seconds).
const isShallow = () => execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf8" }).trim() === "true";
let gitUsable = false;
try {
  if (isShallow()) {
    try {
      execFileSync("git", ["fetch", "--quiet", "--unshallow", "--filter=blob:none", "origin"], { stdio: "ignore", timeout: 120000 });
    } catch { /* offline or refused: fallback stays off */ }
  }
  gitUsable = !isShallow();
} catch { /* no git: fallback stays off */ }
// Dynamic route files such as src/pages/free-appraisal/[brand].astro, as slug patterns.
const routeFiles = (dir) => readdirSync(dir).flatMap((n) => {
  const p = `${dir}/${n}`;
  return statSync(p).isDirectory() ? routeFiles(p) : n.endsWith(".astro") && p.includes("[") ? [p] : [];
});
const dynamicRoutes = existsSync("src/pages") ? routeFiles("src/pages").map((file) => {
  const route = file.slice("src/pages/".length, -".astro".length).replace(/\/index$/, "");
  const pattern = route.split(/(\[[^\]]+\])/).map((part) =>
    part.startsWith("[") ? "[^/]+" : part.replace(/[.*+?^${}()|\\]/g, "\\$&")).join("");
  return { file, re: new RegExp(`^${pattern}$`) };
}) : [];
function gitDate(path) {
  if (!gitUsable) return null;
  const slug = path.replace(/^\/|\/$/g, "") || "index";
  const candidates = [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`];
  const file = candidates.find((f) => existsSync(f)) ?? dynamicRoutes.find((r) => r.re.test(slug))?.file;
  if (!file) return null;
  try {
    return w3cDate(execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim());
  } catch { return null; }
}

// ---- 1. Collect the listable pages -------------------------------------------------
const pages = new Map();
const skipped = [];
for (const file of walk(DIST)) {
  const path = pathOf(file);
  const url = SITE + path;
  const html = readFileSync(file, "utf8");
  const reason =
    EXCLUDE.has(path) ? "excluded" :
    /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*\b(noindex|none)\b/i.test(html) ? "noindex" :
    /<meta[^>]+http-equiv=["']refresh["']/i.test(html) ? "redirect" :
    ((html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)/i) || [])[1] ?? "") !== url ? "canonical" :
    null;
  if (reason) { skipped.push(`${path} (${reason})`); continue; }
  const nodes = schemaNodes(html);
  pages.set(url, { path, html, nodes, lastmod: schemaDate(nodes), source: "schema" });
}

const isArchive = (path) => path === "/blog/" || path.startsWith("/blog/page/") || path.startsWith("/category/");

// ---- 2. Archive listings take the newest date of what they list --------------------
for (const page of pages.values()) {
  if (page.lastmod || !isArchive(page.path)) continue;
  const start = page.html.indexOf('class="barch__grid"');
  const end = page.html.indexOf("</main>", start);
  if (start < 0) continue;
  const listed = [...page.html.slice(start, end < 0 ? undefined : end).matchAll(/href=["']([^"'#?]+)["']/g)]
    .map((m) => (m[1].startsWith("/") ? SITE + m[1] : m[1]))
    .filter((u) => pages.has(u) && !isArchive(pages.get(u).path));
  page.lastmod = newest(listed.map((u) => pages.get(u).lastmod));
  page.source = "listing";
}

// ---- 3. Git fallback ---------------------------------------------------------------
for (const page of pages.values()) {
  if (page.lastmod) continue;
  page.lastmod = gitDate(page.path);
  page.source = page.lastmod ? "git" : "none";
}

// ---- Write -------------------------------------------------------------------------
const sorted = [...pages.entries()].sort(([a], [b]) => a.localeCompare(b));
const lastmodTag = (d) => (d ? `\n    <lastmod>${esc(d)}</lastmod>` : "");
const urlset = (ns, body) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${ns}>\n${body}</urlset>\n`;

const groups = {
  "sitemap-pages.xml": sorted.filter(([, p]) => !p.path.startsWith("/post/") && !isArchive(p.path)),
  "sitemap-posts.xml": sorted.filter(([, p]) => p.path.startsWith("/post/")),
  "sitemap-archives.xml": sorted.filter(([, p]) => isArchive(p.path)),
};
for (const [name, list] of Object.entries(groups)) {
  writeFileSync(join(DIST, name), urlset("", list.map(([url, p]) =>
    `  <url>\n    <loc>${esc(url)}</loc>${lastmodTag(p.lastmod)}\n  </url>\n`).join("")), "utf8");
}

const watch = sorted
  .map(([url, p]) => [url, p, WATCH_PAGE.test(p.path) ? videoEntries(p.nodes) : []])
  .filter(([, , v]) => v.length);
groups["sitemap-videos.xml"] = watch;
writeFileSync(join(DIST, "sitemap-videos.xml"), urlset(' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"',
  watch.map(([url, p, videos]) =>
    `  <url>\n    <loc>${esc(url)}</loc>${lastmodTag(p.lastmod)}\n` +
    videos.map((v) =>
      `    <video:video>\n` +
      `      <video:thumbnail_loc>${esc(v.thumb)}</video:thumbnail_loc>\n` +
      `      <video:title>${esc(v.title)}</video:title>\n` +
      `      <video:description>${esc(v.description)}</video:description>\n` +
      `      <video:player_loc>${esc(v.player)}</video:player_loc>\n` +
      (v.duration ? `      <video:duration>${v.duration}</video:duration>\n` : "") +
      (v.published ? `      <video:publication_date>${esc(v.published)}</video:publication_date>\n` : "") +
      (v.familyFriendly === true ? `      <video:family_friendly>yes</video:family_friendly>\n` : "") +
      `    </video:video>\n`).join("") +
    `  </url>\n`).join("")), "utf8");

writeFileSync(join(DIST, "sitemap-index.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.entries(groups).filter(([, list]) => list.length).map(([name, list]) =>
    `  <sitemap>\n    <loc>${SITE}/${name}</loc>${lastmodTag(newest(list.map(([, p]) => p.lastmod)))}\n  </sitemap>\n`).join("") +
  `</sitemapindex>\n`, "utf8");

let imageCount = 0;
const imagePages = sorted.map(([url, p]) => [url, p, contentImages(p.html)]).filter(([, , imgs]) => imgs.length);
writeFileSync(join(DIST, "image-sitemap.xml"), urlset(' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
  imagePages.map(([url, p, imgs]) => {
    imageCount += imgs.length;
    return `  <url>\n    <loc>${esc(url)}</loc>${lastmodTag(p.lastmod)}\n` +
      imgs.map((i) => `    <image:image>\n      <image:loc>${esc(i)}</image:loc>\n    </image:image>\n`).join("") +
      `  </url>\n`;
  }).join("")), "utf8");

// Remove the old single-file output if a stale copy is around.
rmSync(join(DIST, "sitemap-0.xml"), { force: true });

// ---- Report ------------------------------------------------------------------------
const bySource = {};
for (const p of pages.values()) bySource[p.source] = (bySource[p.source] || 0) + 1;
console.log(`[sitemaps] ${pages.size} URLs: ${Object.entries(groups).map(([n, l]) => `${n.replace(/^sitemap-|\.xml$/g, "")} ${l.length}`).join(", ")}`);
console.log(`[sitemaps] lastmod source: ${Object.entries(bySource).map(([k, v]) => `${k} ${v}`).join(", ")}${gitUsable ? "" : " (git fallback off: shallow or no git)"}`);
const undated = [...pages.values()].filter((p) => !p.lastmod).map((p) => p.path);
if (undated.length) console.log(`[sitemaps] no lastmod: ${undated.join(" ")}`);
console.log(`[sitemaps] image sitemap: ${imagePages.length} pages, ${imageCount} images. Left out: ${skipped.join(", ")}`);

// llms.txt is a short hand-picked list on purpose; only check that it points at listed pages.
const llmsPath = join(DIST, "llms.txt");
if (existsSync(llmsPath)) {
  const bad = [...readFileSync(llmsPath, "utf8").matchAll(/\]\((https:\/\/www\.joesvintageguitarsaz\.com[^)\s]*)\)/g)]
    .map((m) => m[1]).filter((u) => !pages.has(u));
  if (bad.length) console.warn(`[sitemaps] WARNING llms.txt links not in the sitemap: ${bad.join(" ")}`);
}
