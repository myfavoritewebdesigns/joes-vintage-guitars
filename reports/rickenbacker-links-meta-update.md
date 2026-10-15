# Rickenbacker Contextual Links And Search Metadata

Joe requested more contextual inline links and improved meta titles and descriptions across the new hub and spokes.

## Implementation

- Add 40 inline links: 12 on the hub, four on pickups, four on tuners, five on controls, four on body details, five on tailpieces, four on finishes and two inbound links from the existing selling page. They connect related explanations and use section anchors where the destination is more specific than the page.
- Replace the six generic “the related feature guide” anchors with descriptive subject labels. Keep the navigation, hub cards and legacy anchors intact.
- Give each of the seven pages a distinct search title and description. Titles are 47 to 56 characters; descriptions are 145 to 159 characters. These are readability measurements, not guaranteed search-display limits.
- Add an optional `metaTitle` prop only to the Rickenbacker layout. H1s, article headlines and breadcrumb names retain their existing reading titles; browser, Open Graph and Twitter titles use the new search title. Meta, social and TechArticle descriptions remain consistent.
- Correct the selling page's unsupported “decodes every format” promise to supported common guitar/bass codes and early exceptions, with inline links to pickup and body-identification guides.
- Apply the guide pages' horizontal mobile contact-bar pattern to the selling page with page-specific selectors, so the contact buttons do not cover the new inline links. Reserve bottom space for the bar and device safe area.

## Metadata And Link Verification

`rickenbacker-links-meta-validation.json` contains the exact seven titles/descriptions and per-page counts. The built HTML has one correct title, description and canonical per cluster page; social tags match; all seven title and description values are unique. All 634 internal link occurrences across the eight changed pages resolve to built pages and valid section IDs. All seven H1s remain singular, and no generic “related feature guide” anchor remains.

Production build passed for 233 pages. The rendered copy audit has zero hard failures and 775 unchanged existing sitewide warnings. Astro check has zero errors/warnings and 93 existing hints. Required independent visual/live-diff verification is recorded in the accompanying agent report.

## Sources And Scope

Google Search Central guidance checked for this targeted implementation:

- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable

The choices emphasize distinct, concise page summaries and descriptive links where the surrounding text explains their relevance. Search engines can choose different title links or snippets. No ranking or click-through improvement is claimed without post-publication data.

The canonical MFWD onsite methodology path in CLAUDE.md is unavailable on this host. A filesystem search found only a prior attempted download containing a 404 response, not the methodology. This report therefore documents the requested implementation and deterministic checks, not a complete specialist SEO audit. GSC performance, search volume and query-level conversion data were not available in this task.

## Intentional Live-Diff Changes

The baseline is deployed commit f42ce97 on this branch. New title and description text, social metadata, descriptions in structured data, inline links and the corrected selling paragraph are requested differences. The selling page's mobile contact buttons also move to the bottom bar to fix the overlap found during independent review. No heading, image, interactive tool, form or canonical URL is removed. As with earlier iterations, these decisions are recorded here because the client instructions prohibit editing CLAUDE.md.
