# Guitar Auction Records

Preview work only. Joe must approve this exact Cloudflare preview before merge. The blog publication date is provisionally October 30, 2026 and must be changed to the actual approved merge date.

## What Ships

The chronological blog post routes to a new wrapper that links the existing model-guide stylesheet and its own `mx-` stylesheet. It reuses GuideActions, GuideBlock, Photo, FAQ and LicensedImage without changing their implementations. The table is server rendered and enhanced with local inline JavaScript. The data supplies prices, calculations, comparison ranges, FAQ answers and FAQPage schema.

The page has 19 verified million-dollar guitars, seven ordinary-value photo cards, six documented resale pairs, three verified basses and six FAQs. Main-table rows represent distinct instruments at their latest verified public sale. Type lists use the highest verified result per instrument so McCartney's earlier bass record remains visible despite its lower later sale. Eight existing pages gain contextual links. Generic related-post ranking excludes this broad new article to preserve existing recommendations; the chronological feed includes it normally.

## Evidence

- `sources.json`: price evidence, original currency, estimates, conversion method, prior-sale evidence and the claims supported by each source. CNN and AFP are the independent major-outlet fallback for Cobain's D-18E. Other ranked prices use auction-house material.
- `compare-check.json`: live JVG row text, scope, values, multiple arithmetic and honest archive-photo captions. Live pages were fetched directly because cached search extracts contained older prices.
- `cpi.json`: BLS series CUUR0000SA0, sale-month observations, factors and three recalculated examples. Latest published month is September 2026. October 2025 is unavailable in the series, so it uses BLS's published 2025 annual average. As requested, 2026 sales retain their nominal amount instead of applying within-year inflation.
- `excluded.json`: candidates and individual earlier transactions that were not sufficiently verified, as well as below-threshold results and missing ordinary-model figures.
- `static-check.json`, `browser-check.json`, `accessibility.json`, `data-check.json`, `render-parity.json`: verification evidence.
- `screenshots/`: desktop/mobile hero, table, card and resale views, with J-200 comparisons.

## Verification

`pnpm run build`, `pnpm exec astro check`, `pnpm run audit:copy` and `node scripts/verify-image-license.mjs post/most-expensive-guitars-ever-sold` passed. The license script needs the `post/` prefix: passing only the slug reports NO HTML and is not a valid verification. Nine licensed ImageObjects match rendered image sources. Copy audit has zero hard failures; its existing report-only warnings are retained in the log.

The article has a 54-character title, a 149-character description, no duplicate title/description, no banned dashes and 2,583 prose words excluding data tables, comparison cards and FAQ. The maximum measured eight-word overlap with another existing page is below 0.1 percent. Every internal path and fragment on the new page and all eight touched pages resolves, and article guide links match the live sitemap.

All four sortable columns pass ascending and descending order checks, every type/brand filter updates its pressed state and live result count, and keyboard Enter/Space activation works. With JavaScript disabled, all 19 rows, seven cards and six FAQs remain present. Desktop and mobile top buttons are within the initial viewport. At 375px, the document width is 375px; wide tables scroll only inside their wrappers. Full-article axe checks with FAQs open have zero color-contrast or tested accessible-control violations at both widths. Image/background overlap cases that axe marks incomplete remain identified separately.

The protected set contains 122 existing rendered pages using GuideActions, ModelGuide, RickenbackerModelGuide or GibsonJ200Guide. Of those, 120 are byte-identical. The Mustang and SG Standard pages have only their expressly requested inbound-link changes. Removing those exact additions restores byte identity, including existing CSS and schemas. All ModelGuide, Rickenbacker and J-200 pages themselves are byte-identical. Requiring literal identity on the two linked GuideActions pages conflicts with the requested inbound links; this exception is explicit rather than reported as a full parity pass.

## Items For Joe

### Live-Page Fact Conflicts

No conflicting new artist-history assertion is knowingly published. The existing Mustang paragraph makes a general claim about Cobain using the stock vibrato; the auction instrument has documented modifications. This article does not repeat or reverse that claim. The source reconciliation searched every artist named in the brief across content, data and components.

The 1954 guide's archive photograph is identified by that page as a 1955 example despite its asset filename. That identification is preserved. The #0001 comparison uses the requested early-spring benchmark but explicitly discloses the white finish, later components and individual serial significance. It does not claim a matching sunburst or that #0001 was the first Strat made.

### Live-Page Price Conflicts

None found in the adopted ordinary-value figures. The Mustang figure remains an asking range. The Rickenbacker guide has an explicit 1964 to 1967 F-hole export row, so it uses $7,050 to $10,550, not the generic 325 band. The Gretsch guide's $3,850 to $5,950 figure sits under 1962 and is not applied to Lennon's 1963 guitar.

External reporting discrepancies are preserved in the evidence: Bonhams gives Gallagher's USD equivalent as $1,156,793, rather than the brief's approximate $1.26 million. Van Eaton's $390,000 hammer plus 21 percent premium is $471,900, rather than the widely repeated $496,100. Beck's pound results use the Federal Reserve's sale-date USD rate, not a current conversion. Christie's dates Anoushka's components to 1990 and 1993; the article follows that catalog. Sotheby's original 2023 catalog controls the Hot For Teacher sale date over a later incorrect photo caption.

### Figures Needed From Joe

No matching published ordinary-value figure was found for the D-18E, prewar 000-42, J-160E or 1963 Gretsch 6120. No prewar D-45 row is invented. Model guides remain linked, and missing figures are not estimated.

### Scope And Review Flags

- See `excluded.json` for Reach Out To Asia, Wolf, Allman's Goldtop, Elvis's D-18 and other candidates. Tiger's 2002 and the Competition Mustang's 2022 exact earlier results remain excluded under the specified primary/two-major-outlet sourcing rule. Consequently, the hero says biggest verified resale multiple **here**, not biggest ever reported.
- Photos are existing licensed Joe archive images. Where an exact year/configuration is unavailable in the mapped guide, the caption identifies the neighboring year or later illustration. No auction-house photographs are used.
- Missing estimates mean the inspected qualifying sources do not supply a verified range. They are not an assertion that no estimate has ever existed elsewhere.
- The second top button is **Sell Your Guitar → `/`**, exactly as requested; Joe can change that target during preview review.
- The writing scanner reports BAN 0 and WARN 0. The local company database is a scaffold; no unsupported credentials, review quotes, testimonials or personal sales stories were added. The brief's specified layout controls FAQ placement and omits unrelated review embeds. An independent agent intent review was not performed; Joe's requested preview review remains the publication gate.
- Eight contextual inbound pages satisfy the minimum while leaving Rickenbacker components/data and the shared Martin wrapper untouched. No existing title, price or sentence was rewritten. The Mustang gains a link around existing words; the other seven pages gain one sentence each.

## Added Sentences

- 1954, 1961 and 1964 Strat year pages, each: “For the difference between a production guitar and a famous player’s instrument, compare the guitar auction records and ordinary model values.”
- SG Standard: “Compare the famous SG auction results and ordinary SG values before applying a celebrity price to a production guitar.”
- Gretsch 6120: “For celebrity results alongside production-model values, see the most expensive guitars sold at auction.”
- Les Paul market guide: “The Les Paul auction record belongs to a documented celebrity instrument and does not replace these production-model ranges.”
- D-18E/D-28E authentication guide: “See how Cobain's documented instrument fits among the most expensive guitars sold at auction.”

## Updating After An Auction

1. Verify the house's final premium-inclusive result, exact model, lot identity, date, estimate and original currency. If the primary source is unavailable, retain two independent major-outlet reports quoting the house. Otherwise keep the candidate in `excluded.json`.
2. Add or update the instrument in `src/data/auction-records.ts`. Move an older verified transaction into `priorSales`; don't duplicate the same guitar in the ranked list. Preserve stable IDs. Keep reported private sales outside the ranked records.
3. Re-fetch the linked JVG pages. Copy their exact row and retain condition/asking-price/year qualifications in both the data and `compare-check.json`. Do not fill a missing figure from another dealer.
4. Retrieve the latest BLS CPI-U data, update sale-month values/factors and document annual-average fallback when needed. Use the original sale-date currency conversion. Refresh `sources.json` and `cpi.json` together with the data.
5. Bump `lastVerified` and the stub's `modified`. In January, roll the SEO title and the displayed inflation-year labels together. Leave the original publication date intact after the initial approved merge.
6. Re-run build, Astro, copy, licensed-image and link checks, then validate sorting/filtering, keyboard use, JavaScript-off content, contrast and mobile containment. Compare every protected page with a fresh baseline and retain screenshots. Update all report counts and source gaps.
7. Push a preview branch and ask Joe to review the actual Cloudflare preview. Do not merge until he approves it. After approval, update the initial publication date if necessary, verify the final preview, squash-merge, confirm production checks and load the live URL three times before calling it live.
