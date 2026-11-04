# Broadway Photo Update

Joe supplied six photographs on November 2, 2026: four views of his 1961 Broadway from Drive, the original owner holding a 1966 Broadway, and a local photograph of a 1964 Broadway in natural finish.

Both Broadway guide heroes and blog/social featured images now show the 1961 Broadway. The value guide includes the 1964 natural guitar and the original-owner photograph in its photo band. The authentication guide includes all six new views in a dedicated archive, plus the 1961 pickup and 1964 guitar in its photo band. The existing 1947 acoustic Broadway and labeled comparison archive remain.

The five HEIC files were decoded with libheif to JPEG quality 95 at their full native dimensions, without cropping or resizing. The local 1964 JPEG remains byte-identical. Source metadata, original and converted SHA-256 hashes, and conversion details are recorded in the photo provenance manifest. All six views use contain framing and captions below the images.

The 1961 label visibly reads Broadway, E252 and serial 16102. The guitar dates and original-owner relationship come from Joe. The Bigsby is described as installed on the photographed example without claiming factory installation. The owner photo has no inferred name, biography or photograph date.

## Verification

- Production build: 406 pages, completed through image-sitemap and IndexNow poststeps.
- Astro check: zero errors, zero warnings, 148 hints.
- Rendered copy gate: zero hard failures; 769 existing sitewide advisory warnings.
- Image licensing: 20 licensed image nodes across both guides, zero mismatches.
- Four desktop/mobile layout cases at 1280px and 375px: no broken images, horizontal overflow, hidden top actions or new image-overlay captions.
- Full-page contrast: 914 text runs, zero computed failures. Image-background text received visual review.
- Content checks: both tables, titles and descriptions unchanged; existing authentication archive retained; both new hero and social references correct; all six source asset hashes and full dimensions match.
- Independent source and visual review passed. The full face and guitar remain visible in both owner-photo placements. See visual-review.md.

Both live-diff audits against immutable preview 4e222829 have zero must-fix findings. The added sections/headings, six-image archive, and hero/band replacements implement Joe's request and are recorded in the decision log. The shared Reverb-icon dimension advisory predates this update and is unrelated to the six new images.

This update is for draft PR305 previews. Production publication remains pending Joe's specific Batch 2 approval.
