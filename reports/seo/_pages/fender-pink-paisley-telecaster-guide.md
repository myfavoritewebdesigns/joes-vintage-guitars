## fender-pink-paisley-telecaster-guide

On-page SEO + enrichment analysis for `src/content/blog/fender-pink-paisley-telecaster-guide.md` (live: `/post/fender-pink-paisley-telecaster-guide/`). Page is ~2,500 words across 11 H2 sections. It already carries **3 in-content links** (intro: sell-my-fender + free-appraisal; §3: fender-serial-guide; bottom: free-appraisal + home + 4 "Further reading" cross-links). That's light for a page this long. Adds below.

---

### 1. Internal links to ADD

Density target ~1 link / 120-180 words; this page can absorb roughly 8-11 contextual links beyond what exists without stuffing. Existing links (intro sell-fender, intro appraisal, §3 fender-serial, bottom appraisal/home) are kept; do not duplicate their anchors.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| §1 Naming/Origins — "launched alongside the **Blue Flower Telecaster** in 1968" / "literally wallpaper a Telecaster" | sell a vintage Fender Telecaster | /sell-my-fender-guitar/ | Topical sell intent at the model-name moment; varies from the intro's "sell your Fender guitar here" anchor. sell-my-fender is pos 10.3, needs topical (non-brand) anchors per gsc.md. |
| §4 Hardware/Electronics — "The 137-66 Code... EIA date code on original Paisley pots reads 137-66XX" | how to read Fender neck stamps and pot codes | /fender-guitars-serial-number-guide/ | Second contextual hook into the top-priority serial guide (11,646 impr, pos 8.9) at the exact pot-code discussion; anchor varies from §3's "Fender serial number guide". |
| §4 Tuners — "chrome **F-stamped tuning machines**... Kluson-style single-line tuners" | dating Fender tuners and hardware | /fender-guitars-serial-number-guide/ | OPTIONAL — only if the §4 pot-code link feels too close; pick one of the two §4 links to keep density honest. Kluson dating is covered on the serial guide. |
| §8 Notable Players — "**Geddy Lee** of Rush plays a **1968 Paisley Telecaster Bass**" | sell a vintage Fender bass | /sell-my-fender-guitar/ | Natural sell hook on the bass-variant mention; reinforces sell-fender without repeating the §1 anchor. |
| §9 Rarity/Market — "the market price reflects that" / "Verify production era before any significant purchase" | get a free vintage guitar appraisal | /free-appraisal/ | free-appraisal is the #1 link-starved high-intent target (pos 16.1, page 2; needs inbound most). A value/market section is the strongest place to drop it. Anchor "vintage guitar appraisal" matches its top GSC query. |
| §9 Rarity/Market — "stripped or refinished into plain sunburst... during that period" | selling a whole guitar collection | /sell-a-guitar-collection/ | sell-a-guitar-collection sits at pos 27.9 (deep page 3), badly under-linked (4 inbound). A "people stripped/sold these off" beat is a soft, honest bridge to the collection page. Low-force; include only if it reads naturally. |
| §9 Market Note — "Fender has produced reissues... since the 1980s... Japanese Fender catalog" | how to date a Made-in-Japan Fender | /fender-guitars-serial-number-guide/ | The reissue/MIJ mention maps exactly to the serial guide's MIJ/CIJ section (VG-0064). Skip if §4 already used two fender-serial links — cap fender-serial inbound from this page at 2-3 total. |
| §6 Buyer's Checklist (Electronics) — "Pots date-coded 137-66XX (CTS 1966)" | (no new link — already covered by §4) | — | Don't double-link the same target inside the checklist; checklist is scannable, links there hurt UX. |
| Bottom "Further reading" list | Convert the 2 bare serial-guide style mentions — already links fender-serial-guide; ADD one line: "Selling a Fender Telecaster" | /sell-my-fender-guitar/ | The Further Reading block is all guides; one sell link there is a clean, expected place and helps sell-fender. |

**Net new recommended: 6-8 links** (intro/§3/bottom existing stay). Hard cap: **fender-serial-guide ≤3 inbound from this page**, sell-fender ≤2 new, free-appraisal +1, sell-a-collection +1 (optional). Note: this page is one of only a handful that does NOT link to /vintage-fender-telecaster-value-guide/ — consider adding it in §9 ("the market price reflects that" → "see current Telecaster values") since that value guide (6,595 impr) is the most topically-exact target and is currently missing entirely from the page.

---

### 2. Section-level related posts

Inline "Related reading" blocks fit best on the long authentication sections. Recommendations per section:

- **§1 Naming/Origins/Summer of Love** — FITS. Related: `/post/1952-fender-telecaster-authentication-guide/` (Blackguard origins) and `/post/1959-fender-telecaster-authentication-guide/`. Frames Paisley as one chapter in Tele history. The page already links these in "Further reading" at the bottom — a small inline block here would surface them earlier.
- **§3 Neck Construction (1968 vs 1969)** — FITS. Related: `/fender-guitars-serial-number-guide/` (already linked) + `/post/1962-fender-stratocaster-authentication-guide/` (skunk-stripe / one-piece-maple neck construction parallels). Strong "how to date a CBS-era Fender neck" cluster.
- **§4 Hardware/Electronics/Pot Code** — FITS. Related: `/post/gold-guard-fender-precision-bass/` and `/post/1966-fender-stratocaster-authentication-guide/` (same CBS-era pot/wiring/hardware bin). Good "CBS-era parts" related block.
- **§8 Notable Players (Geddy Lee bass)** — OPTIONAL. Related: `/post/1952-fender-precision-bass-guide/` (the Paisley Bass note → P-Bass cluster). Light relevance; skip if it pads.
- **§9 Rarity/Survival/Market** — FITS. Related: `/post/best-online-platforms-sell-vintage-guitars/` and `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/`. Converts market-context readers toward selling. Best single place for a "thinking of selling?" related block.

Do NOT add Related blocks to §2 (Finish chemistry), §5 (Puzzle piece), §6 (Checklist), §7 (Spec table) — they're self-contained and a block would interrupt the authentication flow.

---

### 3. FAQ gaps

This page has **no FAQPage block at all** — a clear gap for a high-intent authentication query set. Recommend adding a 4-6 Q FAQ accordion before "The Bottom Line," with FAQPage JSON-LD. Suggested Q/A (drawn from the page's own copy):

1. **Q: Why is it called the "Pink" Paisley if Fender called it "Paisley Red"?** A: Fender's 1968 catalog name was Paisley Red; the original red-pink pigment fades and shifts under decades of UV, so most surviving examples now read pink. (From §1.)
2. **Q: How do I tell a 1968 Paisley Telecaster from a 1969?** A: The neck. 1968 uses a maple-cap fretboard (no skunk stripe, no walnut plug); 1969 returned to one-piece maple with a walnut skunk stripe and headstock plug. (From §3.)
3. **Q: Are 1966-dated pots wrong on a 1969 Paisley Telecaster?** A: No. Fender bought a large CTS pot supply in 1966 and worked through it for years; a 137-66XX (CTS 1966) 1MΩ pot is correct on both 1968 and 1969 guitars. *Verify against VG-0047 (137 = CTS) and VG-0054/VG-0100 (pot code = "no earlier than" date).* 
4. **Q: What is the "puzzle piece" test?** A: The finish under the neck plate was sealed from light/air/wear, so a genuine original shows a vibrant, un-shattered protected shadow matching the four-bolt plate shape; matching crack/fade under the plate signals a later refinish. (From §5.)
5. **Q: How many original Paisley Telecasters were made?** A: Conservative estimates put the 1968 run at roughly 75 to 100 units, and many were stripped/refinished in the 1970s, so original examples are scarce. (From §9 — see fact-check flag below, this number needs DB verification.)
6. **Q: Is a refinished Paisley Telecaster worth less?** A: Yes. A significant share of "Paisleys" today are refinished CBS Telecasters; originality is the dominant value driver. *Mark with VG-0112 (originality = largest value driver) and VG-0074 (refin ≈ −40% on Fender).* 

---

### 4. Relevant reviews

The page is editorial (authentication guide), so heavy testimonial placement would feel off — use sparingly, only near sell/appraisal CTAs:

- **§9 Rarity/Market** or the new FAQ-adjacent appraisal CTA — **R23 (Steve Hastie, "Stratocaster value + mods caveat", Fender)** from `free-appraisal-jsonld-reviews.json`. It's the only Fender-specific curated review, and its "mods caveat" theme aligns with this page's originality-matters message. Already mapped to sell-my-fender/fender-serial in reviews-videos.md — verify it isn't double-placed, but it's a clean fit here as a single social-proof pull-quote beside the appraisal link.
- **Reverb Fender samples** (reviews-videos.md §B, 339 Fender reviews) — if a product-titled quote is wanted, pull one Telecaster-titled Reverb review (e.g. query the archive for "Telecaster") for the §9 market/sell beat. The Rob M. "'59 Bassman" sample is amp-only; prefer a Tele-titled body.

No Paisley-specific review exists in the catalog; don't fabricate one. One review max on this page.

---

### 5. Relevant videos

- **§8 Notable Players** or **§9 Market** — `f-BQno75t94` "Antique Show Find! 1961 Fender Telecaster!" (676 views, reviews-videos.md C2). Closest Joe video to this model (vintage Tele); good "here's a real vintage Telecaster" embed near the players/market discussion.
- **§3 Neck Construction / §4 Hardware** — `PIRoB0KHEg0` "Where to Find Fender Serial Numbers, Neck Heel Dates & Pot Codes" (reviews-videos.md C1 / social.md A1). This is the single best-fit dating video on the channel and maps EXACTLY to §3 (neck heel date stamps) and §4 (pot codes). Strongest embed for the page — place it once, near the §3/§4 boundary, adjacent to the fender-serial-guide link.
- Skip demo videos — there is no Joe Paisley Telecaster demo in the 73-video pull; don't force an unrelated Fender demo.

Recommend embedding **at most one** (`PIRoB0KHEg0`) to keep the editorial page from becoming a video gallery; `f-BQno75t94` is a second-choice if a §8/§9 visual is wanted.

---

### 6. Social embeds

From social.md, no Paisley-specific post exists. Best topical fits (all flagged for the "is this worth the embed weight on an editorial page" judgment):

- **§3/§4 (dating)** — A1 `PIRoB0KHEg0` (YouTube, no token) — same asset as §5 above; cleanest embed, no NEEDS-JOSH blocker. Preferred if any embed is added.
- **§8 Notable Players / §9** — A4 `https://www.instagram.com/reel/DYxoKglzlFt/` (1965 Candy Apple Red Strat, late-'64 neck date, transitional logo) — a CBS-transitional-era Fender dating example; loose fit, not a Telecaster. **NEEDS-JOSH:** IG embeds require the FB Graph token (social.md "NEEDS JOSH" — IG embed token). Only use if Josh confirms the token / accepts script-based blockquote embeds.
- A6 `f-BQno75t94` (YouTube 1961 Tele) — duplicate of §5; YouTube, no blocker.

**Recommendation:** use YouTube only here (A1 / `PIRoB0KHEg0`). Skip the IG reel — it's a Strat, not on-topic enough to justify the IG token dependency. Flag any IG choice as NEEDS-JOSH.

---

### 7. Dataset-schema tables

**§7 Specification Comparison: 1968 vs. 1969** is the one table on this page (10 feature rows × 1968/1969 columns). Per dataset-schema.md's rubric this is a **Tier-2 spec timeline / feature-comparison table, borderline**: it's a two-year feature comparison, not a range→year or code→year lookup, and §1.3 "Not datasets (skip)" explicitly lists "Single-row or two-cell comparison tables (ES-335 vs ES-345)" as too small. This 10-row table is bigger than that, so it's defensible as a small `Dataset` ("1968 vs 1969 Fender Paisley Telecaster specification comparison," `variableMeasured` = Feature / 1968 spec / 1969 spec, `temporalCoverage` = "1968/1969"), but it is **lower priority** than the Tier-1 serial/value tables. Recommendation: mark it ONLY if/when Dataset markup is rolled out blog-wide; do not prioritize ahead of the serial-guide and value-guide tables. If marked, reuse the standard `creator`=`/about-me/#person`, `license`=`imageLicense.photoLicenseUrl`, `publisher`=site pattern from dataset-schema.md §2. The Buyer's Checklist (§6) is a rubric/checklist, NOT a dataset — skip it (matches the §1.3 "authentication checklists" exclusion).

---

### 8. DB fact check

Cross-checked the page's factual claims against `_db-fact-index.txt` (VG-0001..VG-0112).

**Consistent with DB (no conflict):**
- §4 "137-66XX... CTS-manufactured in 1966" — CONSISTENT with **VG-0047** (137 = CTS EIA prefix), **VG-0099/VG-0101** (CTS = 137), and the page correctly frames it as a supply-bin date, matching **VG-0054/VG-0100/VG-0048** ("pot code = earliest possible build date, not the actual date"). Good. The page's claim that finding 1966 pots in a 1969 guitar is "completely correct, not a sign of replacements" is exactly right per these facts.
- §1 / §9 "CBS-era" framing — consistent with **VG-0049/VG-0059/VG-0072** (CBS bought Fender Jan 1965). No conflict.
- §9 "reissues... Japanese Fender catalog since the 1980s" — consistent with **VG-0064** (MIJ era reused letter prefixes). No conflict.

**FLAGS / things to verify:**
- **⚠️ MISSING FROM DB (recommend adding):** The page makes several specific, checkable Paisley-Telecaster claims that have **no corresponding VG fact** — the DB has no Pink Paisley / Blue Flower / Cling-Foil entries at all. Candidates to add (all sourced from the page's own copy; would benefit from a primary citation before entry):
  - Catalog name was **"Paisley Red"** in 1968; launched alongside **Blue Flower** Telecaster (§1).
  - Finish = **Borden Chemical "Cling-Foil"** aluminum foil + edge-burst + polyester clear; clear coat is **polyester (shatters), not nitro (checks)** (§2). The nitro vs. polyester failure distinction is a genuinely useful authentication fact and complements the existing nitro facts **VG-0104** (nitro = DuPont solvent finish) / **VG-0017** (nitro UV fluorescence).
  - **Basswood** body (not Ash/Alder) chosen as a foil canvas (§1).
  - 1968 = **maple-cap fretboard, no skunk stripe**; 1969 = **one-piece maple, walnut skunk stripe + headstock plug** (§3).
  - Date-stamp ink: **black (1968–early 1969) → green (mid-late 1969)** (§3).
  - CBS-era **1MΩ** pots vs. 1950s **250kΩ** (§4) — pairs with the existing pot facts.
  - **"Puzzle piece" neck-plate shadow** test (§5) — a strong, citable authentication method.
- **⚠️ NEEDS A SOURCE before any DB entry — production count:** §9 states "**1968 run at roughly 75 to 100 units**." This is the single hardest claim on the page and is **commonly disputed** in the vintage community (many sources cite higher numbers / no reliable Fender production records for this run, similar to how **VG-0052** notes Fender kept no serial records for amps). The page hedges with "Conservative estimates," which is appropriate, but **do not enter "75-100 units" into the DB as fact without a cited primary source.** Recommend flagging this figure for Josh/Joe to confirm or soften; if it can't be sourced, keep the on-page hedge ("conservative estimates suggest") and do NOT add a hard VG fact.
- **No outright contradictions found** — nothing on the page contradicts an existing VG-#### fact. The originality-matters message (§2, §9, refinish warnings) is fully aligned with **VG-0112** (originality = largest value driver) and **VG-0107/VG-0074** (refin penalty); recommend the FAQ cite these explicitly (see §3 above).

---

**Wrote:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/fender-pink-paisley-telecaster-guide.md` — links: 6-8 new contextual (existing 3 kept; caps noted) | faqs: 1 new FAQPage block, 6 Q/A suggested | flags: 2 DB flags (1 missing-cluster of ~7 Paisley facts to add, 1 unsourced "75-100 units" production count to verify before entry); 0 contradictions.
