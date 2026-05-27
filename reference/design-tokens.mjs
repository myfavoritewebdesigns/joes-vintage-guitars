import { readFileSync, writeFileSync } from 'node:fs';

const css = readFileSync('reference/css/00-wpr-usedcss.css', 'utf8');

// ---- Colors ----
const colorRe = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)/g;
const colorCounts = new Map();
for (const m of css.matchAll(colorRe)) {
  const c = m[0].toLowerCase().replace(/\s+/g, '');
  colorCounts.set(c, (colorCounts.get(c) || 0) + 1);
}
const colorsSorted = [...colorCounts.entries()].sort((a, b) => b[1] - a[1]);

// ---- Font families ----
const fontFamilyRe = /font-family\s*:\s*([^;}]+)[;}]/g;
const ffCounts = new Map();
for (const m of css.matchAll(fontFamilyRe)) {
  const f = m[1].trim().replace(/\s+/g, ' ');
  ffCounts.set(f, (ffCounts.get(f) || 0) + 1);
}
const fontsSorted = [...ffCounts.entries()].sort((a, b) => b[1] - a[1]);

// ---- Font sizes ----
const fontSizeRe = /font-size\s*:\s*([^;}]+)[;}]/g;
const fsCounts = new Map();
for (const m of css.matchAll(fontSizeRe)) {
  const s = m[1].trim();
  fsCounts.set(s, (fsCounts.get(s) || 0) + 1);
}
const sizesSorted = [...fsCounts.entries()].sort((a, b) => b[1] - a[1]);

// ---- CSS custom properties (variables) ----
const varRe = /(--[\w-]+)\s*:\s*([^;}]+)[;}]/g;
const vars = new Map();
for (const m of css.matchAll(varRe)) {
  if (!vars.has(m[1])) vars.set(m[1], m[2].trim());
}

// ---- @font-face imports ----
const ffaceRe = /@font-face\s*\{[^}]*\}/g;
const fontFaces = [...css.matchAll(ffaceRe)].map(m => m[0]);

// ---- Google Fonts imports ----
const importRe = /@import[^;]+;/g;
const imports = [...css.matchAll(importRe)].map(m => m[0]);

const report = {
  topColors: colorsSorted.slice(0, 50),
  fontFamilies: fontsSorted,
  fontSizes: sizesSorted.slice(0, 50),
  cssVarCount: vars.size,
  cssVars: Object.fromEntries([...vars.entries()].slice(0, 80)),
  fontFaceCount: fontFaces.length,
  importCount: imports.length,
  imports,
};

writeFileSync('reference/design-tokens.json', JSON.stringify(report, null, 2));
console.log(`Wrote reference/design-tokens.json`);
console.log(`Colors: ${colorsSorted.length} unique`);
console.log(`Font families: ${fontsSorted.length} unique`);
console.log(`Font sizes: ${sizesSorted.length} unique`);
console.log(`CSS vars: ${vars.size}`);
console.log(`@font-face: ${fontFaces.length}`);
console.log(`@import: ${imports.length}`);
