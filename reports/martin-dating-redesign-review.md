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

## October 5 Cluster Expansion And Inbound Links

The second supplied audit requests stronger connections to the photo guides, a prewar focus, model identification, schema images and preview indexing verification. The library now consists of the serial hub and five spokes.

- Renamed the unpublished logo route to `/martin-headstock-logo-dating-guide/` and construction route to `/martin-guitar-dating-guide/`. Updated internal links, canonicals, breadcrumbs and sitemap entries. Exact 301 rules preserve the two earlier preview URLs. The requested construction H1 and hub H2 now target dating a Martin guitar; all existing anchor IDs remain.
- Added contextual inbound links from all nine named Martin posts, the selling page, dreadnought value guide, counterfeit guide and HTML sitemap. Both source-photo posts link to their comparisons. Each spoke also links back to the counterfeit guide. The four non-blog referring pages link to all five spokes.
- Added `/martin-guitar-model-numbers/` with an interactive basic-code decoder, body sizes 0/00/000/OM/D/5/7, styles 15/16/17/18/21/28/35/40/41/42/45, and dated stamp/trim photos. Results explain a code without asserting that every combination was manufactured. Numeric serials, CUSTOM, unsupported suffixes and nonstandard names receive an explicit limitation message instead of a guessed model.
- Led the construction guide with prewar identification, then distinguished the 1938 dreadnought brace shift from the 1939 nut-width change. Added reinforcement history, finish/sunburst, endpin and case/paperwork guidance. Hidden ebony bars, T-bars and square tubes are expressly not identified from exterior photos. The existing interior photographs do not show the X crossing and are labeled accordingly.
- Expanded the guide-specific FAQs to five logo, five tuner, six neck-block, seven construction and five model questions. Visible answers and FAQ markup share the same data. The original hub retains seven questions, the annotated D-28/216614 photograph and the continuous 128-row chart.
- Added an image to Article schema on all six cluster pages, with asset URL, dimensions and caption. All figure images carry their visible captions into ImageObject metadata. Third-party Reverb interiors receive descriptive metadata without Joe's license grant. No ranking or AI Overview citation outcome is promised.
- Matched both hub source-check dates to October 5. Corrected two contradictory statements encountered in referring articles: the D-18 bridge-plate change is maple to rosewood in 1968, and the value article no longer assigns every prewar Martin the same forward bracing or treats a missing model stamp as proof of a fake.

### Preview Indexing Evidence

HTTP checks on October 5 confirmed `X-Robots-Tag: noindex` on the actual branch preview and no such header on the production hub. [Cloudflare documents this automatic header on preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/). The permissive robots.txt and index meta do not remove the HTTP noindex restriction. No production robots, global Layout default or middleware change was necessary. Production canonicals remain intentional on preview pages.

### Historical Sources And Limits

- [The Martin Story, printed page 12](https://www.martin-gitarren.de/files/downloads/martinstory.pdf): late-1934 T-bar, wartime ebony, postwar return to steel, 1967 square tube and 1985 adjustable rod. [Martin's FAQ](https://www.martinguitar.com/faqs.html) supplies soundhole access and the 2006 two-way rod. [Corwin's neck study](https://vintagemartin.com/necks.html) independently describes the 1939 nut-width change.
- [Vintage Guitars Info](https://www.guitarhq.com/martin.html) includes dated 1938 rear-braced and 1939 wide-neck instrument examples. The copy restricts the brace transition to dreadnoughts rather than assigning every body size one changeover date.
- [Martin's original D-45 history](https://www.martinguitar.com/blog-categories/from-the-factory/blog-072325-the-holy-grail-of-martin-guitars-a-closer-look-at-the-pre-war-d-45.html), [Size 5 history](https://www.martinguitar.com/blog-categories/from-the-factory/blog-082726-what-is-a-terz-guitar-how-to-tune-the-martin-5-28-terz.html), current model specification pages, Corwin's photographed style studies and Joe's existing guitar records support the model comparisons. Current series descriptions are not applied universally to older instruments.
- Case and sunburst photos are reused from Joe's existing local archive. The ornate sunburst guitar is described visually without repeating an unverified model/year embedded in its old filename. No invented endpin or X-brace photo, synthetic historical photograph, or unseen reinforcement claim was added.
- Traffic figures are the user's supplied GSC summary. They justify the requested editorial priorities but do not establish the cause of low CTR, prove AI Overview effects or forecast traffic. This work remains an implementation of supplied findings, not a substitute full SEO audit.

### Expansion Verification

- Final production build: 219 pages. Astro check: zero errors and zero warnings, 88 existing hints. Full rendered copy gate: zero hard failures; 778 existing sitewide warnings.
- Six-page MFWD longform scan: zero bans. Eight reviewed warnings concern requested comparison tables, C. F. initials and Style 45 being mistaken for an item count. No scanner rules or allowlists were changed.
- Browser checks pass on all 19 affected pages at 1920, 1280, 768 and 390 pixels: 76 route/width combinations, loaded images, one H1, no document overflow or runtime errors, working lookup and photo viewer. The new decoder is exercised with valid model input and a serial number at each width.
- Targeted checks cover 17 model-decoder inputs and 14 serial boundaries/endpoints, Article asset existence, figure/schema caption equality, third-party license exclusions, FAQ parity, all 13 inbound pages, internal targets/fragments, original hub publication time, annotated photo and continuous chart.
- Live-diff runs cover 18 comparable pages. All 13 existing referring routes plus the tuner and stamp spokes show zero must-fix findings. The remaining findings are exactly the user-requested heading and canonical changes on the hub, logo and construction pages; they are retained intentionally. The new model page has no production baseline. All runs show zero broken assets. Existing shared Reverb-icon dimension notices remain.
- Independent review found no remaining material issue after fixing one reused photo caption. It checked 18 route/viewport combinations, decoder behavior, navigation clickability, preserved IDs, image assets, schema and Drive privacy. Evidence is retained outside the repository in the task workspace.

These are intentional additions and URL changes authorized by the second audit request. They remain in PR 218 for review.
