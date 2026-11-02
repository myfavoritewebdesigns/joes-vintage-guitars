# Olympic Photo Replacement

Joe requested that the existing Olympic photographs be replaced with photographs from two sold listings in his Reverb shop:

- [1940s yellow-burst Olympic archtop](https://reverb.com/item/85387290-epiphone-olympic-archtop-1940-s-yellow-burst-w-hsc): six views selected, including the full front, body, headstock, lifted binding, replacement tailpiece and internal label. The listing discloses cracks, lifted binding, and a replaced pickguard and tailpiece.
- [1965 sunburst Olympic](https://reverb.com/item/37522554-epiphone-olympic-1965-sunburst-wide-nut): all five views selected, showing the full front, body, full back, six-in-line headstock and rear body. This is a single-pickup example with two controls and a vibrato. The wide-nut listing description supplies no numeric measurement.

All 11 images are local, byte-identical copies of the exposed full gallery images, retaining their 1600px maximum dimensions. Their URLs, listing states, hashes and dimensions are in the photo provenance manifest. No private account information is included.

Both guides now use the 1965 full-front image as their hero and blog/social featured image. The photo bands show the two Olympic families. All 11 selected views appear in the authentication archive. The seller page's shipping photo now shows the same 1965 Olympic beside its blue-lined case, using the image's landscape ratio to keep the caption adjacent. Existing Olympic, Triumph and Crestwood comparison images have been removed from the Olympic guides; the original source files remain in the repository's historical inventory.

Instrument-specific copy has been updated throughout: the old two-pickup example, serial 84467, tuner alterations and SKB case are no longer described. The acoustic label visibly reads Olympic and 51946. Its date remains 1940s, without an inferred precise year. No numeric nut width, original-case claim or unsupported originality claim is added. General model history and all price tables remain unchanged.

## Validation

- Final production build: 406 pages, including completed sitemap and IndexNow poststeps.
- Astro check: zero errors, zero warnings, 150 hints.
- Rendered copy gate: zero hard failures; 769 existing sitewide advisory warnings.
- Licensed images: 29 nodes across the two guides and seller page, zero mismatches.
- Four guide layout cases and two seller shipping cases at 1280px and 375px: no broken images or horizontal overflow, guide top actions visible, captions below photos, contain framing retained.
- Full-guide contrast: 878 text runs, zero computed failures.
- Content checks: all 11 source hashes and dimensions match; guide and seller titles/descriptions and all tables remain unchanged; all guide instrument photos come from the requested listings; the old example is absent.

## Live-Diff Disposition

Raw audits against immutable preview 149e237b are retained without modification. Value and seller audits report zero must-fix items. The authentication audit reports one grouped must-fix finding: four removed headings belonging to the old photograph set. Those headings described a three-a-side Double and serial 84467. Keeping them would misidentify the replacement photographs.

The new acoustic/electric archive headings and New York label section replace those four headings as a necessary part of Joe's explicit request to use these photos instead. This intentional exception to literal heading parity is recorded in CLAUDE.md. The authentication page keeps its archive and serial sections and adds six rendered images overall. Existing shared Reverb-icon dimension advisories are unrelated to this change. See visual-review.md for the independent disposition and rendered review.

Draft PR305 preview update only. Production publication remains pending Joe's specific Batch 2 approval.
