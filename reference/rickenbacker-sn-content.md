# Rickenbacker Serial Numbers — Extracted Article Content

> Faithful extraction of the article body from `rickenbacker-serial-numbers-raw.html` (lines 485–1752, wrapped in `<div class="jvg-rick">`). Avada `fusion-*` wrappers stripped. Decoder tool widget + its `<script>` omitted (already extracted) and marked `[DECODER TOOL]`.

---

## Ordered list of all H2 sections

1. Rickenbacker Serial Numbers (no id)
2. Era Guide: Pre-1961 (Model-Specific Numbers) (no id)
3. Era Guide: 1961–1986 (Two-Letter Code) (no id)
4. Era Guide: 1987–1998 (Letter + Digit) (no id)
5. Era Guide: 1999–Present (Year + Week) (no id)
6. Exceptions and Edge Cases (no id)
7. Advanced Dating by Specs and Features (no id)
8. Pickups (no id)
9. Control Knobs (no id)
10. Tuning Machines (no id)
11. Fingerboard Inlays (no id)
12. Body Styles, Binding, and Construction (no id)
13. Tailpieces (no id)
14. Control Configurations (no id)
15. Finishes (no id)
16. Headstock Logo and Spelling (no id)
17. Quick-Reference Dating Cheat Sheet (no id)
18. Related Guides (no id)

> Note on IDs: No heading carries an explicit `id` attribute in the source HTML. IDs are generated client-side by JavaScript (`buildToc()` slugifies each h2/h3 into `jvg-s-<idx>-<slug>`). For the Astro rebuild, anchors should be derived the same way (or assigned deterministically).

---

## Flat list of every distinct image src URL (main src only)

1. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/1960s-rickenbacker-360-2-scaled.jpg`
2. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-serial-number-on-bridge.jpg`
3. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-fry-pan-serial-number.jpg`
4. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-output-jack-serial-number-two-letter-code.jpg`
5. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-toaster-pickup-scaled.jpg`
6. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-kluson-tuners-scaled.jpg`
7. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-checklerboard-binding-scaled.jpg`
8. `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/1968-rickenbacker-4005-azureglo-1-scaled.jpg`

---

## Floating Table-of-Contents nav (lines ~448–468)

The TOC markup is two empty containers (`jvg-toc-sidebar` with `<ul id="jvg-toc-list-desk">` and `jvg-toc-mobile` with `<ul id="jvg-toc-list-mob">`); links are injected at runtime by `buildToc()`, which walks every `h2` and `h3` inside `.jvg-rick`. `h3` entries get class `jvg-toc-h3` (indented sub-items). The desktop sidebar has a header label "Contents"; the mobile control is a button labeled "Contents" with a chevron SVG opening a panel. There are no other section grouping labels.

Resulting TOC links in document order (text → anchor; level):

- Rickenbacker Serial Numbers → `#` h2-slug (H2)
  - Quick Decoder Tool → (H3)
- Era Guide: Pre-1961 (Model-Specific Numbers) (H2)
  - Solidbody Combo Guitars — 1954 to Late 1958 (H3)
  - Hollowbody Capri and F-Series — 1958 to October 1960 (H3)
  - The JK / JL Transition — November–December 1960 (H3)
- Era Guide: 1961–1986 (Two-Letter Code) (H2)
- Era Guide: 1987–1998 (Letter + Digit) (H2)
  - 1987–1996: Month Letters A–L (H3)
  - 1997–1998: Month Letters M–Y (skipping O) (H3)
- Era Guide: 1999–Present (Year + Week) (H2)
- Exceptions and Edge Cases (H2)
  - XX Replacement Jackplates (H3)
  - 1965 Headstock Sticker Serials (H3)
  - Vibrato-Equipped 425 (1965–1967) (H3)
  - Pre-1961 Numbers Without Date Information (H3)
- Advanced Dating by Specs and Features (H2)
- Pickups (H2)
  - Horseshoe Pickup — 1932 to 1971 (H3)
  - Toaster Pickup — 1957 to 1974 (H3)
  - Hi-Gain Pickup — 1968 to Present (H3)
- Control Knobs (H2)
- Tuning Machines (H2)
  - Grover Sta-Tite — 1956 to 1959/1960 (H3)
  - Kluson Deluxe — 1954 to 1982 (H3)
  - Grover Slimline (Bass) — 1969 to 1974 and 1982 to 1983 (H3)
  - Grover Rotomatic (360 Guitar) — September 1971 to Early 1985 (H3)
  - Schaller M6 / Mini M6 — 1985 to 1996 (H3)
- Fingerboard Inlays (H2)
  - Dot Inlays — Standard Trim (H3)
  - Triangle Inlays — Deluxe Trim Models (H3)
- Body Styles, Binding, and Construction (H2)
  - Thin Hollowbody (Capri) Body Styles (H3)
  - Soundholes (H3)
  - Pickguards (H3)
- Tailpieces (H2)
  - Trapeze Tailpiece — 1958 to 1965 (H3)
  - Kauffman Vibrola — 1958 to ~1961 (H3)
  - Accent Vibrato — ~1961 onward (H3)
  - "R" Tailpiece — October 1964 to Present (H3)
- Control Configurations (H2)
- Finishes (H2)
- Headstock Logo and Spelling (H2)
- Quick-Reference Dating Cheat Sheet (H2)
- Related Guides (H2)

> (H4 headings such as "First Letter = Year of Production" and "Second Letter = Month of Production" are NOT included in the TOC — only h2/h3 are.)

---

## CTA bar (`.jvg-cta-bar`, line 474)

Two buttons:
- `.jvg-cta-primary` → [Sell My Rickenbacker](https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/)
- `.jvg-cta-secondary` → [Free Guitar Appraisal](https://www.joesvintageguitarsaz.com/free-appraisal/)

---

## H2: Rickenbacker Serial Numbers
(no id)

### H3: Quick Decoder Tool
(no id)

Enter a serial number exactly as it appears on the jackplate (letters and numbers only, no spaces). The tool will identify the era and decode the production date.

[DECODER TOOL]

**Callout box — class `intro-banner`:**

> Rickenbacker used several distinct serial number systems across nine decades of production. This guide covers every era — from the earliest 1950s Combos through the current year+week format — plus a comprehensive spec-dating section to help you pin down a guitar when the serial number alone isn't enough. Once you know what you have, [get a free appraisal from Joe](https://www.joesvintageguitarsaz.com/free-appraisal/) to find out what it's worth.

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/1960s-rickenbacker-360-2-scaled.jpg`
- alt: "1960s Rickenbacker 360 in Mapleglo natural finish"
- width: 2560, height: 1707
- figcaption: A 1960s Rickenbacker 360 in Mapleglo — the natural finish that shows off the instrument's clean lines and distinctive body shape.

*(Mobile-card-table init `<script>` omitted here — non-content.)*

`<hr class="section-divider">`

---

## H2: Era Guide: Pre-1961 (Model-Specific Numbers)
(no id)

Before November 1960, Rickenbacker used several separate serial schemes depending on the type of guitar. None of these are decodable by the tool above — they require pattern-matching against the formats below. Expect exceptions throughout this entire era.

### H3: Solidbody Combo Guitars — 1954 to Late 1958
(no id)

**Era badge:** `1954 – 1958`

**Figure** (`figure.jvg-figure jvg-figure-half`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-serial-number-on-bridge.jpg`
- alt: "Rickenbacker serial number stamped on the bridge of a 1950s solidbody Combo guitar"
- width: 1600, height: 1066
- figcaption: Serial number stamped on the bridge of a 1960s Rickenbacker Combo — lower-end solid body models continued using the bridge stamp even after the jackplate became standard on higher-end guitars.

The Combo 600 and 800 introduced Rickenbacker's first modern serial format, later extended to the 400, 450, and 650/850. The first one to three characters identify the model and type, a single year digit follows, and the remaining digits are a production sequence.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Pre-1961 Combo format:

| Format | Model | Example | Decodes As |
| --- | --- | --- | --- |
| 4C[Y]### | Combo 400 | 4C6123 | 1956 Combo 400, seq. 123 |
| 4C[Y]####A | Combo 450 | 4C7234A | 1957 Combo 450, seq. 234 |
| 6C[Y]### | Combo 600 | 6C5456 | 1955 Combo 600, seq. 456 |
| 8C[Y]### | Combo 800 | 8C6789 | 1956 Combo 800, seq. 789 |
| 85C[Y]### | Combo 850 | 85C7001 | 1957 Combo 850, seq. 001 |
| 65C[Y]### | Combo 650 | 65C7123 | 1957 Combo 650, seq. 123 |
| C#### | 650 / dual-toaster 850 | C1234 | No date info — special cases only |

**Callout box — class `callout`:**

> **Year digit key:** The single digit after the type letter codes directly to the year — *4 = 1954, 5 = 1955, 6 = 1956, 7 = 1957, 8 = 1958.* This year information disappears at some point in late 1958, after which the serial simply reads as "4C" or "85C" followed by a production number with no date embedded.

### H3: Hollowbody Capri and F-Series — 1958 to October 1960
(no id)

**Era badge:** `1958 – 1960`

The full-scale Capris (models 330–375) and F-series launched in 1958 using a different scheme. The first character is the pickup count (2 or 3); the second is a tailpiece/options code. No date information is embedded.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Capri/F-series format:

| Format | Pickup Count | Tailpiece Code | Notes |
| --- | --- | --- | --- |
| 2T### | 2 | T = Trapeze | Standard non-vibrato models |
| 2V### | 2 | V = Vibrola / Accent | Vibrato-equipped models |
| 3T### | 3 | T = Trapeze | Three-pickup standard |
| 3V### | 3 | V = Vibrola / Accent | Three-pickup vibrato |
| 2R### | 2 | R = Rick-O-Sound stereo | Deluxe models only, from June 1960 |

Short-scale Capris (models 310–325) initially used the solidbody "V###" short-scale format in 1958, then switched to the pickup/tailpiece format in 1959. Basses used **B[Y]###** (`strong.mono`) with a year digit, which also disappeared in late 1958–1959.

### H3: The JK / JL Transition — November–December 1960
(no id)

**Era badge:** `Nov–Dec 1960`

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-fry-pan-serial-number.jpg`
- alt: "Serial number stamped on the headstock of a Rickenbacker Frying Pan lap steel guitar"
- width: 800, height: 533
- figcaption: Serial number stamped directly on the headstock of a Rickenbacker Frying Pan — the earliest Rickenbacker serial location.

In November 1960, Rickenbacker briefly previewed the system that would become permanent. Serials from this two-month window begin with **JK** (November 1960) or **JL** (December 1960), followed by a production number. J = the 10th letter = year 1960. K = 11th letter = November, L = 12th = December. If your serial starts with JK or JL and is followed only by digits, it's from this narrow window.

`<hr class="section-divider">`

---

## H2: Era Guide: 1961–1986 (Two-Letter Code)
(no id)

**Era badge:** `1961 – 1986`

This is the most famous and longest-running Rickenbacker serial system. The first two characters — both letters — stamp a precise year and month on every instrument. Letters appear above the output jack hole on the jackplate; digits appear below.

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-output-jack-serial-number-two-letter-code.jpg`
- alt: "Rickenbacker output jack serial number showing the two-letter year and month code used from 1961 to 1986"
- width: 1600, height: 1066
- figcaption: The two-letter code on a Rickenbacker output jackplate — the first letter gives the year, the second the month of production.

From 1961 to 1965, production numbers ran 01–999 (resetting to 01 when they hit 999). From 1966 onward, the range expanded to 001–9999 and never needed to reset in a single year.

**Callout box — class `callout`:**

> **Bridge-stamped serials on 1960s Combo models:** While the output jackplate is the standard serial location from 1961 onward, some lower-end solidbody models — particularly the Combo series — continued to have their serials stamped directly on the bridge plate rather than the jackplate well into the 1960s. These bridge-stamped serials follow the same two-letter year/month coding system and decode identically. If you find no serial on the jackplate of a 1960s solidbody Rick, always check the bridge before assuming it's missing.

#### H4: First Letter = Year of Production
(no id)

*(Source markup: `div.letter-grid` of `lg-cell` letter/value pairs. Reproduced as a table — 1961–1986 year-letter A–Z.)*

| Letter | Year | Letter | Year |
| --- | --- | --- | --- |
| A | 1961 | N | 1974 |
| B | 1962 | O | 1975 |
| C | 1963 | P | 1976 |
| D | 1964 | Q | 1977 |
| E | 1965 | R | 1978 |
| F | 1966 | S | 1979 |
| G | 1967 | T | 1980 |
| H | 1968 | U | 1981 |
| I | 1969 | V | 1982 |
| J | 1970 | W | 1983 |
| K | 1971 | X | 1984 |
| L | 1972 | Y | 1985 |
| M | 1973 | Z | 1986 |

#### H4: Second Letter = Month of Production
(no id)

*(Source markup: `div.letter-grid` of `lg-cell` letter/value pairs. Reproduced as a table — 1961–1986 month-letter A–L.)*

| Letter | Month |
| --- | --- |
| A | January |
| B | February |
| C | March |
| D | April |
| E | May |
| F | June |
| G | July |
| H | August |
| I | September |
| J | October |
| K | November |
| L | December |

**Example:** A serial reading *GD1234* decodes as: G = 1967, D = April → **April 1967**, production number 1234. This is the system in place for the peak Beatle, Byrds, and Tom Petty eras.

`<hr class="section-divider">`

---

## H2: Era Guide: 1987–1998 (Letter + Digit)
(no id)

**Era badge:** `1987 – 1998`

With Z assigned to 1986 and the full alphabet exhausted, Rickenbacker redesigned the system. The letter and digit swap roles compared to the 1961–1986 scheme: the *letter* now indicates the month and the *digit* indicates the year. Two separate sub-eras use this structure, distinguished by the month letters used.

### H3: 1987–1996: Month Letters A–L
(no id)

The same A–L = January–December month mapping as the second-position letters above, now moved to first position. The digit following indicates the year from a base of 1987.

*(Source markup: `div.spec-grid` with two `sg-cell` label/value blocks. 1987–1996 month letters + year digits.)*

- **Month letter:** A = Jan · B = Feb · C = Mar · D = Apr · E = May · F = Jun · G = Jul · H = Aug · I = Sep · J = Oct · K = Nov · L = Dec
- **Year digit:** 0 = 1987 · 1 = 1988 · 2 = 1989 · 3 = 1990 · 4 = 1991 · 5 = 1992 · 6 = 1993 · 7 = 1994 · 8 = 1995 · 9 = 1996

**Example:** *A0001* → January 1987. *L9001* → December 1996.

### H3: 1997–1998: Month Letters M–Y (skipping O)
(no id)

A new set of month letters was introduced to avoid confusion with the A–L block above. The letter O is skipped to avoid confusion with the digit zero. The year digit resets: 0 = 1997, 1 = 1998. This sub-era lasted only two years before the whole format was replaced.

*(Source markup: `div.spec-grid` with two `sg-cell` label/value blocks. 1997–1998 month letters M–Y.)*

- **Month letter:** M = Jan · N = Feb · P = Mar · Q = Apr · R = May · S = Jun · T = Jul · U = Aug · V = Sep · W = Oct · X = Nov · Y = Dec
- **Year digit:** 0 = 1997 · 1 = 1998

**Example:** *M0001* → January 1997. *Y1001* → December 1998.

`<hr class="section-divider">`

---

## H2: Era Guide: 1999–Present (Year + Week)
(no id)

**Era badge:** `1999 – Present`

The current system is the most transparent Rickenbacker has ever used and should remain valid through 2098. The serial number begins with the two-digit year, followed immediately by the two-digit production week, then a production sequence number.

**Callout box — class `callout`:**

> **Format: YY + WW + [sequence]**
> The first two digits are the year (99 = 1999, 00 = 2000, 01 = 2001 … 26 = 2026). The next two digits are the week of the year, running 01 through 52 (occasionally 53). Any remaining digits are the production sequence for that week.
>
> **Examples:** *9901001* → Week 1 of 1999. *2108001* → Week 8 of 2021. *2635001* → Week 35 of 2026.

`<hr class="section-divider">`

---

## H2: Exceptions and Edge Cases
(no id)

### H3: XX Replacement Jackplates
(no id)

During the 1980s, Rickenbacker sold replacement output jackplates as service parts. To prevent these from being used on counterfeit instruments, all replacement plates were stamped with a serial number beginning with **XX**. Any serial starting with XX has no dating significance — it identifies only that the plate is a replacement part, not an original production jackplate.

### H3: 1965 Headstock Sticker Serials
(no id)

A small number of guitars produced in 1965 carried a serial number sticker on the back of the headstock beneath the clear coat, in addition to or instead of the jackplate serial. These guitars used their own distinct numbering scheme separate from the standard 1961–1986 system.

### H3: Vibrato-Equipped 425 (1965–1967)
(no id)

The vibrato-equipped Combo 425 built between 1965 and 1967 used a serial number that was stamped directly onto the vibrato housing — not the jackplate. This number follows its own scheme and is unrelated to the standard two-letter format in use at the time.

### H3: Pre-1961 Numbers Without Date Information
(no id)

As noted above, serial numbers from late 1958 through October 1960 — on Combo, Capri, and bass instruments — provide model or configuration information but no reliable date. Dating these instruments requires the spec-based approach in Part 2 below.

**Callout box — class `callout callout-warn`:**

> **A note on accuracy:** The serial number date reflects when the jackplate was *stamped*, which is typically close to — but not always identical to — the completion date of the instrument. Factory inventory, back-order situations, and custom orders can place a guitar's actual finish date days, weeks, or in rare cases months after the plate date. The serial establishes a production window; the specs below can help narrow it further.

`<hr class="section-divider">`

---

## H2: Advanced Dating by Specs and Features
(no id)

**Callout box — class `intro-banner`:**

> When the serial number is missing, illegible, or falls in a pre-1961 gap, the guitar's hardware, electronics, and construction features often bracket the date more precisely than any table. Every section below lists the key changes in chronological order — work through multiple sections and triangulate. The more details that agree, the more confident your date estimate.

---

## H2: Pickups
(no id)

Rickenbacker's pickup evolution is one of the most reliable dating tools on the instrument. The three main production families — Horseshoe, Toaster, and Hi-Gain — overlap at their transitions but follow a clear overall arc.

### H3: Horseshoe Pickup — 1932 to 1971
(no id)

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1932–1943** — **Wide-magnet version:** 1½" wide horseshoe magnet wraps over the strings. Found on all early lap steels and pre-war electric Spanish models.
- **1946–1971** — **Narrow-magnet version:** Magnet narrows to 1¼". Used on post-war lap steels and early Spanish models. Discontinued on most guitar models in 1957 when replaced by the Toaster, but remained on some lap steels until 1971.
- **1957–1969** — **Transition era:** Combo 600 and 800 continued with horseshoe variants through 1959 (single horseshoe treble + bar neck on the 800 from 1958). The 4000 series basses also used horseshoes in the bridge position until late 1968.

### H3: Toaster Pickup — 1957 to 1974
(no id)

The Toaster is the defining Rickenbacker sound — clear, jangly, and chimey. Its name comes from its visual resemblance to the top of a bread toaster. It appeared first on the Capri hollowbodies and spread across the line.

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-toaster-pickup-scaled.jpg`
- alt: "Rickenbacker toaster pickup — the chrome covered single-coil that defined the Rickenbacker sound from 1957 to 1974"
- width: 2560, height: 1707
- figcaption: The Rickenbacker toaster pickup — named for its resemblance to the top of a bread toaster. Present on all models 1957–1974, with some overlap during the Hi-Gain transition.

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1957** — Introduced on new Capri and Combo models. Characterized by chrome covers, no adjustable polepieces.
- **~1963** — Molding marks ("dimples") begin appearing on the covers — a very early version present on 1963 and earlier examples. This detail is replicated on modern reissue pickups from 2003 onward.
- **1970–1974** — Gradual phase-out as Hi-Gain pickups take over. The 420/450/460 series held out the longest, with toasters present on some examples through early 1974. Finding a toaster on a post-1970 guitar indicates either an early-production example for that model year or a late holdout model.

### H3: Hi-Gain Pickup — 1968 to Present
(no id)

The Hi-Gain uses a rubberized magnet mounted beneath the pickup body rather than pole magnets — a fundamentally different topology from both the Horseshoe and Toaster. Dating Hi-Gain versions is highly precise once you know what to look for.

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **Late 1968 (bass only)** — **First-gen bass Hi-Gain:** "Fiberboard" bobbin (G-10 mil-spec glass-filled epoxy PCB material) — may be unpainted (pale green) or painted black. Slotted polepieces, not designed to be adjusted. Bridge position of 4000-series basses only. Also called "green bobbins."
- **Early 1969 (guitars)** — **First-gen guitar Hi-Gain:** Same painted fiberboard bobbin, but threaded polepieces (not slotted) to eliminate adjustment damage risk. First appears on the 381. Often called "transitional" Hi-Gains. These are actually *less* hot than the toasters they replaced.
- **1970–1974** — General transition of all models from Toaster to first-gen Hi-Gain. **Not a clean cutover** — many 1970–1972 guitars show mixed examples of toasters and first-gen Hi-Gains. The 480 series (1972) launched Hi-Gain-only from the start.
- **March–May 1973** — **"Button top" Hi-Gain introduced:** Basses first (March/April), guitars follow (April/May). Painted fiberboard bobbin, but threaded polepieces replaced by painted black button-top drive screws. Wound hotter than first-gen. This is the Hi-Gain sound most people think of. A neck-position Hi-Gain also appears on the 4001 bass from September 1973.
- **~Late 1985–Early 1986** — **Unpainted bobbin version:** Both bobbin and button-top polepieces change to naturally black material, eliminating the need to paint them. The "fiberboard" texture pattern is more visible. Exact transition date is difficult to pin down precisely.
- **August 1991** — **Dual-use plastic bobbin:** Fiberboard replaced by a molded black plastic bobbin with raised "toaster" slots — a design shared with the simultaneously updated toaster pickup cases. Polepieces remain unpainted button tops.
- **March 2003** — **Dimples added:** Dimples matching the early toaster molding marks appear on Hi-Gain covers to complement the dimpled toasters introduced for the new C-series vintage reissues.
- **May 2005 – Present** — **Adjustable button tops:** For the first time in the Hi-Gain's history, the button-top polepieces become fully adjustable. This remains the current version.

**Callout box — class `callout callout-warn`:**

> **Mounting note:** All top-mounted guitar Hi-Gains of every generation sit on foam pads, not the rubber grommets used by Toaster pickups. Finding a Hi-Gain on grommets is a reliable indicator that the pickup has been replaced or the mounting has been modified.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Hi-Gain pickup variants:

| Variant | Approx. Dates | Bobbin | Polepieces |
| --- | --- | --- | --- |
| Bass first-gen | Late 1968–Apr 1973 | Fiberboard, painted or unpainted | Slotted (do not adjust) |
| Guitar first-gen ("transitional") | Early 1969–Apr/May 1973 | Painted fiberboard | Threaded rod (no heads) |
| Button top | Mar/May 1973–1986ish | Painted fiberboard | Painted black button tops |
| Unpainted button top | 1986ish–Aug 1991 | Unpainted fiberboard | Unpainted black button tops |
| Dual-use plastic, no dimples | Aug 1991–Mar 2003 | Molded plastic w/ toaster slots | Unpainted button tops |
| Dual-use plastic, dimpled | Mar 2003–May 2005 | Dimpled molded plastic | Unpainted button tops |
| Current (adjustable) | May 2005–Present | Dimpled molded plastic | Adjustable button tops |

`<hr class="section-divider">`

---

## H2: Control Knobs
(no id)

Knobs are easy to swap, so always cross-check against other features before relying on knobs alone for dating. That said, original-knob guitars provide some of the clearest visual dating cues available.

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1954–1961** — **Chrome dome / knurled side:** Chromed steel dome-top knobs with knurled sides, the same style used on period console steel guitars. Found on Combo 600, 800, 650, 850, and first Capri prototypes. Last used on the 1961 4000/4001 basses before the 1963 redesign.
- **1956–1963 (solidbodies)** — **Black "vintage" KK knob:** Black plastic with skirted base, indicator dot, fluted sides, and white indicator line on a domed top. First appeared on the Combo 400 in 1956. Became the standard solidbody knob through the early 1960s. Returned on V/C Series reissues from 1985. Back on all guitars from approximately 2020 onward due to silver-top discontinuation.
- **1958–1963 (hollowbodies)** — **Rogan "cooker" / "TV" knob:** Brown phenolic knobs with diamond-grip texture, large skirt, small notched indicator, and a distinctive gold brushed metal insert. Named for their resemblance to period kitchen appliance knobs. Found on ALL full-scale semi-hollow Capris and F-series guitars from 1958 through 1963. Never appeared on solidbody guitars in standard production.
- **1964** — **Knob unification:** All semi-hollow models switch from gold Rogan cooker knobs (and gold pickguards) to white hardware and the same black vintage knob already used on solidbodies. For most of 1964, the vintage black knob is the only knob on any production Rickenbacker.
- **Late 1964** — **Silver-top knob introduced** with the new "New Style" round-top 360. Skirted, fluted sides, silver dome top. First examples have *no labels* on top, white dot on skirt, white indicator dash on top.
- **~July 1965** — **Silver-top knob gains "Bass / Treble / Tone / Volume" labels.** White skirt dot and white top dash remain.
- **Late 1966** — **Top indicator changes from a white dash to a white dot.** Mixed dash/dot examples appear through 1967. The labeled-silver-dot version runs as the primary knob until approximately 2020.
- **~1965–1974** — Silver-top knobs spread to all non-330-family models. Two-knob guitars (420/425, 900/1000) receive *unlabeled* silver tops around 1974. By 1974 the vintage black knob has been phased off all standard production.
- **~2020–Present** — **Silver-top knob discontinued** (likely due to COVID supply chain disruptions). Black vintage knob returns to all models, including the 381V69 which should correctly wear silver tops. Current standard.

**Callout box — class `callout`:**

> **Quick rule of thumb:** *Cooker/TV knob → pre-1964 hollowbody. Gold pickguard + cooker knob → 1958–1963. White pickguard + vintage black knob → 1964. Silver-top knob → 1964–2020ish (with labeled version narrowing to mid-1965 onward).*

`<hr class="section-divider">`

---

## H2: Tuning Machines
(no id)

Rickenbacker's tuner history involves three main suppliers — Grover, Kluson, and Schaller — used at different times on different models. The transitions are model-specific and do not always happen simultaneously across the line.

### H3: Grover Sta-Tite — 1956 to 1959/1960
(no id)

Open-back tuners with cloverleaf buttons — pre-war in design but reliable and affordable. Used on entry-level and some student models: Combo 400 (1956 launch), Combo 450 (1957), and all short-scale Capris (310–325) through most of 1959. Full-scale Capri prototypes briefly had them; production standardized on Klusons by end of 1958. The 450 transitioned to Klusons in early 1959; the short-scale Capris held out until the very last guitars made in 1960.

### H3: Kluson Deluxe — 1954 to 1982
(no id)

The dominant Rickenbacker guitar tuner for nearly three decades. Closed-back, the first of their type when introduced in 1947. Present on Combo 600 and 800 from 1954 onward. White plastic or nickel "bean" buttons in different periods.

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-kluson-tuners-scaled.jpg`
- alt: "Kluson Deluxe tuners on a Rickenbacker guitar — the standard tuner on most Ricks from 1954 until Kluson closed in 1982"
- width: 2560, height: 1707
- figcaption: Kluson Deluxe tuners on a Rickenbacker — closed-back with white bean buttons. The standard fitment on nearly all Rick guitars from 1954 until Kluson ceased production in 1982.

- Kluson 548 (very large footprint) on 4000 bass, 1957–1961
- Kluson 536 (smaller) on 4000/4001 bass from 1963
- Standard Kluson Deluxe on all non-Grover guitars 1960–1982
- Kluson closed entirely in late 1981 after the death of John Kluson, forcing Rickenbacker to find alternatives

### H3: Grover Slimline (Bass) — 1969 to 1974 and 1982 to 1983
(no id)

Two-piece pressure-fit sealed back tuners with small footprint. Replaced Kluson on all 4000-series basses in May 1969. *Flat cloverleaf keys* from 1969 to June/July 1972; *"wavy" or S-shaped keys* from mid-1972 to July 1974 when Klusons returned. After Kluson's closure, returned to 4001/4003 basses in mid-to-late 1982 until Schaller BM tuners replaced them in August 1983. The "wavy Grover" on a bass is a reliable indicator for 1972–1974.

### H3: Grover Rotomatic (360 Guitar) — September 1971 to Early 1985
(no id)

Sealed full-size tuners introduced on the 360 six-string in September 1971 as part of the early-1970s 360 upgrades. The Rotomatic's large bushings required a redesigned headstock — giving rise to the wider "Gumby" headstock on transitional-era 360s. The specific version Rickenbacker used was a two-piece pressure-fit unit, unlike the more common one-piece Rotomatic found on Gibson and other guitars.

- Two-piece Rotomatic: September 1971 to early 1984
- One-piece (standard) Rotomatic: early 1984 onward, when the two-piece version appears to have been discontinued
- Also fitted to the 481 and the six-string neck of the 362/12 (both from 1974)
- After Kluson's closure in 1982, all six-string guitars including those previously on Klusons received Grover Slimline guitar tuners (mid-1982)
- When Slimlines were discontinued (late 1983), all six-string guitars moved to Rotomatics through late 1984

### H3: Schaller M6 / Mini M6 — 1985 to 1996
(no id)

The new "paddle headstock" introduced on all non-reissue six-string guitars in late 1984 was designed to accommodate the Schaller M6's bushings (same diameter as the Rotomatic). Schallers replaced Grovers in early 1985. Black hardware/black trim (BH/BT) guitars held onto black Rotomatic tuners until Schaller produced black M6 variants — which arrived in approximately March/April 1996, ending Grover's relationship with Rickenbacker. BH/BT non-reissue six-strings with black Rotomatics date between roughly 1985 and early 1996.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Tuner history:

| Tuner | Instrument Type | Dates |
| --- | --- | --- |
| Grover Sta-Tite | Combo 400, 450; short-scale Capris | 1956–1959/60 |
| Kluson Deluxe | Most guitars | 1954–1982 |
| Kluson 548 | 4000 bass | 1957–1961 |
| Kluson 536 | 4001 bass | 1963–1969 |
| Grover Slimline (flat key, bass) | 4000/4001 bass | May 1969–mid 1972 |
| Grover Slimline (wavy key, bass) | 4000/4001 bass | Mid 1972–July 1974 |
| Grover Rotomatic (2-piece) | 360 six-string, 481, 362/12 (six-string neck) | Sep 1971–early 1984 |
| Grover Slimline (guitar) | All six-string guitars (ex-Kluson models) | Mid 1982–late 1983 |
| Grover Rotomatic (1-piece) | All six-string guitars | Late 1983–early 1985 |
| Schaller Mini M6 | All non-reissue six-string guitars | Early 1985–present |
| Black Rotomatic | BH/BT guitars | 1985–early 1996 |
| Black Schaller M6 | BH/BT guitars | Early 1996–present |
| Schaller BM (Kluson-copy) | 4003 bass | Aug 1983–present |

`<hr class="section-divider">`

---

## H2: Fingerboard Inlays
(no id)

### H3: Dot Inlays — Standard Trim
(no id)

All standard-trim Rickenbackers (330, 340, 420, 450, etc.) use simple dot fingerboard inlays for their entire production run. No changes affect dating.

### H3: Triangle Inlays — Deluxe Trim Models
(no id)

Triangle inlays are the hallmark of Rickenbacker Deluxe models (360, 370, 460, 4001, etc.) and their evolution is a very precise dating tool. The triangle design derives from the Mittenwald School of German lutherie via Roger Rossmeisl.

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1958–1963** — **Full-width poured pearlescent resin, early:** Clear resin with pearlescent powder poured into routed channels and cured in place. Very early 1958 examples have sharp-pointed triangles that barely reach the fingerboard edge. By late 1958 the points are blunted — and remain so from that point on.
- **Mid-1961 to Mid-1962** — **Crushed pearl (first run):** Crushed mother-of-pearl fragments bound in epoxy, cut from sheets and glued into ⅛"-deep channels. Found on the "New Capri" / OS body-style 360s introduced with the new body shape in mid-1961. Other Deluxe models (460, 4001, F-bodies) did not receive crushed pearl at this time. Back to poured resin by the second half of 1962 for reasons unknown.
- **Late 1963** — **Poured resin resumes** on all Deluxe models including the 1963 Capris (meaning George Harrison's famous 360/12 has poured resin inlays, not crushed pearl).
- **1964 – 1973** — **Crushed pearl (main run):** Returns with the "New Style" round-top 360 in 1964 and by mid-year appears on all Deluxe models. Material believed to have come from a now-protected marine reserve near Okinawa. Runs continuously until the source became unavailable circa 1972–1973.
- **March 1973** — **Full-width poured resin returns** on the 4001, exactly as before. Only lasts approximately six weeks before the design narrows.
- **Late April–May 1973** — **Inset (not full-width) poured resin:** The triangles are now inset from the fingerboard edges rather than running fully across. This reduces the depth of the channel needed and preserves neck stiffness. Backing paint is cream-colored in this early period. Other Deluxe models follow quickly.
- **~Late 1973 / Early 1974** — **Backing paint shifts from cream to light grey.** The color of the resin inlays appears to shift slightly around this time as well — likely related to the backing color change.
- **1973–2007** — **Inset poured pearlescent resin (grey backing):** The long-running standard. Color and pearlescence varied over the run (formula changes noted in 1984 and 1990). V/C-series reissue models and some Signature Limited Editions received full-width poured versions during this era.
- **Late January 2008 – Present** — **Laser-cut full-width pearlescent acrylic:** Grover Jackson (who managed Rickenbacker's shop 1996–1999 and again as a consultant from the late 2000s) introduced laser cutting for inlays. All Deluxe models receive full-width acrylic inlays cut with a laser from ⅛" pearlescent acrylic sheet. February 2008 4003s briefly got inset acrylic before standardizing on full-width. This remains the current production method.
- **2021 – Present** — **Crushed pearl returns (limited):** 90th Anniversary 480XC and 4005XC bring back crushed pearl inlays for the first time since 1973, followed by the 4005V (2024). Flake size and color differ slightly from the 1960s material but are the closest modern equivalent.

`<hr class="section-divider">`

---

## H2: Body Styles, Binding, and Construction
(no id)

### H3: Thin Hollowbody (Capri) Body Styles
(no id)

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1958–1960** — **Thick "OS" body (2½" deep), square edges:** The original Capri body shape. Standard models had no binding or back binding only; Deluxe models (360, 365, etc.) had top and back binding with square edges.
- **1961** — **Thin "OS" body (1½" deep), still square edges:** Body depth reduced dramatically. Standard models remained unbound. Deluxe models retained top and back binding with square edges (these are the OS / "double-bound" guitars).
- **June 1964** — **"New Style" (NS) body introduced** on Deluxe 360-series: rounded top edges, no top binding, checkered back binding only, bound cat-eye soundholes. This major cosmetic change accompanies the new knobs, white pickguard, and (on non-vibrato models) the R tailpiece. Standard models (330, 340) retained their existing construction with no major body changes at this time.

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/rickenbacker-checklerboard-binding-scaled.jpg`
- alt: "Rickenbacker checkerboard back binding — the hallmark of the New Style NS body introduced in mid-1964"
- width: 2560, height: 1707
- figcaption: Rickenbacker's signature checkerboard back binding — introduced with the New Style body in mid-1964 and a definitive marker of post-1964 Deluxe hollowbodies.

### H3: Soundholes
(no id)

- **1958–1963:** "Cat eye" or slash f-holes on most Capri models. Some early 310–325 short-scale models had no soundholes at all.
- **1964:** All models standardize on cat-eye f-holes. Standard models (330 etc.) had them bound starting with the NS body; Deluxe models had their f-holes bound from the beginning.
- **1979:** F-holes dropped as standard on short-scale 310/315/325 (available by special order only).

### H3: Pickguards
(no id)

- **1956–1963:** Gold back-painted clear Lucite / acrylic. The gold color comes from the paint on the back of a clear sheet — a hallmark of the TV knob / stove knob era.
- **1964 onward:** Thick solid white plastic. The change from gold to white pickguard coincides precisely with the change from cooker knobs to black vintage knobs on hollowbodies — one of the most reliable single visual dating cues for pre/post-1964 Rickenbacker hollowbodies.
- Hollowbody models from 1958 onward use a split-level (stepped) pickguard design.

`<hr class="section-divider">`

---

## H2: Tailpieces
(no id)

**Figure** (`figure.jvg-figure`):
- img src: `https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/04/1968-rickenbacker-4005-azureglo-1-scaled.jpg`
- alt: "Rare 1968 Rickenbacker 4005 hollowbody bass in Azureglo — one of the most desirable Rickenbacker basses ever produced"
- width: 2560, height: 1707
- figcaption: A rare 1968 Rickenbacker 4005 hollowbody bass in Azureglo — the 4005 was the first semi-hollow Rickenbacker bass and one of the brand's most collectible instruments. It features the brass R tailpiece introduced in 1964–1965.

### H3: Trapeze Tailpiece — 1958 to 1965
(no id)

All Capri and F-series models from their 1958 introduction used a simple trapeze tailpiece (non-vibrato models) or vibrola (vibrato models). The T/V/R coding in the serial number reflects this configuration. The trapeze era ends with the introduction of the R tailpiece in 1964–1965.

### H3: Kauffman Vibrola — 1958 to ~1961
(no id)

The original vibrato unit on 1958–1961 Capri models. Replaced by the Accent vibrato. The "V" in Capri-era serial numbers originally referred to this unit.

### H3: Accent Vibrato — ~1961 onward
(no id)

Replaced the Kauffman as Rickenbacker's vibrato of choice on Capri and other hollowbody models. The "V" in the serial number carried over to continue indicating vibrato, now meaning the Accent.

### H3: "R" Tailpiece — October 1964 to Present
(no id)

One of the most iconic pieces of hardware in guitar history — named for the stylized "R" shape (also described memorably as a "baby dinosaur"). Introduced on the October 1964 production of New Style 360/12s, then rapidly becoming standard on all non-vibrato semi-hollow models and the 4005 bass.

*(Source markup: `div.spec-grid` with two `sg-cell` label/value blocks.)*

- **Brass tailpiece:** October 1964 to mid-to-late 1966. Chrome-plated cast brass. String slots hand-cut with a chopsaw — all have 12 slots regardless of string count. Mounting screws set approximately 7/8" on-center. Back surface is rough. Extremely durable; none of the failure issues of later zinc versions.
- **Zamak (zinc alloy) tailpiece:** Mid-to-late 1966 onward. Die-cast Zamak (zinc-aluminum-magnesium-copper alloy). String slots are part of the casting in 4-, 5-, 6-, and 12-string versions. Mounting screws ~11/16" on-center. Some post-~1979 examples exhibit "exploding" tailpiece failures, particularly on 12-strings and powder-coated BH/BT versions.

**Callout box — class `callout callout-warn`:**

> **Distinguishing brass from zinc without removal:** Measure the mounting screw spacing. Brass units: approximately 7/8" on center. Zinc units: approximately 11/16" on center. If you can remove the tailpiece, brass backs are rough-textured; zinc backs show smooth round mold marks. All 12 slots on a brass tailpiece are hand-cut and equal; zinc tailpieces have casting-integrated slots in the correct count for the model.

`<hr class="section-divider">`

---

## H2: Control Configurations
(no id)

The number and arrangement of controls changed at a few key moments and provides a useful cross-check for dating, especially on hollowbody models.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Control configurations:

| Configuration | Models Affected | Dates |
| --- | --- | --- |
| 2 knobs + 1 switch (solidbodies) | Combo 600, 800 (1 switch = tone/selector) | 1954–1959 |
| 4 knobs (hollowbodies) | All Capri / F-series, standard and deluxe | 1958–1962 |
| 5 knobs (hollowbodies) | 330/340 series from 1963; 360/365 from 1963 | 1963–present |
| Rick-O-Sound stereo jack | Deluxe hollowbodies (360, 370, 460, 4001) | 1960–present (optional/standard varies by model) |

`<hr class="section-divider">`

---

## H2: Finishes
(no id)

*(Source markup: `div.timeline` of `tl-item` date/desc rows.)*

- **1956–1959** — **Yellow-to-brown sunburst.** The original Rickenbacker sunburst, sometimes called "autumnglo" before that name was formalized.
- **1958–Present** — **Mapleglo** — natural finish, no tint. Available from 1958 onward.
- **1960–Present** — **Fireglo** — yellow-to-red sunburst. The most iconic Rickenbacker finish. Replaces the earlier yellow-to-brown version.
- **1960–1980** — **Autumnglo** — red-to-brown sunburst. Discontinued approximately 1980.
- **1984–~1996** — **Jetglo (black) with Black Hardware/Black Trim (BH/BT):** All-black hardware era coincides with the paddle headstock introduction and later the Schaller tuner transition.

`<hr class="section-divider">`

---

## H2: Headstock Logo and Spelling
(no id)

*(Source markup: `div.spec-grid` with two `sg-cell` label/value blocks.)*

- **1934–1949:** "Rickenbacher" — spelled with an **H** in the "bacher" portion. Named for Adolph Rickenbacher, the original founder.
- **1950–Present:** "Rickenbacker" — spelling change to K when F.C. Hall took over. Any guitar spelling the name with an H predates 1950.

`<hr class="section-divider">`

---

## H2: Quick-Reference Dating Cheat Sheet
(no id)

Use this summary table to quickly bracket a guitar's age from a single visible feature. Work through as many rows as possible and look for agreement.

**Table** (class `mobile-cards`, inside `div.table-scroll`) — Quick-reference cheat sheet:

| What You See | Likely Date Range | Notes |
| --- | --- | --- |
| Gold Lucite pickguard | 1956–1963 | All hollowbodies. One of the clearest single dating cues. |
| Cooker / TV knobs | 1958–1963 | Hollowbodies only. Never on solidbodies in period. |
| White pickguard + black vintage knobs | 1964 | Very short-lived combination before silver tops appear. |
| Silver-top knob, no labels | Late 1964–mid 1965 | Round-top 360 era. Very collectible. |
| Silver-top knob, labeled, white top dash | Mid 1965–late 1966 | Labels appear ~July 1965; dash → dot change ~late 1966. |
| Silver-top knob, labeled, white dot on top | Late 1966–~2020 | Long-running standard version. |
| Horseshoe pickup on guitar | 1932–1957 (mostly) | 1¼" magnet = post-war. 1½" = pre-war. |
| Toaster pickup | 1957–1974 | On post-1970 guitar = early that model year or late holdout. |
| First-gen Hi-Gain (threaded polepieces, no heads) | Early 1969–1973 | Guitar only. Less hot than later Hi-Gains or Toasters. |
| Button-top Hi-Gain, painted | 1973–~1985 | The classic Hi-Gain sound. |
| Full-width crushed pearl inlays | 1961–62 or 1964–1973 | Or 2021+ (90th anniversary / 4005V limited run). |
| Inset poured pearlescent resin inlays | 1973–2007 | Cream backing = 1973–early 1974. Grey backing = 1974–2007. |
| Full-width laser-cut acrylic inlays | Jan 2008–present | Very easy to spot — crisp, precise edges. |
| Grover Sta-Tite (open back, cloverleaf) | 1956–1960 | Combos 400/450; short-scale Capris. |
| Grover Slimline, flat key (bass) | 1969–mid 1972 | Bass only in this first run. |
| Grover Slimline, wavy key (bass) | Mid 1972–July 1974 | Extremely reliable dating marker for basses. |
| Grover Rotomatic (2-piece back) | Sep 1971–early 1984 | 360 and related. "Gumby" headstock accompanies. |
| Paddle headstock (six-string) | Late 1984–present | Non-reissue only. Designed for Schaller M6 bushing size. |
| R tailpiece, brass | Oct 1964–mid 1966 | Hand-cut slots (12 per tailpiece regardless of string count). Wider screw spacing. |
| Square body edges (Capri) | 1958–mid 1964 | OS body. Rounded edges = NS body, mid-1964 onward. |
| Checkered back binding only (360 etc.) | Mid 1964–present | NS body. Top+back binding on both sides = OS pre-1964. |
| "Rickenbacher" spelling on headstock | Pre-1950 | The H spelling definitively pre-dates F.C. Hall's ownership. |

**Callout box — class `callout callout-tip`:**

> **Dating strategy:** Start with the serial number to establish a production month and year (for 1961+). Then run through the spec checklist above. If the specs all agree with the serial date, you have high confidence. If one or two specs suggest a different era, check for replaced parts (knobs and tuners are most commonly swapped). If the serial is missing or pre-1961, use three or more independent spec markers and look for internal agreement. No single spec is infallible — Rickenbacker frequently used old-stock parts, ran overlapping transitions, and made custom or special-order instruments that don't follow the standard timeline.

**Callout box — class `callout`, inline style `text-align:center;` (CTA callout):**

> **Now that you know what you have — find out what it's worth.**
>
> Joe has appraised over 10,000 instruments and buys Rickenbackers nationwide. Get a free, no-obligation valuation in under 24 hours.
>
> CTA bar (`.jvg-cta-bar`, centered):
> - `.jvg-cta-primary` → [Free Guitar Appraisal](https://www.joesvintageguitarsaz.com/free-appraisal/)
> - `.jvg-cta-secondary` → [Sell My Rickenbacker](https://www.joesvintageguitarsaz.com/sell-my-rickenbacker-guitar/)

*(Mobile-card-table init `<script>` omitted here — non-content.)*

`<hr class="section-divider">`

---

## H2: Related Guides
(no id)

Looking to date or value a different instrument? Joe has published comprehensive serial number and dating guides for every major American brand.

**Related-guides grid** (`div.jvg-related-grid`, each item is an `a.jvg-related-card` with a label span, title span, and description span):

1. **Label:** Serial Numbers — **Title:** Gibson Serial Number Decoder — **Desc:** Free decoder tool + complete dating guide covering every Gibson era from 1902 to present.
   href: https://www.joesvintageguitarsaz.com/how-to-read-gibson-serial-numbers/
2. **Label:** Serial Numbers — **Title:** Fender Serial Number Decoder — **Desc:** Date any Fender guitar or bass — Stratocaster, Telecaster, Jazz Bass, and more.
   href: https://www.joesvintageguitarsaz.com/fender-guitars-serial-number-guide/
3. **Label:** Serial Numbers — **Title:** Gretsch Serial Number Guide — **Desc:** Decode Gretsch serials across the Brooklyn, Baldwin, and Booneville eras.
   href: https://www.joesvintageguitarsaz.com/gretsch-serial-number-lookup/
4. **Label:** Serial Numbers — **Title:** Martin Serial Number Guide — **Desc:** Date any Martin guitar from the 1800s through today using the sequential serial system.
   href: https://www.joesvintageguitarsaz.com/martin-serial-and-model-numbers/
5. **Label:** Serial Numbers — **Title:** Guild Serial Number Lookup — **Desc:** How to date a Guild guitar across the Hoboken, Westerly, and Corona eras.
   href: https://www.joesvintageguitarsaz.com/guild-serial-number-lookup/
6. **Label:** Dating Guide — **Title:** How to Date a Gretsch Guitar — **Desc:** Identify the manufacture date of any Gretsch by serial number and spec changes.
   href: https://www.joesvintageguitarsaz.com/post/how-to-identify-the-manufacture-date-of-a-gretsch-guitar/
7. **Label:** Value Guide — **Title:** Is Your Vintage Guitar Valuable? — **Desc:** The 7 factors that determine whether a vintage guitar is worth $500 or $50,000.
   href: https://www.joesvintageguitarsaz.com/post/is-your-vintage-guitar-valuable-7-factors-that-determine-its-value/
8. **Label:** Value Guide — **Title:** Blue Book of Guitar Values — **Desc:** How to use the Blue Book and other price guides — and where they fall short for vintage instruments.
   href: https://www.joesvintageguitarsaz.com/post/blue-book-of-guitar-values-and-vintage-guitar-price-guide/

---

*End of article body (`</div>` closing `.jvg-rick`, line 1745).*
