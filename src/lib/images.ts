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
