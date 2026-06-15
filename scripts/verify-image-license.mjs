// Verify that every licensed ImageObject's contentUrl exactly equals a rendered
// <img src> on the SAME built page. Catches the silent-fail where a re-derived
// contentUrl points to a URL the page does not actually render.
//
// Usage: node scripts/verify-image-license.mjs [slug ...]
//   no args -> checks a default set of wired content pages.
import { readFileSync, existsSync } from "node:fs";

const SITE = "https://www.joesvintageguitarsaz.com";

const DEFAULT_SLUGS = [
  "about-me",
  "free-appraisal",
  "sell-my-fender-guitar",
  "sell-my-gibson-guitar",
  "sell-my-martin-guitar",
  "sell-a-guitar-collection",
  "fender-guitars-serial-number-guide",
  "how-to-read-gibson-serial-numbers",
  "martin-serial-and-model-numbers",
  "rickenbacker-serial-numbers",
  "gretsch-serial-number-lookup",
  "guild-serial-number-lookup",
  "vintage-fender-amplifier-serial-numbers-how-to-find-the-year",
];

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_SLUGS;

let totalNodes = 0;
let totalMiss = 0;
const perPage = [];

for (const slug of slugs) {
  const path = `dist/${slug}/index.html`;
  if (!existsSync(path)) {
    perPage.push({ slug, nodes: 0, miss: 0, note: "NO HTML" });
    continue;
  }
  const h = readFileSync(path, "utf8");
  // Rendered <img src> set (relative).
  const imgSrcs = new Set(
    [...h.matchAll(/<img\b[^>]*?\bsrc="([^"]+)"/g)].map((m) => m[1])
  );
  // Only ImageObject nodes that carry a license (the permissive content photos).
  const ldBlocks = [...h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let nodes = 0;
  let miss = 0;
  for (const block of ldBlocks) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch {
      continue;
    }
    const arr = Array.isArray(parsed) ? parsed : [parsed];
    const stack = [...arr];
    while (stack.length) {
      const node = stack.pop();
      if (!node || typeof node !== "object") continue;
      // Descend into nested arrays/objects (e.g. BlogPosting.image[]).
      for (const v of Object.values(node)) {
        if (Array.isArray(v)) stack.push(...v);
        else if (v && typeof v === "object") stack.push(v);
      }
      if (node["@type"] === "ImageObject" && node.license && node.contentUrl) {
        nodes++;
        const rel = node.contentUrl.replace(SITE, "");
        if (!imgSrcs.has(rel)) {
          miss++;
          console.log(`  [${slug}] MISS contentUrl not rendered: ${rel}`);
        }
      }
    }
  }
  totalNodes += nodes;
  totalMiss += miss;
  perPage.push({ slug, nodes, miss });
}

console.log("\n=== Licensed ImageObject contentUrl == rendered <img src> ===");
for (const p of perPage) {
  const status = p.note ? p.note : p.miss === 0 ? "OK" : `${p.miss} MISMATCH`;
  console.log(`  ${p.slug.padEnd(60)} nodes=${String(p.nodes).padStart(3)}  ${status}`);
}
console.log(`\nTOTAL licensed-content nodes: ${totalNodes}, mismatches: ${totalMiss}`);
process.exit(totalMiss === 0 ? 0 : 1);
