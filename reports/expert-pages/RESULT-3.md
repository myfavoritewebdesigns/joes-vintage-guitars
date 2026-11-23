---
client: Joe's Vintage Guitars
vertical: VintageGuitarDealerAppraiser
jurisdiction: GLOBAL
page_type: Landing
mode: New
target_kw: Fender vintage guitar expert
slug: /fender-vintage-guitar-expert/
date_drafted: 2026-11-16
public_facing_safe_confirmed: false
drafter: Codex / owner Josh
EXPERT_REVIEW_STAMP:
  reviewer_name: ""
  bar_or_role: ""
  status: pending
  version_hash: ""
  countersigned_record: ""
  date: ""
---

# Result 3: Fender Expert Claim Candidates

Local preview: http://127.0.0.1:4322/fender-vintage-guitar-expert/

All requested candidates appear as confident claims with their assigned statuses. Josh's Brief 3 authorizes the pending claims for Joe's review without FactIDs or an agency accuracy grade. No candidate has been marked confirmed or struck. The tick sheet is in CLAIMS-TICK-SHEET-fender.md.

## Files Created Or Changed

- Created src/data/expert-pages/fender-claims.ts: typed claim array, review percentage and yearly coverage checks, placement selectors and pending-state exports.
- Created src/data/expert-pages/fender-guides.ts: the page's existing guide inventory, shared with FC-05 so its count matches the rendered links. The inventory is free of image imports so the Astro config can read the claims.
- Created src/components/expert-pages/FenderClaim.astro: shared rendering for normal, pending and struck claims.
- Changed src/pages/fender-vintage-guitar-expert.astro: renders the candidates, near-top reasons list, repair list, preview banner and conditional noindex. It also fixes the damaged-Fender FAQ and compacts the year links.
- Changed astro.config.mjs: conditionally excludes the expert page using the same pending-state export. The existing serial-tool test-page exclusion remains.
- Changed CLAUDE.md: inserted the requested 2026-11 decision row at the top of the decision-log table.
- Created reports/expert-pages/CLAIMS-TICK-SHEET-fender.md and this report.

Local QA scripts, screenshots, rendered copy and validation JSON are under work/expert-pages-brief-3/. No review data, reviews hub, shared layout, existing photograph or dependency file was edited.

## Claim Counts

| Status | Count |
|---|---|
| onfile | 7 |
| pending | 34 |
| confirmed | 0 |
| struck | 0 |
| Total | 41 |

The total includes 25 main claims and 16 repair-list claims, FC-21a through FC-21p. FC-21 is also a pending umbrella sentence, so it contributes one marker and one count independently of its list items.

## Claim Locations In Page Order

Each claim renders once. The near-top list gathers FC-01, FC-05, FC-09, FC-12 and FC-24; those sentences are not repeated in their later topic sections.

| ID | Group | Status | Page Placement |
|---|---|---|---|
| FC-01 | Reviews | pending | Why Fender Owners Choose Joe Dampt, immediately after the opening |
| FC-05 | Published Work | pending | Why Fender Owners Choose Joe Dampt, immediately after the opening |
| FC-09 | Reach | pending | Why Fender Owners Choose Joe Dampt, immediately after the opening |
| FC-12 | Buying | pending | Why Fender Owners Choose Joe Dampt, immediately after the opening |
| FC-24 | Authority | pending | Why Fender Owners Choose Joe Dampt, immediately after the opening |
| FC-17 | The Bench | pending | Joe Dampt's Repair Bench, before the existing bench background |
| FC-18 | The Bench | pending | Joe Dampt's Repair Bench, before the existing bench background |
| FC-19 | The Bench | pending | Joe Dampt's Repair Bench, before the existing bench background |
| FC-20 | The Bench | pending | Joe Dampt's Repair Bench, before the existing bench background |
| FC-21 | The Bench | pending | Joe Dampt's Repair Bench, before the existing bench background |
| FC-21a | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21b | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21c | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21d | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21e | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21f | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21g | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21h | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21i | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21j | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21k | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21l | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21m | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21n | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21o | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-21p | The Bench | pending | Joe Dampt's Repair Bench, individual repair list after FC-21 |
| FC-13 | Buying | onfile | Fender Guitars Joe Dampt Has Bought, before the purchase cards |
| FC-14 | Buying | pending | Fender Guitars Joe Dampt Has Bought, before the purchase cards |
| FC-15 | Buying | pending | Fender Guitars Joe Dampt Has Bought, before the purchase cards |
| FC-16 | Buying | pending | Fender Guitars Joe Dampt Has Bought, before the purchase cards |
| FC-06 | Published Work | pending | Joe Dampt's Published Fender Reference Work, before the guide inventory |
| FC-07 | Published Work | onfile | Joe Dampt's Published Fender Reference Work, before the guide inventory |
| FC-10 | Reach | pending | Joe Dampt's Fender Videos, before the embeds |
| FC-11 | Reach | pending | Joe Dampt's Fender Videos, before the embeds |
| FC-08 | Published Work | onfile | Press And Other Recognition, linked recognition list |
| FC-22 | Authority | pending | Press And Other Recognition, linked recognition list |
| FC-23 | Authority | onfile | Press And Other Recognition, linked recognition list |
| FC-25 | Authority | onfile | Press And Other Recognition, linked recognition list |
| FC-02 | Reviews | pending | What Fender Buyers Say, before the archive summary and reviews |
| FC-03 | Reviews | onfile | What Fender Buyers Say, before the archive summary and reviews |
| FC-04 | Reviews | onfile | What Fender Buyers Say, before the archive summary and reviews |

## Review Calculations And On-File Sources

FC-03 reads byBrand.fender from src/data/reviews/reverb-summary.json. Its 364 five-star reviews divided by 388 total reviews gives 93.81443298969072 percent, rounded to 94 percent. The displayed sentence and note update from that data.

FC-04 checks every Fender-tagged record in src/data/reviews/reverb.json. All required years are present:

- 2018: 17 Fender reviews.
- 2019: 5 Fender reviews.
- 2020: 6 Fender reviews.
- 2021: 9 Fender reviews.
- 2022: 19 Fender reviews.
- 2023: 25 Fender reviews.
- 2024: 201 Fender reviews.
- 2025: 94 Fender reviews.
- 2026: 12 Fender reviews.

A fixture removing 2020's Fender records makes FC-04 pending and names 2020 in its note. No source review file was changed.

FC-05 counts the actual shared directory: 89 links, including the lookup-tool anchor. The compact year runs retain 12 Stratocaster links and 18 Telecaster-family links, including the combined 1966 to 1968 guide. All 89 hrefs match the prior report's inventory in the same order.

| On-File Claim | Source |
|---|---|
| FC-03 | src/data/reviews/reverb-summary.json, byBrand.fender |
| FC-04 | src/data/reviews/reverb.json, brand fender and review dates |
| FC-07 | Explicit onfile designation in Brief 3; published lookup in src/pages/fender-guitars-serial-number-guide.astro |
| FC-08 | JVG-0107 and JVG-P-0035; Joe's About page and its Vintage Verified guest essay link |
| FC-13 | Explicit onfile designation in Brief 3; reports/expert-pages/video-social-facts.md, video SFjsaZsEHqI and its title |
| FC-23 | JVG-P-0008; Joe's About page |
| FC-25 | JVG-0108 and JVG-P-0037; Joe's About page and linked KJZZ story |

The revised damaged-Fender answer retains JVG-0046's scope: valuation as-is, parts value and restoration cost. Visible text and FAQPage both use the same FAQ array.

## Preview And Schema Behavior

Every pending claim carries the visible text "Awaiting Joe's confirmation", class fex-pending and its data-claim-id. Onfile and confirmed claims render normally; struck claims are excluded. Each repair-list item has its own status. Joe can edit the public sentence and note when correcting a candidate.

The banner reads "Preview: 34 claims on this page are awaiting Joe Dampt's review." Its number comes from the data array. It is the first main-content element, positioned below the absolute shared header. Layout receives noIndex while any claim is pending. The sitemap filter imports the same pending state. When pending reaches zero, the banner and noindex disappear and the route becomes eligible for the sitemap on the next render/build, without another code edit. No permanent X-Robots-Tag header was added, since it would prevent that automatic transition.

Candidate text is kept out of all JSON-LD. The existing schema continues to use on-file metadata, the shared FAQ answers, breadcrumbs and video identities. This excludes pending claims from FAQPage and from every other schema block. Confirming a claim makes its visible copy normal; it does not automatically add that sentence to schema.

## Local Validation

- Local page: HTTP 200; one H1; 41 distinct rendered claim IDs; 34 markers with the required text; seven on-file claims without markers.
- Phone at 390px and desktop at 1440px: document width equals viewport width and no pending marker overflows. The banner clears the header at both widths. Opening, bench, repair-list and compact-year screenshots were inspected.
- All 89 directory links are preserved. Year links are compact lists beneath one describing sentence per model.
- Six visible FAQ questions and answers match FAQPage verbatim. The promised-list sentence is gone.
- No pending claim sentence appears in any rendered JSON-LD. No Review, Rating or AggregateRating nodes were added.
- All 255 written Fender buyer reviews still render. Existing purchase photos, videos and contact paths remain.
- Both changed/new Astro files pass compiler error diagnostics. Both new data files pass targeted strict TypeScript checking. Data IDs are unique; the review calculations and missing-year fallback pass.
- Isolated status fixtures: all pending claims changed to confirmed yield zero pending and 41 selected claims; changing them to struck yields zero pending and seven selected claims. The actual sitemap filter excludes the pending route and includes it for both zero-pending fixtures. The serial-tool preview stays excluded and the reviews hub stays eligible.
- Zero em or en dash glyphs in the rendered article. New claim copy was checked for the brief's banned vocabulary. Headings and the FAQ rewrite received a manual read.

Evidence: work/expert-pages-brief-3/validation.json and verify.mjs. Final fixture tests use in-memory data. An earlier live-transition attempt hit the dev server's reload timeout; the original source statuses were restored and verified before the successful final run. The final browser run checks the restored pending preview, not a client-approved state.

## Writing Rules And Scope

Read the canonical BOOTSTRAP.md, LOAD_BY_TASK.md, house rules, voice registry, VOICE_JOSH.md, EMAIL_REGISTER.md, writer procedure, title rules, intake, fact usage, YMYL, database/context rules, expert-question template, GEO, lexicon, imagery, content types, SEO structure, linking, frontmatter and QA gate, plus the writing router and New Landing workflow. Joe resolves to DEFAULT; the brief supplies first-person Joe narration. This is an addition to the unlaunched New Landing preview. The explicit candidate, section and tick-sheet instructions govern its scope.

All four writing database paths exist and the site profile lists them. The local Python checker could not run because python is unavailable on PATH; Brief 2 supplies the orchestrator's approved four-of-four result. Relevant principal/company records and database context were read. Pending candidates follow Josh's explicit status-based exception. Existing general page facts retain the RESULT-2.md trace. The earlier five SME questions remain there; this job's requested tick sheet supplies the candidate review task.

## Limitations And Handoff

No requested candidate or link was omitted. No git command, commit, push, deployment or production build was run. The orchestrator owns the production build and generated sitemap check.

The canonical Python writing, title and completeness scanners could not be executed in this shell. The report does not claim those scanners passed. An external plagiarism scan remains agency-side. No separate agent was used, following Josh's instruction.

The existing local server developed Vite module-transport timeouts during reload. The successful final preview uses a foreground Astro dev server at 127.0.0.1:4322 with only its local watcher ignoring .claude, .codex and work directories. This setting lives in the local QA launcher, not astro.config.mjs. No production watcher/config behavior was changed for that workaround.

Joe's review remains pending. This is a local preview and has no publication approval.
