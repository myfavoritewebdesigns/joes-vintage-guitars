import type { ImageMetadata } from "astro";

/**
 * String-path to ImageMetadata bridge for the SEO v2 image relocation.
 *
 * Why this exists: blog frontmatter (heroImage/ogImage) and page data arrays
 * reference images as plain strings. Astro's image pipeline only optimizes
 * files under src/, addressed via imports. This shim resolves a string path
 * to the imported asset when the file has been relocated under src/assets,
 * and falls back to the original public/ path when it has not, so pages keep
 * working through an incremental migration.
 *
 * Accepted path shapes:
 *   "/images/blog/<slug>/photo.jpg"  -> src/assets/blog/<slug>/photo.jpg
 *   "images/<page>/photo.jpg"        -> src/assets/images/<page>/photo.jpg
 *   "/images/<page>/photo.jpg"       -> src/assets/images/<page>/photo.jpg
 */
const blogAssets = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/blog/**/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG}",
  { eager: true }
);
const imageAssets = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/**/*.{jpg,jpeg,png,webp,gif,avif,JPG,JPEG,PNG}",
  { eager: true }
);

/** Resolve a string path to pipeline metadata, or null if the file is not in src/assets. */
export function resolveImage(path: string): ImageMetadata | null {
  if (!path) return null;
  const p = path.replace(/^\//, "");
  if (p.startsWith("images/blog/")) {
    return blogAssets[`../assets/blog/${p.slice("images/blog/".length)}`]?.default ?? null;
  }
  if (p.startsWith("images/")) {
    return imageAssets[`../assets/${p}`]?.default ?? null;
  }
  return null;
}

/**
 * Resolve to a usable <img src> string: the hashed pipeline URL when the file
 * lives in src/assets, otherwise the original public/ path unchanged.
 */
export function assetSrc(path: string): string {
  const meta = resolveImage(path);
  if (meta) return meta.src;
  return path.startsWith("/") || path.startsWith("http") ? path : `/${path}`;
}

/** Layout's og-dimension props, ready to spread. */
export interface OgCardSize {
  ogImageWidth?: number;
  ogImageHeight?: number;
}

/**
 * Read an image's REAL dimensions from the pipeline instead of hand-declaring
 * them next to the `ogImage` prop.
 *
 * Why this exists: `Layout.astro` defaults `ogImageWidth`/`ogImageHeight` to
 * 1200x1200, and only 2 of 43 page files ever overrode them. A live sweep on
 * 2026-07-19 found **13 pages declaring 1200x1200 for files that are actually
 * anywhere from 250x148 to 6240x4160** — including `/guild-serial-number-lookup/`,
 * the site's second-highest-traffic page. Platforms use the declared size to lay
 * out the card slot BEFORE fetching the image, so declaring square and delivering
 * 3:2 yields a cropped or letterboxed card.
 *
 * Deriving beats declaring: swap the source file and the tags follow. Pass the
 * SAME string path you pass to `assetSrc()` and spread the result:
 *
 *   const OG = "images/sell-gretsch/1960-gretsch-6120-orange.jpg";
 *   <Layout ogImage={`${SITE_URL}${assetSrc(OG)}`} {...ogCardSize(OG)} />
 *
 * Returns an EMPTY object for paths that are not pipeline assets (images served
 * straight from public/, e.g. the hand-built cards in public/images/og/). Those
 * pages must still declare dimensions explicitly, because nothing knows the file
 * size at build time — spreading `{}` just leaves Layout's defaults in place, so
 * always pass real numbers alongside it there.
 */
export function ogCardSize(path: string): OgCardSize {
  const meta = resolveImage(path);
  if (!meta) return {};
  return { ogImageWidth: meta.width, ogImageHeight: meta.height };
}
