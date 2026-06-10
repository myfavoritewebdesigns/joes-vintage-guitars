#!/usr/bin/env node
/**
 * fix-dashes: deterministic dash codemod for the Prompt 3 zero-dash copy pass.
 *
 * Applies ONLY the mechanical substitution rules that need no human judgment,
 * per the SEO v2 substitution policy:
 *   1. Entity forms (&ndash; &mdash; &#8211; &#8212; &#x2013; &#x2014;) decode
 *      to their literal characters first, so one set of rules handles both.
 *   2. Abbreviated year ranges: "1958–59" becomes "1958 to 1959".
 *   3. Numeric ranges (years, prices, measurements): "1956–1958" becomes
 *      "1956 to 1958", "$30,000–$50,000" becomes "$30,000 to $50,000".
 *   4. Number-to-word ranges: "1955–Present" becomes "1955 to Present".
 *   5. Era prefixes wrongly set with a dash: "mid–1956" becomes "mid-1956".
 *
 * Everything else (em dash asides, em dash as colon, compound en dashes in
 * prose) needs judgment and is fixed by hand. The codemod prints per-file
 * replacement counts and the per-file dash counts that REMAIN for the hand pass.
 *
 * Usage:
 *   node scripts/fix-dashes.mjs            # dry run, prints what it would do
 *   node scripts/fix-dashes.mjs --write    # apply changes in place
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const WRITE = process.argv.includes("--write");

// Content sources that render into pages. reference/ and public/scripts/ stay
// untouched on purpose: ported live-site widget internals are out of scope here.
const TARGETS = [
  ["src/content/blog", [".md"]],
  ["src/pages", [".astro"]],
  ["src/components", [".astro"]],
  ["src/layouts", [".astro"]],
  ["src/data", [".ts"]],
  ["src/lib", [".ts"]],
  ["src/config", [".ts"]],
];

const ENTITIES = [
  [/&ndash;|&#8211;|&#x2013;/gi, "–"],
  [/&mdash;|&#8212;|&#x2014;/gi, "—"],
];

// Order matters: year-abbreviation expansion must run before the general
// digit-to-digit rule, or "1958–59" would become "1958 to 59".
const RULES = [
  { name: "year-abbrev-range", re: /\b(19|20)(\d{2})\s*[–—]\s*(\d{2})\b/g, fn: (m, a, b, c) => `${a}${b} to ${a}${c}` },
  { name: "digit-to-currency", re: /(\d)\s*[–—]\s*\$(\d)/g, fn: (m, a, b) => `${a} to $${b}` },
  { name: "digit-to-digit", re: /(\d)\s*[–—]\s*(\d)/g, fn: (m, a, b) => `${a} to ${b}` },
  { name: "digit-to-word", re: /(\d)\s*[–—]\s*(Present|present|Today|today|Now|now)\b/g, fn: (m, a, b) => `${a} to ${b}` },
  { name: "era-prefix", re: /\b(early|mid|late|pre|post)\s*[–—]\s*(\d)/gi, fn: (m, a, b) => `${a}-${b}` },
];

function walk(dir, exts) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, exts));
    else if (exts.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
}

let totalReplacements = 0;
const remaining = [];

for (const [dir, exts] of TARGETS) {
  const full = join(ROOT, dir);
  let files = [];
  try { files = walk(full, exts); } catch { continue; }
  for (const file of files) {
    const rel = relative(ROOT, file).split(sep).join("/");
    let text = readFileSync(file, "utf-8");
    const before = text;
    let count = 0;

    for (const [re, sub] of ENTITIES) {
      text = text.replace(re, (m) => { count++; return sub; });
    }
    // Apply numeric rules repeatedly until stable: "1954–1962–1968" style
    // chains and overlapping matches need a second pass.
    let changed = true;
    while (changed) {
      changed = false;
      for (const { re, fn } of RULES) {
        text = text.replace(re, (...args) => {
          count++;
          changed = true;
          return fn(...args);
        });
      }
    }

    if (count > 0) {
      totalReplacements += count;
      console.log(`${WRITE ? "fixed" : "would fix"} ${String(count).padStart(4)}  ${rel}`);
      if (WRITE && text !== before) writeFileSync(file, text, "utf-8");
    }
    const left = (text.match(/[‒–—―−]/g) || []).length;
    if (left > 0) remaining.push([rel, left]);
  }
}

console.log("");
console.log(`${WRITE ? "Applied" : "Would apply"} ${totalReplacements} replacements.`);
if (remaining.length) {
  console.log("");
  console.log("Dashes remaining for the hand pass (file: count):");
  for (const [rel, n] of remaining.sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${rel}`);
  }
}
