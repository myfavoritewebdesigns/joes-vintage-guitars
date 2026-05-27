// One-off codemod: replace hex literals with CSS custom properties
// ONLY inside <style>...</style> blocks of .astro files. Skips HTML attributes,
// SVG paths, JSON, etc.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const map = {
  "#eedfc0": "var(--color-brand-cream)",
  "#f0e8d8": "var(--color-brand-cream-light)",
  "#f0e1c1": "var(--color-brand-cream-warm)",
  "#f5efe3": "var(--color-brand-parchment)",
  "#f5f0e8": "var(--color-brand-bone)",
  "#faf6ef": "var(--color-brand-vanilla)",

  "#a03a1e": "var(--color-brand-rust)",
  "#be4b25": "var(--color-brand-rust-bright)",
  "#682412": "var(--color-brand-rust-dark)",
  "#612211": "var(--color-brand-rust-darker)",
  "#aa3d1c": "var(--color-brand-rust-amber)",

  "#3e2a14": "var(--color-brand-brown)",
  "#4a3828": "var(--color-brand-brown-warm)",
  "#5a4a38": "var(--color-brand-brown-mid)",
  "#7a6a54": "var(--color-brand-brown-muted)",
  "#7a5c38": "var(--color-brand-brown-cool)",
  "#d2b48c": "var(--color-brand-brown-tan)",

  "#c8983a": "var(--color-brand-gold)",
  "#2a2d33": "var(--color-brand-charcoal)",
  "#434549": "var(--color-brand-graphite)",
  "#333333": "var(--color-brand-ink)",
  "#f9f9fb": "var(--color-brand-off)",
};

function replaceInStyleBlocks(src) {
  // Match <style ...>(body)</style> and only substitute within body
  return src.replace(/<style([^>]*)>([\s\S]*?)<\/style>/g, (m, attrs, body) => {
    let out = body;
    for (const [hex, varExpr] of Object.entries(map)) {
      // Replace case-insensitively but keep the var output canonical
      const re = new RegExp(hex.replace("#", "\\#"), "gi");
      out = out.replace(re, varExpr);
    }
    return `<style${attrs}>${out}</style>`;
  });
}

const dir = "src/components";
const targets = [];
function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".astro")) targets.push(p);
  }
}
walk(dir);

let changed = 0;
for (const t of targets) {
  const orig = readFileSync(t, "utf8");
  const next = replaceInStyleBlocks(orig);
  if (next !== orig) {
    writeFileSync(t, next);
    changed++;
    console.log("UPDATED:", t);
  }
}
console.log(`Done. ${changed}/${targets.length} files changed.`);
