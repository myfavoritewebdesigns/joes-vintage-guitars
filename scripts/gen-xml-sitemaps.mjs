/** Typed XML sitemaps with source-backed modification dates. No npm dependencies. */
import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  DIST, XML_HEADER, SITEMAP_NS, esc, readPages, schemaLastmod,
  sitemapType, validDate, writeSitemapIndex,
} from "./sitemap-lib.mjs";

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", timeout: 60000, maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function sourceDates() {
  const dates = new Map();
  // Explicit opt-out supports validation sessions in which git execution is forbidden.
  if (process.env.SITEMAP_SKIP_GIT === "1") {
    console.warn("[xml-sitemaps] Git fallback disabled by SITEMAP_SKIP_GIT; using schema dates only");
    return dates;
  }
  try {
    // Cloudflare Pages shallow-clones. Try once to restore history; never use
    // truncated history for lastmod if fetching fails or leaves the repo shallow.
    if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
      try { git(["fetch", "--unshallow", "--quiet"]); }
      catch { console.warn("[xml-sitemaps] Could not unshallow repository"); }
      if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
        console.warn("[xml-sitemaps] Repository is shallow; skipping git lastmod fallback");
        return dates;
      }
    }
    // One log for the whole repository, never a subprocess per URL or source file.
    const history = git(["log", "--format=%x1e%cI", "--name-only", "--no-renames"]);
    for (const commit of history.split("\x1e").filter(Boolean)) {
      const [stamp, ...lines] = commit.trim().split(/\r?\n/);
      const files = [...new Set(lines.map((line) => line.trim()).filter(Boolean))];
      if (files.length > 50) continue;
      const date = validDate(stamp);
      // Mark even invalid/future latest commits so older dates are not substituted.
      for (const file of files) if (!dates.has(file)) dates.set(file, date);
    }
  } catch {
    console.warn("[xml-sitemaps] Git history unavailable; skipping git lastmod fallback");
    dates.clear();
  }
  return dates;
}

function sourceFile(path) {
  const slug = decodeURIComponent(path.slice(1, -1));
  const candidates = /^post\/[^/]+$/.test(slug)
    ? [`src/content/blog/${slug.slice(5)}.md`]
    : path === "/" ? ["src/pages/index.astro"]
      : [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`];
  const direct = candidates.find((file) => existsSync(file));
  if (direct) return direct;
  // Known generated routes use their own content data, not the shared template.
  const dynamic = [
    [/^\/free-appraisal\/[^/]+\/$/, "src/data/appraisal-pages.ts"],
    [/^\/how-to-spot-a-fake-[^/]+\/$/, "src/data/authentication-guides.ts"],
    [/^\/vintage-fender-stratocaster-value-guide\/[^/]+\/$/, "src/data/stratocasterValueYears.ts"],
    [/^\/vintage-fender-telecaster-value-guide\/[^/]+\/$/, "src/data/telecasterValueGuides.ts"],
  ];
  return dynamic.find(([pattern]) => pattern.test(path))?.[1];
}

const dates = sourceDates();
const groups = { pages: [], posts: [], guides: [], categories: [] };
for (const page of readPages()) {
  const lastmod = schemaLastmod(page.html, page.url) ?? dates.get(sourceFile(page.path));
  groups[sitemapType(page.path)].push({ url: page.url, lastmod });
}

function summary(name, entries) {
  const counts = new Map();
  for (const { lastmod } of entries) if (lastmod) counts.set(lastmod, (counts.get(lastmod) ?? 0) + 1);
  const common = [...counts].sort((a, b) => b[1] - a[1])[0];
  const dated = entries.filter((entry) => entry.lastmod).length;
  const share = common && entries.length ? common[1] / entries.length * 100 : 0;
  console.log(`[xml-sitemaps] ${name}: ${entries.length} URLs, ${dated} with lastmod; most common ${common?.[0] ?? "none"}: ${common?.[1] ?? 0} (${share.toFixed(1)}% of URLs)`);
  if (share > 50) console.warn(`[xml-sitemaps] WARNING: over 50% of ${name} URLs share one lastmod`);
}

for (const [type, entries] of Object.entries(groups)) {
  entries.sort((a, b) => a.url.localeCompare(b.url));
  const xml = entries.map(({ url, lastmod }) => `  <url>\n    <loc>${esc(url)}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") + "  </url>").join("\n");
  const name = `sitemap-${type}.xml`;
  writeFileSync(join(DIST, name), XML_HEADER + `<urlset xmlns="${SITEMAP_NS}">\n${xml}\n</urlset>\n`, "utf8");
  summary(name, entries);
}
writeSitemapIndex();
summary("all typed sitemaps", Object.values(groups).flat());
