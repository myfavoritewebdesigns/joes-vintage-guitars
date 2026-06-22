## sell-my-martin-guitar

> Page: `/sell-my-martin-guitar/` (Archetype A conversion). Source: `src/pages/sell-my-martin-guitar.astro`.
> Current in-content state: **6 internal out-links** (intro/Meet-Joe link to `/about-me/`, How-To-Sell → `/contact-me/`, Discover-Value → `/free-appraisal/` + `/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/` + `/martin-serial-and-model-numbers/`, banner + Electric-model card → `/martin-serial-and-model-numbers/` and `/post/martin-d18e-vs-d28e-authentication-guide/`). Only **6 distinct inbound** from the rest of the site (linkgraph §2). Page sits at **pos 9.1, 2,066 impr** with top query "sell martin guitar" at pos 16.2 — a clear page-1 climb candidate, so adding the right OUTBOUND links (and pulling more in) is high-value.
> This page is link-poor for its length (~1,400 words, 13 sections). Rule of thumb ~1 link per 120-180 words → it could support 8-10 in-content links comfortably; it currently has 6 and several are clustered in one paragraph. Spread them.

### 1. Internal links to ADD

The page already links to `/free-appraisal/`, `/martin-serial-and-model-numbers/`, `/contact-me/`, `/about-me/`, and the two Martin posts. Do NOT duplicate those anchors. The additions below put contextual links where the copy already names a topic and route equity toward priority targets that this page can naturally reach (sibling sell pages, the collection/amp pages, the D'Angelico page, and a second appraisal link with varied anchor).

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| §2 Intro lede — "I travel the U.S. … buy your Martin" sentence; and the brand list "D-18s, D-28s, 0-18s…" mentions models but no value-guide link | dreadnought value guide for the D-28, D-18 and D-45 | /martin-d-28-d-18-d-45-dreadnought-value-guide/ | The single most topically-aligned page not yet linked; that guide already links BACK here ("Sell your Martin to me"), so this closes a high-relevance loop. Anchor uses a GSC-style descriptive phrase, not "click here." |
| §4 How To Sell — "I travel all over the country buying acoustic guitars" / "if you have a whole collection" sentiment | selling a whole guitar collection | /sell-a-guitar-collection/ | `/sell-a-guitar-collection/` is deep (pos 27.9) and needs inbound equity (gsc.md flags it as highest-upside). Travelling-buyer copy is the natural hook. Only 4 pages link to it site-wide. |
| §4 How To Sell — "prepaid packing and shipping … fully insured … fragile vintage acoustic" | how I pack and ship a vintage guitar | /jvg-shipping-process/ | `/jvg-shipping-process/` is an ORPHAN (0 in-content inbound, linkgraph §3). This sentence is the only place on the page that's about shipping logistics — perfect, non-forced rescue link. (If `/jvg-shipping-process-2/` is the canonical one, link that instead — confirm which is live.) |
| §6 Where To Sell — "selling privately … platforms like Reverb.com … high selling fees" | the best places to sell a vintage guitar | /post/best-online-platforms-sell-vintage-guitars/ | The section is literally a sell-privately-vs-dealer comparison; this post is the on-topic deep-dive. Keeps the reader on-site instead of only sending them to Reverb (external). |
| §6 Where To Sell — "buyer disputes," "forced return," first-time seller risk | common mistakes when selling a vintage guitar | /post/mistakes-to-avoid-when-selling-a-vintage-guitar/ | Directly reinforces the "don't sell privately blind" argument; adds a second internal link to a section that currently has only one outbound (the external Reverb link). |
| §5 Discover The Value — second sentence "free appraisal with a clear answer" (the existing link is on "free appraisal"; add a varied-anchor second touch near "what the guitar is actually worth") | what your Martin is worth | /free-appraisal/ | `/free-appraisal/` is the #1 link-needy conversion page (pos 16.1; 55 inbound but it converts). A second contextual touch with a DIFFERENT anchor ("what your Martin is worth" — matches GSC intent) is fine on a long page; vary from the existing "free appraisal." |
| §11 Top Dollar grid — "Martin Electric Models" card already links the D-18E/D-28E post; the other 7 cards link nothing | (per-card) Pre-War D-18 dreadnought value / herringbone D-28 values / etc. | /martin-d-28-d-18-d-45-dreadnought-value-guide/ (D-18, D-28, D-45 cards) | OPTIONAL / light touch — add ONE link from the D-45 card ("the rare early production numbers" → dreadnought value guide) rather than linking all 8 (that would over-stuff the grid). One card link is enough; the value guide already gets a body link above, so this is secondary. |
| §10 Consider Selling / Linda case study — "I write those stories up … put them in the case" | other original-owner Martin stories | /category/museum-original-owners/ | Provenance-story copy maps exactly to the Museum & Original Owners archive (currently only 6 out-links of its own, link-starved category). Soft relevance, only add if you want a 4th body link here; skip if density feels high. |

**Cross-link siblings (lower priority, only if natural):** the page never mentions other brands, so forcing `/sell-my-gibson-guitar/` etc. would be irrelevant — DON'T. The brand-sibling links belong on the homepage/footer (which already carry them), not in this Martin-only body copy. Keep this page's outbound links Martin/acoustic/sell-process specific.

**Density check:** adding the 5-6 "must" rows above brings the page from 6 → ~11-12 in-content links over ~1,400 words = ~1 per 120 words. That's the upper-moderate end; if it reads stuffed, drop the two "OPTIONAL" rows (Top-Dollar card + Museum category) first.

### 2. Section-level related posts ("Related reading" blocks)

A small inline "Related Reading" block fits cleanly under three of the long sections. Recommend a shared `.smm-related` styled list (cream card, 2-3 links) — NOT one per section (that's too many on a conversion page).

| Section | Fits a "Related reading" block? | Posts to advertise |
|---|---|---|
| §5 Discover The Value | YES (best fit) | `/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/` (already linked inline — keep), `/martin-d-28-d-18-d-45-dreadnought-value-guide/`, `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/` |
| §6 Where To Sell For The Best Price | YES | `/post/best-online-platforms-sell-vintage-guitars/`, `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/`, `/post/what-to-consider-when-selling-a-vintage-guitar/` |
| §10 Consider Selling / Linda case study | OPTIONAL — story, not research; a related block competes with the emotional beat | If used: `/post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/` only (one link, framed as "have a whole collection?") |
| §3 Meet Joe / §7 Buying Process | NO | Trust/process sections — a research block dilutes the CTA. Skip. |

If only ONE related block is added, put it under **§6 Where To Sell** — it's the most research-heavy section and the posts there are the strongest sell-process content.

### 3. FAQ gaps

The page has a 5-question FAQ (§12) covering appraiser choice, paperwork, value factors, sought-after models, and documentation. Genuine gaps where a Q/A would help, drawn from the page's own topics:

- **§4/§6 (shipping) has no FAQ coverage.** Add: **"How do you ship a fragile vintage Martin safely?"** A: prepaid, fully-insured, dealer-grade packing for temperature/humidity-sensitive acoustics; Joe covers cost and materials. (No DB fact needed — service claim. Note Martins react to temp/humidity, supportable as general lutherie knowledge.)
- **Serial/dating gap.** Add: **"Where is the serial number on my Martin and what year is it?"** A: stamped on the neck block inside the body, visible through the soundhole; Martin's continuous sequential series since 1898 dates it. **Cite VG-0077** (serial on neck block, through soundhole) and **VG-0082** (one continuous sequential series since 1898). Link the answer to `/martin-serial-and-model-numbers/`.
- **Pre-war value gap (the FAQ mentions "pre-war" but never defines it).** Add: **"What makes a pre-war Martin so valuable?"** A: herringbone trim, scalloped (forward-shifted) bracing, Brazilian rosewood, and pre-1944 construction. **Cite VG-0079** (pre-war = pre-1944), **VG-0075** (herringbone), **VG-0076/VG-0084** (scalloped/forward-shifted bracing), **VG-0080** (herringbone scalloped D-28 among most valuable). This directly strengthens the §11 model-card claims.
- **Brazilian rosewood gap.** Add: **"Are Brazilian rosewood Martins worth more than later models?"** A: yes; Martin used Brazilian rosewood through 1969 then switched to East Indian rosewood (a supply shortage, not CITES). **Cite VG-0088/VG-0089** (switch in 1969) and **VG-0109** (the switch was supply, not CITES — important honesty point, the page/FAQ should not repeat the common CITES myth).

2-4 additions recommended; the shipping + serial questions are the highest-value (they also create natural inbound-link anchors to the serial guide and shipping page).

### 4. Relevant reviews (from reviews-videos.md)

Both Martin-specific curated reviews map cleanly to this page. Note: §8 already renders 3 Martin reviews from `reference/martin-testimonials.json` — confirm overlap before adding (R12/R13 may already be among those three).

| Review | Section to place | Use |
|---|---|---|
| **R12 — Adrienne Young** (sold a 1920s Martin, courteous/trustworthy) | §8 Testimonials, or as a pull-quote under §4 How To Sell | Direct Martin-sale social proof. Pairs with the §10 "nearly 200 years old" / 1923 0-21 vintage-Martin theme. |
| **R13 — Tony Michaud** (appraised a Martin D-18, "super nice") | §5 Discover The Value (appraisal-focused) OR §7 Buying Process card "Precise Martin Identification" | D-18 + appraisal match — reinforces the value/identification claim with a named Martin owner. |
| Reverb: **Happy A. — Martin OM-28V** ("arrived intact even in a cold winter") | §6 Where To Sell / §4 shipping | Quote-ready proof that Joe ships fragile acoustics safely through bad weather — reinforces the insured-shipping argument exactly. |
| Reverb: **Nicolas L. — Martin Mark Knopfler HD-40MK** ("will buy again") | §8 Testimonials masonry (extra card if bumping 3→6) | If the page later matches Fender v10's 6-review pattern, this is a clean second Reverb Martin pull. |

### 5. Relevant videos (from reviews-videos.md)

| Video ID | Title | Section to embed |
|---|---|---|
| **WGF-pL6GB38** | Where to Find the Serial Number on a Martin Guitar | §5 Discover The Value (right next to the existing `/martin-serial-and-model-numbers/` link) — the §2 intro photo is literally "Model Name and Serial Number on a Martin," so a "where's my serial" video is on-theme. Also pairs with the suggested serial FAQ. |
| **TPJPmo_C45k** | 1962 Martin F-55 Demo (3k views) | §11 Top Dollar grid intro, or §10 case study — a real Joe-owned vintage Martin playing, strong dwell-time proof on the "we buy these" grid. |
| **NI4xTQulXTU** (social.md A17) | 1930 Martin 0-18 (2.9k — top-performing Short) | §10 Consider Selling / Linda — Linda's guitar is a **1950s Martin 0-18**; a 0-18 Short is a near-exact model match for that story. Highest-relevance embed on the page. |
| **9QrrOvZHwUU** (social.md A18) | Martin 2-1/2-17 (1860s), museum condition | §10 — supports the "nearly 200 years old" Martin theme from the §8 IG caption; optional second clip. |

The page already embeds the **fTpIquyV-j8** "Meet Joe" lite-youtube in §3 — keep that; the additions above are content demos, not the intro.

### 6. Social embeds (from social.md)

§8 already hardcodes 3 Instagram reels (DV_coYfkz5t / DV85bu_k2_w / DVooAQEDxVi — the 1923 0-21, the ~200-yr-old Martin, the 1966 D-28). Those are good and on-brand; keep them. Additional candidates:

| # | Embed | Section | Note |
|---|---|---|---|
| A17 (YT Short) | youtube.com/shorts/NI4xTQulXTU — 1930 Martin 0-18 | §10 (Linda's 0-18 story) | Best model-match on the page; see §5 above. |
| A18 (YT Short) | youtube.com/shorts/9QrrOvZHwUU — 1860s Martin 2½-17 museum piece | §10 / §8 | Matches the "almost two centuries old" caption already in the existing IG set. |
| C7 (IG post) | instagram.com/p/DYz-G_jluKS/ — "gems that just hit our Reverb" incl. '49/'60/'51 Martins | §11 Top Dollar grid or a "current Martins" callout | Cross-promotes live Martin inventory; **NEEDS-JOSH** (IG embed token — see social.md "Instagram embed token" item; blockquote+embed.js works unofficially). |

**NEEDS-JOSH flags carried from social.md:** (1) IG oEmbed token not confirmed — the existing 3 reels and any new IG embed rely on the unofficial blockquote+`embed.js` path. (2) TikTok handle invalid/not-found — no TikTok embeds available for this page. (3) Reverb has no embed widget — C7's Reverb cross-link is a deep link only, not an iframe.

### 7. Dataset-schema tables

**None.** This page has no reference/lookup tables — the §11 "Receive The Best Cash Deal" grid is 8 model marketing cards (image + prose), not a key→value matrix, and the FAQ is already covered by `FAQPage`. dataset-schema.md explicitly scopes `Dataset` markup to the Archetype-B serial/value-guide pages (Fender SN, Gibson SN, amp tube-chart, and the value-guide price matrices). The Martin Dataset target is `/martin-d-28-d-18-d-45-dreadnought-value-guide/` (its price matrix), **not** this sell page. No action here. The page's existing `FAQPage` + `BreadcrumbList` + `Article` + image `ImageObject` graph is the correct schema set.

### 8. DB fact check

Cross-checked every factual claim on the page against the VG index. **No contradictions found** — the page is conservative (mostly model names + service claims, light on hard dates). Findings:

**Claims that are CONSISTENT with the DB (no change needed):**
- §2/§7/§11 "Pre-War and Golden Era D-18s," "scalloped bracing and Adirondack spruce tops," "pre-war Dreadnoughts" — consistent with **VG-0076** (scalloped bracing = most resonant pre-war), **VG-0079** (pre-war ≈ pre-1944), **VG-0084** (forward-shifted scalloped X-bracing).
- §11 D-28 card "Brazilian Rosewood models from the 1930s through the late '60s" — consistent with **VG-0088/VG-0089/VG-0109** (Brazilian rosewood standard through 1969). The "late '60s" wording is accurate (switch was 1969/1970). ✅ Good — does not repeat the CITES myth VG-0109 warns against.
- §11 D-28 "vintage herringbone D-28s" + §6/§11 high-trim claims — consistent with **VG-0075** (herringbone purfling, pre-war D-28) and **VG-0085/VG-0087** (herringbone discontinued 1947). Page doesn't assert a specific herringbone end-date, so no risk.
- §11 OM card "how rare the 1929 to 1933 era is" for Orchestra Models — historically accurate (OM production 1929-1933 before the 14-fret 000 absorbed it); not in the DB but not contradicted.
- §11 D-45 card "I know the original abalone pearl inlay and the rare early production numbers" — consistent with **VG-0081** (D-45 halted 1942, reintroduced 1968 → pre-war D-45s genuinely rare/low-production). No date asserted, so safe.
- §6 "high-end acoustic worth over $4,000" / §8 "top dollar" — value framing, no specific figure to check against VG price facts. Fine.

**Solid facts ON the page worth ADDING to the DB (currently missing):**
- **Martin OM (Orchestra Model) production ran ~1929-1933** (from §11 OM card "how rare the 1929 to 1933 era is"). The DB has D-28/D-18/D-45/herringbone/bracing/rosewood facts but **no OM-specific date fact**. Recommend a new VG entry: *"The Martin Orchestra Model (OM) was produced roughly 1929-1933 before the 14-fret 000 superseded it; original OMs from that window are highly sought after."* Source visible on-page (Joe's claim); corroborate against Martin archive before committing.
- **The 0-18/0-21/0-28 ("Single-0") and 00 ("Grand Concert") body-size naming + 12-fret vs 14-fret configurations** (§11 cards "early concert-sized guitars," "rare 12-fret and 14-fret configurations"). The DB has VG-0078 (size/style stamped on neck block from Oct 1930) but **no body-size taxonomy fact** (0 = Concert, 00 = Grand Concert, 000 = Auditorium, D = Dreadnought). Recommend adding a Martin body-size reference fact — it underpins claims on this page, the dreadnought value guide, and the Martin serial guide.

**No WRONG facts to flag.** The page is clean; its main DB-relevant risk (the Brazilian-rosewood/CITES myth, VG-0109) is correctly avoided.

---

**Wrote:** `reports/seo/_pages/sell-my-martin-guitar.md` — internal links to add: **6 priority + 2 optional** (8 total) · FAQ gaps: **4** · DB flags: **0 wrong, 2 missing facts to add** (Martin OM 1929-1933 era; Martin body-size taxonomy). Also: 2 curated + 2 Reverb reviews mapped, 4 videos mapped, 3 social embeds (1 NEEDS-JOSH), 0 Dataset tables.
