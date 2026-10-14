# Les Paul Standard Guides: Independent Visual Review

Reviewed October 14, 2026 on the local production preview at `http://127.0.0.1:4322/`.

Scope: `/post/1958-gibson-les-paul-standard-guide/`, `/post/1959-gibson-les-paul-standard-guide/`, and `/post/1960-gibson-les-paul-standard-guide/`.

This is an independent review under `.claude/agents/live-diff-auditor.md`. These are new pages; a WordPress original and migration parity comparison do not exist. CUA browser automation provided the qualitative layer in place of the unavailable Playwright MCP. No application code was edited by this reviewer. The existing CLAUDE decision log was consulted.

## Must Fix Before Publication

- No unresolved visual defect remains from this review; the initially missing R0 photograph was supplied and passed the follow-up below.

## Should Fix Or Review

- Cross-model visual review was not run; the optional additional model-family pass described in the audit playbook remains unperformed, and this report must not be represented as cross-model consensus.

## Verified And Informational

- All three article openings were inspected at 1920 by 1080 and 390 by 844 pixels; no whole-page horizontal overflow was observed.
- Final browser verification after the 16:00:10 build found zero missing TOC targets on all three pages, with each Sources link pointing to `#resources-and-related-reading`; clicking the repaired 1960 Sources link landed its heading 110 pixels below the viewport top.
- The initial Sources-anchor typo and nested-link rendering defect were fixed during review; the final 1958 shipping-total FAQ reads as normal linked prose, with no residual Markdown fragments in any of the three article bodies.
- R8 and R9 photographs load and have explicit modern-reissue disclosures above the photograph at both widths.
- The desktop hero has an 820-pixel outer width and ends before the fixed sidebar begins; a complete ancestor and pseudo-element DOM walk confirmed no intervening decorative overflow.
- At 390 pixels, specification tables have 327-pixel scroll containers around 650-pixel content, with `overflow-x: auto`; an arrow-key probe moved the table horizontally while document horizontal scroll remained zero.
- The mobile Sections menu opens, changes the URL hash and closes after selection; the settled 1959 reissue-section heading landed 110 pixels below the viewport top.
- Author and closing-contact sections remain available; Joe's author image loaded after navigation toward the lower article, and the visible mobile author card was inspected.
- Shared contact fields expose labels, and the desktop contact form and footer were visually inspected; no test message was submitted.
- Desktop header and footer navigation remain readable in their existing rust and cream treatments.
- Each article has one H1; the implementer reported zero faults in the final cross-page link/FAQ verifier and six of six completeness checks passed for all three articles.
- Lazy images were checked after real navigation/scrolling rather than modifying page loading attributes.
- Screenshots were inspected through CUA tool output; standalone screenshot files and a cross-model pass were not produced.
- The temporary viewport override was reset and the review-only browser tab closed after verification.

## Limits

This review checks rendering and navigation, not historical fact approval, copyright provenance, valuation advice, form-delivery behavior, or publication readiness. Expert sign-off remains a separate editorial requirement. Every H2 ID was inventoried; representative interactive jumps were verified after scrolling settled rather than claiming a timed screenshot of every anchor.

## R0 Follow-Up After The 16:12:51 Build

- The 1960 guide now shows the supplied 2014 R0 photograph, and the image loaded successfully at 1920 by 1080 and 390 by 844 pixels.
- Its visible caption identifies the instrument as a modern reissue rather than a vintage 1960 example and appears above the photograph at both widths.
- Desktop DOM measurements show an 820-pixel hero ending at x1362.5 and the fixed contents sidebar beginning at x1398, leaving a positive gap; the ancestor and pseudo-element walk found no decorative overflow.
- Neither tested viewport showed whole-page horizontal overflow.
- The new `#what-joes-r0-photo-shows` target exists in both contents menus; the mobile Sections link navigated to the new heading, closed the menu and settled at y110.375 pixels.
- Every 1960 contents link resolved to an existing heading after the update.
- CUA used a temporary Chrome tab for this follow-up because the prior in-app browser connection was unavailable; screenshot review and DOM checks were limited to the changed 1960 page.
- This follow-up resolves the missing-photo visual finding and does not constitute expert approval of the historical claims.

## Feature-Photo Follow-Up, October 14, 2026, Build Completed 16:40:44

Reviewed all three rebuilt guides through CUA in a temporary Chrome tab at 1920 by 1080 and 390 by 844 pixels. This follow-up inspected the new detail figures and comparison pairs, their rendered captions, nearby article sections and responsive behavior. The user-directed removal of article Reverb links and buyer reviews was respected; their absence is not a defect.

### Findings

- No new blocking visual defect was found in the feature-photo additions.
- All seven 1958 detail images, seven 1959 detail images and eight 1960 detail images loaded successfully after actual browser scrolling at both desktop and mobile widths.
- All three article bodies contain zero Reverb links and no Reverb buyer-review passages; the existing shared site header remains outside this article-content check.
- At 1920 pixels, single feature figures end at x1338.5 while the fixed TOC begins at x1398, leaving 59.5 pixels of separation.
- A full ancestor and pseudo-element inspection of the feature-figure layout found no clipping wrapper or decorative overflow; each inspected image uses `object-fit: contain`, preserving its full image area, and visible source watermarks remain intact in the sampled screenshots.
- The portrait cream-bobbin photograph in the 1959 guide is centered within its wider figure instead of cropped; its entire image remains visible on mobile.
- The two 1960 comparison pairs use two 376-pixel columns on desktop and one 327-pixel column on mobile, keeping each caption with its corresponding knob or tuner photograph.
- No page-width overflow was present in any of the six page/viewport combinations; mobile document width measured 375 pixels inside the 390-pixel viewport.
- Captions render at 15.2 pixels with comfortable line spacing, and all mobile captions fit their containers without horizontal text overflow.
- The source-model disclosures are explicit: the captions identify the Special, earlier Goldtops, ES-335s, ES-330, or an unassigned vintage component rather than presenting these photographs as original 1958, 1959 or 1960 Standards.
- Placement matches the surrounding explanation: fret ends appear in Neck And Frets, pickup internals and capacitors appear beside electronics discussion, and knobs, tuners, bridges and pickup rings appear beside the relevant hardware text.
- The existing fixed mobile contact controls can temporarily cover text in the lower-right viewport as the reader scrolls, including captions; this is shared site behavior rather than a new figure-layout regression, and the covered text can be scrolled into clear view.
- One screenshot taken immediately after an image was scrolled into view captured its lazy-load placeholder; the settled screenshot and subsequent load checks confirmed that image rendered normally.

The new `LicensedMarkdownPhotos.astro` implementation was read for context: it selects marked rendered figures and derives license metadata from their actual image `src` values. The implementer separately reported all 25 article-photo license URLs match their rendered sources, with clean build/type/copy checks and passing internal-link/FAQ verification. This visual review does not replace the historical fact review or provenance checks. Screenshots were inspected through CUA output; no standalone screenshot files or cross-model review were produced. The temporary viewport was reset and the review tab closed. No implementation files were changed by this reviewer.

## Editorial Revision Follow-Up, October 14, 2026, Build Completed 16:56:06

Reviewed the same three draft-PR routes at 1920 by 1080 and 390 by 844 pixels in CUA Chrome. No blocking visual regression was found.

- Each article's first H2 is its year-specific value section, followed by the inline table of contents and later specifications; the dollar ranges and their July 2026 condition/scope text render together.
- Each article has one H1, a two-column specification table and one FAQPage containing six entries; the implementer separately reported clean FAQ/text and internal-link verification.
- The longer titles and contents labels wrap within their containers on desktop and mobile, with no whole-page horizontal overflow or clipped caption text.
- The desktop hero ends at x1362.5 and the TOC begins at x1398; even the longer 1960 TOC ends at y706.5 within the 1080-pixel viewport.
- All three reissue heroes and all 22 retained detail photographs loaded after real browser scrolling at both tested widths; the revised source-guitar captions continue to identify the relevant source models or explicitly unidentified components.
- All desktop and inline TOC targets exist; mobile navigation to the new 1960 value section and the specifications section closes the contents sheet and settles the target heading about 110 pixels below the viewport top.
- Article bodies contain no Reverb links, buyer-review passages or added editorial-note sections; no new original-Burst photograph was introduced by this revision.
- Nonblocking: the simplified two-column specifications retain their existing 650-pixel minimum width inside a 327-pixel mobile scroll container; horizontal scrolling remains confined to the table, and the implementer elected to retain that behavior for this content revision.

The implementer reported a 227-page build, no copy-audit failures or warnings on these three routes, clean link/FAQ/photo verification, and no MFWD banned-language matches. This review verifies presentation rather than the historical or valuation claims. The temporary viewport was reset and the review tab closed; only this report was edited, with no commit or push by the reviewer.

## User-Supplied Expert-Note Delta Review, October 14, 2026, Build Completed 17:21:45

Reviewed only the three newly authorized notes and their surrounding value/contents regions at 1920 by 1080 and 390 by 844 pixels. No blocking visual issue was found.

- Each guide has exactly one `blockquote.burst-expert-note` with the exact bold paragraph label `Expert note from Joe Dampt`; no heading element was added inside the callout.
- The existing cream background, rust left border and dark italic text are readable at both widths; the longer 1960 note wraps without clipping or horizontal overflow.
- Desktop notes are 772 pixels wide and end at x1338.5, safely before the sidebar at x1398; mobile notes fit the 327-pixel article width, with paragraph scroll widths matching their 285-pixel available text width.
- Each note remains within the first value section and before the inline contents navigation; the year-specific value heading is still the first H2.
- Hero and sidebar widths remain unchanged with a positive gap; the unchanged photo collection was not re-audited in this narrow delta pass.
- The implementer separately verified unchanged six-FAQ sets, all 18 FAQ/text pairs and internal links, and reported no copy-audit hard failures.

These notes were supplied by Joe for this revision; their presence supersedes the earlier revision's intentional absence. This pass verifies their presentation and placement, not an independent valuation endorsement. The temporary viewport was reset and the review tab closed. Only this report was changed; no article edit, commit or push was made by the reviewer.

## Round Two Delta Review, October 14, 2026, Final Build Completed 18:13:08

Reviewed the changed dating, checklist, photo-removal and 1960 value/specification regions at 1920 by 1080 and 390 by 844 pixels. The 1960 checks used the final rebuilt page. No new blocking visual issue was found.

- The 1958 page now contains six detail figures. Removing the black M-69 example leaves no empty figure or conspicuous gap; the remaining knob photograph and caption flow into the serial section normally.
- The shorter 1958 and 1960 serial FAQs, their individual example bullets and year-specific originality checklists remain legible at both widths. Heading wraps and paragraph spacing are consistent with the surrounding article.
- The 1959 FAQ contains the full Historic serial explanation and three clearly separated examples. Its checklist follows without clipping or crowded headings; source guitar identification remains explicit in the adjacent caption.
- The longer 1960 value paragraph wraps within the article and remains above the existing expert note and inline contents. On mobile these regions remain 327 pixels wide, with a 32-pixel gap between the note and contents.
- The longer 1960 Tuners cell fits on desktop and wraps inside the existing 650-pixel table on mobile. Keyboard scrolling moved the mobile table horizontally while the page stayed at its 375-pixel client width. This existing, contained table scrolling remains nonblocking.
- The changed regions do not collide with the desktop contents sidebar, and no whole-page horizontal overflow was measured. All three existing expert-note callouts remain present. The implementer separately reported clean six-FAQ sets, internal links and image-license checks for 24 images: three heroes and 6/7/8 detail figures.

This was a narrow presentation review, not a repeat audit of every photograph or independent approval of historical/valuation claims. Live WordPress parity remains not applicable to these new articles. The temporary viewport was reset and the review tab closed. Only this report was edited; no article changes, commit or push were made by the reviewer.

## Prepublication Delta Review, October 14, 2026, Final Build Completed 15:02:53 Local

Reviewed all three year guides at 1920 by 1080 and 390 by 844 pixels, with an additional 1280 by 900 image-selection check. The local preview briefly became unavailable during the rebuild, then resumed on port 4322; the final 1960 page and contextual return-link additions were checked after that build completed. Screenshots and read-only browser DOM measurements show no new blocking visual defect.

- Each new `See [year] Les Paul Values` link sits below its byline and above the hero disclaimer. Clicking all three at both widths updates the correct fragment and settles the value heading approximately 110 pixels below the viewport top.
- All three reissue disclaimers remain above their loaded hero images and explicitly identify the pictured guitar and parts as modern. Their text and the new links wrap within the mobile article width without clipping.
- Real browser scrolling loaded all 6/7/8 retained detail images at both widths. The source guitar captions remain attached to their figures. Desktop single-image slots measure 770 pixels and paired 1960 slots 374 pixels; both 1960 pairs become single 327-pixel columns on mobile with 20-pixel vertical gaps and 325-pixel image content widths.
- The 1960 early/middle/later heading and contents entry are absent. Every remaining desktop/inline contents target exists; the shorter sidebar clears the article without overlap.
- No whole-page horizontal overflow was measured: document scroll/client widths matched at 1905 pixels on desktop and 375 pixels on mobile. The existing 650-pixel tables remain inside 327-pixel mobile containers with `overflow-x: auto`; this contained horizontal scrolling remains nonblocking.
- At 1280 pixels and DPR 1, the 1960 paired bonnet image uses a measured 374-pixel slot and selects the **640w** candidate `1956-gibson-les-paul-bonnet-knob.BgpX4WS1_1Em2AN.webp`. At 390 pixels and DPR 1, its measured slot is 325 pixels and it selects that same **640w** candidate, the smallest supplied. Its `sizes` value is `(max-width: 600px) calc(100vw - 50px), (max-width: 820px) calc(50vw - 36px), 374px`; the mobile estimate is 340 pixels because CSS viewport width includes the 15-pixel scrollbar, with no change to the selected candidate.
- On `/gibson-les-paul-dating-guide/`, the three year-specific return links read as one contextual paragraph after the Burst dating explanation and before the finish/knob photographs. On `/post/gibson-paf-patent-number-pickup-guide/`, the two return links sit after the bobbin-color discussion and before tooling marks. Both additions retain their surrounding typography, wrap cleanly at both widths and introduce no page overflow; their descriptive anchors point to the intended year guides/sections.

This checks the requested visual delta and image selection, not historical or valuation accuracy or a full migration comparison of the two existing guides. The new year articles have no live WordPress baseline. Earlier checks remain in this report. The temporary viewport was reset and the review tab closed; only this report was edited, with no implementation change, commit or push by the reviewer.
