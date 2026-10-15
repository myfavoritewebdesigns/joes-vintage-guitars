# Guild Remodel Verification

Completed October 15, 2026. Scope: existing Guild hub plus seven supporting guides. Production publishing is not included in this review branch.

## Results

- Production build: 248 pages, successful. Sitemaps include 243 production URLs; image sitemap has 2,643 entries.
- Astro check: 287 files, zero errors, zero warnings; 85 pre-existing hints.
- Repository rendered copy gate: zero hard failures. Two Guild warning occurrences are the retained Ctrl+F wording, reviewed under the baseline rule. Other site warnings are outside this change.
- MFWD longform scan with the original prose baseline: all eight pages pass, zero bans. Three reviewed literal-count warnings are documented in editorial-decisions.md. Raw prose retention is below the default floor; every substantive change is dispositioned there rather than claimed as a clean retention pass.
- Decoder tests: eight test groups pass, including all simple model-range endpoints, numeric boundaries, ambiguous prefixes, leap years, factory starts and malformed inputs.
- Browser QA: all eight pages at 390px and 1920px; no overflow, missing images, runtime errors or broken internal links/anchors. All 68 unique checked internal URL/fragment combinations resolve.
- Model filter: 482 published rows; F-50 returns 14; unmatched query returns zero; clear restores all 482.
- Independent review: 24 route/viewport combinations at 390, 1440 and 1920px, 20 decoder cases, all nine source tables, nine legacy anchors and five FAQs. No unresolved findings. See independent-final-review.md for scope and tooling limitations.
- Accessibility: zero automated violations in the final page scans, including full hub/chart checks. This is not an exhaustive conformance claim.
- Metadata: eight unique titles (51 to 58 characters) and descriptions (145 to 160 characters); one H1 per page; production self-canonicals; matching social metadata; actual JPEG dimensions and descriptive social-image alt text. TechArticle, breadcrumbs, licensed ImageObjects and the hub's FAQ, WebApplication and visible HowTo are parseable and consistent.
- Media: 45 new photos (40 Drive, five from two verified Joe's Mesa Reverb listings), two original instrument photos and the original author portrait. Images retain the retrieved frame and have working enlargements; originals are stored locally and transformed by Astro.
- Shared shell/config/styles, other brand pages, root scripts, reference snapshots and infrastructure files are unchanged.

## Fact And Source Register

| ID | Supported Claim Group | Evidence |
| --- | --- | --- |
| F01 | Early ranges are approximate; 1960 to 1964 published first/last numbers | Guild manufacturer history, tables 0 and 1 in guild-official-tables.json |
| F02 | Missing 1965 to 1969 numeric starts; model-specific rows, repeated prefixes and gaps | Manufacturer tables 1 and 2; independent baseline review |
| F03 | 1970 to September 30, 1979 numeric sequence | Manufacturer table 3 |
| F04 | 1979 to 1993 annual endpoints, resets and separate model rows | Manufacturer tables 4, 5 and 6 |
| F05 | 1994 endpoint-only column; 1995/1996 ranges and published overlaps | Manufacturer table 7 |
| F06 | Displayed late-1990s table provides 1997 only | Manufacturer table 8 |
| F07 | Tacoma from February 2005, New Hartford from December 2008; factory/year/day/unit fields | Manufacturer history dating notes; calendar arithmetic covered by tests |
| F08 | New York beginnings, late-2001 Corona transition and near-complete kits, C-prefix context, modern country distinctions | https://guildguitars.com/guild-support/faq/ |
| F09 | 1967 Westerly relocation and the later Westerly Collection distinction | https://guildguitars.com/introducing-the-westerly-collection/ |
| F10 | Oxnard operating production and January 2016 relaunch | Eyewitness factory report at https://guildguitars.com/wp-content/uploads/2016/05/AG282_guild.pdf |
| F11 | Later Starfire and S-300 models revisit earlier designs | https://guildguitars.com/guild-press-photos/ |
| F12 | Photographed F48 74329, F50 AD355/Hoboken, F30 29030, X175 11830 and Artist Award JA100123 | Full-resolution owned Drive photo review; source files in photo-provenance.json; year interpretation uses F01 through F06 |
| F13 | D150NAT modern Collection label, G1150733 and Made in China | Owned Reverb listing 88274770 and its model/serial photographs |
| F14 | Bluesbird added Bigsby and disclosed old mounting evidence | Owned Reverb listing 88855969 and its photographs |
| F15 | Visible pickup covers, controls, tuners, inlays, bridges and body details | Direct inspection of the owned photographs. Captions describe the examples without inferring universal changeover years. |

Primary serial source: https://guildguitars.com/guild-support/history-of-my-guild/. The source snapshot is preserved in the audit workspace and its table transcription is committed. Existing Joe business statements and biography are carried forward as baseline content. Inspection advice explains how to gather evidence; it does not claim to authenticate every photographed part.
