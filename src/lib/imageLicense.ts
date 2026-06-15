import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import { SITE_URL, imageLicense } from "../config/site";

/**
 * Build permissive-license schema.org ImageObject nodes for genuine content
 * photographs Joe shot.
 *
 * WHY THIS EXISTS
 * ---------------
 * Joe Dampt personally shot 100% of the content photos on this site. They ship
 * under the PERMISSIVE attribution license defined once in `imageLicense`
 * (src/config/site.ts). Emitting an ImageObject with `license` +
 * `acquireLicensePage` is what powers Google's "Licensable images" badge
 * (GSC "Image metadata" report). The LOGO/brand marks are the only exception
 * (copyright-only, no `license`) and are handled directly in Layout.astro — do
 * NOT route the logo through this helper.
 *
 * CONTENT-URL CORRECTNESS (critical, silent-fail if wrong)
 * --------------------------------------------------------
 * `contentUrl` MUST be the exact, absolute URL the browser fetches for the
 * image. Google silently ignores an ImageObject whose contentUrl does not match
 * a real <img> on the page. Two cases:
 *
 *   1. Optimized <Image> images (file relocated under src/assets): the rendered
 *      `src` is a width-constrained `/_astro/<name>.<hash>_<variant>.webp`
 *      produced by Astro's image pipeline. The base `ImageMetadata.src` is the
 *      UN-transformed import URL and does NOT match the rendered src. To get the
 *      real rendered src we call `getImage({ src, width })` with the SAME width
 *      the page passes to <Image>; `getImage(...).src` is byte-identical to what
 *      <Image> renders. Pass that as `image` + `width`.
 *
 *   2. Raw <img> via assetSrc() (public/ path passthrough, file NOT relocated):
 *      the rendered `src` is just the value `assetSrc()` returned (e.g.
 *      "/images/about-me-joe-1.jpg"). Pass that string as `renderedSrc` and the
 *      helper trusts it verbatim.
 *
 * Either way the node's contentUrl is derived from the SAME value that produces
 * the rendered src, so they cannot drift.
 */

/** Permissive Person/creator node, reused across every licensed photo. */
const creatorNode = {
  "@type": "Person" as const,
  name: imageLicense.creatorName,
};

/** The permissive license fields shared by every content photo's ImageObject. */
export const permissiveLicenseFields = {
  license: imageLicense.photoLicenseUrl,
  acquireLicensePage: imageLicense.photoLicenseUrl,
  creditText: imageLicense.creditText,
  creator: creatorNode,
  copyrightNotice: imageLicense.copyrightNotice,
} as const;

/** Make a root-relative or already-absolute path absolute against SITE_URL. */
function absolute(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

/**
 * One input image. Provide EITHER `image` (an optimized <Image> source, plus the
 * same `width` the page renders) OR `renderedSrc` (the exact string used as a
 * raw <img src>, e.g. an assetSrc() return value).
 */
export interface LicensedImageInput {
  /** ImageMetadata for an optimized <Image>. The helper resolves its real src. */
  image?: ImageMetadata;
  /** The width passed to <Image> for `image` (required so the transform matches). */
  width?: number;
  /** Exact rendered src string for a raw <img> (public-path passthrough). */
  renderedSrc?: string;
  /** Optional alt/caption text mirrored into the node's `caption`. */
  alt?: string;
}

export interface LicensedImageObject {
  "@type": "ImageObject";
  contentUrl: string;
  width?: number;
  height?: number;
  caption?: string;
  license: string;
  acquireLicensePage: string;
  creditText: string;
  creator: typeof creatorNode;
  copyrightNotice: string;
}

/**
 * Resolve one input to its absolute contentUrl (+ real dimensions) by routing
 * optimized images through getImage() so the URL equals the rendered <Image> src.
 */
async function resolveOne(
  input: LicensedImageInput
): Promise<{ contentUrl: string; width?: number; height?: number } | null> {
  if (input.renderedSrc) {
    return { contentUrl: absolute(input.renderedSrc) };
  }
  if (input.image) {
    // getImage with the same width AND layout yields the exact transformed src
    // that <Image> renders. The global image config (astro.config.mjs) sets
    // `layout: 'constrained'`, which changes the primary `src` transform, so we
    // must pass the same layout here or the hash suffix drifts (silent fail).
    const built = await getImage({
      src: input.image,
      layout: "constrained",
      ...(input.width ? { width: input.width } : {}),
    });
    return {
      contentUrl: absolute(built.src),
      width: built.attributes?.width ?? input.image.width,
      height: built.attributes?.height ?? input.image.height,
    };
  }
  return null;
}

/**
 * Build an array of permissive-license ImageObject nodes from content photos.
 * Inputs that resolve to nothing (missing metadata) are skipped silently rather
 * than emitting a broken node. ASYNC: must be awaited at the top of an .astro
 * frontmatter before being spread into the page's `structuredData` prop.
 *
 * Returns `Record<string, unknown>[]` so the result spreads cleanly into the
 * Layout's `structuredData` prop (typed as `Record<string, unknown>[]`).
 */
export async function buildImageGraph(
  images: LicensedImageInput[]
): Promise<Record<string, unknown>[]> {
  const out: Record<string, unknown>[] = [];
  for (const input of images) {
    const resolved = await resolveOne(input);
    if (!resolved) continue;
    out.push({
      "@type": "ImageObject",
      contentUrl: resolved.contentUrl,
      ...(resolved.width ? { width: resolved.width } : {}),
      ...(resolved.height ? { height: resolved.height } : {}),
      ...(input.alt ? { caption: input.alt } : {}),
      ...permissiveLicenseFields,
    } satisfies LicensedImageObject);
  }
  return out;
}
