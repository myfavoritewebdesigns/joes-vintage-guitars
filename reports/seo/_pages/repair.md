## repair

**Page:** `/repair/` (`src/pages/repair.astro`) · Archetype A conversion page · pivots repair-intent traffic toward appraisal/sell. **Current in-content links: 2 instances → 1 target (`/free-appraisal/`)** in the rust-notice band. Linkgraph flags this page 🔴 under-linked (1 unique out-link). The page is rich with brand-specific case studies (Gibson Les Paul, Fender Strat/Tele, Martin D-28, ES-335, vintage electronics) that currently link nowhere — this is the single biggest miss. The page is ~700 words across 6 prose sections + 6 case cards + FAQ, so ~5-7 well-placed contextual links is the right density (1 per ~120-150 words), never stuffed.

### 1. Internal links to ADD

The page copy repeatedly names exact brands/models that map 1:1 to priority serial guides and sell pages. Add these contextual links. Vary anchors using gsc.md query language. Keep the existing 2 `/free-appraisal/` links; the notice band already carries appraisal CTAs, so push the *body* links toward serial guides + sell pages (which the page never links) and reserve one more appraisal link for the collection/electronics area.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Notice band — "make you a fair offer" sentence (after the existing free-appraisal link) | sell it to me directly | `/sell-a-guitar-collection/` *(or brand-specific sell page)* | Notice already offers "sell rather than repair"; collection page is pos 27.9 / deep p3 and starves for inbound (4 distinct). Adds a sell path the band currently lacks. |
| Case card "The 'Ghost' Headstock Repair — 1957 Gibson Les Paul Standard" body | dating a vintage Gibson by serial | `/how-to-read-gibson-serial-numbers/` | Top link priority (pos 11.5, 12,313 impr, 5-20 band). Card names a Gibson Les Paul; the serial guide is the natural authority cross-link. Use gsc anchor variant ("gibson serial number lookup"). |
| Case card "Ghost Headstock" body — "all-original price" phrase | sell your Gibson | `/sell-my-gibson-guitar/` | Card is Gibson-specific; sell-gibson is pos 11.1 (5-20 band) and brand-query-driven, needs topical "sell gibson" anchors. |
| Case card "The Refret & Fingerboard Plane — 1954 Fender Stratocaster" body | reading Fender serial numbers | `/fender-guitars-serial-number-guide/` | Card names a Fender Strat; Fender SN guide is pos 8.9, 11,646 impr (2nd-highest link priority). |
| Case card "Refret & Fingerboard Plane" — "collector piece or a player" | sell your Fender Strat | `/sell-my-fender-guitar/` | Strat-specific card; sell-fender pos 10.3 (5-20 band), needs topical "sell vintage fender" anchors vs its brand-only queries. |
| Case card "Bracing & Bridge Plate Forensics — 1930s Martin D-28" body | how to date a Martin | `/martin-serial-and-model-numbers/` | Card names a pre-war Martin D-28; Martin SN guide has the highest impressions of all guides (14,980). gsc anchor: "martin serial number lookup". |
| Case card "Bracing & Bridge Plate Forensics" — "what a pre-war Martin is worth" | what your Martin is worth | `/sell-my-martin-guitar/` *(or `/martin-d-28-d-18-d-45-dreadnought-value-guide/`)* | D-28 value/sell relevance; the value guide is the most topically exact match for "pre-war Martin worth." Pick ONE to avoid over-linking the card. |
| Case card "The Refinish 'Tell' — 1952 Fender Telecaster" — "$65,000 versus $25,000" | how refinishing affects value | `/sell-my-fender-guitar/` *(Tele context)* | '52 Tele "Blackguard" era card; reinforces sell-fender. Alternatively link the value point to `/vintage-fender-telecaster-value-guide/`. Use only one Fender link per card. |
| Case card "The Solder-Joint Audit — Vintage electronics" body | sell a vintage amp or effect | `/sell-an-amplifier-or-effect/` | Electronics/solder card maps to amp-and-effect sell page (pos 8.9, only 3 distinct inbound). Closest topical home for an "electronics" card. |
| "From the Bench to the Showroom" — "appraising, buying, and selling fine vintage instruments" | buying and selling | `/sell-a-guitar-collection/` *(buying)* + `/free-appraisal/` *(appraising)* | Sentence literally lists the three services; link "selling" to a sell hub and reserve the appraisal link here only if not already over-dense (the notice band has 2). Prefer the collection link to spread equity to the deep-ranking page. |

Notes on density/anchor variety: that is 9-10 candidate links across ~700 words + 6 cards. Drop to ~6-7 if any section starts to feel link-heavy — prioritize the **Gibson SN, Fender SN, Martin SN** guides (all in the 5-20 band, highest upside) and the **sell-gibson / sell-fender** pages (5-20 band). The collection page is the highest-upside long shot (pos 27.9) — give it at least one link. Do NOT reuse "free appraisal" again as anchor (already at 19 site-wide); the band's two existing links cover that target.

### 2. Section-level related posts

| Section | Related reading block? | Suggested posts/guides |
|---|---|---|
| "The Luthier's Edge in Valuation" (truss-rod, hide-glue, geometry, "real thing or a story") | Yes — fits well | `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/`; `/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/` (how value is actually judged) |
| "From the Bench to the Showroom" (how it's been "messed with over fifty years") | Optional — light touch | `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/`; `/post/brass-nut-vintage-guitar-tone/` (the cost of "upgrading"/modding — directly about mods hurting value) |
| Case studies — Gibson Les Paul / ES-335 cards | Yes — strong topical fit | `/post/1954-gibson-les-paul-goldtop-authentication-guide/`; `/post/1959-gibson-es-335-authentication-guide/`; `/post/how-the-year-of-manufacture-of-your-vintage-gibson-guitar-affects-its-price/` (highest-traffic Gibson post) |
| Case studies — Fender Strat / Tele cards | Yes | `/post/1952-fender-telecaster-authentication-guide/` (exact match to the '52 Tele refinish card); `/post/1962-fender-stratocaster-authentication-guide/` |
| Case studies — Martin D-28 card | Yes | `/post/how-to-determine-the-value-of-your-old-martin-acoustic-guitar/`; `/martin-d-28-d-18-d-45-dreadnought-value-guide/` |
| Case studies — "Solder-Joint Audit" / vintage electronics | Optional | `/post/brass-nut-vintage-guitar-tone/` (modification-vs-originality theme); the amp serial guide `/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/` |

Recommendation: a single inline "Related reading" block at the **end of the case-studies section** (covering the 3-4 strongest model posts) is cleaner than one per card, given the cards are short. The Luthier's-Edge and Bench-to-Showroom sections can each carry one inline "Related reading" link rather than a full block.

### 3. FAQ gaps

The page already has a 7-question FAQ (appraisal/repair-background focused) but no `FAQPage` JSON-LD is emitted (only BreadcrumbList) — **add FAQPage schema** for this existing FAQ. The FAQ itself is solid but two topic gaps would help:

**Gap A — the case-studies section has no FAQ** tying the "repair eye catches value" theme to seller intent:
- **Q: "Does a past repair always lower a vintage guitar's value?"** A: Not always — a routine refret is normal maintenance, but a refinish or a headstock graft can drop value sharply (the page's own ES-335 example: a hidden heel graft cut value ~40%). *DB: VG-0110 (refret = routine), VG-0107/VG-0074 (refin ~-40%), VG-0112 (originality is the dominant value driver).*
- **Q: "How much does a refinish hurt the price?"** A: Roughly 40% on average for a vintage Fender; the page's '52 Telecaster case shows ~$65k all-original vs ~$25k refinished. *DB: VG-0074 (~-40% refin penalty), VG-0073 (custom-color premium).*

**Gap B — no FAQ addressing the "I still want a repair done" visitor** (the notice band's audience):
- **Q: "Will you ever take on a repair?"** A: Only in very limited cases; the best help is usually an honest valuation and, if you'd rather sell than fix it, a fair offer. *(page copy, no DB fact needed)*
- **Q: "Can you recommend who should do the repair?"** A: *(NEEDS-JOSH — page doesn't state a referral policy; confirm before adding.)*

### 4. Relevant reviews (from reviews-videos.md)

| Review | Section to place it | Why it fits |
|---|---|---|
| **R14 — Scott Wolfe, Martin nut repair (b-string buzz)** | Notice band / "From the Bench to the Showroom" | The ONLY repair-specific review in the catalog and explicitly flagged "best-fit: /repair/". Direct proof of Joe's bench work. Place as a small quote near the notice or bench section. |
| **R17 — Adam Kirkpatrick, "expert of the highest order"** | "The Luthier's Edge in Valuation" | Reinforces the expertise claim that whole section makes. |
| **R15 — Amy B., "consummate professional, encyclopedic"** | Case studies intro | Backs the "details easy to miss without time on the bench" credibility. |

R14 is the standout — it is the catalog's designated repair-page review. R15/R17 are about-Joe credibility blurbs that suit the expertise-heavy sections.

### 5. Relevant videos (from reviews-videos.md)

All three repair-bench demos map here (catalog flags them "best-fit: /repair/"), plus the social.md repair video:

| Video ID | Title | Section to embed |
|---|---|---|
| **tVctVqGi7Q0** | Guitar Repair: How To Fix Scratchy Knobs or Pots | "Solder-Joint Audit" / electronics case card — exact topical match (electronics/pots) |
| **hiWq_dZ446U** | How to Replace Plastic Buttons on Kluson Tuners | "From the Bench to the Showroom" (hardware/bench work) |
| **l-YFKJR-l78** | How To Turn a Left-Handed Guitar Into a Right-Handed Guitar (33k views — top repair performer) | "The Luthier's Edge in Valuation" or hero area — highest-view repair video, strong dwell/engagement |
| **s9OvOhv78gk** | How To Extract a Broken Stratocaster Tremolo Arm (1.2k, from social.md C3) | "The Refret & Fingerboard Plane — 1954 Strat" case card (Strat + bench-repair theme) |

Recommendation: embed **l-YFKJR-l78** (top performer) once near the top to set the bench-experience theme, and **tVctVqGi7Q0** beside the electronics case card. The page currently embeds zero video — even one `<lite-youtube>` here adds dwell time and concrete proof of the repair background the whole page leans on.

### 6. Social embeds (from social.md)

| Item | Platform | Section | Flag |
|---|---|---|---|
| **C3** — "How To Extract a Broken Stratocaster Tremolo Arm" (YT, 1.2K) | YouTube | Strat case card / repair theme | Clean YT embed, no token. Best fit. |
| **D3** — "Vintage Guitar Repairs at Joe's" (Pinterest promo graphic) | Pinterest | Notice band | Low embed value (promo graphic, not a demo). Skip embedding; if anything, link the Pinterest profile. |

This page has **no Instagram-equivalent repair content** in the scrape. The only true social asset is the YouTube tremolo-arm video (C3, same as video s9OvOhv78gk above). **NEEDS-JOSH:** TikTok handle is unresolved (social.md "NEEDS JOSH") — if a repair clip exists there, it could suit this page, but the handle returns NOT_FOUND; confirm before relying on it. No Facebook repair post exists in the scrape.

### 7. Dataset-schema tables

**None.** This page has no reference/lookup tables (no serial ranges, no price matrices, no spec timelines) — it is prose + case-study cards + FAQ. dataset-schema.md explicitly lists case-study callouts and FAQ accordions as "Not datasets (skip)." No `Dataset` markup applies here. (The only schema action for this page is adding **FAQPage** JSON-LD for the existing 7-Q FAQ — see §3 — which is FAQPage, not Dataset.)

### 8. DB fact check

The page's factual claims are qualitative/illustrative (case-study dollar figures and a 40% value drop), not hard serial-range or production-count assertions, so there is little to contradict. Cross-check results:

- ✅ **"a professional heel graft… dropped the real value by about 40%"** (ES-335 card) — consistent with VG-0074 (refinishing ≈ −40%) and VG-0107 (a non-original refin penalty). The 40% figure for a *structural graft* is plausible and in the same range; not contradicted. **Caveat:** VG-0074's −40% is specifically the *refinish* penalty, not a graft — the page applies a similar magnitude to a different repair. Not wrong, but it is an estimate, not a cited DB fact.
- ✅ **"$65,000 versus $25,000" for an original vs. refinished 1952 Telecaster** — directionally consistent with VG-0074 (refin penalty) and VG-0069 (1950–mid-1954 "Blackguard" Tele era, the most collectible). The specific dollar pair is not in the DB and is presented as Joe's market read, not a lookup — acceptable as expert opinion, not a verifiable claim.
- ✅ **"a $40,000 instrument if the neck is straight and the electronics are untouched"** (FAQ) — restates VG-0112 (originality is the single largest value driver) and VG-0106 (all-original definition). Consistent.
- ✅ **"Vintage solder looks and ages differently than modern work"** + blacklight/bore-camera methods (FAQ) — consistent with VG-0017/VG-0018 (UV blacklight reads aged nitro but has blind spots). No contradiction. Note: the page says blacklight is used to "read finishes," which matches VG-0017; it doesn't overclaim, good.
- ⚠️ **No WRONG facts found.** The page makes no serial-number, date, or production-count claim that could conflict with VG-#### facts.

**Facts on this page worth ADDING to the DB** (none are currently captured as VG-#### facts):
- A professional/"invisible" heel graft on a Gibson archtop (ES-335-class) can reduce value by ~40% even when it fools dealers as all-original. *Source: Joe Dampt (this page, "Invisible Heel Graft" case).* Worth capturing as an originality/repair-impact fact alongside VG-0074/VG-0107 since it generalizes the refin penalty to structural neck repairs.
- A quality pro refinish on a vintage Fender can be detected by **witness lines around the body edges** even when the finish "looks original at a glance." *Source: Joe (this page, "Refinish Tell" case).* This is a concrete authentication tell not present in the DB (which covers UV/pot-codes/neck-dates but not witness-line edge detection) — a useful addition.
- Reading **vintage solder joints + component aging** is a method for confirming whether electronics are untouched/original. *Source: Joe (this page).* Complements the pot-code facts (VG-0099/VG-0100) with a hands-on electronics-originality method.

These are first-party expert claims from Joe; recommend adding with "source: Joe Dampt, repair page" provenance, flagged as expert-judgment (not a published spec) so they're weighted accordingly.

---

**Path:** `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/repair.md` · links to add: 9-10 (trim to ~6-7) · FAQ gaps: 2 sections / 4 suggested Q&A (+ add FAQPage JSON-LD to existing 7-Q FAQ) · DB flags: 0 wrong, 3 facts recommended for addition.
