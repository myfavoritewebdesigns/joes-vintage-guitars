# Preview Build And Image Preservation

The final branch incorporates published main `bafcee588b52cc7e88e036ad5a91ce53bd20c856`, including its existing unused-image-variant cleanup. The package build command and cleanup script are unchanged from that production release. The shared `Photo.astro` and `LicensedImage.astro` components also match main exactly. New Martin photographs use the original responsive-image behavior, capped at each source image's native dimensions.

The fresh production baseline contains 457 HTML files and 17,296 image assets. `deep-verification.json` checks all of those existing images for byte-identical preservation and records the protected-page results. The build output count is recorded in `validation.log` and the main report. All 25 selected source photographs retain their recorded SHA-256 hashes; thirteen are new imported originals and twelve reuse existing repository assets.

## Earlier Deployment Investigation

The first Cloudflare attempt failed while local output contained 20,132 files. Detailed Cloudflare logs were unavailable through the connected accounts, so the 20,000-file limit was a working diagnosis rather than a confirmed build-log error. A temporary Martin-only width setting and source-copy cleanup brought that earlier branch to 19,990 files, and its Cloudflare preview succeeded.

The concurrent Fender release then published a general unused-variant cleanup. Integrating that approved release made the temporary workaround unnecessary. All Martin-only image-width options and the extra source-copy script and test have been removed. They are historical steps, not part of the final implementation.

The PR body records the final commit's Cloudflare result and immutable preview URL after deployment. Earlier successful preview hashes do not serve as evidence for the integrated commit.
