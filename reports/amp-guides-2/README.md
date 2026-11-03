# Vintage Fender Amp Guides, PR 2

Eight new blog pages pair value and identification guides for Bassman, Super/Super Reverb, Vibrolux/Vibrolux Reverb and Champ/Vibro Champ. Branch joe/amp-guides-2 starts from published PR 1, d5f867948ec58c11bd0e601357c7c866512f7894. Joe approved publishing PR 1, all eight production URLs passed three fresh loads, and he instructed PR 2 to begin. This PR remains preview-only until Joe approves its specific Cloudflare deployment.

## Verification

| Check | Result |
|---|---|
| Build | 427 pages; passed |
| Astro | 0 errors, 0 warnings; 93 advisory hints |
| Copy | 0 hard failures; 782 site-wide advisory warnings |
| Writing scan | All eight pages, BAN 0, WARN 0 |
| Images | 34 original files, unchanged bytes; 67 licensed nodes, 0 mismatches |
| Routes and anchors | 0 broken; existing targets found in live sitemap |
| External sources | 50 direct HTTP 200; 8 Fender pages block automated GET but were opened successfully with the public web reader |
| Values | 60 new rows; both endpoints match saved 11 to 15 percent reductions and nearest-$50 rounding |
| Uniqueness | All twins below 10%; all new-page pairs and comparison/value pairs below 26%; maximum 2.12% |
| Protected documents | 147 byte-identical against current main; only the two intentionally linked PR 1 articles differ among 149 protected documents |
| Layout | 16 desktop/mobile cases, both top actions visible, no document overflow or broken loaded images |
| Contrast | 3,624 text runs; 0 computed failures; 0 axe color-contrast violations; 16 incomplete layered-background cases retained |
| FAQ/schema | One FAQPage per page, exact visible/schema parity; no product, offer or rating schema |
| Live comparison | J-200, dating page, seller, era and comparison articles: 0 must-fix; inherited Reverb icon dimension warnings |
| Independent reviews | Visual review PASS; editorial SHIP on all eight; fresh Bassman reader also SHIP. |

[Page metrics and incoming links](page-metrics.md), [schema](schema-and-scope.json), [preservation](preservation.json), [layout](layout-audit.json), [contrast](contrast-axe/audit.json), [sources and reissue tells](sources.json), [external links and sitemap](reference-links.json), [price math](value-chart-check.json), [photo provenance and code readings](photo-sources.json).

## Existing-Page Scope

No shared kit, CSS, dependency, route, category or navigation changes. The eight posts enter the normal blog feed and existing categories. Both PR 1 articles gain links to all eight new pages. The comparison additionally gains the two deferred value ranges at Joe's explicit direction: Vibrolux Reverb 1964 to 1967, $3,000 to $4,300; Super Reverb 1963 to 1964, $1,950 to $3,450. Its note distinguishes the priced group from the separately documented weight example. The serial and seller pages gain one paragraph apiece. The six PR 1 model pages and all other protected documents remain byte-identical. The approved serial-page title stays exact. Fender's guitar value hub and pot-code page have no existing amp passage and are unchanged.

## Fact And Price Conflicts

- **Era boundaries:** Use exactly 1948 to 1959 tweed, 1959 to 1963 blonde/brownface, 1963 to 1967 blackface, 1967 to 1980 silverface. Model-specific overlaps are explicit. Earliest V-front Super group begins in 1947; Champ silver change is 1968.
- **Chart dating cutoff:** VG-AMP-0052 describes a different end date from the live house reference. User explicitly requires the live dating page’s about-1970 rule and A=1951 mapping. No serial dating.
- **Bassman 60:** Book page 461 lists 1972 to 1976, but the verified factory Bassman 60 document identifies 1999 PR421. Omit the disputed row. Keep its frozen baseline and adjustment privately. Do not reuse 1999 specifications for an alleged 1970s amp.
- **Solid-state Vibrolux wattage:** Book page 470 labels 35 watts; the period Fender manual states 42 watts RMS. Omit that value row pending reconciliation. Preserve its exact original row privately; describe only identifying construction on the authentication page.
- **Bassman 50 cabinet:** Book page 461 prices a 2x12 set; Fender’s historical account describes a 2x15 combination. Retain the book’s exact priced configuration. Authentication copy says actual cabinet pairings varied and requires an inventory; no 2x15 value invented.
- **Bassman 135:** Book groups 1978 to 1983 and describes 4x10; Fender history describes the high-power continuation of the 4x12 Bassman 100. No value row because the source group crosses 1980. Factory-authentication information covers pre-1981 examples only.
- **Late Bassman 10:** Book prices 50 watts for 1972 to 1980 and a 70-watt group in 1981 to 1982. The later factory drawing is labeled 70 watts and includes 1977 revision dates; its mirror filename misleadingly says 75w. Public value row retains exact book group. Later unmatched version gets individual appraisal. Authentication follows 70-watt factory title, no 75-watt claim.
- **Narrow-panel 6V6 Super:** Book page 468 labels its 1956 to 1957 6V6 entry 5E4. The verified schematic title is 5E4-A, with a 1955 drawing code. Value row preserves book’s group. Technical page calls the drawing 5E4-A and does not turn its drawing date into a claimed individual production date. Exact 6V6 output rating is left unasserted.
- **Super Reverb master-volume and high-power dates:** Book and field records place control and rating changes in different year groups. Factory 45-watt and 70-watt drawings both show master-volume/pull controls. Show both electrical designs; avoid assigning power by the knob or imposing a disputed exact transition year. Values retain source year groups.
- **Incomplete field-guide small-tube lists:** Some field entries list only a generic preamp tube rather than every tube, and the brown Vibrolux field record differs from the 6G11-A drawing. Use full factory sets: 6G11-A two 7025 plus two 12AX7; 6G4-A four 7025 plus two 12AX7; Bassman 100/135 two 7025 plus one 12AT7. Schematic labels were inspected visually.
- **Faded date stamps:** Bassman 6G6-B and Super Reverb AB763 chart printing is legible, but the date letters remain undecoded. Use only verified NC and IB readings; preserve the Super archive’s broad 1963 to 1967 range.

No Joe sale prices, guitar-refinish deductions, external pricing sources or modern reissue values appear. The 40 PR 1 rows are unchanged. Private book baselines and once-generated adjustments remain outside the checkout in work/amp-guides-2.

## Price Coverage Gaps

- **Bassman 60, 1972 to 1976:** Book identity unresolved. Available Fender Bassman 60 service document identifies the 1999 PR421, outside scope. Omitted pending corroboration of the book’s earlier model; saved baseline and reduction retained.
- **Vibrolux Reverb Solidstate, 1967 to 1969:** Book specifies 35 watts while Fender’s period manual specifies 42 watts RMS. Omitted pending reconciliation, preserving the exact source row privately.
- **Bassman 10, 1981 to 1982:** Post-1980 row excluded. The historical 70-watt version before 1981 has no separate priced row in the inspected table.
- **Bassman 135, 1978 to 1983:** Book combines pre-1981 and post-scope years. No shortened range or invented row.
- **Bassman, 1954 first 4x10; 1963 to 1964 black-panel variants; 1967 blackface:** No exact standalone row for every technical transition. Preserve the published book groupings and request individual appraisal for an unmatched example.
- **Super Reverb, 1980 returning black-panel option:** Book prices blackface return at 1981 to 1982, outside scope; no standalone 1980 row.
- **Vibro-Champ, 1973 to 1981:** Book groups 1973 to 1980 with post-scope 1981. Omitted rather than truncating the original range.
- **Vibrolux Reverb, 1967 silverface transition and 1980 black-panel transition:** No exact isolated row for these transitions. Existing blackface/silverface groups retain the book’s exact years.

## Photos And Editorial Limitations

All 34 files come from Joe's Drive originals and retain their full bytes. Readable codes are documented in photo-sources.json: 220947 on the Bassman speaker; printed 6G6-B on its blonde chart; 220014 on the pink Super speaker; printed AB763 on the blackface Super chart; 12M6-1 and 465-149 on the brown Vibrolux speaker; AA763 and NC on the blackface non-reverb Vibrolux chart; 5F1 and IB on the 1959 Champ chart. Faded dates remain undecoded, and the Super archive's broad 1963 to 1967 dating is retained.

No exact silverface photo set was located for these four families. Blackface/silverface Champ and reverb Vibrolux coverage and a tweed Super set are absent; the pages identify the actual photographed models without implying full era coverage. The only listed in-stock amp with no located matching photo set remains the 1963 Fender Concert. No reissue is pictured as an original.

The four canonical writing databases remain unavailable, as disclosed in PR 1; this is an unresolved QA_GATE 17 editorial exception, not a claimed database approval. Archive observations and factory documents provide specific context, and no first-person experience is invented. Six optional expert questions are in the companion file and at the top of the expert-review copy. An external plagiarism scan remains an agency handoff item. The supplied model-guide blueprint governs the single FAQ section, value-page absence of an external resources block, and omission of review embeds.

## Current Main Integration

A concurrent approved Epiphone publication moved main to 2003b7439b63cae0dc11afe53faba34721d8ae71 during preview work. The branch now includes it in full. A separate main worktree build supplies the new preservation baseline: 149 protected documents checked, 147 byte-identical and only the two approved PR 1 articles changed. All eight PR 2 amp pages are byte-identical to their independently reviewed pre-integration HTML. No amp source or style changed during integration. The original 131-page report is retained as historical evidence; main-integration-preservation.json is the current comparison. See main-integration-amp-render.json and integration-review.md.

## Publication

Do not merge before Joe approves this PR's specific Cloudflare preview. After approval, squash-merge, confirm production succeeds and load every new live URL three times. Independent reviews are recorded in editorial-review.md, bassman-fresh-final-read.md and visual-review.md. Deployment verification is added to the PR before handoff.
