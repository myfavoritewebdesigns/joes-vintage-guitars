## photo-license

**Page type:** Archetype-adjacent legal/utility page (`/photo-license/`). Short prose, 7 short sections, currently **1 in-content internal link total** (the mailto + the live-domain external link don't count toward equity). It is an **orphan** (zero in-content inbound) and **under-linked out** (linkgraph.md rows 40 + 379). This is the permissive image-license terms page that Dataset/ImageObject schema across the whole site cites as `license`, so it has a real structural role even though it's thin.

**Guiding restraint:** this is a credit-and-link terms page, not a money page. It should NOT be turned into a CTA farm. Every section already talks about photos *of guitars, serial numbers, and appraisals* — those topical mentions are the only honest hooks. Target ~1 contextual link per section max, biased toward the serial-number guides (because the copy literally names "serial numbers" and "authentication close-ups") and one soft link to `/free-appraisal/` (the page that most needs inbound equity, and the page these photos document). Keep total adds modest (4 to 6), so the page reads like terms, not marketing. At ~330 words of body copy, even 5 links stays under the ~1-per-120-words ceiling.

---

### 1. Internal links to ADD

The page currently has **0 in-content internal links** (only an external link to the live home URL and two mailto/tel `hrefs`). Add contextual links where the copy already names a topic. Priority skew: serial-number guides (named in-copy), then `/free-appraisal/` (highest inbound need per linkgraph row 130 / gsc pos 16.1).

| Page section / anchor context | Suggested anchor text | Target URL | Why |
|---|---|---|---|
| Intro para 1: "the headstocks and serial numbers" | the serial numbers | `/fender-guitars-serial-number-guide/` | The copy literally names serial-number photos; the Fender SN guide is a top priority target (gsc pos 8.9, 11.6k impr) and these are the photos that illustrate it. Most natural anchor on the page. Use a non-stuffed in-prose anchor since "Fender serial number guide" is already over-reused 14× site-wide (anchor-diversity table). |
| Intro para 1: "the headstocks and serial numbers" (second clause, if you want a second SN target) | reading Gibson serial numbers | `/how-to-read-gibson-serial-numbers/` | Biggest single climb opportunity site-wide (gsc pos 11.5, 12,313 impr; linkgraph priority #1). Vary anchor away from the over-used "Gibson Serial Number Guide" (7×). Only add if para 1 can carry two links without feeling stuffed; otherwise pick this OR the Fender one, not both, to respect density. |
| "What This Covers" para: "serial number and authentication close-ups, appraisal photos" | appraisal photos | `/free-appraisal/` | `/free-appraisal/` is the single highest inbound-need page (linkgraph: 55 inbound but still gsc pos 16.1, page 2). The phrase "appraisal photos" is a genuine, non-forced hook. Anchor "appraisal photos" / "free appraisal" — use the GSC query "free guitar appraisal" register, not a hard CTA. |
| "What This Covers" para: "guitar photos" / general guitar mention | sell or value a vintage guitar | `/free-appraisal/` OR `/sell-a-guitar-collection/` | Optional soft secondary. `/sell-a-guitar-collection/` is deep page 3 (gsc pos 27.9) and badly needs links. Only worth it if you reword the closing sentence of the credit section ("they help other folks find me when they have a guitar to sell or value") into a linked phrase — that sentence already exists and is the perfect anchor host. |
| "All I Ask Is Credit and a Link" para: "when they have a guitar to sell or value" | a guitar to sell | `/sell-a-guitar-collection/` | This existing sentence is the cleanest sell-page hook on the page. Links toward the most under-linked, highest-upside sell page (4 inbound, pos 27.9). Use anchor "a guitar to sell" / "guitar to sell or value" — matches gsc queries "best place to sell a guitar" / "guitar estate sale" register. |

**Do NOT add:** links to every serial guide (Martin/Guild/Gretsch/Rickenbacker/Dangelico/amp) — none are named in this page's copy and forcing them would be keyword-stuffing a legal page. Leave the brand-assets section (`#brand-assets`) link-free; it is the restrictive tier and should not point at sell/value pages.

**Net adds: 4 to 6 (recommend 4 to be safe on a thin page).** Even at 6 the density is ~1 per 55 words concentrated, so cap at 4–5: para-1 SN link + "appraisal photos" → free-appraisal + "a guitar to sell" → sell-a-guitar-collection, with the Gibson SN link as the optional 4th only if para 1 reads cleanly.

---

### 2. Section-level related posts

This is a terms page, not a guide — a "Related reading" block does **NOT** fit most sections and would look spammy on legal copy. One small, tasteful exception:

| Section | Related posts | Inline "Related reading" block fits? |
|---|---|---|
| Intro / "You Are Welcome To Use My Photos" | — | **No.** Keep it clean. |
| "What This Covers" (mentions serial numbers + appraisal) | If anything, the two SN guides linked inline above already serve this; do not add a separate block. | **No** — inline contextual links (section 1) cover it better than a block. |
| "What It Does Not Cover: My Logo and Name" | — | **No.** Restrictive section; no promo. |
| "A Couple of Honest Notes" / "Questions" | — | **No.** |

**Verdict:** skip section-level related-post blocks entirely on this page. The contextual inline links from section 1 are the right tool here. (Recommending blocks on a license page would contradict the "moderate density / never force" rule.)

---

### 3. FAQ gaps

The page has no FAQ. A short 3-Q FAQ *would* genuinely help here — license pages get "can I…" questions, and an `FAQPage` schema on the terms page is legitimate (it answers real reuse questions and adds a structured-data surface that reinforces the permissive-license signal the rest of the site's ImageObject/Dataset markup points at). Recommended Q/A (all answerable from the page's own copy, no DB facts needed):

| Q | A (from page copy) |
|---|---|
| Do I have to ask before using a photo from this site? | No. You can reuse the photos for free, including for commercial work, without writing first or paying a fee — the only requirement is credit to Joe Dampt, Joe's Vintage Guitars, and a link back to joesvintageguitarsaz.com. |
| How should I credit the photo? | A simple caption with Joe Dampt's name and a clickable link back to joesvintageguitarsaz.com. That credit and link are the whole deal. |
| Can I use the Joe's Vintage Guitars logo or name? | No. The logo, name, and wordmark are all rights reserved and not part of the photo license. Email Joe to ask about logo use. |
| What if my use does not fit these terms? | Reach out by email or phone/text and Joe will sort it out — the license also does not cover any image that came from a third party, like a manufacturer or customer photo. |

**No VG-#### facts required** — every answer is sourced from the visible page copy, not the guitar-fact DB. If you add this FAQ, emit `FAQPage` JSON-LD (the site already has the pattern via the shared `<FAQ />` component) and keep the answers verbatim-faithful to the terms so structured data == visible text.

---

### 4. Relevant reviews

**None recommended.** This is a license/terms page. Dropping a customer testimonial here would be off-topic and undercuts the page's utilitarian credibility. reviews-videos.md has no review about photography or image reuse, and none of the sell/appraisal reviews belong on a terms page. **Skip all reviews.**

---

### 5. Relevant videos

**None recommended.** No Joe YouTube video is about photo licensing or image reuse (the channel is guitar demos + serial-number how-tos). Embedding a guitar demo on a legal page would be incongruous and add load with no topical fit. **Skip all video embeds.** (If Joe ever films a "how I shoot the guitars" behind-the-scenes clip, that would be the one asset that fits — flag as a future content idea, not a current asset.)

---

### 6. Social embeds

**None recommended.** social.md's embed candidates are all guitar/model demos and process/trust reels — none map to a photo-license terms page. An IG reel of a Stratocaster on the license page is off-topic. **Skip all social embeds; no NEEDS-JOSH items apply to this page.**

---

### 7. Dataset-schema tables

**None.** This page has zero reference/lookup tables (no serial ranges, no price matrices, no spec timelines) — it is pure prose. dataset-schema.md does not list this page for any `Dataset` markup, correctly.

**However — note the page's reverse role:** dataset-schema.md and the project's image-license policy both point *at* this page as the `license` URL (`imageLicense.photoLicenseUrl` → `/photo-license/`) for every content-photo `ImageObject` and every Tier-1 `Dataset` node across the site. So while this page hosts no Dataset itself, it is the **license anchor** the whole Dataset/ImageObject graph references. Action: leave the page schema-light, but make sure the `#brand-assets` fragment stays stable (the restrictive tier uses `/photo-license/#brand-assets`) since Layout's logo ImageObject and any brand-mark nodes deep-link to it. Don't rename that anchor.

---

### 8. DB fact check

**Factual claims on this page:** essentially none of the guitar-data kind. The page makes only authorship/policy claims:
- "I shot every photo on this site myself." — authorship claim, not a guitar fact. Matches the site-wide image-license policy (Joe Dampt shot 100% of content photos). **Consistent.** No VG conflict.
- "guitar photos, serial number and authentication close-ups, appraisal photos, and pictures around the shop" — description of photo subjects, not a datable claim. **No VG conflict.**
- Credit/link terms, logo all-rights-reserved — policy, not fact. **No VG conflict.**

**No serial ranges, dates, production counts, patents, or values appear on this page**, so there is nothing to cross-check against VG-0001..VG-0112 and **nothing flagged WRONG.**

**Missing-from-DB candidate:** none from this page. The one fact worth noting is meta, not a guitar fact: that the permissive content-photo license terms live at `/photo-license/` and the restrictive brand-assets terms at `/photo-license/#brand-assets`. That's already captured in the project's `imageLicense` config and dataset-schema.md, so it does not need a VG entry. **No new DB facts to add.**

---

**Summary line:** wrote `C:/Users/noahj/projects/joes-vintage-guitars/reports/seo/_pages/photo-license.md` — links: 4–6 recommended (page currently has 0 in-content; safe target 4, biased to Fender/Gibson SN guides + /free-appraisal/ + /sell-a-guitar-collection/); FAQs: 1 new 3–4-Q FAQ recommended (FAQPage schema, no DB facts needed); flags: 0 wrong DB facts (page has no guitar-data claims), 0 new DB facts to add, 0 reviews/videos/social/Dataset (none topically fit a terms page); structural note: page is an orphan + license-anchor for the site's ImageObject/Dataset graph — keep `#brand-assets` anchor stable.
