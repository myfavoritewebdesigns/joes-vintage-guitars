# HTML-first extraction — meet-joe-local

| Field | Value |
|---|---|
| Live URL | http://localhost:4399/sell-my-fender-guitar/ |
| Selector | `#meet-joe` |
| Output slug | `meet-joe-local` |
| Wrapper class | `.wp-extracted-meet-joe-local` |
| Elements in subtree | 19 |
| Stylesheets touched | 15 |
| CSS rules kept | 44 |
| CSS rules dropped | 145 |
| Asset URLs captured | 1 |

## Files

- `meet-joe-local.html` — outerHTML of the section, with absolute asset URLs
- `meet-joe-local.css` — pre-scoped CSS (only rules touching the section)
- `meet-joe-local.assets.json` — every image / background-image URL the section references
- `meet-joe-local.snippet.astro` — copy-pasteable Astro integration

## Caveats

- Hot-linked asset URLs MUST be swapped to local before the end of the session.
  Use `meet-joe-local.assets.json` as the download list.
- The extractor drops `@import` statements. If the section visibly degrades,
  check the live page's HEAD for additional stylesheets referenced via @import
  and either inline them or re-extract with their selectors merged.
- Interactive behavior (JS) is NOT captured. If the section needs hover/click
  behavior, copy the original `<script>` tags into public/scripts/ and load
  them with `<script src="/scripts/meet-joe-local.js" is:inline></script>`.
