# Batch 1: Gretsch, Guild And National Model Guides

Ten individual blog posts, five value/authentication pairs, on branch `joe/model-guides-1-gretsch-guild-national`. Started from fresh main `115d15f544d4d131bced6af6469a3f36ac91188a`. This is a preview for Joe; no merge or Batch 2 is authorized yet.

## Implementation

The reusable typed model-guide kit uses the J-200 colors, display typography and 950px/580px breakpoints. Ordered prose, spec tables, columns, timeline, photo bands, photo grids, variant/condition/rank cards, per-instrument archives, serial cards, checklists, callouts, CTAs, optional sourced stat bands, existing FAQ, closing and author blocks are supported. One mg-prefixed stylesheet is loaded by the new component. GibsonJ200Guide.astro and the Rickenbacker data/components are unchanged.

GuideActions adds National/Epiphone and optional label/href overrides while preserving default HTML. New pages use the requested categories and chronological blog feed; no hub, category or navigation entry was added. Existing related-post selections are kept stable. Existing page edits add contextual links only; original prose, headings and prices remain.

New model pages end with their own FAQ, closing and author block, so the generic related-card/contact-form sections are omitted on these new routes. Existing pages retain them. On phones, the existing floating quick-contact stack is hidden only on mg-page routes because it covered the required top Sell buttons. The top buttons, article CTAs, header and footer contact paths remain available.

## Verification

- Build: 372 pages; Astro check: 0 errors, 0 warnings (pre-existing and scratch-script hints are not errors).
- Site copy audit: 0 hard failures. Required runscan: 0 Tier 1 bans; nonblocking warnings reviewed.
- 110 licensed content-image nodes checked, 0 mismatches.
- 0 broken internal links or fragment targets across the ten new pages and eight existing link-source pages.
- 105/105 protected HTML documents byte-identical, including J-200, all 30 Rickenbacker guides and every existing GuideActions consumer.
- 94 priced rows independently traced to the 2026 book and checked against frozen per-row 11–15% assignments, rounded to the nearest $50. No baseline figures are committed.
- 52 selected original Drive views: 47 unchanged byte for byte, five EXIF-rotation-only corrections; three existing identical original assets reused. The October 30 addition below records six user-requested Reverb gallery images separately; all source bytes remain unchanged.
- Every guide meets its word minimum, title/description limits, unique metadata, three contextual inbound links and both twin links. All pairwise 8-gram comparisons pass, including whole-page twin overlap below 10%.
- Desktop/mobile checks cover all ten routes, with both GuideActions visible and no page-level horizontal overflow. Tables scroll inside their wrappers.
- Repository live-diff script: zero must-fix findings on all eight existing link-source pages. Remaining warnings concern existing decorative SVG dimensions/metadata and were not changed. New URLs have no previous live-page baseline.
- Independent cross-model visual review: PASS after loading all archive images and removing mobile CTA overlap. Fifty screenshots include all ten first screens and representative sections beside J-200.

[Per-page table](page-audit.md) · [Raw checks](page-audit.json) · [Photo provenance](photo-sources.json) · [Price trace](value-chart-check.json) · [Technical references](sources.json) · [Review flags and omitted rows](review-notes.md)

## Editorial Boundary

The independent Final Read is recorded separately. Canonical writing-database completeness (QA_GATE 17) remains open, and an external plagiarism-service scan remains an agency follow-up. The task-specific evidence ledger is not represented as a replacement for missing canonical locality/professional/practice databases. Publication still requires Joe’s explicit preview approval and resolution or owner approval of that editorial data-floor exception.

[Independent review scopes and verdicts](independent-reviews.md) · [Complete QA gate and open data-floor item](qa-gate.md) · [Rendered schema parity](schema-audit.json)

## October 30 Preview Correction

Joe identified dark ranking-card headings missed by the earlier visual review. The shared styles now provide readable colors for all affected headings, links and light-background section labels. Twenty route/viewport cases pass computed text contrast and axe's color-contrast rule; manual-review limitations are retained. See the [before/after evidence and verification](contrast-review/README.md). This supersedes the earlier contrast assessment; no article copy or prices changed.

## October 30: Single Anniversary Year Confirmed

Joe confirmed the photographed Single Anniversary is a 1960. Both guides now state **1960 Gretsch 6125 Single Anniversary** directly in the text, photo captions, alt descriptions and FAQ. Submission-date qualifications have been removed. The readable serial 36439 and blank model field remain documented.

Validation: 372-page production build succeeds; rendered copy check has zero hard failures (760 existing warning-tier findings). Both Anniversary pages contain the direct 1960 identification with no remaining submission-date qualifications. All 105 protected HTML pages remain byte-identical; no internal-link or metadata failures. No photo or price changes.

## October 30: Requested 1959 Double Anniversary Photos

Added six views from Joe’s ended 1959 Gretsch 6118 listing to both Anniversary guides. Both heroes now show the 1959 Double; photo bands compare it with the 1960 Single, and each archive has a separate 1959 entry. Captions identify the year, model and visible detail. The new photos show two Filter’Trons, not a later reissue.

The exact user-supplied listing is recorded in photo-sources.json. Each 1600×1066 file preserves the largest exposed gallery rendition without additional resizing, cropping or editing. Camera originals were not found in Drive. This requested set supersedes the initial Drive-only instruction; the decision log records that instruction and the requirement to search ended and sold Reverb inventory. No prices changed.

Build: 372 pages. Copy: zero hard failures, 760 existing warning-tier findings. All ten pages: 110 licensed image nodes, zero mismatches. All 105 protected existing pages remain byte-identical; zero broken internal links or duplicate metadata. The two updated pages meet their word minimums and twin-overlap limit. Targeted visual review is recorded in anniversary-1959-review.
