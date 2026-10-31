# Batch 2: Epiphone Model Guides And Seller Page

Eighteen chronological blog posts, nine value/authentication pairs, plus `/sell-my-epiphone-guitar/`. Branch `joe/model-guides-2-epiphone` began at approved Batch 1 main commit `505d4dc65c19c6d514f5133051553c5bf80c919a`. This is a review preview, not authorization to publish or begin Batch 3.

The guides use the existing typed J-200-style kit without changing its components or stylesheet. The seller follows the approved Rickenbacker seller layout and shared LeadForm/ContactSection, with Kalamazoo models first and the existing four-step sale and FedEx Office Print & Ship Center process. All 18 guide top and lower sell actions target the new seller page. No hub, category or header/footer menu item is added.

Casino photo follow-up: Joe supplied five original 1962/1965 Casino attachments after the initial preview. Both guides now use those guitars, and the authentication archive includes all five views. See [the updated checks and screenshots](casino-photo-update/README.md). The provenance manifest now records 31 Drive originals plus five attachments.

## Verification

- Production build: 406 pages; Astro: zero errors and warnings. Copy gate: zero hard failures. Required writing scanner: zero Tier 1 bans.
- All 19 pages have unique titles and descriptions within the requested limits. Every guide meets the stricter body-only minimum: 1,200 value / 1,800 authentication, excluding hero, tables, FAQs, references, captions and author material.
- Zero broken internal links/fragment targets on the new and touched pages. Each guide has three contextual inbound links from existing pages; original existing prose, headings and prices are retained.
- Before production sync, all 122 protected rendered pages were byte-identical. Current production commit 4caefc7 was then integrated, retaining its approved consignment fee updates. All 122 protected pages match a separate current-main build after removing one unused Tailwind utility from the comparison; no markup, content, used style or asset URL differs. The normalization and zero matching elements are explicit in current-main-protected-check.json. The 94 Batch 1 priced rows are unchanged.
- 113 published price rows trace to the 2026 guide, frozen reductions and nearest-$50 arithmetic. Seven conflicting electric rows are withheld; all omissions and source conflicts are recorded separately. No baseline prices or source-book scans are committed.
- Initial preview: 31 original Drive views were recorded, including three research-only Triumph views unused in page content. Full source dimensions are retained, with EXIF rotation as the only transformation. Licensing check: 124 content nodes, zero mismatches.
- All 36 guide/viewport combinations have both top actions visible and no page-level sideways overflow at 1280×800 and 375×812. Tables scroll inside their wrappers. Whole-page twin 8-gram overlap is below 10%; every new-page pair is below 26%. Raw article and whole-page figures are preserved.
- Full-page computed contrast checks cover every guide at both widths with FAQ disclosures open. Final results have zero calculated failures; image-backed/pseudo-layer limitations remain subject to visual review. Seller axe contrast checks pass at both widths.
- Existing-page live-diff runs: all eight have zero must-fix findings. Seller comparison retains two raw brand-specific red findings (different heading text and canonical), both intentional for a new Epiphone page; the ten-section/23-heading structure and form fields match the approved reference.
- The final independent visual recheck found no blockers after correcting the Emperor CTA eyebrow and inline-link/button overlap; see final-visual-recheck.md. Its mobile table discovery note is addressed by a visible swipe instruction; its stale contrast evidence is superseded by the final [contrast audit](contrast-audit.json). Forms were inspected, not submitted.

[Per-page table](page-audit.md) · [Raw page checks](page-audit.json) · [Strict word counts](word-counts.json) · [Price trace and withheld rows](value-chart-check.json) · [Photo provenance](photo-sources.json) · [Source register](sources.json) · [Visual comparisons](design-comparison.md)

## Review Boundaries

Independent Final Read findings and resolutions are in [independent-reviews.md](independent-reviews.md). The readers' preferences for actual model examples and a publicly named pricing source are not silently labeled passes: Joe's brief expressly permits labeled comparisons, requires Drive-only photography and specifies public value pages without external citations or listing examples. Missing exact-model views and opportunities for firsthand appraisals remain disclosed.

The canonical writing database completeness gate remains open, as in Batch 1. The task evidence map is not a substitute for missing canonical locality/professional/practice inputs. An external plagiarism-service scan was not run. See [QA gate](qa-gate.md).

Joe must approve these specific previews and review the documented exceptions before merge. The seller's later-import buying policy remains unspecified until Joe answers the PR question. See [review notes](review-notes.md) and [expert questions](expert-questions.md).
