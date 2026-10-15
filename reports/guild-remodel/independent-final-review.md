# Guild Remodel Independent Final Review

Reviewed October 15, 2026, on `joe/guild-dating-hub`, against the live production Guild hub and the manufacturer snapshots saved during the independent baseline review. No application source was changed by the auditor.

## Must Fix

None found in the completed implementation.

## Should Fix

No unresolved implementation findings. The small example-group accessibility note was resolved during review: `.gu-examples` now has `role="group"` with its accessible label, confirmed in current source.
- **Coverage limitation:** Cross-model visual review was not run. The repository's named Playwright MCP and cross-model tooling are unavailable; the authorized installed Playwright/Chrome fallback performed the browser checks. No external review API was contacted. This report is independent from implementation, but is not a second-model-family opinion.

## Acceptable And Verified

- The retained hub URL, all nine legacy anchors (`part1` through `part8`, `guild-faq`) and all five original FAQ questions remain. Each settled anchor landed approximately 24px below the viewport top, with its images loaded. FAQ Enter activation worked.
- The seven new spokes provide substantive coverage of model charts, serial locations, factories, acoustics, electrics, hardware and reissues. Expanded content, changed heading case, narrower date claims and new navigation are intentional under `remodel-plan.md`.
- All nine table exports agree with Guild's published cells and ordering. Eight match exactly after whitespace normalization; the early numeric table only substitutes “to” for range hyphens. The six model tables retain all **482 published model rows**, missing values, resets, odd strings and overlapping endpoints. Filtering F50 returns 14 rows; clearing restores 482.
- The decoder passed **20 browser cases**, including AI105 ambiguity and model selection, approximate shared boundaries, unresolved 1965-1969 numeric records, leap-day and year-end dates, invalid day 000/366/999 cases, incompatible factory/year combinations, trailing garbage, Corona context and modern-import guidance. Enter submission and the AD355 example work. Results have a live status region and useful follow-up links.
- The current photo map has **47 instrument images: 45 new source-ledger images and two retained originals**. All were visually inspected, including full-size serial/label details and the original X500. Its finish is natural/blonde amber, its Bigsby is visible, and the corrected caption does not claim factory installation. Modern Westerly Collection country markings and the modified Bluesbird remain distinguished from vintage factory evidence. Existing collector-demand wording is retained editorial judgment, not newly established photographic evidence.
- **24 local page/viewport combinations** covered all eight routes at 1920, 1440 and 390px, with eager media and ancestor/pseudo-element geometry inspection. No horizontal overflow, duplicate IDs, broken image loads or browser page errors were found. Desktop comparisons and stacked phone galleries preserve useful frames and captions. Two additional live baseline views were captured at 1920 and 390px.
- **770 internal-link occurrences** resolved to 34 unique local page destinations with no broken checked fragments. All **47 unique enlargement URLs** returned image responses. Contact/action URLs and fields were inspected without submitting the contact form or initiating calls/messages.
- All eight pages have unique titles/descriptions, one H1, matching social metadata, production canonical URLs and parseable JSON-LD. The final restored four-step HowTo agrees with its visible instructions and avoids the old universal-dating claim. Joe's restored portrait loads and fits at both desktop and phone widths.
- Nine WCAG-tagged Axe scans (all eight pages at 390px plus the hub at 1920px), followed by unrestricted hub/chart scans, found **zero automated violations**. The final table-region labels are distinct. Axe leaves shared-footer contrast/decorative-character checks for manual review; screenshots show readable controls, and this is not a claim of exhaustive accessibility conformance. The phone submit button is hit-testable above the contact bar; the body reserves 72px below the page.

## Static Audit Disposition

Reviewed `../guild-hub-audit-2026-10-15T21-01-52-052Z.md`. Its missing-heading warnings reflect corrected scopes, title case and the approved split into spokes. Both flagged consecutive figure pairs are deliberate comparison galleries and render side by side on desktop and stacked on phones. Its callout-count warning predates the final `gu-callout`/`gu-tip` aliases; three relevant notes are present. Its missing HowTo graph is resolved by the final visible four-step section and matching schema. Dev `/_image` URLs are image endpoints, not missing-trailing-slash page links. Shared Reverb SVG dimensions are outside the Guild content change.

## Local Evidence

All evidence is under `agent-evidence/`:

- `review.json`: rendered content, link/image results, decoder cases, table comparisons and DOM ancestor geometry.
- `followup.json`: settled anchors, FAQs, metadata, Axe results and mobile submit/contact geometry.
- `final-additions.json`: final HowTo/schema, author portrait and unrestricted hub/chart Axe checks.
- `guild-live-top-1920.png`, `guild-live-top-390.png` and matching `guild-serial-number-lookup-top-*` files: baseline/remodel comparison.
- Per-route `*-photo-1920.png`, `*-photo-1440.png`, `*-photo-390.png`: gallery/paragraph evidence.
- `howto-1920.png`, `howto-390.png`, `author-1920.png`, `author-390.png`, `footer-submit-390.png`: final focused checks.
- `photos-*.png`: inspection sheets; these also include two candidates removed from the final map during implementation and do not imply those extra images remain published.

Primary factual references: [Guild serial records](https://guildguitars.com/guild-support/history-of-my-guild/), [Guild FAQ](https://guildguitars.com/guild-support/faq/), [Guild's Westerly announcement](https://guildguitars.com/introducing-the-westerly-collection/) and the [Guild-hosted factory eyewitness report](https://guildguitars.com/wp-content/uploads/2016/05/AG282_guild.pdf). This review checks the supported interpretation of the manufacturer's records; it does not independently authenticate every photographed instrument or publish the site.

