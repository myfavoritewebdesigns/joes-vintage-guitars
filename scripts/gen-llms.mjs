/**
 * Post-build llms.txt, Markdown copies and llms-full.txt generator.
 * Run after astro build and gen-image-sitemap.mjs. Only Node built-ins are
 * used so production builds do not need the optional development packages.
 */
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join, relative, sep } from "node:path";
import {
  header, excludedPaths, sectionRules, sections, topPostsPerCategory,
  topPostsByCategory, markdownCopies, fullTextMaxBytes,
} from "./llms-config.mjs";

const DIST = "dist";
const siteConfig = readFileSync("src/config/site.ts", "utf8");
const SITE = siteConfig.match(/export\s+const\s+SITE_URL\s*=\s*["']([^"']+)["']/)?.[1];
const contactConfig = siteConfig.match(/export\s+const\s+contact\s*=\s*\{([\s\S]*?)\n\}/)?.[1];
const PHONE = contactConfig?.match(/\btelDashed:\s*["']([^"']+)["']/)?.[1];
if (!SITE || !PHONE) throw new Error("Cannot read SITE_URL and contact.telDashed from site.ts");

const entities = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  ndash: "\u2013", mdash: "\u2014", hellip: "...", lsquo: "\u2018", rsquo: "\u2019",
  ldquo: "\u201c", rdquo: "\u201d", copy: "\u00a9", reg: "\u00ae", trade: "\u2122",
  bull: "\u2022", middot: "\u00b7", times: "\u00d7", divide: "\u00f7", deg: "\u00b0",
  plusmn: "\u00b1", micro: "\u00b5", pound: "\u00a3", euro: "\u20ac", cent: "\u00a2",
  frac14: "\u00bc", frac12: "\u00bd", frac34: "\u00be", prime: "\u2032", Prime: "\u2033",
  laquo: "\u00ab", raquo: "\u00bb", rarr: "\u2192", larr: "\u2190",
};
// HTML's Latin-1 named entities, including accented instrument and maker names.
const latinNames = "Agrave Aacute Acirc Atilde Auml Aring AElig Ccedil Egrave Eacute Ecirc Euml Igrave Iacute Icirc Iuml ETH Ntilde Ograve Oacute Ocirc Otilde Ouml times Oslash Ugrave Uacute Ucirc Uuml Yacute THORN szlig agrave aacute acirc atilde auml aring aelig ccedil egrave eacute ecirc euml igrave iacute icirc iuml eth ntilde ograve oacute ocirc otilde ouml divide oslash ugrave uacute ucirc uuml yacute thorn yuml".split(" ");
latinNames.forEach((name, i) => { entities[name] = String.fromCharCode(192 + i); });

function decode(text) {
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z][a-z\d]+);/gi, (whole, entity) => {
    if (!entity.startsWith("#")) return entities[entity] ?? whole;
    const hex = /^#x/i.test(entity);
    const code = parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
    return code > 0 && code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff)
      ? String.fromCodePoint(code) : "\ufffd";
  });
}

function clean(text) {
  return text.replace(/(\d)\s*[\u2013\u2014]\s*(?=\d)/g, "$1 to ")
    .replace(/\s*[\u2013\u2014]\s*/g, ", ")
    .replace(/[\u200b-\u200d\u2060\ufeff\u00ad]/g, "")
    .replace(/\u00a0/g, " ");
}

function attrs(tag) {
  const out = {};
  const re = /([^\s=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  for (const m of tag.replace(/^<\/?[\w:-]+/, "").matchAll(re)) {
    out[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? "");
  }
  return out;
}

const VOID = new Set("area base br col embed hr img input link meta param source track wbr".split(" "));
const DROP = new Set("script style form button nav iframe svg noscript template input select textarea canvas".split(" "));

// A small stack parser handles nested main/section/div elements and quoted '>'
// attributes without relying on a DOM library. Raw-text elements go first.
function parse(html) {
  const root = { tag: "root", attrs: {}, children: [] };
  const stack = [root];
  html = html.replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|textarea)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "");
  const tokens = /<\/?[a-z][\w:-]*\b(?:[^>"']|"[^"]*"|'[^']*')*>|[^<]+|</gi;
  for (const m of html.matchAll(tokens)) {
    const token = m[0];
    if (!/^<\/?[a-z]/i.test(token)) {
      stack.at(-1).children.push(token);
      continue;
    }
    const tag = token.match(/^<\/?([\w:-]+)/)[1].toLowerCase();
    if (token.startsWith("</")) {
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === tag) { stack.length = i; break; }
      }
      continue;
    }
    const node = { tag, attrs: attrs(token), children: [] };
    stack.at(-1).children.push(node);
    if (!VOID.has(tag) && !token.endsWith("/>")) stack.push(node);
  }
  return root;
}

function hidden(node) {
  return DROP.has(node.tag) || node.attrs["aria-hidden"]?.toLowerCase() === "true"
    || node.attrs.role === "button"
    || "hidden" in node.attrs || /(?:display\s*:\s*none|visibility\s*:\s*hidden)/i.test(node.attrs.style ?? "")
    || /(?:^|\s)(?:sr-only|hidden)(?:\s|$)/.test(node.attrs.class ?? "")
    || node.attrs["aria-label"] === "Quick contact";
}

function findAll(node, predicate) {
  if (typeof node === "string" || hidden(node)) return [];
  return [...(predicate(node) ? [node] : []), ...node.children.flatMap((child) => findAll(child, predicate))];
}

function textOf(node) {
  if (typeof node === "string") return decode(node);
  if (hidden(node)) return "";
  if (node.tag === "br") return " ";
  return node.children.map(textOf).join("");
}

const singleLine = (text) => clean(text).replace(/\s+/g, " ").trim();
const escapeText = (text) => text.replace(/([\\`*\[\]])/g, "\\$1");
const matches = (rule, path) => typeof rule === "string" ? path === rule : rule.test(path);

function absolute(value, base) {
  if (!value || /^(?:javascript|data|blob):/i.test(value)) return "";
  try {
    const url = new URL(value, base);
    const site = new URL(SITE);
    if (url.hostname.replace(/^www\./, "") === site.hostname.replace(/^www\./, "")) {
      url.protocol = site.protocol;
      url.host = site.host;
      if (!url.pathname.endsWith("/") && !/\.[^/]+$/.test(url.pathname)) url.pathname += "/";
    }
    return url.href;
  } catch { return ""; }
}

let indexableUrls = new Set();
function markdown(node, base, depth = 0) {
  if (typeof node === "string") return escapeText(clean(decode(node)).replace(/\s+/g, " "));
  if (hidden(node)) return "";
  const { tag, attrs: a, children } = node;
  const inner = () => children.map((child) => markdown(child, base, depth)).join("");
  if (/^h[1-6]$/.test(tag)) {
    if (tag === "h1") return ""; // The document already starts with its H1.
    return `\n\n${"#".repeat(Number(tag[1]))} ${inner().trim()}\n\n`;
  }
  if (tag === "a") {
    const label = inner().trim();
    let url = absolute(a.href, base);
    if (url.startsWith(SITE + "/")) {
      const path = new URL(url).pathname;
      if ((path.endsWith("/") || path.endsWith(".html")) && !indexableUrls.has(SITE + path)) url = "";
    }
    if (!label || !url) return label;
    url = url.replace(/\(/g, "%28").replace(/\)/g, "%29");
    // Cards can wrap entire headings and paragraphs in an anchor. Markdown
    // links cannot contain block headings, so link their headings individually.
    if (/^#{1,6} /m.test(label)) return `\n\n${label.replace(/^(#{1,6}) (.+)$/gm, (_, marks, text) => `${marks} [${text}](${url})`)}\n\n`;
    if (/\n\n/.test(label)) return `\n\n${label.split(/\n\n+/).map((part) => `[${part.replace(/\n/g, " ")}](${url})`).join("\n\n")}\n\n`;
    return ` [${label}](${url}) `;
  }
  if (tag === "img") {
    const src = absolute(a.src, base);
    if (!src || /\.svg(?:[?#]|$)/i.test(src)
      || /(?:favicon|apple-touch|logo|reverb-icon|fair-cash|[-/]icon[-.])/i.test(src)
      || /(?:^|\s)(?:icon|logo)(?:\s|$)/i.test(a.class ?? "")
      || (a.width && Number(a.width) <= 64) || a.role === "presentation") return "";
    return `\n\n![${escapeText(singleLine(a.alt ?? ""))}](${src.replace(/\(/g, "%28").replace(/\)/g, "%29")})\n\n`;
  }
  if (tag === "table") {
    const rows = findAll(node, (n) => n.tag === "tr").map((row) =>
      row.children.filter((cell) => typeof cell !== "string" && /^(?:td|th)$/.test(cell.tag))
        .flatMap((cell) => {
          const value = markdown(cell, base, depth).trim().replace(/\n+/g, " ").replace(/\|/g, "\\|");
          return [value, ...Array(Math.min(Number(cell.attrs.colspan) || 1, 30) - 1).fill("")];
        })).filter((row) => row.length);
    if (!rows.length) return "";
    const width = Math.max(...rows.map((row) => row.length));
    const line = (row) => `| ${Array.from({ length: width }, (_, i) => row[i] ?? "").join(" | ")} |`;
    return `\n\n${line(rows[0])}\n${line(Array(width).fill("---"))}\n${rows.slice(1).map(line).join("\n")}\n\n`;
  }
  if (tag === "ul" || tag === "ol") {
    let number = Number(a.start) || 1;
    const items = children.filter((child) => typeof child !== "string" && child.tag === "li" && !hidden(child));
    const list = items.map((item) => {
      const content = item.children.map((child) => markdown(child, base, depth + 1)).join("").trim();
      const marker = tag === "ol" ? `${number++}. ` : "- ";
      return `${"  ".repeat(depth)}${marker}${content.replace(/\n\n+/g, "\n").replace(/\n(?!\s*[-\d])/g, `\n${"  ".repeat(depth + 1)}`)}`;
    }).filter((item) => item.trim() !== "-").join("\n");
    return `\n${list}\n`;
  }
  if (tag === "br") return "\n";
  if (tag === "hr") return "\n\n---\n\n";
  if (tag === "strong" || tag === "b") return inner().trim() ? `**${inner().trim()}**` : "";
  if (tag === "em" || tag === "i") return inner().trim() ? `*${inner().trim()}*` : "";
  if (tag === "blockquote") return `\n\n${inner().trim().split("\n").map((line) => `> ${line}`).join("\n")}\n\n`;
  if (tag === "pre") return `\n\n\`\`\`\n${clean(textOf(node)).trim()}\n\`\`\`\n\n`;
  if (tag === "code") return `\`${clean(textOf(node)).trim().replace(/`/g, "\\`")}\``;
  if (tag === "span" || tag === "small") return ` ${inner().trim()} `;
  const value = inner();
  return /^(?:p|div|section|article|main|header|footer|aside|figure|figcaption|details|summary|dl|dt|dd|address)$/.test(tag)
    ? `\n\n${value.trim()}\n\n` : value;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function jsonNodes(html) {
  const out = [];
  function visit(value) {
    if (!value || typeof value !== "object") return;
    if (!Array.isArray(value)) out.push(value);
    for (const child of Object.values(value)) if (typeof child === "object") visit(child);
  }
  for (const match of html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi)) {
    if (attrs(match[0].slice(0, match[0].indexOf(">") + 1)).type !== "application/ld+json") continue;
    try { visit(JSON.parse(match[0].replace(/^<script\b[^>]*>|<\/script\s*>$/gi, ""))); }
    catch { throw new Error("Invalid JSON-LD in built HTML"); }
  }
  return out;
}

function description(meta, main, title) {
  let value = singleLine(meta || textOf(findAll(main, (node) => node.tag === "p")[0] ?? title));
  // Ignore decimal points, abbreviations and sentence endings before 40 chars.
  const ending = [...value.matchAll(/[.!?](?:["'\u2019\u201d])?(?=\s|$)/g)].find((match) => match.index >= 40);
  if (ending) value = value.slice(0, ending.index + ending[0].length);
  if (value.length > 200) value = value.slice(0, 197).replace(/\s+\S*$/, "").replace(/[,;:]$/, "") + ".";
  if (!/[.!?]["'\u2019\u201d]?$/.test(value)) value += ".";
  return value;
}

const allFiles = walk(DIST);
const pages = [];
const skipped = { excluded: 0, pagination: 0, noindex: 0, canonical: 0 };
for (const file of allFiles.filter((path) => /(?:^|[\\/])index\.html$/.test(path))) {
  const rel = relative(DIST, file).split(sep).join("/");
  const path = "/" + rel.slice(0, -"index.html".length);
  if (excludedPaths.has(path)) { skipped.excluded++; continue; }
  if (/\/page\/\d+\/$/.test(path)) { skipped.pagination++; continue; }
  const html = readFileSync(file, "utf8");
  const metas = [...html.matchAll(/<meta\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)].map((m) => attrs(m[0]));
  if (metas.some((meta) => meta.name?.toLowerCase() === "robots" && /\bnoindex\b/i.test(meta.content ?? ""))) {
    skipped.noindex++; continue;
  }
  const url = SITE + path;
  const canonicals = [...html.matchAll(/<link\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)].map((m) => attrs(m[0]))
    .filter((link) => /(?:^|\s)canonical(?:\s|$)/i.test(link.rel ?? ""));
  if (canonicals.some((link) => {
    try { return new URL(link.href, url).href !== url; } catch { return true; }
  })) { skipped.canonical++; continue; }
  const tree = parse(html);
  const main = findAll(tree, (node) => node.tag === "main")[0];
  if (!main) throw new Error(`No main element: ${path}`);
  const h1 = findAll(main, (node) => node.tag === "h1")[0];
  // The home page's own H1 carries the brand after a "|", so strip the suffix from either source.
  const title = singleLine((h1 ? textOf(h1) : decode(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""))
    .replace(/\s*[|:-]\s*Joe['\u2019]s Vintage Guitars.*$/i, ""));
  if (!title) throw new Error(`No title: ${path}`);
  const nodes = jsonNodes(html);
  const article = nodes.find((node) => /(?:^|,)(?:Article|BlogPosting|TechArticle)(?:,|$)/.test([node["@type"]].flat().join(",")));
  const categoryLink = findAll(main, (node) => node.tag === "a" && /\/category\/[^/]+\/?$/.test(node.attrs.href ?? ""))[0];
  const category = categoryLink?.attrs.href.match(/\/category\/([^/]+)/)?.[1];
  pages.push({ file, path, url, title, main,
    description: description(metas.find((meta) => meta.name?.toLowerCase() === "description")?.content, main, title),
    post: path.startsWith("/post/"), category, articleSection: article?.articleSection,
    categoryTitle: categoryLink ? singleLine(textOf(categoryLink)) : undefined,
    modified: Date.parse(article?.dateModified ?? "") || 0,
  });
}
indexableUrls = new Set(pages.map((page) => page.url));

// Re-running after a noindex/config change must not leave stale copies or head links.
for (const file of allFiles.filter((path) => /(?:^|[\\/])index\.md$/.test(path))) unlinkSync(file);
for (const file of allFiles.filter((path) => path.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const cleaned = html.replace(/<link\b[^>]*\bdata-jvg-llms-alternate(?:="[^"]*")?[^>]*>/gi, "");
  if (cleaned !== html) writeFileSync(file, cleaned, "utf8");
}

const copied = [];
for (const rule of markdownCopies) {
  for (const page of pages.filter((page) => !page.markdown && matches(rule, page.path))) {
    const content = markdown(page.main, page.url).replace(/(\S)[ \t]+/g, "$1 ")
      .replace(/ +([,.;:!?])/g, "$1").replace(/ +\n/g, "\n").replace(/\n +(?=\n)/g, "\n")
      .replace(/\n{3,}/g, "\n\n").replace(/^0([1-9])$/gm, "$1").trim();
    page.markdown = `# ${page.title}\nSource: ${page.url}\n\n${content}\n`;
    page.markdownUrl = page.url + "index.md";
    writeFileSync(join(DIST, page.path.slice(1), "index.md"), page.markdown, "utf8");
    const html = readFileSync(page.file, "utf8");
    if (!/<\/head\s*>/i.test(html)) throw new Error(`No closing head: ${page.path}`);
    writeFileSync(page.file, html.replace(/<\/head\s*>/i,
      `<link rel="alternate" type="text/markdown" href="${page.markdownUrl}" data-jvg-llms-alternate></head>`), "utf8");
    copied.push(page);
  }
}

const categoryTitles = new Map(pages.filter((page) => /^\/category\/[^/]+\/$/.test(page.path))
  .map((page) => [page.path.split("/")[2], page.title.replace(/\s+(?:Blog|Posts|Articles|Archive)\s*$/i, "")]));
const posts = pages.filter((page) => page.post);
const categoryKey = (value) => singleLine(value).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
const archivedCategories = new Map();
for (const file of allFiles) {
  const archive = relative(DIST, file).split(sep).join("/").match(/^category\/([^/]+)\/(?:page\/\d+\/)?index\.html$/);
  if (!archive) continue;
  // Archive cards contain the actual category membership, including custom
  // posts without articleSection. Pagination is read but never listed.
  const tree = parse(readFileSync(file, "utf8"));
  for (const node of findAll(tree, (node) => node.tag === "a" && /(?:^|\s)bpc__/.test(node.attrs.class ?? ""))) {
    const url = absolute(node.attrs.href, SITE);
    if (url.startsWith(SITE + "/post/")) archivedCategories.set(new URL(url).pathname, archive[1]);
  }
}
for (const post of posts) {
  // The schema describes this post. Related-post cards can link to other
  // categories, and some custom layouts have no category link at all.
  if (archivedCategories.has(post.path)) post.category = archivedCategories.get(post.path);
  else if (post.articleSection) {
    const declared = [post.articleSection].flat().map(categoryKey);
    post.category = [...categoryTitles].find(([, title]) => declared.includes(categoryKey(title)))?.[0];
  }
  if (!post.category) throw new Error(`No blog category in built HTML: ${post.path} (${post.articleSection ?? "no articleSection"})`);
}
const blogGroups = [...new Set(posts.map((post) => post.category))].sort().map((category) => {
  const candidates = posts.filter((post) => post.category === category)
    .sort((a, b) => b.modified - a.modified || a.url.localeCompare(b.url));
  const override = topPostsByCategory[category];
  const selected = override ? override.map((path) => {
    const page = candidates.find((candidate) => candidate.path === path);
    if (!page) throw new Error(`Configured top post is not indexable in ${category}: ${path}`);
    return page;
  }) : candidates.slice(0, topPostsPerCategory);
  selected.forEach((page) => { page.section = "blog"; });
  return { title: categoryTitles.get(category) ?? candidates[0].categoryTitle, pages: selected };
});
for (const page of pages) {
  if (!page.section) page.section = page.post ? "optional"
    : sectionRules.find((section) => section.paths.some((rule) => matches(rule, page.path)))?.id ?? "optional";
}

const entry = (page) => `- [${escapeText(page.title)}](${page.markdownUrl ?? page.url}): ${page.description}`;
const lines = [`# ${header.title}`, "", `> ${header.summary}`, "", header.facts(PHONE), ""];
for (const section of sections) {
  lines.push(`## ${section.title}`, "");
  if (section.id === "blog") {
    for (const group of blogGroups) lines.push(`### ${group.title}`, "", ...group.pages.map(entry), "");
  } else {
    lines.push(...pages.filter((page) => page.section === section.id).sort((a, b) => a.path.localeCompare(b.path)).map(entry), "");
  }
}
writeFileSync(join(DIST, "llms.txt"), lines.join("\n").trim() + "\n", "utf8");

const separator = "\n\n---\n\n";
let included = [...copied];
const fullText = () => included.map((page) => page.markdown.trim()).join(separator) + "\n";
while (Buffer.byteLength(fullText(), "utf8") >= fullTextMaxBytes && included.length) {
  console.log(`[llms] Dropped from llms-full.txt (size limit): ${included.pop().path}`);
}
writeFileSync(join(DIST, "llms-full.txt"), fullText(), "utf8");
const described = pages.filter((page) => page.description.trim()).length;
console.log(`[llms] ${pages.length} entries; ${described}/${pages.length} descriptions (${(described / pages.length * 100).toFixed(0)}%); ${posts.length} posts covered`);
console.log(`[llms] ${copied.length} Markdown copies; llms-full.txt: ${Buffer.byteLength(fullText(), "utf8")} bytes, ${included.length} pages`);
console.log(`[llms] Skipped: ${JSON.stringify(skipped)}`);
console.log(`[llms] Missing sell pages present: ${["/sell-my-gibson-guitar/", "/sell-my-martin-guitar/"].every((path) => pages.some((page) => page.path === path))}`);
const byLength = [...pages].sort((a, b) => a.description.length - b.description.length || a.path.localeCompare(b.path));
for (const [label, selected] of [["Shortest", byLength.slice(0, 5)], ["Longest", byLength.slice(-5).reverse()]]) {
  console.log(`[llms] ${label} descriptions:`);
  for (const page of selected) console.log(`  ${page.description.length} ${page.path}: ${page.description}`);
}
