# Preview Asset Budget

The first Cloudflare build failed. Its integration exposed no detailed error; the saved Wrangler OAuth login had expired, and the browser account could not access this project. Local output contained 20,132 files, above the documented Cloudflare Pages Free-plan limit of 20,000. The file-count explanation is a diagnosis to be confirmed by the next deployment, not a quoted build-log error.

Only the six new Martin guides opt into explicit image widths. Their new large photos use a 1280px delivered image; small originals are capped at native width. Reused archive photographs use their already-published primary widths where available. Source files remain full-size and byte-identical. Existing callers do not opt in, and all protected HTML remains byte-identical.

`LicensedImage.astro` accepts optional explicit widths; `model-guide/Photo.astro` passes optional per-photo width settings. Defaults and existing rendering are preserved. No shared CSS, ModelGuide or GuideBlock behavior changes.

The post-build script removes only unreferenced original copies emitted from the newly added `src/assets/images/martin-small-body` sources. It scans all built HTML, CSS, JavaScript, JSON, XML, text and SVG references first; keeps every referenced output and optimized variant; verifies the candidate bytes match a source original; and restricts deletion to files directly inside `dist/_astro`. No source original is removed. None of these fourteen source basenames existed in baseline main `79091bf`, so this does not target legacy source copies.

A focused test verifies preservation of a JSON-LD-referenced original, optimized variant, unrelated legacy file and source original. The current output is 19,990 files after thirteen unused output copies are removed. This leaves little capacity for PR 2; its asset budget must be reviewed after Joe approves PR 1.

Reference: [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/).
