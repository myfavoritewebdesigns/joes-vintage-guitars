# Martin Dating Hub And Photo Guides

Joe requested a hub-and-spoke rebuild of the Martin serial lookup, using Drive and Reverb photos to explain logo, tuner, neck-block and construction changes. The existing hub URL remains canonical. Four linked guide routes carry the detailed comparisons.

## Intentional Changes From Live

- Replaces the long single-page feature inventory with four photo guides. The deterministic live-diff audit therefore flags changed headings, fewer hub images/sections and changed title/description. Those differences implement the requested information architecture; they are not accidental missing content.
- Retains the serial-location video, year charts, valuation/appraisal links and legacy section anchors, including the value anchor. Existing feature anchors lead to links into the expanded guides.
- October 3 revision requested by Joe: use the existing annotated neck-block photo with model and serial arrows in the serial-location section, and display all 128 guitar years in one continuous table instead of decade accordions. The comparison against the prior preview reports zero must-fix items.
- Replaces speculative 2025/2026 production projections with the official 2025 endpoint. The resolver handles Sigma-Martin and mandolin exceptions, separate LX/Backpacker/ukulele sequences, and missing/grouped annual boundaries without pretending each interval is one year.
- Uses Article, WebApplication, FAQPage and VideoObject schema matching the visible content. Removes obsolete HowTo steps and video Clips from the previous article. ImageObject counts follow the actual licensed photos on each new page; third-party Reverb interiors do not claim Joe's image license.
- Keeps the existing site header, footer and contact form. Header clearance, pointer handling and the small telephone label contrast are scoped to the new Martin page class.
- Private Drive source links are retained in the source manifest rather than exposed as public navigation. Public listing links remain visible with photo credits. Reverb derivatives are 400px and are not presented as high-resolution originals.

## Verification

- Production build: 218 pages, successful.
- Astro check: 0 errors, 0 warnings; 80 existing hints.
- Resolver: 31 boundary, interval, exception and malformed-input assertions pass.
- Browser: five routes at 1920, 1280, 768 and 390 pixels; one H1, no page-wide overflow, loaded content images, working anchors, lookup and photo viewer/Escape.
- axe: all five routes at 1920 and 390 pixels, zero WCAG A/AA and best-practice violations after the scoped contrast fix.
- Image license verifier: 35 licensed image nodes, zero contentUrl mismatches; third-party interior photos excluded from Joe licensing.
- Copy gate scoped to the five built Martin routes: zero hard failures and zero warnings.
- Full local copy audit: zero hard failures across 218 routes. The sparse checkout initially omitted the repository's tracked copy allowlist; restoring that existing file resolved the local/CI discrepancy. No audit rules or exceptions were changed. Existing nonblocking sitewide warnings remain.
- Independent qualitative review caught and corrected header interference, two tuner photo descriptions, a missing legacy anchor and weak tuner/inlay comparisons. A subsequent check confirms visual clearance at all four widths; final browser click tests verify the library and header links are reachable at each width.

## Photo And Historical Limits

The 1937 logo photograph is labeled as installed on that guitar, not authenticated as its original decal or as the first 1932 unoutlined form. The replacement Grovers on the 1944 000-18 are explicitly identified as later hardware. Interior captions describe only visible brace/plate features and credit the Reverb seller; neither seller year attributions nor photographs authenticate every component. Feature chronologies are model-qualified and linked to supporting references.

The five-page work has not been merged or deployed to the production domain.

## October 3 MFWD And Astro Copy Revision

Joe requested a full rewrite against the MFWD writing rules and the Astro repository rules. This pass uses the current MFWD reference at `05410fa`, including the October 2 teaser-list rule, the assigned JVG voice and the title/heading standard. All five pages were reviewed and rewritten: direct introductions, specific photo captions, contractions, clearer headings and less repeated qualification. No first-person history or unsupported facts were added.

- Retains the annotated neck-block photograph, continuous 128-row regular guitar chart, serial data, lookup logic, photo sources and existing section IDs.
- Renamed headings are intentional copy improvements authorized by this request. The live-diff comparison with the prior PR preview flags the renamed 2025/2026 heading, the replacement-Grover heading and the shared related-guide and reference headings. Image/section counts and schema types remain unchanged, with zero broken assets.
- Latest MFWD longform scan: all five rendered prose exports pass, with zero banned wording and five reviewed warnings. Three warnings identify genuine comparison tables; two split the historical maker name C. F. Martin into false sentence fragments. Numeric serial table bodies were excluded from the prose scan. No scanner rules or allowlists were changed.
- Final production build: 218 pages. Full copy audit: zero hard failures; existing sitewide nonblocking warnings remain. Astro check: zero errors and zero warnings, with 80 existing hints.
- All 31 resolver cases and all 20 responsive route/width checks pass. Image license verification reports 35 nodes and zero mismatches.
- Independent prose and visual review found no material factual, caption or layout regressions. Its two minor findings were corrected: Title Case for generated year-range labels and removal of a repeated fret-counting instruction. A follow-up browser check verifies all three result-label forms and the revised fret paragraph.

The same PR remains open for review. This revision does not merge or publish the production site.
