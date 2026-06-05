// WP -> Astro blog migration.
// Fetches all posts from the live WordPress REST API, strips the Avada/Fusion
// wrapper markup down to semantic content, downloads every image locally, and
// writes one GFM-Markdown file per post into src/content/blog/.
//
// Re-runnable: existing local images are skipped; content files are overwritten.
//
//   node scripts/migrate-blog.mjs
//
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const API = "https://www.joesvintageguitarsaz.com/wp-json/wp/v2";
const ORIGIN = "https://www.joesvintageguitarsaz.com";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

const CONTENT_DIR = path.join(ROOT, "src", "content", "blog");
const IMG_ROOT = path.join(ROOT, "public", "images", "blog");

const BLOCK_SEL = "h1,h2,h3,h4,h5,h6,p,ul,ol,table,figure,blockquote,img,pre";

async function getJSON(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function decodeEntities(s) {
  return (s || "")
    .replace(/&#8217;|&#x2019;/g, "’")
    .replace(/&#8216;|&#x2018;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function stripTags(html) {
  return decodeEntities((html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

// YAML scalar that is always safe: double-quote and escape.
function yaml(str) {
  return JSON.stringify(str == null ? "" : String(str));
}

function basenameFromUrl(u) {
  try {
    const p = new URL(u, ORIGIN).pathname;
    return decodeURIComponent(p.split("/").pop());
  } catch {
    return u.split("/").pop().split("?")[0];
  }
}

const downloaded = new Set();
async function downloadImage(srcUrl, slug) {
  const abs = srcUrl.startsWith("http") ? srcUrl : new URL(srcUrl, ORIGIN).href;
  const file = basenameFromUrl(abs);
  const destDir = path.join(IMG_ROOT, slug);
  const destPath = path.join(destDir, file);
  const localUrl = `/images/blog/${slug}/${file}`;
  if (downloaded.has(destPath)) return localUrl;
  downloaded.add(destPath);
  try {
    await fs.mkdir(destDir, { recursive: true });
    try {
      await fs.access(destPath); // skip if already present
      return localUrl;
    } catch {}
    const res = await fetch(abs, { headers: { "User-Agent": UA } });
    if (!res.ok) {
      console.warn(`   ! image ${res.status}: ${abs}`);
      return abs; // keep remote as fallback so audit flags it
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(destPath, buf);
    return localUrl;
  } catch (e) {
    console.warn(`   ! image error ${abs}: ${e.message}`);
    return abs;
  }
}

// Pull the largest-resolution URL out of a srcset (or fall back to src).
function bestSrc($img) {
  const srcset = $img.attr("srcset");
  if (srcset) {
    const candidates = srcset
      .split(",")
      .map((s) => s.trim().split(/\s+/))
      .map(([url, w]) => ({ url, w: parseInt(w) || 0 }));
    candidates.sort((a, b) => b.w - a.w);
    if (candidates[0]?.url) return candidates[0].url;
  }
  return $img.attr("src");
}

async function cleanContent(rawHtml, slug, featuredBasename) {
  const $ = cheerio.load(rawHtml, null, false);

  // Collect top-level meaningful blocks in document order.
  const blocks = [];
  $(BLOCK_SEL).each((_, el) => {
    if ($(el).parents(BLOCK_SEL).length > 0) return; // nested -> handled by parent
    blocks.push(el);
  });

  // Build a fresh document from cloned, sanitized blocks.
  const out = cheerio.load("<div id='__root'></div>", null, false);
  const root = out("#__root");

  let firstImgDropped = false;
  for (const el of blocks) {
    const $el = cheerio.load($.html(el), null, false);
    const tag = el.tagName.toLowerCase();

    // Drop the in-content hero image (it duplicates the featured image,
    // which the post layout renders separately).
    if (tag === "img") {
      const b = basenameFromUrl(bestSrc($el("img")) || "");
      if (!firstImgDropped && b && b === featuredBasename) {
        firstImgDropped = true;
        continue;
      }
    }

    // Strip noise attributes everywhere — but preserve `id` on headings so
    // the live in-content TOC anchors (#color-palette, #faq, ...) and any
    // inbound deep links keep working.
    $el("*").each((_, n) => {
      const node = $el(n);
      const isHeading = /^h[1-6]$/i.test(n.tagName || "");
      for (const attr of Object.keys(n.attribs || {})) {
        if (attr === "id" && isHeading) continue;
        if (
          /^(class|style|id|data-|srcset|sizes|loading|decoding|width|height|sizes|fetchpriority|aria-|role)/.test(
            attr
          )
        ) {
          node.removeAttr(attr);
        }
      }
    });

    // Localize images; collapse <picture> to a plain <img>.
    const imgs = $el("img").toArray();
    for (const img of imgs) {
      const $img = $el(img);
      const best = bestSrc($img);
      if (best) {
        const local = await downloadImage(best, slug);
        $img.attr("src", local);
        $img.removeAttr("srcset");
        $img.attr("loading", "lazy");
        $img.attr("decoding", "async");
        if (!$img.attr("alt")) $img.attr("alt", "");
      }
    }
    $el("picture").each((_, p) => {
      const innerImg = $el(p).find("img").first();
      $el(p).replaceWith(innerImg.length ? $el.html(innerImg) : "");
    });

    // Rewrite same-site links to relative so they survive the WP teardown.
    $el("a[href]").each((_, a) => {
      let href = $el(a).attr("href") || "";
      // Unwrap malformed google-search wrapper links in the source content
      // (e.g. https://www.google.com/search?q=https://...site.com/x/ or ?q=%23).
      const g = href.match(/^https?:\/\/(?:www\.)?google\.com\/search\?q=([^&]+)/i);
      if (g) href = decodeURIComponent(g[1]);
      const m = href.match(/^https?:\/\/(?:www\.)?joesvintageguitarsaz\.com(\/.*)?$/i);
      $el(a).attr("href", m ? m[1] || "/" : href);
    });

    // Unwrap dead anchors (href="#"/empty) — replace the link with its text.
    $el("a").each((_, a) => {
      const href = ($el(a).attr("href") || "").trim();
      if (href === "" || href === "#") $el(a).replaceWith($el(a).html() || "");
    });
    // Drop attribute-less <span> wrappers (Avada styling noise).
    $el("span").each((_, s) => {
      if (Object.keys(s.attribs || {}).length === 0) $el(s).replaceWith($el(s).html() || "");
    });
    // Unwrap redundant <b>/<strong> inside headings (headings are already bold).
    $el("h1,h2,h3,h4,h5,h6").find("b,strong").each((_, b) => {
      $el(b).replaceWith($el(b).html() || "");
    });

    // Demote any in-content H1 to H2 (layout owns the single page H1).
    $el("h1").each((_, h) => {
      const node = $el(h);
      const repl = cheerio.load(`<h2>${node.html()}</h2>`, null, false);
      node.replaceWith(repl.html());
    });

    // Skip empty paragraphs.
    if (tag === "p" && !$el.root().text().trim() && $el("img").length === 0) continue;

    root.append($el.html());
  }

  return out("#__root").html();
}

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*",
  });
  td.use(gfm);
  // Preserve <figure>/<figcaption> as raw HTML so captions survive.
  td.keep(["figure", "figcaption"]);
  // Preserve headings that carry an explicit id (TOC / deep-link targets) as
  // raw HTML so the anchor survives; plain headings still become `##` Markdown.
  td.addRule("keepHeadingIds", {
    filter: (node) => /^H[1-6]$/.test(node.nodeName) && !!node.id,
    replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
  });
  return td;
}

async function main() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.mkdir(IMG_ROOT, { recursive: true });

  console.log("Fetching taxonomy...");
  const cats = await getJSON(`${API}/categories?per_page=100&_fields=id,slug,name`);
  const tags = await getJSON(`${API}/tags?per_page=100&_fields=id,slug,name`);
  const catById = Object.fromEntries(cats.map((c) => [c.id, { slug: c.slug, name: decodeEntities(c.name) }]));
  const tagById = Object.fromEntries(tags.map((t) => [t.id, t.slug]));

  console.log("Fetching posts...");
  const posts = await getJSON(
    `${API}/posts?per_page=100&_embed=wp:featuredmedia&_fields=id,slug,link,date,modified,title,excerpt,content,featured_media,categories,tags,_links,_embedded`
  );
  console.log(`Got ${posts.length} posts.\n`);

  const td = makeTurndown();
  const index = [];

  for (const post of posts) {
    // Use the live URL's slug (post.link) so /post/<slug>/ matches live exactly.
    const slug = post.link ? post.link.replace(/\/$/, "").split("/").pop() : post.slug;
    const title = decodeEntities(post.title.rendered);
    process.stdout.write(`- ${slug} ... `);

    // Featured image.
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const featuredUrl = media?.source_url || null;
    const featuredAlt = decodeEntities(media?.alt_text || "") || title;
    const featuredBasename = featuredUrl ? basenameFromUrl(featuredUrl) : "";
    let heroLocal = "";
    if (featuredUrl) heroLocal = await downloadImage(featuredUrl, slug);

    // Body.
    const cleanedHtml = await cleanContent(post.content.rendered, slug, featuredBasename);
    let md = td.turndown(cleanedHtml || "");
    md = md.replace(/\n{3,}/g, "\n\n").trim();

    const primaryCatId = post.categories?.[0];
    const cat = catById[primaryCatId] || { slug: "uncategorized", name: "Uncategorized" };
    const postTags = (post.tags || []).map((id) => tagById[id]).filter(Boolean);
    const excerpt = stripTags(post.excerpt.rendered)
      .replace(/\s*\[?…\]?\s*$/, "")
      .replace(/\s*Continue reading.*$/i, "")
      .trim();

    const fm = [
      "---",
      `title: ${yaml(title)}`,
      `pubDate: ${yaml(post.date)}`,
      `modified: ${yaml(post.modified)}`,
      `excerpt: ${yaml(excerpt)}`,
      `category: ${yaml(cat.slug)}`,
      `categoryName: ${yaml(cat.name)}`,
      `tags: [${postTags.map((t) => yaml(t)).join(", ")}]`,
      `heroImage: ${yaml(heroLocal)}`,
      `heroImageAlt: ${yaml(featuredAlt)}`,
      `metaDescription: ${yaml(excerpt)}`,
      `ogImage: ${yaml(heroLocal)}`,
      `wpId: ${post.id}`,
      "---",
      "",
    ].join("\n");

    await fs.writeFile(path.join(CONTENT_DIR, `${slug}.md`), fm + md + "\n", "utf-8");
    index.push({ slug, title, date: post.date, cat: cat.slug });
    console.log(`ok (${md.length} chars md)`);
  }

  console.log(`\nDone. ${index.length} posts written to src/content/blog/.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
