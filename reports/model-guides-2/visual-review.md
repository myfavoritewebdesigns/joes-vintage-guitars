# Independent visual review: Epiphone Batch 2

Review date: 2026-10-30. Scope: eighteen new Epiphone guides and `/sell-my-epiphone-guitar/`. No source changes, submissions or commits were made.

## Result

No blocking visual defect was found in the inspected evidence. Both guide actions are visible and readable in every supplied 1280×800 and 375×812 first-screen capture. The current preview resolves the two stale contrast findings described below. The seller has the approved Rickenbacker section structure, top LeadForm and footer ContactSection.

This is a new-content/design-reference review, not literal content parity with a previously published Epiphone page. New model text, photos, titles, canonical paths and destination URLs are intentional.

## 🔴 Must fix

- None found by this independent visual review; the raw seller static report still contains its two expected red findings and must not be described as an unqualified zero-red report.

## 🟡 Should fix / remaining review coverage

- At 375px, all nine value charts initially hide the Estimated Value column and clip their long table caption inside the scroll region, without a visible horizontal-scroll cue; this is a discoverability issue rather than sideways page overflow (`screenshots/epiphone-*-value-guide-375-table.png`, `.mg-table-wrap`).
- The saved `work/model-guides-2/contrast-after/audit.json` reviewed during this audit predates the final corrections and still reports Casino card labels at 2.21:1 and the Emperor “Outside The American Run” eyebrow at 2.07:1; current browser styles resolve both contexts, but that saved report is stale evidence.
- Cross-model visual review was not run in-agent: the auditor instructions require a handoff because the former zen tooling is unavailable; the main agent should record any separately required second-model review, using the supplied reference/local pairs and their actual 1280/375 widths rather than claiming 1920/390 coverage.

## 🟢 Acceptable / informational

- The seller static audit reports “17 heading(s) on live but missing on local” and “Canonical path differs”; these are the expected Rickenbacker-to-Epiphone substitutions, with the same 23-heading and ten-section structure verified below.
- The seller report's two Reverb icon dimension warnings belong to preserved shared chrome; the reviewed page has no observed image-loading or width regression from them.
- The model guides omit the duplicate contact form and hide the floating contact stack on mobile under the existing model-guide-kit decision; the Free Appraisal and Sell My Epiphone actions remain present.
- The Broadway archive identifies its small original source photographs and limits their evidentiary use; their modest detail resolution is visible, not a missing or broken-image condition.
- Comparison instruments are explicitly identified in captions; this review does not treat a labeled Sheraton, Triumph, Emperor, later Casino or other comparison photo as an unlabeled specimen of the page's model.

## Evidence and method

Read `.claude/agents/live-diff-auditor.md`, the relevant CLAUDE.md decision-log entries, the Batch 1 model-guide-kit and contrast decisions, `layout-audit.json`, `page-audit.json`, `seller-visual/audit.json`, and `reports/mg2-epiphone-seller-audit-2026-10-30T22-17-50-435Z.md`.

The named Playwright MCP is unavailable. CUA browser inspection and the existing repository Playwright captures supplied the qualitative layer instead; screenshots and DOM review were not skipped. Existing capture scripts were read to verify their viewport sizes and eager-image/decode preparation. No capture script was rerun by this reviewer because the assigned write scope permits only this report.

Independently opened all eighteen current local guide pages in CUA. For every guide H1/H2/H3, walked every ancestor to body and collected backgrounds, borders, positioning/transforms and both pseudo-elements before making structural statements. Read the J-200 reference's equivalent DOM and its 1280/375 glance screenshots. The shared dark hero, cream article, dark content bands, rust glance panel, archive gallery and heading treatments follow that reference; content-specific section counts and order differ intentionally.

Visually read all 36 first-screen captures, all eighteen 375px dark-section captures, all nine value-guide 375px glance captures, all nine value-guide 375px table captures, and all nine authentication archive captures at both widths. The archive galleries keep related figures grouped on desktop and stack them on mobile. Captions remain separate, readable dark strips beneath the reviewed photographs. No missing photo or clipped caption text was seen in these inspected photo sections.

The supplied layout audit records 36/36 passes for two visible top actions, document width and first-screen image checks. Current CUA at 1280px independently confirmed both action URLs on every guide, with the action bottom at approximately 510px, and document scrollWidth 1265px within the 1280px viewport. No sideways page scroll was observed. Value tables use their own focusable `role="region"`, `tabindex="0"`, `overflow-x:auto` wrapper.

Current Casino card labels are `rgb(200,158,87)` on `rgb(36,35,33)`, replacing the stale dark-rust label state. Current Emperor “Outside The American Run” is `rgb(157,53,27)` on the cream section, replacing the stale gold-on-cream state. Both corrected sections were also read in current CUA screenshots after their anchors settled at about 100px from the viewport top; the labels are visibly readable. The existing full-page computed audit otherwise contains no failed text runs in the other contexts at either acceptance width. Image and pseudo-layer contrast cannot be certified solely by that computed check.

Clicked all 169 current guide contents links and confirmed their hashes and target elements exist. Immediate measurements were captured during smooth scrolling and are not used as settled-position or broken-image proof. A separate settled Emperor archive observation reached roughly 100px from the viewport top with all four archive images naturally loaded. Opened a Casino FAQ and confirmed its answer became visible. Seller FAQ and top-offer interactions are documented below.

Ran the repository's read-only image-license verifier for all nineteen routes: **124 licensed ImageObject contentUrl nodes, zero rendered-image mismatches**. This verifies markup mapping, not an independent legal determination of ownership. The supplied page audit also records no broken internal links.

## Per-page coverage

All rows below include a current 1280px DOM/ancestor walk, action-destination inspection and contents-link target checks. “Both” means the 1280×800 and 375×812 first-screen captures were read. “Dark” means that page's 375px dark-section screenshot was read. V-photo means its 375px hero/glance photo and chart were read; A-photo means its archive gallery was read at both widths.

| Page under `/post/` | First screen | Body/photo coverage | Contents targets | Licensed nodes |
|---|---|---|---:|---:|
| epiphone-casino-value-guide | Both | Dark, V-photo | 6 | 4 |
| epiphone-casino-authentication-guide | Both | Dark, A-photo | 11 | 8 |
| epiphone-emperor-value-guide | Both | Dark, V-photo | 6 | 4 |
| epiphone-emperor-authentication-guide | Both | Dark, A-photo | 12 | 11 |
| epiphone-deluxe-value-guide | Both | Dark, V-photo | 7 | 4 |
| epiphone-deluxe-authentication-guide | Both | Dark, A-photo | 12 | 9 |
| epiphone-triumph-value-guide | Both | Dark, V-photo | 7 | 4 |
| epiphone-triumph-authentication-guide | Both | Dark, A-photo | 11 | 9 |
| epiphone-broadway-value-guide | Both | Dark, V-photo | 6 | 4 |
| epiphone-broadway-authentication-guide | Both | Dark, A-photo | 12 | 10 |
| epiphone-olympic-value-guide | Both | Dark, V-photo | 6 | 4 |
| epiphone-olympic-authentication-guide | Both | Dark, A-photo | 12 | 12 |
| epiphone-zephyr-value-guide | Both | Dark, V-photo | 7 | 4 |
| epiphone-zephyr-authentication-guide | Both | Dark, A-photo | 12 | 8 |
| epiphone-sorrento-value-guide | Both | Dark, V-photo | 8 | 4 |
| epiphone-sorrento-authentication-guide | Both | Dark, A-photo | 13 | 7 |
| epiphone-windsor-value-guide | Both | Dark, V-photo | 8 | 4 |
| epiphone-windsor-authentication-guide | Both | Dark, A-photo | 13 | 7 |
| `/sell-my-epiphone-guitar/` | Both | All ten section types; details below | Top offer settled; FAQ opened | 7 |

## Seller mapping and interactions

Inspected actual live `https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/` and current local Epiphone DOM. All 23 heading ancestor walks match in the inspected CSS background/border/pseudo/position/transform properties, except the expected additional `epi-selling` class on the Epiphone `smr-remodel` wrapper.

| Order | Reference and new-page structure | Verified Epiphone content |
|---:|---|---|
| 1 | `.sell-hero` | Epiphone title, Sheraton photo, offer and text-photo actions |
| 2 | `.top-offer#appraisal` | Epiphone introduction and shared LeadForm |
| 3 | `.wrap.section#models` | Four photo-led model-family articles |
| 4 | `.value-band#value` | Appraisal details and model-guide links |
| 5 | `.wrap.section#photos` | Five-item photo checklist |
| 6 | `.process-band#selling` | Four selling steps, local/nationwide and collection copy |
| 7 | `.shipping-band#shipping` | Shipping/payment copy, Olympic case photo, contact CTA |
| 8 | `.wrap.section.trust` | Meet Joe introduction |
| 9 | `.wrap.section.faq-section#questions` | Six native FAQ disclosures |
| 10 | `.jvgct#contact` | Shared ContactSection |

Read supplied seller screenshots for both first screens, both top-form widths, both models/values/shipping widths, mobile photos/process/Meet Joe/FAQ, and both contact-form widths; compared reference and Epiphone desktop top-form/contact captures directly. The apparent edge-to-edge content in some section crops is the element crop boundary, not evidence of missing page gutters.

Both live and local forms have identical field names/types/requiredness. The new top form uses `data-form-id="sell-epiphone-top"`; the footer retains `data-form-id="contact"`. Both expose `data-jvg-contact-form` and current `data-bound="1"`, and retain their photo-upload-after-submit notice. The top offer click settles at `#appraisal`, approximately 24px from the viewport top. Opening “Which Epiphone Years Are You Most Interested In?” sets that disclosure open. No form was filled or submitted, so delivery, server handling and the post-submit upload handoff were not exercised.

## Material limits

- Acceptance widths reviewed are 1280×800 and 375×812; no claim is made for the generic auditor's additional 1920/390 sizes or other browser engines.
- Current live DOM was checked at 1280px; mobile visual/geometry evidence comes from the supplied repository captures and reports.
- Not every section of every long guide was independently screenshotted/read; the per-page matrix states the actual body-photo coverage, with the existing full-page computed contrast run supplying the broader text-color check.
- All guide contents targets were checked, but an exact two-second lazy-load deadline and settled landing position were not timed for every target; the settled Emperor archive is a representative interaction probe.
- The two final color corrections were independently confirmed in current computed browser styles; older saved report findings must remain distinguished from the corrected state.
- No cross-model vision review, production deployment, transactional form submission or independent factual/model-authentication adjudication is included.

Suggested existing visual pairs for the required cross-model handoff: `seller-visual/rickenbacker-1280-first.png` versus `seller-visual/epiphone-1280-first.png`, and `seller-visual/rickenbacker-375-first.png` versus `seller-visual/epiphone-375-first.png`; guide reference examples are `screenshots/gibson-j200-model-history-authentication-guide-{1280,375}-glance.png` with the corresponding Epiphone glance captures, keeping intentional new text and photographs out of the regression list.
