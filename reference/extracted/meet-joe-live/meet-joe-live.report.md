# HTML-first extraction — meet-joe-live

| Field | Value |
|---|---|
| Live URL | https://www.joesvintageguitarsaz.com/sell-my-fender-guitar/ |
| Selector | `#meet-vintage-guitar-buyer-joe-dampt` |
| Output slug | `meet-joe-live` |
| Wrapper class | `.wp-extracted-meet-joe-live` |
| Elements in subtree | 26 |
| Stylesheets touched | 16 |
| CSS rules kept | 157 |
| CSS rules dropped | 339 |
| Asset URLs captured | 0 |

## Files

- `meet-joe-live.html` — outerHTML of the section, with absolute asset URLs
- `meet-joe-live.css` — pre-scoped CSS (only rules touching the section)
- `meet-joe-live.assets.json` — every image / background-image URL the section references
- `meet-joe-live.snippet.astro` — copy-pasteable Astro integration

## Caveats

- Hot-linked asset URLs MUST be swapped to local before the end of the session.
  Use `meet-joe-live.assets.json` as the download list.
- The extractor drops `@import` statements. If the section visibly degrades,
  check the live page's HEAD for additional stylesheets referenced via @import
  and either inline them or re-extract with their selectors merged.
- Interactive behavior (JS) is NOT captured. If the section needs hover/click
  behavior, copy the original `<script>` tags into public/scripts/ and load
  them with `<script src="/scripts/meet-joe-live.js" is:inline></script>`.
