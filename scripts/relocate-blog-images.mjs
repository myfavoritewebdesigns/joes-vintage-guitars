#!/usr/bin/env node
/**
 * relocate-blog-images: SEO v2 Prompt 4. Moves blog content images out of
 * public/ into src/assets/ so Astro's image pipeline can optimize them.
 *
 * The rules, exactly as specified:
 *   - ONLY files referenced by MARKDOWN-SYNTAX images (![alt](path)) or by
 *     frontmatter heroImage/ogImage move to src/assets/blog/<slug>/.
 *   - Files referenced by raw HTML <img> anywhere in any .md STAY in public/:
 *     Astro never processes raw HTML in markdown, so moving those files would
 *     silently break them. (A file referenced BOTH ways also stays.)
 *   - Markdown-syntax references are rewritten to relative paths
 *     (../../assets/blog/<slug>/file.jpg), which Astro optimizes natively.
 *   - heroImage/ogImage frontmatter strings are NOT rewritten; src/lib/images.ts
 *     resolves them to pipeline metadata when the file moved and falls back to
 *     the public path when it did not.
 *
 * Usage:
 *   node scripts/relocate-blog-images.mjs            # dry run
 *   node scripts/relocate-blog-images.mjs --write    # move + rewrite
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BLOG = join(ROOT, "src", "content", "blog");
const WRITE = process.argv.includes("--write");

const mdFiles = readdirSync(BLOG).filter((f) => f.endsWith(".md"));

// ---------- Pass 1: classify every referenced image ----------
const mdSyntaxRefs = new Map(); // publicPath -> [{file}]
const rawHtmlRefs = new Set(); // publicPath
const heroRefs = new Set(); // publicPath

for (const f of mdFiles) {
  const text = readFileSync(join(BLOG, f), "utf-8");
  for (const m of text.matchAll(/!\[[^\]]*\]\((\/images\/[^)\s]+)\)/g)) {
    const arr = mdSyntaxRefs.get(m[1]) ?? [];
    arr.push(f);
    mdSyntaxRefs.set(m[1], arr);
  }
  for (const m of text.matchAll(/<img[^>]*\ssrc="(\/images\/[^"]+)"/g)) {
    rawHtmlRefs.add(m[1]);
  }
  for (const m of text.matchAll(/^(?:heroImage|ogImage):\s*"(\/images\/[^"]+)"/gm)) {
    heroRefs.add(m[1]);
  }
}

// ---------- Pass 2: decide moves ----------
const candidates = new Set([...mdSyntaxRefs.keys(), ...heroRefs]);
const moves = [];
const blockedByRawHtml = [];
const missing = [];
for (const pub of candidates) {
  if (rawHtmlRefs.has(pub)) {
    blockedByRawHtml.push(pub);
    continue;
  }
  if (!pub.startsWith("/images/blog/")) {
    console.log(`  skip (outside /images/blog/): ${pub}`);
    continue;
  }
  const fromAbs = join(ROOT, "public", pub);
  if (!existsSync(fromAbs)) {
    missing.push(pub);
    continue;
  }
  const rest = pub.slice("/images/blog/".length);
  moves.push({ pub, fromAbs, toAbs: join(ROOT, "src", "assets", "blog", rest), rel: `../../assets/blog/${rest}` });
}

// ---------- Pass 3: execute ----------
let rewrites = 0;
if (WRITE) {
  for (const mv of moves) {
    mkdirSync(dirname(mv.toAbs), { recursive: true });
    renameSync(mv.fromAbs, mv.toAbs);
  }
}
const moveByPub = new Map(moves.map((m) => [m.pub, m]));
for (const f of mdFiles) {
  const full = join(BLOG, f);
  let text = readFileSync(full, "utf-8");
  const before = text;
  text = text.replace(/(!\[[^\]]*\]\()(\/images\/blog\/[^)\s]+)(\))/g, (whole, open, pub, close) => {
    const mv = moveByPub.get(pub);
    if (!mv) return whole;
    rewrites++;
    return `${open}${mv.rel}${close}`;
  });
  if (WRITE && text !== before) writeFileSync(full, text, "utf-8");
}

console.log(`\nmarkdown-syntax referenced files: ${mdSyntaxRefs.size}`);
console.log(`hero/og referenced files: ${heroRefs.size}`);
console.log(`raw-HTML referenced files (stay in public/): ${rawHtmlRefs.size}`);
console.log(`files ${WRITE ? "moved" : "to move"} to src/assets/blog/: ${moves.length}`);
console.log(`blocked candidates (also raw-HTML referenced, stay put): ${blockedByRawHtml.length}`);
if (blockedByRawHtml.length) blockedByRawHtml.forEach((p) => console.log(`  blocked: ${p}`));
console.log(`markdown reference rewrites: ${rewrites}`);
if (missing.length) {
  console.log(`MISSING source files (referenced but not on disk):`);
  missing.forEach((p) => console.log(`  ${p}`));
}
