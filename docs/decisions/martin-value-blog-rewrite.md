# Martin Value Article Rewrite

Date: October 26, 2026

Joe requested a substantial improvement to the existing article at `/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/`.

## Editorial Decisions

- Keep the existing route, H1, SEO title, original publication date, category and all six legacy section IDs.
- Replace the generic body with an owner-facing sequence: identify model/year, match the era, assess condition/originality, compare transaction types, and request a photo appraisal.
- Remove unsupported dollar ranges and blanket claims about prewar models. Route model-specific price research to the existing Martin value guides.
- Correct the implication that D-18 and D-45 differences are primarily decoration; distinguish mahogany and rosewood.
- Explain finish wear versus refinishing, neck resets, cracks, bridge/bridge-plate work, bracing and documentation without universal percentage deductions.
- Replace the old title graphic and generic body photo with Joe’s existing 1956 000-21 top and neck-block photographs. The associated family story supports the first-person ownership statement. No new image binaries or outside photographs are added.
- Use six frontmatter FAQs for both visible answers and FAQPage schema. Add the existing responsive section menu.
- Show the modified date for this article in UTC so date-only frontmatter does not display one day early on a Phoenix build host.
- Apply mobile table wrapping only to this article. Preserve the shared header, footer, contact form and other blog layouts.

## Sources Checked

- Martin serial chart: https://www.martinguitar.com/support-serial-number-lookup.html . Year-end totals confirm serial 152698 is within 1956. Separate LX and Backpacker charts are present.
- Martin model names: https://www.martinguitar.com/blog-categories/tips-tutorials/blog-062321-What-Does-D-28-Really-Mean.html . Size/style interpretation and D-18 mahogany versus D-28 rosewood.
- Martin museum: https://www.martinguitar.com/museum-behind-the-glass.html . Original D-45 run of 91, ending in 1942.
- Folkway’s inspected 1969 D-28: https://folkwaymusic.com/museum/martin-guitars/1969-martin-d28-0119 . 1969 rosewood transition and differentiated repair descriptions.
- Folkway’s 1937 00-18: https://folkwaymusic.com/museum/martin-guitars/1937-martin-0018-shade-0815 . Neck reset and reproduction bridge disclosed separately from finish, bridge plate and structural condition.
- Reverb selling guide: https://reverb.com/selling/how-to-price-your-gear-correctly-on-reverb . Price Guide records sale transactions. No current market ranges or selling-speed claims imported into the article.
- JVG source: `src/components/OneOwner1956Martin00021Story.astro`, the associated photos, Martin serial guide and model-history guides.

## Validation And Intentional Live Differences

The production build rendered 297 pages. Astro check returned zero errors and warnings. The repository rendered-output copy gate returned zero hard failures; this article has zero warnings. Both content-photo license URLs match rendered image URLs. All six old anchors, six FAQ answers/schema pairs, content links and the October 26 date were checked in built HTML.

The live-diff script’s sole hard-fail category is the old heading text absent from the rewritten article. These eight text changes are intentional: six existing sections are rewritten or promoted, and two old FAQ headings are replaced by the new FAQ set. All six original section IDs remain available. Extra headings, revised meta description and additional image/FAQ schema reflect the requested rewrite. Ten local assets were checked with zero broken URLs. Two Reverb SVG dimension warnings are unchanged shared chrome.

Review branch only. No production merge or main-branch update is part of this work.
