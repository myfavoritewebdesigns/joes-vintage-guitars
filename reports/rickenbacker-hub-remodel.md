# Rickenbacker Hub And Feature Guides

User request: remodel the existing Rickenbacker serial page into a hub and spoke arrangement like the other JVG identification guides.

## Intentional Differences From Production

- Retain `/rickenbacker-serial-numbers/` as the canonical hub, with the decoder, serial locations, early-format tables, regular serial charts, exception guidance, feature index, appraisal link and related-brand links.
- Move the detailed feature sections into six pages: pickups; tuners; knobs and controls; body, binding and inlays (including headstocks and logos); bridges and tailpieces; finish colors. Retain the substantive timelines and tables from the current page. Keep the compact feature cross-check on the hub instead of the former duplicated date cheat sheet.
- Use the recently approved Martin cluster's layout proportions and brand tokens in a separate Rickenbacker stylesheet. Preserve the shared production header, footer, contact form and global styles.
- Preserve all 45 legacy heading IDs on the hub. Moved-topic IDs appear in expandable card contents linking to their new locations; an incoming fragment opens the relevant panel.
- Reuse the eight existing photographs from the production serial guide across the cluster. Images remain local Astro assets and use the existing licensed-image component. Full-resolution views are available from article photographs. The Mapleglo 360 and Azureglo 4005 photos also illustrate the controls and finishes they visibly show.
- Replace the old imported article metadata with current per-page TechArticle and breadcrumb metadata. Add five visible questions matched to FAQPage metadata and WebApplication metadata for the lookup.
- Keep external research references in this record rather than adding source callouts to the public copy, following the completed Martin cluster's presentation.

## Serial Corrections And Verification

The original widget accepted extra letters after the date prefix, missing sequence digits and punctuation that it silently discarded. It assigned JK/JL to 1960 unconditionally, accepted week 53, and included Q in the 1997 to 1998 month sequence. The replacement checks complete supported guitar formats, accepts only whitespace and hyphen separators, and sends early/model-dependent numbers to the manual charts.

Rickenbacker's public decoder was directly exercised on October 15, 2026: https://www.rickenbacker.com/serial-number-decoder/ . Verified examples include GD1234 (April 1967), A01234 (January 1987), L91234 (December 1996), M01234 (January 1997), R01234 (April 1997), Y11234 (November 1998), 2108001 (week 8 of 2021) and 9912001 (week 12 of 1999). Q01234 and week-53 2153001 are rejected there. Its 1997/1998 month sequence omits O and Q; the original JVG chart was shifted from April onward. Public chart and local lookup now agree.

The manufacturer returns 1970 for JK123/JL123 and JK1234/JL1234, while its code contains a late-1960 transition warning. The new lookup explicitly leaves this decade ambiguous instead of assigning all such codes to 1960. Z-digit numbers receive a replacement-plate warning, matching the maker's current tool; the public month chart still explains December Z and the conflict. XX-digit codes are not accepted as regular guitar dates: the maker's tool can treat them as amplifier numbers, which are outside this guitar/bass lookup's scope.

Historical model-specific tables remain for manual comparison; this work does not claim that every early serial can be decoded automatically. Future years are rejected instead of appearing as completed production dates.

## Copy And Photograph Corrections

- The former claim that F. C. Hall purchased the company in 1950 is corrected to 1953, consistent with https://www.rickenbacker.com/legacy/ . No universal pre-1950 date is inferred from the H spelling.
- The 4005 photograph no longer identifies its unseen tailpiece casting as brass. The front photograph cannot establish the material.
- Remove universal claims that any later toaster pickup or checkerboard binding establishes a vintage date. Explain replacements, reissues and model differences.
- Qualify soundhole claims to account for Rose Morris export models; remove the claim that every model standardized on the same soundhole in 1964.
- Remove speculation about the reason for the later knob supply change. Add finish-originality and bridge-replacement inspection guidance without invented shop cases.

## Review Destination

This work is prepared on `joe/rickenbacker-dating-hub` for a pull request and Cloudflare branch preview, per the repository's established review workflow. Production is not merged by this request.

## Validation And Live-Diff Decisions

- Production build: 233 pages. Rendered copy gate: zero hard failures, 775 existing sitewide report-only warnings; no Rickenbacker cluster copy warnings. Astro check: zero errors and zero warnings, 93 existing hints.
- 24 regression checks cover manufacturer-verified examples, accepted separators, missing/invalid characters, invalid weeks, future years, early numbers and ambiguous prefixes.
- Chrome checks on all seven routes at 1920, 1280, 768 and 390 pixels: one H1 each, no horizontal page overflow, no broken loaded images, no duplicate IDs and no page JavaScript errors.
- Static cluster validation: seven canonical URLs, six guide cards, 173 valid internal links and fragment destinations, all 45 legacy heading IDs, and five matching visible FAQ/schema pairs.
- WCAG 2.2 A/AA checks using the repository's axe-core Playwright dependency: zero violations on all seven pages at desktop and phone widths after adding keyboard-focusable table regions. The phone contact rail now uses a Rickenbacker-only horizontal bottom bar with reserved padding to keep it off article text and inputs. The shared contact component is unchanged.
- The live-diff's four raw red categories are expected consequences of this requested remodel: feature headings move to the six guides; paired photos use the existing two-column gallery primitive; feature callouts move with their content; repeated imported schema is replaced by current page-specific entities and existing global identity. This report records these decisions because the client instructions prohibit editing `CLAUDE.md`. No broken asset was found by the live-diff.
