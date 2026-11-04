# Gibson Acoustic Model Cards

This initial four-card scope was expanded later on October 29 at Joe's request. The current nine-card hub and ten new pages are documented in [gibson-acoustic-guides.md](gibson-acoustic-guides.md); that report supersedes the original model coverage below.

Requested by Joe on October 29, 2026: make the acoustic value hub's model guides easy to find through clickable cards.

## Design Decision

Add four fully linked cards immediately after the introduction and before the summary price table. They point to the existing J-45, J-200/SJ-200, Hummingbird and LG-series value guides. The LG card explicitly names LG-0, LG-1, LG-2 and LG-3. Keep J-50 and Southern Jumbo identification help separate because these models do not have dedicated value guides in this hub. All existing prices, article sections, URLs, images and metadata remain unchanged.

Use the page's existing brand colors and fonts, a two-column desktop grid, one column at 600px and below, explicit underlined value links, hover feedback and a 3px keyboard-focus outline. The new section is automatically included in both tables of contents.

## Verification

- `pnpm run verify`: 361 pages built; Astro check has 0 errors and 0 warnings (90 existing hints); copy gate has 0 hard failures (754 report-only warnings).
- `git diff --check`: passed.
- Existing live-diff audit: 0 must-fix findings and 0 broken assets. The five new headings are intentional. Two existing shared Reverb icons have no width/height attributes; this change adds no images.
- Browser inspection at 1440px: four equal-width cards in two columns.
- Browser inspection at 390px and 320px: cards stack; no card text overflow; no page overflow at 390px.
- Clicked all four cards and verified their destination URL and page heading.
- Tab navigation reaches the next card and shows the 3px focus-visible outline.
- All four production model-guide destinations returned HTTP 200.

Production publication requires Joe's approval of the preview, per the repository's saved publishing rule. No production merge performed.
