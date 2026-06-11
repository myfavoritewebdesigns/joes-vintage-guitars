import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const PAGE_SIZE = 9;

/** All published posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Display metadata + intro copy per category slug (matches live category names). */
export const CATEGORY_META: Record<string, { name: string; description: string }> = {
  "specific-model-highlights": {
    name: "Specific Model Highlights",
    description:
      "Deep-dive authentication and spec guides for individual vintage models: year-by-year details, originality checks, and what collectors look for.",
  },
  "value-evaluation": {
    name: "Value & Evaluation",
    description:
      "How vintage guitars are valued: the factors that move prices, condition grading, and honest advice on what your instrument is really worth.",
  },
  "serial-number-dating-guides": {
    name: "Serial Number & Dating Guides",
    description:
      "Reference guides for dating vintage guitars by serial number, pot codes, and production records.",
  },
  "museum-original-owners": {
    name: "Museum & Original Owners",
    description: "Stories from original owners and standout instruments that have passed through the shop.",
  },
  uncategorized: {
    name: "Uncategorized",
    description: "Articles and notes from Joe's Vintage Guitars.",
  },
};

export function categoryName(slug: string, fallback?: string): string {
  return CATEGORY_META[slug]?.name ?? fallback ?? slug;
}

/** Distinct categories that actually have posts, with counts, ordered by count desc. */
export function getCategories(posts: Post[]): { slug: string; name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.data.category, (counts.get(p.data.category) ?? 0) + 1);
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, name: categoryName(slug), count }))
    .sort((a, b) => b.count - a.count);
}

/** Posts in a category, newest first. */
export function postsInCategory(posts: Post[], slug: string): Post[] {
  return posts.filter((p) => p.data.category === slug);
}

/** Up to `n` related posts: same category first, then recent, never the post itself. */
export function getRelated(posts: Post[], current: Post, n = 3): Post[] {
  const sameCat = posts.filter((p) => p.id !== current.id && p.data.category === current.data.category);
  const rest = posts.filter((p) => p.id !== current.id && p.data.category !== current.data.category);
  return [...sameCat, ...rest].slice(0, n);
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Slice posts into fixed-size pages. */
export function paginate<T>(items: T[], pageSize = PAGE_SIZE): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += pageSize) pages.push(items.slice(i, i + pageSize));
  return pages.length ? pages : [[]];
}
