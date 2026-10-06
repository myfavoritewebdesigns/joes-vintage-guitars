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

## October 5 Requested Replacement Grovers Removal

Removed the tuner guide's "Replacement Grovers On A 1944 000-18" section, its photograph and generated contents entry at the user's explicit request. Updated the guide card, FAQ and logo caption to remove references to that example, and redirected the 1955 D-28 story's section link to the existing open-gear comparison. The archived image file is retained.

- Production build: 219 pages. Astro check: zero errors and warnings, with 88 existing hints. Rendered copy gate: zero hard failures and 778 existing warnings. The three affected guide pages pass the MFWD scan with zero bans and three reviewed table/initials warnings.
- Independent desktop and mobile review found no issues with the remaining timeline, seven photos, four contents links or updated story link.
- The tuner live-diff reports one removed heading, section, image and image-creator Person node. All four are the requested deletion. All checked local assets load. The story comparison has no must-fix findings. The hosted preview still served the earlier cluster revision during comparison, so its hub heading difference and unavailable new logo slug reflect the preceding deployment, not this removal.

This intentional content and anchor removal remains in the existing PR; production is unchanged.

## October 5 Bridge, Fingerboard And Tonewood Photo Corrections

Joe identified two incorrect photo descriptions and requested removal of all photographs of his poor-condition 1944 000-18 from the Martin cluster. The prior visual reviews missed the bridge shape and did not adequately verify that the cited dots were visible. This revision checks the original image pixels before assigning captions.

- Replaced the rectangular-bridge example with a close view of Joe's 1937 0-17 from Drive. The 1930 0-21 photograph remains as the belly-bridge comparison, with corrected title, alt text and caption. The bridge discussion explains why shape is not a universal year cutoff; [Corwin's photographed bridge history](https://vintagemartin.com/bridges.html) supports the model-dependent transition around 1930.
- Replaced the unclear 1944 fingerboard view with the 1937 0-17 close-up, where paired and single dots are plainly visible. Its full-front image also provides a 14-fret body-joint comparison. The model decoder's photo section now identifies Styles 17, 21 and 45 to match the actual photographs.
- Removed the 1944 guitar from the logo guide, logo card, construction guide and model decoder. The existing 1953 D-18 photo supplies a clear complete pickguard outline. Historical references to the late-1944 bracing transition remain because they do not describe that guitar.
- Identified the 1930 0-21 back as Brazilian rosewood, as Joe specified, and added his 1937 0-17 mahogany-back photograph beside the Brazilian and Indian rosewood examples. Grain-only identification cautions remain general guidance, without obscuring the named woods on these guitars.
- Recorded the four Drive originals and corrected identifications in the photo-source manifest. Private Drive links remain absent from rendered pages. Archived 1944 asset files are retained but are no longer used by the cluster.

Validation: 219-page production build, Astro check with zero errors or warnings (88 existing hints), rendered copy gate with zero hard failures (778 existing warnings), and MFWD scan of the three changed guides with zero bans and five reviewed table/initials/count warnings. A search across the complete built HTML finds no 1944 000-18 references or old rectangular-0-21 labels. Live-diff finds no must-fix issues on the prewar guide or hub and no broken assets on any of the four affected pages. The model heading change and the logo photo/schema removal are intentional consequences of Joe's corrections.

Independent review inspected the original pixels and the rendered comparisons at 1920 and 390 pixels, including enlarged views. It confirms the rectangular versus belly outlines, visible paired/single dots, complete guard and back photographs. Its logo finding was corrected: the dark 400-pixel 1967 listing photo is explicitly limited to the script as photographed, with no claim that it resolves the letter borders. The final copy check covers that clarification.

## October 6 Separate Construction And Prewar Guides

Joe requested a different card photograph and separate construction-features and prewar guides. The hub now has six spokes, with adjacent Construction Features and Prewar Martins cards. The construction card uses Joe's inspected 1937 0-17 rectangular-bridge close-up; the prewar card uses the full front of that guitar.

The existing `/martin-guitar-dating-guide/` remains the construction-features route, covering body joints, bridges and saddles, guards, trim, woods, neck reinforcement, finish and ownership evidence. Detailed prewar and bracing material moves to `/prewar-martin-guitar-guide/`, with expanded sections on X-brace position, scalloped and tapered profiles, bridge plates and repairs, nut width, frets, hidden reinforcement, model woods and inspection photographs. Each guide has a single continuous timeline. Original serial charts and the annotated neck-block photograph remain unchanged.

The new prewar guide distinguishes visible brace shape from the X crossing, which neither existing Reverb interior photo shows. Its 1947 plate photograph is explicitly a postwar comparison. The new page retains the third-party photo credits without granting Joe's license, and it uses only existing inspected photographs. No excluded 1944 000-18 photographs return.

Series navigation, related-guide links, hub comparison rows and HTML/XML sitemaps include both pages. Contextual links from the D-18 article, 1946 D-28 story, valuation article, dreadnought value guide and selling page now lead to the appropriate guide. Existing construction fragments for prewar identification, brace position and bridge plates still resolve to the brief interior-inspection section with a link to the full prewar guide. The new page's publication date is October 6; original publication dates remain on existing guides.

Historical sources rechecked for this split: [Martin's construction history, printed page 12](https://www.martin-gitarren.de/files/downloads/martinstory.pdf), [dated 1938 and 1939 instrument observations](https://www.guitarhq.com/martin.html), [Corwin's neck and fret study](https://vintagemartin.com/necks.html), and [his Style 17 and 18 photographs](https://www.vintagemartin.com/styles15_17_18.html). Model exceptions and repair qualifications remain explicit.

Live-diff comparisons cover the hub, construction page and six changed referring pages. The referring pages have no must-fix findings. Hub/card headings and the construction headings, images, section counts and schema change intentionally with the requested split. All asset checks pass. The new prewar page has no prior hosted baseline. Detailed bracing images and questions are verified on the new page, and retained old anchors are checked separately.

Final verification: 220-page production build; Astro check with zero errors and warnings, plus 88 existing hints; full rendered copy gate with zero hard failures and 778 existing warnings. The hub, construction and new prewar page pass MFWD scanning with zero bans and three reviewed warnings for requested comparison tables. Targeted checks pass for all seven guide pages, six cards, 323 internal Martin links, existing anchors, photo/schema captions, FAQ parity, the excluded guitar and continuous charts. Independent review passes at 1920 and 390 pixels, including actual photo/caption agreement, enlarged views and 57 checked navigation/content targets. No unresolved review finding remains.

## October 6 Consistent Photo Proportions

Joe requested similar photo sizes across the cards and guides without the large side panels around some images. The six hub cards now use landscape photographs with a 3:2 ratio. The logo card uses the existing 1937 0-17 headstock close-up; new Drive originals supply the matching rear-headstock tuner view and a landscape body view for the prewar card. Both new originals were visually inspected before use, and their provenance is recorded in the photo-source manifest. Construction and prewar remain separate cards.

The shared photo gallery now pairs comparison photographs in columns weighted by their original aspect ratios, giving adjacent images matching heights without cutting off details. The figure and caption fit the photograph's width, with a maximum photo height of 470 pixels and source-resolution limits. Portrait and square originals retain their full frames, single figures use the same sizing rules, and comparison rows stack below 768 pixels. This replaces the fixed-height, full-width brown photo frames. The annotated serial photo, full-resolution viewer, existing photo order and captions, continuous charts and excluded-photo restrictions remain intact. No global style or site-shell changes were made.

Validation: 220-page production build; Astro check with zero errors and warnings, plus 88 existing hints; rendered copy gate with zero hard failures and 778 existing warnings. All seven hosted-preview/local live-diffs have zero must-fix findings and no broken assets. Reported gallery-run differences reflect the intentional paired rows; the two shared Reverb-icon dimension notices predate this change. Targeted checks pass for all seven routes, six cards, Article/photo assets and captions, FAQ parity, 323 internal Martin links, preserved anchors and continuous charts. The unchanged repository accessibility audit, run with installed Chrome, reports no WCAG 2.2 A/AA violations at desktop and phone sizes on any of the seven pages.

Independent visual review passes all seven routes at 1920 and 390 pixels and four representative routes at 768 pixels. The six cards have matching dimensions; paired comparison photo heights differ by less than one pixel. It confirms no side panels, distortion, overflow, broken images or excluded 1944 photographs; identifying details and the annotated serial image remain intact. All 33 tested photo-enlargement interactions pass. Evidence is retained outside the repository in work/martin-photo-layout-review/.
