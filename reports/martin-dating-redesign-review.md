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

## October 5 Audit Reconciliation

The supplied audit describes the older production cluster. PR 218 already contains the revised hub and four feature spokes, and its branch is current with `origin/main`. The October 5 work addresses the remaining confirmed issues on that branch.

| Audit Item | Current Disposition |
| --- | --- |
| Low serials incorrectly return 1898 | Already rejected. Retain 8001 as the first tabulated serial, supported by [Corwin's detailed production table](https://vintagemartin.com/numbers.html). His [stamp history](https://www.vintagemartin.com/stamps.html) describes the historical 8000 starting estimate. Add an explicit 8000 verification message and visible explanation rather than assigning it a certain date. |
| Missing 2025 numbers, Backpacker sequence and mandolin gap handling | Already implemented. Rechecked the published endpoints against [Martin's official tables](https://www.martinguitar.com/support-serial-number-lookup.html). The obsolete projection remains removed; current data is presented as actual, with no projected 2026 endpoint. |
| Contradictory prewar answer and Style 41 dated 1968 | Neither erroneous statement survives in the rewritten hub. The prewar answer distinguishes collector usage from an exact calendar cutoff. |
| Herringbone 1946 versus 1947 | Clarify both the construction spoke and value guide: 1946 was the last full year, with original trim continuing on some early 1947 guitars. Cite the manufacturer history, [The Martin Story, pages 11 and 12](https://www.martin-gitarren.de/files/downloads/martinstory.pdf). |
| Hub authorship and dates | Byline and modification date already present. Restore the original publication timestamp, `2026-03-12T20:17:34+00:00`, from the immutable WordPress snapshot. Update the visible modification date and add the October 5 table verification date. |
| Four long blog titles/descriptions | Add opt-in `seoTitle` without shortening their existing H1s or changing other posts. Final rendered titles are 57 to 60 characters, including the brand suffix; descriptions are 129 to 134 characters. |
| Three missing FAQPage nodes | Add visible FAQs and matching structured data from one frontmatter source. Preserve six 000-45 question topics and its existing `h2#faq`, while tightening unsupported universal wording. The other two posts each gain three practical answers. |
| Missing appraisal paths | The fake-Martin guide and all four cited blog posts already contain appraisal links. Preserve them. New FAQ links lead directly to the Martin appraisal page. |
| Missing authentication links | Add fake-Martin guide links to the dreadnought value guide and the 1976 000-45 post. |
| Image alt text and table captions | The hub already had photo-specific OG text and seven serial table captions. Make the alt text identify the annotated D-28/216614 photo, and add the missing caption to the eighth, feature-comparison table. |
| Separate mandolin and ukulele spokes | Remains a separate editorial proposal. The requested logo, tuner, neck-block and construction spokes and the complete hub charts remain intact. No URL migration is introduced. |

The audit's claim about FAQ rich-result eligibility is outdated. [Google's current changelog](https://developers.google.com/search/updates#may-2026) says the feature stopped appearing on May 7, 2026. The new FAQs are useful visible content with consistent semantic markup, not a promised rich-result or ranking gain. Title character counts are editorial targets, not fixed Google display limits.

This is a bounded implementation of the supplied findings, not a fresh technical SEO audit or traffic diagnosis. The canonical broader audit methodology was unavailable locally and its attempted repository read returned 404. No substitute methodology, Search Console results or migration-causality claims were invented.

### October 5 Verification

- Final production build: 218 pages. Astro check: zero errors and zero warnings, with 88 hints. Full rendered copy gate: zero hard failures; existing sitewide warnings remain.
- The new blog metadata and FAQs pass the current MFWD longform scanner with zero banned phrases and zero warnings. The hub and four feature spokes pass with zero bans and the same five reviewed table/initials warnings. Current MFWD reference is `2df93fb`; the changes since the prior pass concern form copy only.
- Targeted checks pass: 15 serial boundary/year-end cases and 32 responsive checks across eight routes at 1920, 1280, 768 and 390 pixels. They also verify visible FAQ/schema equality, unique FAQ anchors, four rendered title/description limits, original hub publication time, annotated photo, continuous chart and unchanged unrelated blog sources.
- All seven final live-diff comparisons show zero must-fix items and zero broken assets. Added FAQ headings/sections/schema, shorter metadata and the extra related-guide link are intentional responses to this audit; existing Reverb icon dimension warnings remain.
- Independent review finds no material implementation, changed-copy, factual or new visual regressions. It verifies seven routes at desktop/mobile widths, all prior IDs and H1s, lookup interaction, photo viewer/Escape, 128 consecutive chart years, and working authentication/appraisal destinations.

The existing PR remains the review destination. Production has not been merged or deployed by this work.
