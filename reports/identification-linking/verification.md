# Identification Guide Linking

User request: make the five newly published identification and value articles reachable throughout the existing site without changing their URLs.

## Changes

The shared Guitar Guides menu contains the five overview articles followed by all seven existing serial guides. The desktop dropdown and mobile drawer have bounded, scrollable menus. A footer link reaches the identification pillar. The first blog archive page features the five guides, and the HTML sitemap lists them together.

Contextual links connect the homepage, appraisal and estate advice, brand serial hubs, component and model dating guides, value guides, and relevant existing blog posts to the new overview articles. Existing brand links and calculators remain available. The four standalone guides retain their root URLs; the value article retains its established post URL.

## Verification

* Production build: 252 routes, successful.
* Astro check: zero errors, zero warnings; 86 existing diagnostic hints.
* Rendered copy gate: zero hard failures; 770 existing review warnings, unchanged.
* Repository static comparison: all 118 affected content and article pages passed with zero must fix items.
* Rendered link comparison across all 252 pages: 135 new contextual links across 113 pages, including the automatic 404 directory. All new destinations and fragment identifiers exist.
* All 252 pages render the five guide links in both desktop and mobile menus, plus the footer pillar link.
* No removed content links, route changes, metadata changes, structured data changes or image inventory changes.
* Accessibility comparison on the blog at 1920 and 390 pixels: no new violations. Both baseline and candidate retain the same existing desktop Call Me label contrast finding; mobile has no findings. Used installed Chrome with the unchanged repository audit implementation because bundled Playwright Chromium is absent.

Counts below exclude shared header and footer links and count unique source pages, including the HTML sitemap and automatic 404 directory.

| Destination | Before | After |
| --- | ---: | ---: |
| Identification Pillar | 4 | 15 |
| Found An Old Guitar | 2 | 8 |
| Guitar Brand | 2 | 9 |
| Guitar Age | 4 | 106 |
| Guitar Value | 16 | 25 |

The saved baseline is the production source tree at 06da37a. The link checks do not make claims about traffic, ranking, or indexing changes.
