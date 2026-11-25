/** Video discovery is limited to canonical, indexable watch pages. */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  DIST, XML_HEADER, SITEMAP_NS, esc, readPages, schemaNodes, hasType,
  schemaLastmod, validDate, writeSitemapIndex,
} from "./sitemap-lib.mjs";

function durationSeconds(value) {
  if (typeof value !== "string") return undefined;
  const match = value.match(/^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/);
  if (!match || !match.slice(1).some(Boolean)) return undefined;
  const seconds = Number(match[1] ?? 0) * 86400 + Number(match[2] ?? 0) * 3600 +
    Number(match[3] ?? 0) * 60 + Number(match[4] ?? 0);
  return Number.isInteger(seconds) && seconds > 0 ? seconds : undefined;
}

const entries = [];
let videos = 0;
for (const page of readPages().filter((page) => page.path.startsWith("/videos/"))) {
  const nodes = schemaNodes(page.html).filter((node) => hasType(node, ["VideoObject"]));
  const blocks = nodes.map((node) => {
    const thumbnail = Array.isArray(node.thumbnailUrl) ? node.thumbnailUrl[0] : node.thumbnailUrl;
    if (![thumbnail, node.name, node.description, node.embedUrl].every((value) => typeof value === "string" && value.length)) {
      throw new Error(`Watch page has incomplete VideoObject: ${page.url}`);
    }
    const duration = durationSeconds(node.duration);
    if (node.duration && duration === undefined) throw new Error(`Invalid video duration: ${page.url}`);
    if (node.uploadDate && !validDate(node.uploadDate)) throw new Error(`Invalid video uploadDate: ${page.url}`);
    videos++;
    return "    <video:video>\n" +
      `      <video:thumbnail_loc>${esc(thumbnail)}</video:thumbnail_loc>\n` +
      `      <video:title>${esc(node.name)}</video:title>\n` +
      `      <video:description>${esc(node.description)}</video:description>\n` +
      `      <video:player_loc>${esc(node.embedUrl)}</video:player_loc>\n` +
      (duration ? `      <video:duration>${duration}</video:duration>\n` : "") +
      (node.uploadDate ? `      <video:publication_date>${esc(node.uploadDate)}</video:publication_date>\n` : "") +
      "    </video:video>";
  });
  if (!blocks.length) continue;
  const lastmod = schemaLastmod(page.html, page.url);
  entries.push(`  <url>\n    <loc>${esc(page.url)}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") + blocks.join("\n") + "\n  </url>");
}
writeFileSync(join(DIST, "video-sitemap.xml"), XML_HEADER +
  `<urlset xmlns="${SITEMAP_NS}" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${entries.join("\n")}\n</urlset>\n`, "utf8");
// XML runs before video in the build chain; refresh child dates after writing.
writeSitemapIndex();
console.log(`[video-sitemap] ${entries.length} watch pages, ${videos} videos -> dist/video-sitemap.xml`);
