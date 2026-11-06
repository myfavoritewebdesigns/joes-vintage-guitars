## Martin Style 18 Guides, PR 1

Adds six 000-18, 00-18 and 0-18 identification/value posts and a 58-row price table to the existing small-body hub. The pages use the existing model-guide kit, plain numbering, light tables, Joe’s exact-model archive photos and top/lower appraisal and Sell My Martin actions. Martin is added to the brand type unions. The branch includes published main 3e2a8cc and uses its unchanged image cleanup step. Shared Photo and LicensedImage components are identical to main, with full responsive image behavior preserved. The temporary Martin-only deployment workaround has been removed. Joe’s November 6 revision removes all worn 1944 000-18 photos from the new guides and adds cleaner examples across several years for every model. Lead and social images match, and condition disclosures stay with the pictured instruments.

**Preview only. Do not merge or start PR 2 until Joe approves this specific preview.**

## Validation

- Build: 462 pages; Astro check: 0 errors, 0 warnings (informational hints retained in the log).
- Copy gate: 0 hard fails (803 sitewide warnings). AI-tell scan: 0 Tier 1 hits; 6 reviewed warnings concern the required authentication terminology and photo-caption fragments. Decorative section counters are excluded from prose scanning.
- Image licensing: 57 content nodes, 0 mismatches. All 43 selected images pass SHA-256 checks. The November 6 refresh adds 31 selections: 29 unchanged source files and two reused exact-hash existing assets. Drive full originals and Reverb 1600px gallery renditions are distinguished in the photo ledger.
- Internal links: 0 broken routes/anchors on all six new and five touched pages. Each new guide has 3 contextual prose inbounds from existing pages, and 4 FAQs with FAQPage JSON-LD. No prohibited schemas or external value-page citations.
- Prices: all 58 frozen reductions independently recalculated; every hub figure exactly matches its value page. Trace: value-chart-check.json and deep-verification.json.
- Visual: all 12 required page/viewport cases have visible top buttons, 0 document overflow, 0 broken images, 0 computed contrast failures and 0 axe violations. Full visible text-run checks include open FAQ answers. Axe incomplete/pseudo-background cases are retained and visually reviewed, not counted as automated passes.
- Current production baseline: 3e2a8cc24e273de9bfe72b2a9da7b7fa776247db; 453 HTML files captured. All 17,296 existing image assets remain byte-identical. Final output: 18189 files.
- Existing protected HTML: 1 j200; 30 rickenbacker; 66 existingModelGuidePages; 28 existingMartinPairs; 2 specialMartinPosts; 3 martinOwnerStories; 148 existingGuideActionsCallers; all byte-identical. Groups overlap. Shared renderer/CSS and protected Martin data match baseline Git blobs.
- Initial independent final read: identification pages SHIP; value pages SHIP. November 6 photo revision receives a separate live-diff visual review; its findings and caption corrections are recorded in photo-refresh-audit reports.
- Overlap: normalized 8-grams use rendered article text, preserving block/inline boundaries, excluding scripts, styles, nav, author boilerplate and decorative counters; denominator is the smaller unique 8-gram set. Maximum among any new pair: 4.57%. Authentication trio: 000-18 vs 00-18: 0.4%; 000-18 vs 0-18: 0.4%; 00-18 vs 0-18: 0.6%.

## Per-Page Results

Word counts exclude charts, FAQs, navigation, captions, resource lists and author blocks. Photos count rendered figure instances, including repeated hero comparisons. H1s stay short for the first-screen actions; the 50–60-character rule is applied to SEO titles.

| Page | SEO Title (Characters) | Description Characters | Prose Words | Photos | Existing Prose Inbounds | Twin 8-Gram Overlap | Buttons At 1280 / 375 | H2 List |
| --- | --- | ---: | ---: | --- | --- | ---: | --- | --- |
| [Martin 000-18 Guide](https://www.joesvintageguitarsaz.com/post/martin-000-18-authentication-guide/) (Identification) | Martin 000-18 Guide: Dating, Specs And Authentication (53) | 148 | 2107 | 9; 1938 / 1951 / 1960 archive selection | 3: /martin-neck-block-stamps/<br>/martin-tuner-dating-guide/<br>/post/martin-0-00-000-history-authentication-value-guide/ | 0.24% | Yes / Yes | What Identifies A Vintage 000-18?<br>Why A 1934 000 Needs A Scale Measurement<br>000-18 Features To Check Across The Decades<br>Read The Bracing And Bridge Plate Separately<br>Compare Joe’s 1938, 1951 And 1960 000-18s<br>Read The Model And Serial On Two Dated Guitars<br>Compare Bridges, Guards, Tuners And Finish<br>Distinguish An Original From A Later 000-18<br>Document A 000-18 Before Buying Or Selling<br>000-18 Research And Photo References<br>Questions About Martin Identification<br>Identify The 000-18 Before Choosing Its Price Group<br>Joe Dampt |
| [Martin 000-18 Value Guide](https://www.joesvintageguitarsaz.com/post/martin-000-18-value-guide/) (Value) | Vintage Martin 000-18 Values: Prices From 1906 To 1979 (54) | 146 | 1514 | 5; 1938 / 1951 / 1960 archive selection | 3: /post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/<br>/post/martin-0-00-000-history-authentication-value-guide/<br>/sell-my-martin-guitar/ | 0.24% | Yes / Yes | Vintage Martin 000-18 Price Ranges<br>Choose The Right 000-18 Market Group<br>What Changes A 000-18’s Worth?<br>Compare The Whole 000-18, Including Its Case<br>Should You Repair A 000-18 Before Selling?<br>What To Send For A 000-18 Appraisal<br>000-18 Pricing And Condition Resources<br>Questions About Martin Values<br>Put The 000-18’s Condition Beside The Price<br>Joe Dampt |
| [Martin 00-18 Guide](https://www.joesvintageguitarsaz.com/post/martin-00-18-authentication-guide/) (Identification) | Martin 00-18 Identification: Stamps, Specs And History (54) | 148 | 2095 | 13; 1920s / 1951 / 1952 / 1962 archive selection | 3: /martin-tuner-dating-guide/<br>/post/martin-0-00-000-history-authentication-value-guide/<br>/sell-my-martin-guitar/ | 0.51% | Yes / Yes | Which 00-18 Family Is In Front Of You?<br>Follow The Change From 12 To 14 Frets<br>Read A Wurlitzer Name Without Assuming A Fake<br>Compare Clean 1951 And 1962 00-18 Examples<br>Identify Hawaiian And Koa Versions Before A Conversion Verdict<br>Check The 00-18’s Wartime And Postwar Construction<br>Use The Readable 1952 Neck Block As A Comparison<br>Use The 1952 Photos To Check Installed Parts<br>Separate Classical Models And Modern Editions<br>Record Repairs Without Losing The Model’s History<br>00-18 Identification Sources<br>Questions About Martin Identification<br>Keep The Full 00-18 Identity In The Description<br>Joe Dampt |
| [Martin 00-18 Value Guide](https://www.joesvintageguitarsaz.com/post/martin-00-18-value-guide/) (Value) | Martin 00-18 Prices: Vintage Values By Era And Version (54) | 146 | 1541 | 5; 1920s / 1951 / 1952 / 1962 archive selection | 3: /post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/<br>/post/martin-0-00-000-history-authentication-value-guide/<br>/sell-my-martin-guitar/ | 0.51% | Yes / Yes | Martin 00-18 Values By Year And Configuration<br>Match The 00-18 To Its Price Row<br>Evaluate A 00-18H Conversion On Its Actual Work<br>How Repairs Change A 00-18 Comparison<br>What The Archive Photos Can Establish<br>Prepare A 00-18 For An Appraisal<br>Send A Complete 00-18 Photo Set<br>00-18 Appraisal Resources<br>Questions About Martin Values<br>Choose A 00-18 Comparison With The Same Configuration<br>Joe Dampt |
| [Martin 0-18 Guide](https://www.joesvintageguitarsaz.com/post/martin-0-18-authentication-guide/) (Identification) | Martin 0-18 Explained: Vintage Dating And Model Checks (54) | 144 | 2319 | 14; 1925 / 1951 / 1966; labeled koa and family-record comparisons | 3: /martin-tuner-dating-guide/<br>/post/martin-0-00-000-history-authentication-value-guide/<br>/sell-my-martin-guitar/ | 0.83% | Yes / Yes | Confirm The Concert-Size Body And Style 18 Woods<br>Identify An 0-18K Before Calling Its Top Unusual<br>Compare The Two Body Joints And Their Construction<br>Trace The 0-18 Through Wartime And Postwar Changes<br>Linda Gayle’s 1949 0-18 As A Documented Example<br>Read The Neck Blocks Across Three Eras<br>Check Small-Body Hardware Without Borrowing Dreadnought Rules<br>Inspect The Plate, Finish And Neck Repairs<br>Recognize Tenors And Later 0-18 Recreations<br>Build An Evidence Record For Your 0-18<br>0-18 Dating And Archive References<br>Questions About Martin Identification<br>Preserve The 0-18’s Identity And Its Evidence<br>Joe Dampt |
| [Martin 0-18 Value Guide](https://www.joesvintageguitarsaz.com/post/martin-0-18-value-guide/) (Value) | What Is A Vintage Martin 0-18 Worth? Prices And Repairs (55) | 150 | 1644 | 5; 1925 / 1951 / 1966; labeled koa and family-record comparisons | 3: /post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/<br>/post/martin-0-00-000-history-authentication-value-guide/<br>/sell-my-martin-guitar/ | 0.83% | Yes / Yes | Vintage Martin 0-18 Values And Koa Variants<br>How To Select An 0-18 Comparison<br>Separate Playing Wear From Altered Originality<br>Assess The Repair Needs Of A Small 0-18<br>Keep Family Records And Original Parts Together<br>Get A Value Before Ordering Restoration<br>Photographs That Help Value An 0-18<br>0-18 Valuation Resources<br>Questions About Martin Values<br>Value The 0-18 You Have Documented<br>Joe Dampt |

## Existing Pages And Hub Diff

The hub preserves its URL, metadata, H1, headings, IDs, TOC, all existing copy/photos, four value cards and At A Glance. It gains a table sourced directly from martin-values.json and two contextual link paragraphs. Full before/after: [hub.diff](hub.diff).

Seller, neck-block and tuner text gains anchor wrappers only. The old-Martin value article gains one contextual sentence containing three guide links; its existing copy and prices remain intact. Complete existing-page diff: [existing-pages.diff](existing-pages.diff). Other baseline HTML changes are normal blog/category feed pagination for six new posts.

## Review Lists

Scope: six Style 18 posts and the existing small-body hub. No PR 2 implementation and no production publication are authorized before Joe reviews this preview.

## Facts To Resolve With Joe

- The existing small-body hub says maple replaced rosewood bridge plates in 1968. Existing D-21 history and primary construction research describe the reverse. Neither existing page is changed; the new guides discuss the plate's material, dimensions and repairs without selecting a disputed transition date.
- The price guide's 0-18 14-fret row starts in 1932, while its descriptive entry and the house chronology place the normal transition in 1934. That entire disputed price band is withheld. No adjusted substitute date or estimate is invented.
- The Wurlitzer archive describes a 1924 00-18 / model 2086. Robert Corwin's research identifies 2086 with the 00-18 but dates the Company Line to 1922. The November 6 revision removes this fair-condition archive example and its disputed date from the public guide; general dealer-brand research remains.
- The hub's Linda photo filename/caption refers to the 1950s while the owner-story post identifies the instrument as 1949. The new pages use the owner story and the visible serial 112697; the existing hub photo and copy are preserved.
- The rejected 1944 000-18 photos are removed from the six new guides. Replacement serial photos read 71570 (1938 000-18), 174299 (1960 000-18), 23781 (1925 0-18) and 216180 (1966 0-18). Existing 124189 (1952 00-18) and 112697 (1949 0-18) comparisons remain.

## Price Ownership And Omissions

- Standard 0-18 and 00-18 charts start at 1920. Source 1918 to 1922 ranges are restricted to their 1920 to 1922 ownership interval without changing their price endpoints.
- The early guide has no specific priced 000-18, 0-18K or 00-18K row. Their supplied earlier ranges are therefore included as the brief permits.
- Existing OM, classical, tenor, plectrum and electric prices remain authoritative and untouched. The existing electric guide explicitly covers 00-18E.
- No 000-18 figures were supplied for 1907 to 1910, 1918 to 1919 or 1932 to 1933; no 00-18K figure for 1926 to 1933. No interpolation is used.
- No separate Wurlitzer premium, unconverted 00-18H figure, rare finish premium or altered-guitar percentage table is created.
- Original-production bands are retained through 1989 for 0/00 and 1979 for 000, matching the transcribed vintage rows. Later original-production bands and modern recreations are outside these charts. These are coverage limits, not claims that production ended in those years.
- Comparisons against the early, classical, tenor, OM, 000-45, dreadnought and old-Martin value references found no duplicated configuration/year price row or conflicting published figure. The old-Martin article supplies no new Style 18 dollar ranges; the prior small-body hub had none.

## Photos

All three pairs have exact-model photographs. The November 6 selection uses 43 photos: 000-18 examples from 1938, 1951 and 1960; 00-18 examples from the 1920s, 1951, 1952 and 1962; 0-18 examples from 1925, 1951 and 1966, plus Linda Gayle’s 1949 serial/ownership evidence and the labeled 1931 0-18K comparison. The worn 1949 front/back and fair-condition Wurlitzer photos are no longer used in the new guides.

The photo refresh adds 31 selections, including two exact-hash matches reused at their stable existing source paths. The other 29 files preserve downloaded bytes. Drive provides full originals; Reverb-only selections preserve its served 1600px gallery rendition. Existing 1952 originals remain. Dimensions, source IDs, listings and SHA-256 hashes are in `photo-sources.json`. Selection decisions and condition disclosures are in `photo-refresh-review.md`.

## Expert Review

Five optional questions with their purpose and integration point are at the top of expert-review.md. No missing answer is used to invent a fact.

The fresh final reader also located firsthand documentation of 1932 14-fret 0-18s. That supports keeping the price-page omission framed as chart coverage, while leaving the conflict with existing house chronology for Joe to resolve. See independent-final-read-revised.md for the primary links.

## Evidence And Remaining Limits

Reports are in [reports/martin-small-body](.). Source ledger: sources.json. Price trace: value-chart-check.json. Photo IDs, dimensions and hashes: photo-sources.json. Per-page metadata, headings, links and overlap: verification.json. Full before/after HTML hashes: preservation.json.

The initial independent visual review discloses unavailable named cross-model tools. Equivalent local Playwright and human image review are complete; this is not claimed as a separate unavailable vision-model pass. External plagiarism-tool review remains agency-side. The photo-refresh audit checked all 61 current TOC targets with settled fresh navigations and zero misses. Final Cloudflare status and immutable preview links are recorded in the PR body after the final commit deploys.
