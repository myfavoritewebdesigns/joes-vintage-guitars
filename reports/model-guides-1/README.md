# Batch 1: Gretsch, Guild And National Model Guides

Ten individual blog posts, five value/authentication pairs, on branch `joe/model-guides-1-gretsch-guild-national`. Started from fresh main `115d15f544d4d131bced6af6469a3f36ac91188a`. This is a preview for Joe; no merge or Batch 2 is authorized yet.

## Implementation

The reusable typed model-guide kit uses the J-200 colors, display typography and 950px/580px breakpoints. Ordered prose, spec tables, columns, timeline, photo bands, photo grids, variant/condition/rank cards, per-instrument archives, serial cards, checklists, callouts, CTAs, optional sourced stat bands, existing FAQ, closing and author blocks are supported. One mg-prefixed stylesheet is loaded by the new component. GibsonJ200Guide.astro and the Rickenbacker data/components are unchanged.

GuideActions adds National/Epiphone and optional label/href overrides while preserving default HTML. New pages use the requested categories and chronological blog feed; no hub, category or navigation entry was added. Existing related-post selections are kept stable. Existing page edits add contextual links only; original prose, headings and prices remain.

New model pages end with their own FAQ, closing and author block, so the generic related-card/contact-form sections are omitted on these new routes. Existing pages retain them. On phones, the existing floating quick-contact stack is hidden only on mg-page routes because it covered the required top Sell buttons. The top buttons, article CTAs, header and footer contact paths remain available.

## Verification

- Build: 372 pages; Astro check: 0 errors, 0 warnings (pre-existing and scratch-script hints are not errors).
- Site copy audit: 0 hard failures. Required runscan: 0 Tier 1 bans; nonblocking warnings reviewed.
- 103 licensed content-image nodes checked, 0 mismatches.
- 0 broken internal links or fragment targets across the ten new pages and eight existing link-source pages.
- 105/105 protected HTML documents byte-identical, including J-200, all 30 Rickenbacker guides and every existing GuideActions consumer.
- 94 priced rows independently traced to the 2026 book and checked against frozen per-row 11–15% assignments, rounded to the nearest $50. No baseline figures are committed.
- 52 selected original Drive views: 47 unchanged byte for byte, five EXIF-rotation-only corrections; three existing identical original assets reused. No downscaling or third-party photo downloads.
- Every guide meets its word minimum, title/description limits, unique metadata, three contextual inbound links and both twin links. All pairwise 8-gram comparisons pass, including whole-page twin overlap below 10%.
- Desktop/mobile checks cover all ten routes, with both GuideActions visible and no page-level horizontal overflow. Tables scroll inside their wrappers.
- Repository live-diff script: zero must-fix findings on all eight existing link-source pages. Remaining warnings concern existing decorative SVG dimensions/metadata and were not changed. New URLs have no previous live-page baseline.
- Independent cross-model visual review: PASS after loading all archive images and removing mobile CTA overlap. Fifty screenshots include all ten first screens and representative sections beside J-200.

[Per-page table](page-audit.md) · [Raw checks](page-audit.json) · [Photo provenance](photo-sources.json) · [Price trace](value-chart-check.json) · [Technical references](sources.json) · [Review flags and omitted rows](review-notes.md)

## Editorial Boundary

The independent Final Read is recorded separately. Canonical writing-database completeness (QA_GATE 17) remains open, and an external plagiarism-service scan remains an agency follow-up. The task-specific evidence ledger is not represented as a replacement for missing canonical locality/professional/practice databases. Publication still requires Joe’s explicit preview approval and resolution or owner approval of that editorial data-floor exception.

[Independent review scopes and verdicts](independent-reviews.md) · [Complete QA gate and open data-floor item](qa-gate.md) · [Rendered schema parity](schema-audit.json)
