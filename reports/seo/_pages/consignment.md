## consignment

`src/pages/consignment.astro` — Archetype A conversion page, currently **0 in-content internal links** (confirmed 🔴 under-linked in linkgraph.md). Six prose/card sections plus PageHero and ContactSection. The page is almost all `<p>` and card data arrays; the highest-value move is seeding contextual links where the copy already names a topic (authentication, valuation, marketing, fees, shipping, buyer network). Density target on this ~700-word page: 6 to 9 in-content links total, never two in the same short paragraph.

---

### 1. Internal links to ADD

The copy lives in two places: inline `<p>` blocks in the sections, and the card `b:` strings in the `advantages` / `steps` / `tips` / `why` arrays. Card body text is the natural anchor home for most of these. Anchors varied per gsc.md query data; never repeat an exact anchor.

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Hero subhead ("...buyer network built over a decade") OR "What Consignment Is" closing line | get a free valuation first | /free-appraisal/ | `/free-appraisal/` is pos 16.1 (page 2) and the single most link-starved high-intent page (needs inbound most). Consignment visitors are pre-qualified sellers — perfect funnel. Use the high-intent "valuation/appraisal" query family. |
| "What Drives a Top-Dollar Sale" → "Honest Authentication" para ("$100,000+ if it's original and around $13,000 if it's been refinished") | what an original vs refinished instrument is worth | /free-appraisal/ | This claim is exactly the value-driver content `/free-appraisal/` and the value guides cover; contextual and reinforces the appraisal funnel. (Vary anchor from the hero link above.) |
| "Honest Authentication" para (serial/originality framing) | check your guitar's serial number and era | /how-to-read-gibson-serial-numbers/ | Biggest single SEO opportunity per gsc.md (pos 11.5, 12,313 impr). "Authentication" copy is a natural bridge to a dating guide. Pick Gibson as the highest-volume guide, or rotate to Fender. |
| Same para, second link OR "Send It Over" step | date a vintage Fender by its serial | /fender-guitars-serial-number-guide/ | Second-priority serial guide (pos 8.9, 11,646 impr). Use Fender anchor to diversify from the over-used "Fender serial number guide" (14x site-wide). |
| `advantages` card "Real Marketing" (b: demo video / accurate listing) | sell your vintage guitar the right way | /sell-a-guitar-collection/ OR /sell-my-fender-guitar/ | Consignment vs outright-sale are the two seller paths; cross-link so visitors who'd rather sell outright find the sell pages. `/sell-a-guitar-collection/` is pos 27.9 and needs links most. |
| `why` card "A Real Buyer Network" (b: collectors/buyers network, sells almost immediately) | my network of collectors and buyers | /sell-my-gibson-guitar/ OR /sell-my-fender-guitar/ | Both sell pages are pos 10-11 in the 5-20 band (link FIRST per gsc.md §3). Brand-query driven, need topical anchors. Rotate brand per build. |
| `steps` card "Sale & Payment" (b: "full insurance and shipping") | how I pack, insure, and ship every guitar | /jvg-shipping-process/ | `/jvg-shipping-process/` is an ORPHAN page (0 in-content inbound, 0 out) — this is the only natural place on the site to link it. Shipping copy already present in the step. High de-orphaning value. |
| `tips` card "Document Its History" (receipts, paperwork, original case adds value) | what makes a vintage guitar valuable | /free-appraisal/ OR a value-driver blog post | Reinforces the value-driver theme; or point at `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/` for a softer editorial target. Keep to one `/free-appraisal/` link if already used twice above — swap to the blog post to avoid over-linking one target. |
| `why` card "Low, Honest Fees" (8% consignment fee) — OPTIONAL | how selling outright compares to consignment | /post/how-to-sell-a-large-guitar-collection-every-option-honestly-explained/ | That post explicitly frames consignment vs outright vs auction; strong topical match and it already links OUT heavily, so it's a good hub to connect to. Optional — only if total link count stays ≤9. |

Anchor-diversity note: linkgraph.md shows "Fender serial number guide" used 14x, "free appraisal" variants dozens of times, "Consignment" 5x. The anchors above deliberately use full-sentence/descriptive phrasing pulled from gsc.md query families ("vintage guitar appraisal," "sell vintage fender," "dating gibson guitars") rather than the stock exact-match anchors, to avoid adding to the over-reuse.

---

### 2. Section-level related posts

Inline "Related reading" blocks are worth adding to the longer prose sections; the short 4-card grids do not need them.

| Section | Related-reading block? | Suggested posts/guides |
|---|---|---|
| "What Vintage Guitar Consignment Is" | No | Too short/intro — keep clean. |
| "Why Consign Your Vintage Guitar" (advantages cards) | Optional, small | `/post/best-online-platforms-sell-vintage-guitars/` and `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/` — both compare selling routes, directly relevant to "why use a pro." |
| "How the Consignment Process Works" (steps) | No | Process is self-contained; the shipping link in step 04 covers it. |
| "What Drives a Top-Dollar Sale" | **Yes — best fit** | `/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/`, `/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/`, and `/post/what-to-consider-when-selling-a-vintage-guitar/`. This section is entirely about value drivers (originality, condition, authentication) — a 2-3 link "Related reading" block belongs here. |
| "Tips for a Smooth Consignment" (tips cards) | Optional | `/post/mistakes-to-avoid-when-selling-a-vintage-guitar/` pairs naturally with a "tips" section. |
| "Why Consign With Joe's Vintage Guitars" | No | Trust/closer section; keep CTA-focused, no editorial links. |

---

### 3. FAQ gaps

The page has **no FAQ at all**, which is a miss for an Archetype A page (free-appraisal, sell-fender, sell-gibson all carry FAQPage JSON-LD). Add a `FAQPage`-marked accordion before ContactSection. Suggested Q/A drawn from the page's own topics:

1. **Q: How much does it cost to consign a guitar with Joe's Vintage Guitars?**
   A: Consignment fees start as low as 8% for top-tier vintage instruments, with no hidden or surprise charges. (Direct from the `why` array — verify the 8% figure is still current with Joe; not a DB fact.)
2. **Q: How long does consignment take, and is there a minimum period?**
   A: There is no minimum consignment period, and with an established buyer network a guitar sometimes sells almost immediately. You keep ownership until it sells.
3. **Q: Should I consign or sell my vintage guitar outright?**
   A: Consignment usually nets a higher final price because of professional marketing and a worldwide audience, but an outright sale is faster. Originality is the single largest driver of either number (**VG-0112**) — a refinished instrument can be worth a fraction of an all-original one (**VG-0074**: refinishing a vintage Fender reduces value by roughly 40% on average; **VG-0107**). Get a free valuation to compare. (Links to /sell-* pages + /free-appraisal/.)
4. **Q: How do you handle shipping and insurance once my guitar sells?**
   A: Joe handles full insurance and shipping and pays you by wire transfer, cash, check, or electronic transfer. (From the `steps` array; pair with the /jvg-shipping-process/ link.)

A FAQPage block also satisfies the same E-E-A-T/JSON-LD pattern used on the sibling conversion pages.

---

### 4. Relevant reviews

reviews-videos.md notes `/consignment/` has no dedicated curated review, but several collection/appraisal reviews fit the section themes (none are flagged as already placed on conversion pages except R1-R6 on sell-my-fender):

| Section | Review | Why |
|---|---|---|
| "Why Consign Your Vintage Guitar" (advantages — higher price, worldwide audience) | **R6 Marie Coyle** (brother's collection, out-of-state, fast) or **R7 Judy Anziano** (sister sold 38 guitars, knowledgeable) | Demonstrates the worldwide-reach / less-hassle advantages with a real out-of-state, multi-guitar story. |
| "What Drives a Top-Dollar Sale" (authentication, fair price) | **R16 Mateo Cavestany** (fair appraisal for vintage Gibson) or **R26 D. Angelino** ('76 Les Paul Custom valued by Joe personally) | Both speak to expert authentication producing a fair value — the section's core claim. |
| "Why Consign With Joe's Vintage Guitars" (trust/closer) | **R15 Amy B.** ("consummate professional, encyclopedic") or **R17 Adam Kirkpatrick** ("expert of the highest order") | About-Joe credibility blurbs; ideal social proof in the trust-closer section. Verify not double-used vs about-me. |

---

### 5. Relevant videos

reviews-videos.md maps the **Esteban classical-guitar series** specifically to `/consignment/` (specialty consignment). Plus collection-buying videos fit the advantages/process sections:

| Section | Video | Why |
|---|---|---|
| "What Vintage Guitar Consignment Is" or trust-closer | **Esteban series**: nOiDCkWU6ZY (Kenny Hill Munich), bIRrmgc6yhg (Kohno Professional J), rk7phE5ICp0 (2003 Francisco Navarro Garcia), XiFbQUVMeYI (Buscarino Artisan) | These ARE consigned high-end instruments — the literal proof-of-concept for the consignment service. Embed one (the Kohno or Navarro) as a "consignment in action" example. |
| "Why Consign Your Vintage Guitar" (worldwide audience / real marketing) | **SFjsaZsEHqI** "Buying Over 100 Vintage Fender Amps & Rare Guitars" (11.3K, top channel video) | Shows the scale and reach of Joe's operation — supports the "worldwide audience / real buyer network" advantage. |
| "What Drives a Top-Dollar Sale" (the setup to actually sell it / demo video) | **uSu-Ld-xgnI** "Free Vintage Guitar Appraisal" | The section mentions Joe shoots demo videos and runs a busy shop; the appraisal explainer reinforces the infrastructure claim and ties to the /free-appraisal/ link. |

Embed pattern already in use: `<lite-youtube videoid="...">`.

---

### 6. Social embeds

social.md has two Pinterest and two high-value Instagram items mapped directly to consignment:

| Section | Embed | Notes |
|---|---|---|
| "What Vintage Guitar Consignment Is" or a new "Recently Consigned" block | **C7** IG `https://www.instagram.com/p/DYz-G_jluKS/` — "A few gems that just hit our Reverb" ('49/'60/'51 Martins, '62/'71 ES-335s) | Maps to consignment / new-arrivals; cross-links to Reverb. **NEEDS-JOSH**: IG oEmbed needs the FB Graph token (or accept script-based blockquote) — see social.md NEEDS JOSH. |
| Same block | **C8** IG `https://www.instagram.com/p/DZGgqQrj1Cv/` — 1960s Gibson fretless bass conversion now on Reverb (2.4K, top IG post) | Mapped to consignment / Reverb cross-link; strongest-performing IG post. Same **NEEDS-JOSH** IG-token caveat. |
| Trust-closer / footer of page | **D2** Pinterest `https://www.pinterest.com/pin/952581758698112045/` — "Guitar Consignment Made Easy" | Promo graphic mapped to consignment. Low embed value (social.md verdict: prefer linking the Pinterest profile over embedding promo pins) — use only if a Pinterest widget is wanted. **NEEDS-JOSH** is not required, but it's a graphic, not a real demo. |

Recommendation: prefer the two Instagram "now on Reverb" posts (C7/C8) as a small "Recently Consigned / New Arrivals" embed block — they double as live-inventory proof and Reverb cross-links. Skip the Pinterest promo pin unless Josh wants the widget.

---

### 7. Dataset-schema tables

**None.** This page has zero reference/lookup tables — it is all prose and short card arrays. dataset-schema.md lists no consignment table in any tier. No Dataset markup applies. (The page's only structured data is BreadcrumbList; adding the FAQPage from §3 is the structured-data win here, not Dataset.)

---

### 8. DB fact check

The page makes very few hard factual claims; most copy is service description. Cross-check:

- **"$100,000+ if it's original and around $13,000 if it's been refinished"** (Top-Dollar Sale → Authentication). This is a *directional* illustration, not a cited model figure. It is CONSISTENT with the DB direction: originality is the dominant value driver (**VG-0112**) and refinishing carries a large penalty (**VG-0074**: ~40% average reduction on vintage Fender; **VG-0107** refin definition; **VG-0073** original custom-color premium ~40%+). The specific $100k/$13k pair is not in the DB and is not contradicted by it — it reads as a rhetorical example. **No flag**, but if Joe wants it defensible, tie it to a specific model (e.g. a Burst, **VG-0028**: ~$200k–500k+) rather than leaving it generic.
- **"Consignment fees as low as 8%"** — business/pricing claim, not a verifiable vintage-guitar fact; out of DB scope. Verify currency with Joe before quoting in FAQ schema.
- **"a buyer network built over a decade" / "more than a decade selling correct instruments"** — biographical, not DB scope. Consistent with the site's E-E-A-T framing.

**No WRONG or contradicted facts found.**

**MISSING-from-DB candidates worth adding** (both are solid, on-page, and generalize beyond consignment):
1. *Claim:* "The same model can be worth $100,000+ original and ~$13,000 refinished." If Joe stands behind a concrete model example, add a VG fact capturing the magnitude of the refinish penalty on a high-end original (e.g. a specific Les Paul Burst or pre-CBS Strat), with Joe's own sales as source. Strengthens VG-0074/VG-0112 with a headline number.
2. *Claim:* originality + documentation (receipts, original paperwork, original case/OHSC) materially raise value (Tips → "Document Its History"). The OHSC concept exists (**VG-0098**) but the broader "provenance/paperwork raises value" claim is not stated as its own fact — worth a short VG fact, sourced to Joe's consignment practice, since it recurs across sell/appraisal pages.

---

Wrote `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/consignment.md` — links: 9 recommended (8 core + 1 optional), FAQs: 1 new FAQPage block (4 Q/A), flags: 0 wrong facts, 2 DB-additions suggested.
