# HTML-first extraction — meet-joe-gibson

| Field | Value |
|---|---|
| Live URL | https://www.joesvintageguitarsaz.com/sell-my-gibson-guitar/ |
| Selector | `#meet-connoisseur-joe-dampt` |
| Output slug | `meet-joe-gibson` |
| Wrapper class | `.wp-extracted-meet-joe-gibson` |
| Elements in subtree | 28 |
| Stylesheets touched | 15 |
| CSS rules kept | 154 |
| CSS rules dropped | 338 |
| Asset URLs captured | 0 |

## Files

- `meet-joe-gibson.html` — outerHTML of the section, with absolute asset URLs
- `meet-joe-gibson.css` — pre-scoped CSS (only rules touching the section)
- `meet-joe-gibson.assets.json` — every image / background-image URL the section references
- `meet-joe-gibson.snippet.astro` — copy-pasteable Astro integration

## Caveats

- Hot-linked asset URLs MUST be swapped to local before the end of the session.
  Use `meet-joe-gibson.assets.json` as the download list.
- The extractor drops `@import` statements. If the section visibly degrades,
  check the live page's HEAD for additional stylesheets referenced via @import
  and either inline them or re-extract with their selectors merged.
- Interactive behavior (JS) is NOT captured. If the section needs hover/click
  behavior, copy the original `<script>` tags into public/scripts/ and load
  them with `<script src="/scripts/meet-joe-gibson.js" is:inline></script>`.
