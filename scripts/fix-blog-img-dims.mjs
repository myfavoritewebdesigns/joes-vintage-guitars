#!/usr/bin/env node
/**
 * fix-blog-img-dims: SEO v2 Prompt 5, step 4. Raw HTML <img> tags inside blog
 * markdown ship without width/height, which means layout shift as they load.
 * Astro never processes raw HTML in markdown, so the cheap, high-value fix is
 * to read each referenced file's REAL pixel dimensions and inject width,
 * height, loading="lazy", and decoding="async" where missing.
 *
 * (Full srcset/WebP for these would require converting the posts to .mdx with
 * a components mapping; that is a deliberate non-goal here, noted in the PR.)
 *
 * Usage:
 *   node scripts/fix-blog-img-dims.mjs            # dry run
 *   node scripts/fix-blog-img-dims.mjs --write
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BLOG = join(ROOT, "src", "content", "blog");
const WRITE = process.argv.includes("--write");

const mdFiles = readdirSync(BLOG).filter((f) => f.endsWith(".md"));
let injected = 0;
let alreadySized = 0;
let skippedMissing = [];

for (const f of mdFiles) {
  const full = join(BLOG, f);
  let text = readFileSync(full, "utf-8");
  const tags = [...text.matchAll(/<img\b[^>]*>/g)];
  if (!tags.length) continue;
  let fileInjections = 0;

  for (const m of tags) {
    const tag = m[0];
    const srcMatch = tag.match(/\ssrc="([^"]+)"/);
    if (!srcMatch) continue;
    const src = srcMatch[1];
    const hasW = /\swidth="/.test(tag);
    const hasH = /\sheight="/.test(tag);
    if (hasW && hasH) { alreadySized++; continue; }
    if (!src.startsWith("/images/")) { skippedMissing.push(`${f}: non-public src ${src.slice(0, 60)}`); continue; }
    const fileAbs = join(ROOT, "public", src);
    if (!existsSync(fileAbs)) { skippedMissing.push(`${f}: missing file ${src}`); continue; }

    const meta = await sharp(fileAbs).metadata();
    if (!meta.width || !meta.height) { skippedMissing.push(`${f}: unreadable dimensions ${src}`); continue; }

    let newTag = tag;
    const inject = [];
    if (!hasW) inject.push(`width="${meta.width}"`);
    if (!hasH) inject.push(`height="${meta.height}"`);
    if (!/\sloading="/.test(tag)) inject.push(`loading="lazy"`);
    if (!/\sdecoding="/.test(tag)) inject.push(`decoding="async"`);
    newTag = newTag.replace(/\ssrc="/, ` ${inject.join(" ")} src="`);
    text = text.replace(tag, newTag);
    injected++;
    fileInjections++;
  }

  if (fileInjections > 0) {
    console.log(`${WRITE ? "fixed" : "would fix"} ${String(fileInjections).padStart(3)}  ${f}`);
    if (WRITE) writeFileSync(full, text, "utf-8");
  }
}

console.log(`\n${WRITE ? "Injected" : "Would inject"} dimensions on ${injected} img tag(s); ${alreadySized} already sized.`);
if (skippedMissing.length) {
  console.log(`Skipped (${skippedMissing.length}):`);
  skippedMissing.forEach((s) => console.log(`  ${s}`));
}
