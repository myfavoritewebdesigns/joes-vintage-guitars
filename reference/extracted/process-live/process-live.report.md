# HTML-first extraction — process-live

| Field | Value |
|---|---|
| Live URL | https://www.joesvintageguitarsaz.com/sell-my-gibson-guitar/ |
| Selector | `#my-guitar-buying-process` |
| Output slug | `process-live` |
| Wrapper class | `.wp-extracted-process-live` |
| Elements in subtree | 40 |
| Stylesheets touched | 15 |
| CSS rules kept | 168 |
| CSS rules dropped | 324 |
| Asset URLs captured | 3 |

## Files

- `process-live.html` — outerHTML of the section, with absolute asset URLs
- `process-live.css` — pre-scoped CSS (only rules touching the section)
- `process-live.assets.json` — every image / background-image URL the section references
- `process-live.snippet.astro` — copy-pasteable Astro integration

## Caveats

- Hot-linked asset URLs MUST be swapped to local before the end of the session.
  Use `process-live.assets.json` as the download list.
- The extractor drops `@import` statements. If the section visibly degrades,
  check the live page's HEAD for additional stylesheets referenced via @import
  and either inline them or re-extract with their selectors merged.
- Interactive behavior (JS) is NOT captured. If the section needs hover/click
  behavior, copy the original `<script>` tags into public/scripts/ and load
  them with `<script src="/scripts/process-live.js" is:inline></script>`.
