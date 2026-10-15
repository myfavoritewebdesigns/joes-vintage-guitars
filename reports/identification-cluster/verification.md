# Identification Article Publication

Joe approved publication of the five article previews on October 15, 2026.

| Route | Body Words | FAQ Answers | Photo Placements | Article Links |
| --- | ---: | ---: | ---: | ---: |
| /what-guitar-do-i-have/ | 2300 | 8 | 12 | 18 |
| /found-an-old-guitar/ | 2365 | 7 | 5 | 16 |
| /what-brand-is-my-guitar/ | 1879 | 6 | 7 | 23 |
| /how-old-is-my-guitar/ | 2038 | 7 | 6 | 43 |
| /post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/ | 2171 | 8 | 5 | 18 |

Body counts include article headings and exclude photo captions, image labels and interface text. The approved prose and captions match the saved previews. The optional house brand editorial prompt was removed from the public brand page without adding unverified examples.

## Production Checks

The full production build passes with 252 routes. Astro check reports zero errors and zero warnings, with 85 existing hints. The postbuild copy gate passes with zero hard failures across the site. Its 770 warning tier findings occur on other routes; these five pages have none. No allowlist entries were added.

All 36 FAQ answers exactly match the visible questions and answers. All 35 licensed image placements have matching rendered image URLs, dimensions, alternative text and responsive sources. Every one of the 118 article links resolves in the production build. The five pages appear in both the XML sitemap and IndexNow manifest, with production canonical URLs and indexable robots metadata.

The value post retains its exact URL, original publication date, seven numbered factors and all ten historical section fragments. Its title uses the approved tightened existing wording. The query focused seoTitle remains a proposal in editorial metadata rather than replacing the published title.

## Layout And Behavior

The production Layout supplies the real Header, Footer, FloatingCTAs and contact form handling. Article styles are scoped. The header stays in normal document flow on these five routes so the logo cannot cover the opening text. A scoped footer adjustment allows its existing menu to fit at intermediate widths.

The independent review compared saved approved preview builds with the production source at 1920, 1280, 1024, 768 and 390 pixels. All five static parity reports have zero must fix findings. The additional shared contact section, global schema and production photo licensing are intentional. The existing Reverb icons use explicit CSS sizing and were not changed.

The review verified all 35 photo dialogs, all 44 section anchors and the brand, age and value table scroll areas. The sidebar display conflict and footer overflow discovered during review were corrected and rechecked. See production-visual-audit.md for the independent findings.

## Scope

The four new root routes and existing value post are the only article changes. Existing shared header and footer source files, contact details, redirects and unrelated articles are unchanged. Private preview routing and noindex directives are absent from production. No Product, aggregateRating or HowTo schema is added.

The approved HTML lives in src/data/identification-guides, and the shared production component derives FAQ schema directly from that visible source. Photo provenance is recorded in docs/editorial/identification-guide-photo-sources.json. The original value post remains in the blog collection for listing, category and RSS discovery and renders through its dedicated static route.
