# Martin Model History Publication Decisions

Date: October 23, 2026.

Joe approved publication of all fourteen guides and then requested a substantive change of direction: document what changed across the years, remove external article links, and replace the specimen-led inspection approach. The existing fourteen /post/ URLs remain unchanged. The earlier link-cleanup presentation is superseded; research URLs remain in these editorial records.

## Content And Source Scope

Each guide now starts with a chronological Year Or Period / What Changed table and continues with era sections. No factory change is inferred solely from a photographed repair. Transition periods remain qualified. Joe's ruled 1939 D-45 standard hexagon transition remains, with allowance for earlier custom exceptions. The D-28 herringbone and spruce changes use transition windows. Unsupported model-wide D-28S/D-35S dimensions were removed after a targeted period-catalog search failed to establish that scope.

The source and production checks cover all fourteen articles, visible FAQ text and FAQPage parity, internal destinations and anchors, image files and dimensions, mobile labels, canonical URLs, sitemap entries and IndexNow inclusion. All article outbound links point to JVG pages. Shared site inventory, social and map links remain site navigation, outside the article source-link removal.

## Approved Preview To Main-Site Differences

The required raw live-diff reports are retained in reports/martin-release-*. They compare a Sites preview template with the main Astro site and consequently report the following expected differences. These are accepted migration differences, not unresolved missing content:

- The resource heading is Martin Identification Resources on both versions. The first comparison used a different heading; it was restored before the final build. All resource entries remain internal to JVG.
- Every preview photograph is copied into src/assets/blog/<slug> and rendered through the established LicensedImage component. Its responsive img srcset replaces the preview picture/source URLs. There are no missing content photographs, and all emitted image URLs exist. The exact original photographs and their provenance remain recorded.
- The preview's minimal Organization publisher is replaced by the main site's existing ProfessionalService entity, referenced by BlogPosting. ProfessionalService is an Organization subtype; the public site also supplies its normal WebSite, Person and licensed ImageObject graph.
- The main site supplies its established header, footer and working ContactSection in place of the preview template. Its two Reverb navigation icons explain the extra image count and existing width/height warnings.
- The two owner-review figures are rendered in the production HTML instead of populated by preview JavaScript. They form the additional figure run reported by the raw audit. Actual instrument-photo grouping is unchanged; the reviewer checked both layouts.
- Canonicals and social URLs use www.joesvintageguitarsaz.com. Public pages are indexable. The owner-private Sites version retains noindex and its existing audience.

The reviewer identified low header contrast in the first port because the shared header is absolute and transparent. The Martin component now supplies a dark brown header background and the same breakpoint clearances as GuideHero. This is scoped to the new Martin component; the previously restored Fender serial page is untouched.

## Review Coverage

The independent content reader's findings and resolutions are in final-reader.md. The independent visual review is in visual-review.md. Existing site-wide copy warnings and type-check hints are not new failures: the production copy gate has zero hard failures and Astro reports zero errors and zero warnings. The MFWD article scan passes with no bans; its low-contraction warnings reflect the factual historical register. The completeness tool's external source/review-link requirements are superseded by Joe's explicit no-external-links instruction. The real owner quotes link to the existing JVG testimonials, with their original review URLs retained in editorial provenance. Article author nodes include Joe's name and About URL as well as the shared Person ID.
