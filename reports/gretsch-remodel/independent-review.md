# Gretsch Remodel Independent Review

Reviewed October 15, 2026 against the production Gretsch serial page and the intentional changes in `editorial-plan.md`. Site source was not edited by this reviewer.

## Must Fix

None remaining.

## Resolved Findings

- The hub's `serial1969` photo alt text incorrectly asserted a 1969 guitar. The original photograph visibly reads `1878`; the alt now describes that serial and the country stamp without deriving a date from the filename.
- The Country Club pickup photo shows one neck pickup. Its alt now correctly uses the singular and identifies the visible master volume.
- References to what the “older guide” or “earlier article” said have been removed from the pickup and Bigsby sections.
- The four mobile table regions are focusable and now have distinct accessible labels. An independent ArrowRight test moved a focused table by 40px; the FAQ also opened with Enter.

## Verified

- All 20 meaningful legacy anchors remain and their destinations were exercised on a phone viewport. The six original FAQ questions remain, with title-case capitalization and revised answers. The model-family addition retains useful 6120, Country Gentleman, Jet, Falcon/Penguin, Viking and Anniversary distinctions.
- Nine pages have distinct titles and descriptions, a single H1, matching browser/social titles, valid structured-data JSON and the intended production canonical paths. Shared navigation and contextual links connect the hub and all eight spokes.
- All 115 distinct page/fragment checks passed. Ten keyboard-submitted decoder cases covered the photographed modern serial, overlapping vintage ranges, numeric ambiguity, a handwritten dot separator, Baldwin and Japanese revival formats, invalid/future input and the later orange-label exception. Results use an atomic polite status region and link to the corresponding explanation.
- Reviewed all eight guide texts and 57 distinct photo sources, including full-size label checks. There are 71 captioned photo placements. All 57 enlarged-image targets returned HTTP 200 and valid WebP images no wider than 2400px. Photographs remain uncropped and the phone examples retain readable captions and enlargement links.
- Nine pages were checked at 1920, 1280, 768 and 390px. No horizontal overflow, out-of-column content, persistent broken images or browser page errors remained. Representative top and photo screenshots were inspected at desktop and phone widths. The final headstock-image recheck cleared transient responsive-image loading observations.
- The manufacturer sources support the corrections concerning reused serial labels, modern factory/year decoding, recurring pickup designs, bridge families and inlay overlap: [early serial history](https://blog.gretschguitars.com/2016/05/gretschtech-serial-numbers-1930s-1966/), [modern serial format](https://blog.gretschguitars.com/2013/07/gretschtech-understanding-modern-gretsch-serial-numbers/), [pickups](https://blog.gretschguitars.com/2013/01/gretschtech-picking-the-pickups/), [bridges](https://blog.gretschguitars.com/2012/07/gretschtech-gretsch-bridges/) and [inlays](https://blog.gretschguitars.com/2012/10/gretschtech-fingerboard-inlays/).

## Static Audit Disposition

`gretsch-remodel-audit-2026-10-15T19-45-51-818Z.md` reports two raw must-fix categories: 45 old heading labels no longer present verbatim and five old callout wrappers no longer matching. These are accepted remodel differences, not missing sections: the legacy IDs remain, feature explanations are distributed across the spokes, and the old callout subjects are retained or corrected in the new prose. The reused-label warning has its own styled note. The new headings, larger section/image inventory, metadata and image endpoint differences are also intentional. Existing shared SVG dimension advisories remain outside this change.

## Limits And Evidence

Playwright MCP was unavailable; installed Playwright and Chrome supplied the browser, screenshot, media, keyboard and ancestor/pseudo-element inspections. Cross-model review was not run. This is an independent implementation/content review, not the unavailable specialist MFWD SEO audit. The manufacturer's main product-dating page returned 403 to this review's web tool; its accessible official technical articles supplied the independent factual spot-checks.

Evidence is in `agent-evidence/`: `review.json`, `final-check.json`, `anchor-recheck.json`, source-photo contact sheets and viewport/figure screenshots. In the initial anchor pass, five long-distance smooth scrolls had not settled at the fixed sampling time; their separate final recheck reached the intended headings at approximately 24px from the viewport top. Very tall full-page captures were not used as proof of duplicated page content.
