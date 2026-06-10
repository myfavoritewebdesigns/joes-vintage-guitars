import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "../lib/blog";
import { SITE_URL } from "../config/site";

// Real RSS feed replacing WordPress's /feed/. Served at /feed.xml; legacy
// /feed/ and /comments/feed/ URLs 301 here via public/_redirects.
export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: "Joe's Vintage Guitars » Feed",
    description:
      "Vintage guitar guides, authentication tips, and market insight from Joe's Vintage Guitars. We buy vintage guitars nationwide.",
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.metaDescription || post.data.excerpt || undefined,
      link: `/post/${post.id}/`,
      categories: [post.data.categoryName],
    })),
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData:
      "<language>en-us</language>" +
      `<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>`,
  });
}
