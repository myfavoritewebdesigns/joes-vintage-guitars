/** Shared, dependency-free rules for the post-build sitemap generators. */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Read the site's canonical constant without a TypeScript runtime dependency.
const siteConfig = readFileSync("src/config/site.ts", "utf8");
export const SITE_URL = siteConfig.match(/export\s+const\s+SITE_URL\s*=\s*["']([^"']+)["']/)?.[1];
if (!SITE_URL || !/^https:\/\/www\.[^/]+$/.test(SITE_URL)) {
  throw new Error("Expected an absolute HTTPS www SITE_URL without a trailing slash");
}
export const DIST = "dist";
export const SITEMAP_EXCLUDE = [
  "/thank-you/", "/jvg-shipping-process/", "/jvg-shipping-process-2/",
  "/404/", "/fender-serial-tool-v2/",
];
// /fender-vintage-guitar-expert/ is excluded only while its HTML is noindex.
export const GUIDE_PATTERNS = [
  /serial/i, /dating-guide/i, /-dates\//i, /pot-codes/i, /value-guide/i,
  /authentication-guide/i, /how-to-spot-a-fake/i, /\/fender-physical-features\//i,
  /chronology/i, /-guide\//i,
];
export const CHILD_SITEMAPS = [
  "sitemap-pages.xml", "sitemap-posts.xml", "sitemap-guides.xml",
  "sitemap-categories.xml", "image-sitemap.xml", "video-sitemap.xml",
];
export const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>\n';
export const SITEMAP_NS = "http://www.sitemaps.org/schemas/sitemap/0.9";
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function decodeEntities(s) {
  return s.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (entity, code) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : Number(code.slice(1));
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : entity;
    }
    return { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" }[code.toLowerCase()];
  });
}

export function attributes(tag) {
  const attrs = {};
  const body = tag.replace(/^<\/?[\w:-]+/, "");
  for (const match of body.matchAll(/([^\s=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    attrs[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attrs;
}

// Skip comments and raw-text elements, including tag-shaped strings in scripts.
export function* htmlTags(html) {
  const tokens = /<!--[\s\S]*?-->|<(script|style|textarea)\b(?:[^>"']|"[^"]*"|'[^']*')*>[\s\S]*?<\/\1\s*>|<\/?[a-z][\w:-]*\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi;
  for (const match of html.matchAll(tokens)) {
    const tag = match[0];
    if (tag.startsWith("<!--") || match[1]) continue;
    yield { tag, name: tag.match(/^<\/?([\w:-]+)/)[1].toLowerCase(), closing: tag.startsWith("</") };
  }
}

export function walkIndexHtml(dir = DIST) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkIndexHtml(path));
    else if (entry.name === "index.html") files.push(path);
  }
  return files.sort();
}

export function pagePath(file) {
  const rel = relative(DIST, file).split(sep).join("/");
  return rel === "index.html" ? "/" : `/${rel.slice(0, -"index.html".length)}`;
}

export function isIndexable(html, path) {
  if (SITEMAP_EXCLUDE.includes(path) || /\/page\/\d+\//i.test(path)) return false;
  let canonical;
  for (const { tag, name, closing } of htmlTags(html)) {
    if (closing || (name !== "meta" && name !== "link")) continue;
    const attrs = attributes(tag);
    if (name === "meta" && /^(robots|googlebot|bingbot)$/i.test(attrs.name ?? "") &&
        /\b(noindex|none)\b/i.test(attrs.content ?? "")) return false;
    if (name === "link" && /(?:^|\s)canonical(?:\s|$)/i.test(attrs.rel ?? "")) {
      if (canonical && canonical !== attrs.href) return false;
      canonical = attrs.href;
    }
  }
  return canonical === SITE_URL + path;
}

export function readPages() {
  return walkIndexHtml().flatMap((file) => {
    const html = readFileSync(file, "utf8");
    const path = pagePath(file);
    return isIndexable(html, path) ? [{ file, html, path, url: SITE_URL + path }] : [];
  });
}

export function schemaNodes(html) {
  const nodes = [];
  function collect(value) {
    if (Array.isArray(value)) { value.forEach(collect); return; }
    if (!value || typeof value !== "object") return;
    nodes.push(value);
    if (value["@graph"]) collect(value["@graph"]);
  }
  for (const match of html.matchAll(/<script\b((?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (attributes(`<script ${match[1]}>`).type?.toLowerCase() !== "application/ld+json") continue;
    try { collect(JSON.parse(match[2])); }
    catch { console.warn("[sitemap] Ignoring malformed JSON-LD"); }
  }
  return nodes;
}

export function hasType(node, types) {
  return [].concat(node["@type"] ?? []).some((type) => types.includes(type));
}

// Accept real W3C dates only. Do not substitute publication or build dates.
export function validDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) return undefined;
  const day = value.slice(0, 10);
  const parsed = Date.parse(value);
  if (!Number.isFinite(parsed) || new Date(day).toISOString().slice(0, 10) !== day || parsed > Date.now()) return undefined;
  return day;
}

export function schemaLastmod(html, url) {
  const article = ["Article", "BlogPosting", "NewsArticle", "TechArticle"];
  const web = ["WebPage", "CollectionPage", "AboutPage", "ContactPage", "ProfilePage", "ItemPage", "FAQPage"];
  const nodes = schemaNodes(html).filter((node) => hasType(node, [...article, ...web]));
  const address = (value) => typeof value === "string" ? value : value?.["@id"];
  const belongs = (node) => [node.url, node["@id"], node.mainEntityOfPage].some((value) => address(value)?.split("#")[0] === url);
  // Only document/graph nodes qualify; nested ImageObject/VideoObject dates never do.
  const main = nodes.find((node) => belongs(node) && hasType(node, article)) ??
    nodes.find(belongs) ?? nodes.find((node) => hasType(node, article)) ?? nodes[0];
  return validDate(main?.dateModified);
}

export function sitemapType(path) {
  if (/^\/post\/[^/]+\/$/.test(path)) return "posts";
  if (/^\/category\/[^/]+\/$/.test(path)) return "categories";
  return GUIDE_PATTERNS.some((pattern) => pattern.test(path)) ? "guides" : "pages";
}

export function writeSitemapIndex() {
  const entries = CHILD_SITEMAPS.map((name) => {
    const file = join(DIST, name);
    const dates = existsSync(file) ? [...readFileSync(file, "utf8").matchAll(/<lastmod>([^<]+)<\/lastmod>/g)]
      .map((match) => validDate(match[1])).filter(Boolean).sort() : [];
    return `  <sitemap>\n    <loc>${esc(`${SITE_URL}/${name}`)}</loc>\n` +
      (dates.length ? `    <lastmod>${dates.at(-1)}</lastmod>\n` : "") + "  </sitemap>";
  });
  writeFileSync(join(DIST, "sitemap-index.xml"), XML_HEADER +
    `<sitemapindex xmlns="${SITEMAP_NS}">\n${entries.join("\n")}\n</sitemapindex>\n`, "utf8");
}
