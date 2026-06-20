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

// Generic words that carry no topical signal — dropped before scoring so the
// match is driven by brand/model/era tokens (gibson, es, 335, telecaster, 1959…).
const RELATED_STOPWORDS = new Set(
  "the a an and or of to for your you why how is are was this that with what when which it its as at by from has have not but vintage guitar guitars guide guides value history identify identifying authentication authenticating complete ultimate real best top classic story market worth selling sell buy buying collector collectors players player".split(
    " ",
  ),
);

/** Topical tokens for a post: brand/model/era words from its slug + title. */
function relatedTokens(p: Post): Set<string> {
  const text = `${p.id} ${p.data.title}`.toLowerCase();
  const out = new Set<string>();
  for (const t of text.split(/[^a-z0-9]+/)) {
    if (t.length >= 2 && !RELATED_STOPWORDS.has(t)) out.add(t);
  }
  return out;
}

/**
 * Up to `n` related posts, ranked by topical relevance rather than recency.
 * Each candidate scores on shared slug/title tokens weighted by inverse document
 * frequency (rare model tokens like "335" or "l5" outweigh common ones like
 * "gibson"), plus a small same-category nudge; ties break by recency. Always
 * returns `n` posts (falls back to recency for thin matches), never the post
 * itself. Replaces the old same-category-newest-first logic, which surfaced the
 * 3 newest posts in the largest category on nearly every page.
 */
export function getRelated(posts: Post[], current: Post, n = 3): Post[] {
  const others = posts.filter((p) => p.id !== current.id);
  const tokenSets = new Map<string, Set<string>>();
  const df = new Map<string, number>();
  for (const p of [current, ...others]) {
    const ts = relatedTokens(p);
    tokenSets.set(p.id, ts);
    for (const t of ts) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const cur = tokenSets.get(current.id)!;
  return others
    .map((p) => {
      let score = 0;
      for (const t of cur) if (tokenSets.get(p.id)!.has(t)) score += 1 / (df.get(t) ?? 1);
      if (p.data.category === current.data.category) score += 0.15;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || b.p.data.pubDate.getTime() - a.p.data.pubDate.getTime())
    .slice(0, n)
    .map((s) => s.p);
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
