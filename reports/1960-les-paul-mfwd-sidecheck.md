> Post-review note from the parent: since this review was delivered, the parent has removed filler, added exact review anchors and contextual FAQ links, and fixed resource, ToC and author detection in the completeness parser. Those changes have not been re-reviewed here. HOLD persists because the R0 image is missing and the fact-registry and expert-approval gates remain open. The report below preserves the original review.

# Blog Sidecheck: 1960 Gibson Les Paul Standard: Neck Changes, Specs And R0s

Draft: `C:/Users/joeda/Documents/Codex/2026-10-13/wha/work/jvg/src/content/blog/1960-gibson-les-paul-standard-guide.md` · Client database: `C:/Users/joeda/Documents/Codex/2026-10-13/wha/work/jvg-databases`, commit `4dc69b7a3f4ee18498adde8301f4adaa629b516b` · Mode: New · URL: [Local preview](http://127.0.0.1:4322/post/1960-gibson-les-paul-standard-guide/) · Scanner: ran

Loaded: `.claude/skills/blog-sidecheck/SKILL.md`; `.claude/agents/blog-sidechecker.md`; `HOUSE_RULES.md`; `VOICE_REGISTRY.md`; resolved `VOICE_JOSH.md`; `GEO_CHECKLIST.md`; `BLOG_OUTPUT_STANDARD.md` sections 2, 4 and 5; `QA_GATE.md` Checks 1, 2, 5, 6, 8, 9, 10, 13, 14 and 16; `INTERNAL_LINKING.md`; `IMAGERY_POLICY.md`; `PUBLISH_STANDARD.md` section 3; `SEO_STRUCTURE.md` sections 1, 2 and 4; `TITLE_AND_HEADING_STANDARD.md`; `FACT_USAGE.md`; `YMYL_COMPLIANCE.md`; database `README.md`, `vintage-guitar-db/README.md`, `company-db/README.md`, `SIGN-OFF.md`; the draft and built HTML; site `reference/reverb-reviews-body.html`; the sibling 1958/1959 guide headings and Les Paul family-guide metadata.

Both fact files exceed 100 KB. I searched `VG_FACTS.md` and `fact_registry.json` by claim, read matching entries, and used the registry as authoritative for flags. The database has no client voice file, blog archive, content tracker, or image/brand rules. The referenced external `TITLE_RULES.md` was not available in the supplied writing checkout.

The parent confirmed both repositories were pulled and already current; writing rules commit `366edf5`.

**Verdict: HOLD**

The central neck-transition claim still requires Joe’s approval. Several additional historical and specification claims have no matching FactID. “Untraced” means unsupported by this required registry workflow, not demonstrated false.

## Writing-Rule Violations

| Line | Text | Rule (file, section) | One-line fix |
|---|---|---|---|
| 54 | “The construction remained recognizably the Burst design.” | `HOUSE_RULES.md`, The Delete-Test | Remove this general introduction and start with the construction facts. |
| 56–67 | “Area / Usual Original 1960 Standard Specification / What Can Vary” | `GEO_CHECKLIST.md`, Move 4; `QA_GATE.md`, Check 13 | Convert the mostly textual table to concise labeled specifications unless the operator specifically requested this table. |
| 28–210 | Sentence-length SD measured at **6.17** | `BLOG_OUTPUT_STANDARD.md`, section 4 requires SD above 7 | Revise the repetitive explanatory rhythm naturally, then rerun the measure. |
| After title/byline | No reviewed-by line or review date | `BLOG_OUTPUT_STANDARD.md`, Component A | Add the review line after the actual expert review; do not imply approval now. |

The scanner found **zero Tier 1 bans**, one wording warning, and one table warning. It labels SD 6.17 “ok,” which conflicts with the stricter written requirement above. No prohibited dashes or heading-case violations were found.

## AI Patterns

| Line | Text | Pattern (file, section) | One-line fix |
|---|---|---|---|
| 28, 36, 46, 73 | “Early guitars can retain features associated with 1959”; “early 1960 guitars that resemble the previous year's production”; “Early 1960 examples can retain the fuller profile”; “An early 1960 guitar can look and feel much like a 1959.” | `QA_GATE.md`, Check 1.13, repeated explanations | Keep the fullest explanation and make the other passages add distinct evidence or decisions. |
| 40, 113, 123 | “Don't decide it must be a late example because one replaceable part looks late”; “A later set doesn't prove a guitar was built late”; “Reflector knobs…can't prove a guitar's production year.” | `QA_GATE.md`, Check 1.13 | Retain the mechanism once and use the FAQ for a separate unanswered concern. |
| 38, 77, 91, 181 | Repeated explanation of anniversary versions and early-to-late neck interpretations | `BLOG_OUTPUT_STANDARD.md`, section 5.6d | Consolidate the reissue-version explanation and keep the historical inspection guidance separate. |
| 75 | “not serve as a convenient answer” | Scanner warning; `BLOG_OUTPUT_STANDARD.md`, section 4 | Optional simplification to “not explain away every inconsistency”; the current sentence does carry useful meaning. |

The FAQ headings are distinct and distributed across six sections. Contractions are present at 11.77 per 1,000 words. No staccato runs or self-certifying sincerity were found.

## Information Gain

The new thing this post says: it separates anniversary V1/V2/V3 terminology from evidence on an original instrument and distinguishes tuner-button rings from housing lettering. That is a useful editorial angle, but no author-specific discovery or firsthand example is supplied.

Distinctiveness assets: **seven identifiable assets**: feature-record framework, action checklist, risk/objection handling, inline definitions, answer-first micro-FAQs, topical-hub links, and linked author/entity schema. **The required substantive asset is missing.** There is no documented inspection, named expert reasoning, firsthand number, or real worked case. This fails `BLOG_OUTPUT_STANDARD.md`, Component H, despite meeting the numerical asset count.

Overlap with the client’s existing posts:

- **“Vintage Gibson Les Paul Models: Family, History and Identification Guide”** overlaps on model-family identification; this draft adds a narrower 1960 transition focus.
- **“1959 Gibson Les Paul Standard: Specs, PAFs And Originality”** overlaps on PAFs, finish, necks, originality, values and reissues; this draft adds the within-1960 progression and R0 distinctions.
- **“1958 Gibson Les Paul Standard: Goldtops, Bursts And Specs”** overlaps on general construction and originality guidance; this draft adds later knobs, tuner details and the SG transition.
- The database contains no archive, so a complete published-archive comparison remains unknown. The sibling year guides are also part of the current work, not evidence that this topic was already published.

Numbers and their sources:

- **1958–1960 Burst period and 1961 redesign:** traceable to VG-0044 and VG-0021.
- **1957 humbucker adoption:** traceable to VG-0003/VG-0041.
- **22 frets, nominal 24.75-inch scale, two pickups, two volume/two tone controls and three-way selector:** no original-1960 specification FactIDs found.
- **0-prefix ink-stamped serial rule:** no matching FactID found.
- **V1/V2/V3 and 50th/60th anniversary descriptions:** manufacturer sources exist, but no registry entries. The [50th anniversary brochure](https://images.thomann.de/pics/prod/243730_broschure.pdf) and [60th anniversary documentation](https://gibson.jp/electric/60th-anniversary-1960-les-paul-standard) distinguish reissue specifications from historical discussion.
- Review dates and reissue model years match the supplied review export.
- No market-price figures or promised appreciation appear.

Search language: no queries supplied.

## Links

Internal: **24 body links: 3 Conversion, 18 Topical, 3 E-E-A-T**, exceeding New Blog minimums of 3 total and 1 per role. The template adds a linked author byline. · Outbound: **2 inline authority links**, repeated in the resource block. · Resource section: **present**, four explained entries.

All internal destinations exist in the local build. Both cross-post fragments resolve. The opening conversion link is at line 32; the close has appraisal, contact and telephone links. Anchors match their apparent roles; the formal annotated sitemap was not supplied.

| Line | Link | Problem (file, section) | One-line fix |
|---|---|---|---|
| 50, 197 | Both review attributions link to `/reverb-reviews/` | Record-level source verification is weak: the shared archive contains thousands of reviews; `BLOG_OUTPUT_STANDARD.md`, Component D | Prefer individual source URLs or stable anchors to these exact archived reviews. |
| 203–204 | Shipping-totals and 1959-guide resources | Shipping page resolves publicly; the new 1959 page could not be retrieved publicly, although it exists in the build; `INTERNAL_LINKING.md`, The Resource Section | Confirm deployment of the linked year guide with this article. |
| All internal links | Local preview verification | HTTP checks were blocked by the environment’s socket restrictions; `QA_GATE.md`, Check 6 | Verify the deployed destinations before publication. |

The review quotations, dates and item descriptions match `reference/reverb-reviews-body.html`. Their connection to related R8/R9 purchases is disclosed. Neither review supplies a geographical match; no location-targeted brief was supplied.

**Completeness-scanner qualification:** the tool incorrectly reported missing resources, ToC and author link. Manual HTML inspection confirms four resource entries, twelve valid ToC anchors, a linked Joe Dampt byline, and a matching referenced `Person` node with its bio URL. Those three scanner messages are detection errors, not missing components.

## Images

Featured image: **missing** · Images: **0 editorial images**; one template author portrait · Missing alt text: **0 on the inspected portrait**

| Line | Image | Problem (file, section) | One-line fix |
|---|---|---|---|
| 1–26, entire body | No featured-image field or editorial image | `PUBLISH_STANDARD.md`, section 3 requires a featured image above the fold | Add a real, relevant guitar photograph with accurate identification and alt text. |
| Built social metadata | Generic `homepage-featured-image.jpg` fallback | The fallback does not provide the required visible article image; `PUBLISH_STANDARD.md`, section 3 | Assign a topic-specific image and confirm its rendered placement. |

The draft’s R8/R9 photo links do not place a photograph in this article. No synthetic image was supplied. The template portrait’s authenticity and visual presentation were not inspected.

## Title And Headings

Title tag: **“1960 Les Paul Standard Guide | Joe's Vintage Guitars”**, **52 characters** · H1: **“1960 Gibson Les Paul Standard: Neck Changes, Specs And R0s”**

There is exactly one rendered H1, with no skipped heading levels. Title length and heading capitalization pass. The meta description is **151 characters**.

| Line | Heading | Problem (file, section) | One-line fix |
|---|---|---|---|
| 3 | “1960 Les Paul Standard Guide” | Target-keyword alignment is unknown without the brief; if the intended exact phrase includes “Gibson,” the title tag omits it (`SEO_STRUCTURE.md`, section 1) | Confirm the target phrase and align title tag/H1 accordingly. |
| 10 | “Explore early and late 1960 Les Paul Standard specs…” | Topic inventory supplies no concrete differentiator or offer-based CTA; `SEO_STRUCTURE.md`, section 2 | Use one supported distinguishing fact and a relevant soft CTA. |
| 52, 93, 109, 125, 137, 153, 185 | Label headings including “1960 Specifications,” “Neck Profiles And Frets,” and “Value And Purchase Comparisons” | Supporting GEO weakness: major sections largely use topic labels rather than reader questions; `GEO_CHECKLIST.md`, Move 2 | Convert the strongest search-intent sections to specific questions where natural. |

The opening bold paragraph provides a short answer, but the long article lacks the two-to-five-point short-answer block requested by `GEO_CHECKLIST.md`, Move 3.

## Claims

The following traces are the review’s findings, not a substitute for the required citation ledger. No approval record was supplied; the parent confirmed none exists. Governing rules: `FACT_USAGE.md`, “No FactID, No Claim” and “Honor The Safety Flags”; `QA_GATE.md`, Check 2; `YMYL_COMPLIANCE.md`, Collectibles adaptation.

| Line | Claim | Fact ID, or UNTRACED, or AWAITING REVIEW | Status |
|---|---|---|---|
| 28, 36, 46, 59, 73, 95 | Early/full and later/slimmer 1960 neck progression | **VG-0042 — AWAITING REVIEW** | HOLD: `verifyWithExpert=true`; unchecked in `SIGN-OFF.md`. |
| 28, 65, 73, 111, 123 | Later 1960 reflector knobs versus earlier bonnet/top-hat appointments | **UNTRACED** | HOLD: manufacturer support exists, but no matching registry fact. |
| 28, 66, 73, 115–117 | Double-ring buttons differ from later double-line housings | **VG-0019** | Supported by its verification note and housing chronology; preserve the distinction in the ledger. |
| 30 | Last main-production Burst year before the SG body | **VG-0044; VG-0021** | Supported. |
| 30, 58–59 | Carved maple top, mahogany back and set mahogany neck | **UNTRACED** | HOLD: original-1960 construction entry needed. |
| 30, 62, 139 | “two PAF humbuckers” | **VG-0003 partially; quantity UNTRACED** | PAF period is supported; exact Standard configuration needs its own trace. |
| 38, 77, 91, 181, 201–202 | Anniversary versions and their relationship to original production | **UNTRACED** | HOLD: register the manufacturer-backed statements, retaining historical/reissue scope. |
| 60 | Bound rosewood fingerboard, trapezoid inlays, 22 frets | **UNTRACED** | HOLD: no matching original-1960 specification entry. |
| 61 | “Nominal Gibson 24.75 inches” | **UNTRACED** | HOLD: no matching original-1960 scale fact. |
| 63, 143 | Two volume controls, two tone controls and three-way selector | **UNTRACED** | HOLD: no configuration entry found. |
| 64, 147 | ABR-1 Tune-o-matic and separate stopbar tailpiece | **UNTRACED** | HOLD: no original-1960 configuration entry found. |
| 67, 127 | Later brighter red/orange or “tomato soup” finish appearance | **UNTRACED** | HOLD: brochure supports the history, but no matching FactID exists. |
| 73, 155 | 0-prefix serial and ink stamp on headstock back | **UNTRACED** | HOLD: the registry’s later Gibson serial facts do not cover this rule. |
| 99 | Original Standard retained the broad late-1950s nut-width format | **UNTRACED** | HOLD: no matching dimension/history entry. |
| 101 | Wider 1959/1960 frets compared with 1958 | **UNTRACED** | HOLD: no matching transition entry. |
| 103 | Neck shaving can produce a slim profile and affects comparison | **UNTRACED** | HOLD: document the technical/condition assessment basis. |
| 113, 119 | Replaced knobs/buttons versus replaced complete tuner assemblies | **VG-0002 partially; button/knob specifics UNTRACED** | General tuner replacement caveat is supported; finer statements need a trace. |
| 123, 155, 159 | Dating/originality needs combined feature assessment | **VG-0014 — AWAITING REVIEW** | HOLD under the supplied reviewer’s sign-off rule. |
| 131, 133 | Lighting changes apparent color; figure does not establish the production year | **UNTRACED** | HOLD: no matching finish/figure assessment entry found. |
| 135 | Cleaning or polishing can complicate finish evidence | **UNTRACED** | HOLD: obtain an approved conservation/inspection statement. |
| 139 | Gibson introduced humbuckers in 1957 | **VG-0003; VG-0041** | Supported. |
| 141 | A marking alone does not establish an untouched PAF | **VG-0003** | Supported as defensive guidance. |
| 145 | Pot codes date manufacture of the component, not automatically guitar assembly | **VG-0099; VG-0101; VG-0048** | Supported; retain component-only qualification. |
| 151 | Year alone does not determine pickup sound; construction, condition and circuit matter | **UNTRACED** | HOLD: no approved sound-comparison fact found. |
| 151 | Resistance does not replace an originality assessment | **VG-0027 — AWAITING REVIEW** | HOLD: electrical/authentication fact remains flagged. |
| 155, 177, 179, 181, 183 | Historic serial appearance, R0 meaning and distinctions from Classic/USA models | **UNTRACED** | HOLD: modern-model and naming facts need separate scope-controlled entries. |
| 157 | Reused six-digit Gibson numbering belongs to a later period | **VG-0011; VG-0031–0033** | Supported as later-era context; do not use these facts to establish a 1960 serial rule. |
| 167, 173 | Thin double-cutaway redesign arrived in 1961 while retaining the Les Paul name | **VG-0021** | Supported. |
| 189, 191, 193 | Condition, originality and provenance affect valuation; asking prices differ from completed sales | **VG-0112 partially — AWAITING REVIEW; remainder UNTRACED** | HOLD: record approved valuation-methodology support without importing a fixed hierarchy. |
| 48–50, 195–197 | Two buyer reviews with dates and related reissue purchases | **Verified review export** | Text and attribution details match the supplied log. |

No positive guarantee, investment promise, single-price valuation, or individual authenticity verdict was found. The word “guarantee” appears in negated cautions, not sales promises.

## Fix First

1. Obtain Joe’s recorded approval for VG-0042, VG-0014, VG-0027 and any valuation fact used; hedging does not clear the reviewer’s gate.
2. Add approved, appropriately scoped FactIDs for the untraced specifications, serial rule, hardware/finish transitions and reissue distinctions.
3. Complete the citation ledger and reconcile required disclaimer triggers against the actual facts used.
4. Add a substantive firsthand asset: a documented 1960/R0 inspection or Joe’s specific reasoning about a real example.
5. Add a relevant featured photograph, correctly identified and rendered near the H1.
6. Remove repeated explanations, replace the textual specification table unless specifically requested, and improve sentence-length variation.
7. Complete review attribution, review status and meta-description requirements; verify the final deployed links.

## Not Checked

- Full published-archive uniqueness and formal sitemap classification: neither archive nor annotated sitemap exists in the supplied database.
- Live HTTP status for all internal links: local-preview requests failed with sandbox socket error `WinError 10013`. Built-file existence passed for every internal destination.
- Public availability of the new 1958/1959 sibling guides: the 1959 public fetch returned an internal retrieval error; this is unknown, not a demonstrated 404.
- Browser rendering, mobile placement, image pixels and responsive image delivery: no visual inspection was performed.
- A finished citation ledger, expert-review copy and expert question bank: these were being assembled separately and were not supplied for this review.
- Human final-read sign-off and DOCX rendering/validation: this was a Markdown/built-HTML sidecheck, not the complete publishing gate.
- The external `TITLE_RULES.md` dependency: unavailable in the supplied checkout.
- No files were edited during the review. This report was subsequently saved at the parent’s request.

## Follow-Up: 2026-10-14, R0 Photograph And New Section

**Delta verdict: PASS for photographic accuracy, disclosure and writing.** The missing-R0-image finding is resolved. This limited review does not change the article’s overall HOLD for the remaining registry and expert-approval gates.

Scope: the new hero, alt text, caption and source link (current draft lines 10–16), the short introduction at line 42, and “What Joe’s R0 Photo Shows” at lines 104–110. I did not repeat the full original review or edit the article.

Evidence inspected:

- The local R0 hero, `src/assets/blog/1960-gibson-les-paul-standard-guide/2014-r0-reissue.jpg`.
- The downloaded rear-headstock photograph, `C:/Users/joeda/Downloads/igmmkr83fvtklow6yrft.jpg`.
- The existing 2011 R8 and 2022 R9 hero photographs used for the knob comparison.
- The rebuilt HTML’s hero, caption, source link, responsive-image attributes and new section anchor.
- The parent’s verified original [R0 Reverb listing](https://reverb.com/item/54542468-gibson-1960-reissue-les-paul-standard-r0-2014-burst?show_sold=true): Joe’s seller account, listed year 2014, Custom Shop Standard Historic 1960 identification, Mint condition and case accessories. My independent web-tool fetch of that URL was unavailable, so those listing metadata rely on the parent’s source verification; the visual observations below were checked directly.

| Current Line | Delta Check | Finding |
|---|---|---|
| 11 | Meaningful, concise alt text (`IMAGERY_POLICY.md`, Alt Text) | Pass: 99 characters; identifies the 2014 R0 reissue and the visible figured sunburst top and reflector knobs without presenting it as a vintage 1960 guitar. |
| 12, 42 | Modern-reissue disclosure (`IMAGERY_POLICY.md`, Passing As Real; `FACT_USAGE.md`, Scope Firewall) | Pass: the visible caption and introductory sentence explicitly distinguish the photographed modern instrument from an original 1960 example. |
| 14–15, 106 | Image/source attribution (`PUBLISH_STANDARD.md`, section 3; `INTERNAL_LINKING.md`, placement) | Pass on the inspected build: the caption and section link directly to the same original listing with `show_sold=true`. |
| 106 | Front-photo observations | Pass: visible figure, shaded sunburst, two covered pickup positions, cream pickup rings and pickguard, and four gold reflector knobs agree with the photograph. The section does not identify the concealed pickups as original PAFs. |
| 106 | “The listing described the guitar as mint with its case accessories” | Correctly attributed to the historical listing, not asserted as the instrument’s present condition. Record the listing evidence in the source ledger as planned. |
| 108 | Rear-headstock observations | Pass: the photo visibly shows an ink serial reading `0 4285`, double-ring details on the plastic buttons, and separate vertical `Gibson Deluxe` lettering on the housings. The draft appropriately says “vertical lettering” and does not mislabel those modern housings as period Kluson hardware. |
| 108 | Serial-format example | Pass: pairing the photographed 0-prefix number with the source-attributed 2014 year is a concrete example of why the visual numbering format alone does not prove a vintage date. It does not invent a serial-decoding rule. |
| 110 | R8/R9 knob comparison | Pass: both inspected comparison photos show gold bonnet-style knobs without the R0’s reflective inserts. The paragraph keeps all three examples within their modern-reissue context. |
| 110 | Limits of the photographs | Pass: the paragraph does not infer neck depth or concealed pickup identity from the front photograph and does not turn the reissue comparison into an original-production changeover date. |
| 104–110 | MFWD writing and distinctiveness | Delta scan: **BAN 0, WARN 0**. The heading names its subject, the prose is specific, and the real photographed instrument now provides an instructive worked example under `BLOG_OUTPUT_STANDARD.md`, Component H, once the source trace is recorded. |

The built hero uses a generated 1200×800 WebP with `srcset`, explicit dimensions, `loading="eager"` and `fetchpriority="high"`. Its visible caption appears before the image and its source link is present. The new `what-joes-r0-photo-shows` anchor exists. These checks resolve the earlier missing editorial-image finding and verify the relevant markup; mobile above-the-fold placement and actual browser image selection were not tested in this delta review.

No new accuracy or disclosure correction is requested for the reviewed delta. Complete the planned source/candidate-claim ledger for the listing identification and observed features. This photographic example does not itself approve the article’s historical facts or clear existing expert-sign-off requirements.
