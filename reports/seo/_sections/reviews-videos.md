# Reviews & Videos Catalog — for per-page section mapping

> Source-of-truth index of Joe's customer reviews and YouTube uploads, built so the per-page SEO pass can drop a topically-relevant review or video into a specific page **section**. Built 2026-06-22.
>
> **How to use this file:** when building/optimizing a page section, find a review or video here whose `guitar/brand` column matches the section's topic (e.g. a Gibson section on `/sell-my-gibson-guitar/` → pull a Gibson Reverb review + the Gibson serial-number video). Reviews already used on built pages are flagged in the "Already placed" note so you don't double-place.

---

## Sources inventory

| Source file | Type | Count | Notes |
|---|---|---|---|
| `reference/testimonials.json` | Google reviews (full body) | 6 | General sell/appraisal experience |
| `reference/collection-testimonials.json` | Google reviews (full body) | 5 | Appraisal / collection / multi-guitar |
| `reference/martin-testimonials.json` | Google reviews (full body) | 3 | **Martin-specific** |
| `reference/about-me-jsonld-4-reviews.json` | JSON-LD Review nodes | 3 | Short praise blurbs (about Joe) |
| `reference/free-appraisal-jsonld-reviews.json` | JSON-LD Review nodes | 9 | Appraisal-focused, 5★ |
| `reference/reverb-reviews-body.html` | Reverb storefront reviews | 2,191 total (2,052 archived in file, 1,380 with body text) | **Product-titled** — best for matching a section to a specific guitar/amp model. 4.9★ avg, 2,071 five-star |
| YouTube `@joesvintageguitars` (channel `UCz4TN2DTC8fTKlEZFe0LVAQ`) | Video uploads | 73 long-form pulled (channel reports 112 total incl. Shorts/streams) | 726 subs, joined Mar 3 2016, 245k total channel views |

**YouTube retrieval: SUCCEEDED** via Apify `streamers/youtube-scraper` (run `Qhfql5I0iWqQhXL13`, 73 videos). WebFetch alone could NOT retrieve the list (JS-rendered grid); DataForSEO YouTube SERP corroborated the channel ID + ~12 uploads. The 73 vs 112 gap = Shorts + live streams excluded from the scrape params, not missing data.

---

## A. Curated Google / on-site Reviews (full body, use as quoted testimonials)

Indexed for section-matching. "Topic" = best section to drop it under. "Guitar" = specific instrument mentioned (blank = generic).

| # | Name | Topic | Guitar / brand mentioned | Source | Best-fit section |
|---|---|---|---|---|---|
| R1 | Jessica Hammond | Sell + free appraisal, full payment at FedEx | — (3 guitars, generic) | testimonials | Homepage / sell pages — "easy process" |
| R2 | Caleb King | Sentimental sell, Annie's service | — | testimonials | Collection / about — service quality |
| R3 | Larry Hattier | First-time seller, fair offer, same-day pay | — (1 guitar) | testimonials | Sell pages — "how it works" |
| R4 | Randy Abercrombie | Sold 1970s **Gibson bass**, paid at FedEx | **Gibson bass** | testimonials | **sell-my-gibson** (already surfaced there for Gibson relevance) |
| R5 | Bobbie Jo Kelly Greene | Inherited 3 guitars (late father), trust | — (3 guitars) | testimonials | Collection / inheritance section |
| R6 | Marie Coyle | Brother's collection, out-of-state, fast | — (collection) | testimonials | **sell-a-guitar-collection** / estate |
| R7 | Judy Anziano | Sister sold **38 guitars**, knowledgeable | — (38-guitar collection) | collection | **sell-a-guitar-collection** — large lot |
| R8 | Jeanne Century | Appraised 7 guitars + 4 amps, fast/cheap | — (+ amps) | collection | free-appraisal / amps |
| R9 | John Coste | Insurance appraisals, same-evening turnaround | — (several) | collection | **free-appraisal** — insurance |
| R10 | My School In Azia | Phone appraisal, sold in hours, "not a pawn shop" | — | collection | Homepage — vs pawn shops |
| R11 | Tim C. | Insurance appraisals, ethics/professionalism | — (musical equipment) | collection | **free-appraisal** — insurance |
| R12 | Adrienne Young | Sold **1920s Martin**, courteous/trustworthy | **1920s Martin** | martin | **sell-my-martin** / Martin sections |
| R13 | Tony Michaud | Appraised **Martin D18**, super nice | **Martin D-18** | martin | **sell-my-martin** / martin-serial guide |
| R14 | Scott Wolfe | **Martin** nut repair (b-string buzz) | **Martin** | martin | **/repair/** — nut/setup work |
| R15 | Amy B. | "Consummate professional," encyclopedic | — | about jsonld | **about-me** — Joe's expertise |
| R16 | Mateo Cavestany | Fair appraisal for **vintage Gibson** | **Gibson** | about jsonld | **sell-my-gibson** / about |
| R17 | Adam Kirkpatrick | "Expert of the highest order" | — | about jsonld | **about-me** — credibility |
| R18 | Jim W. | Late-night email reply, value given | — | free-appraisal jsonld | **free-appraisal** — responsiveness |
| R19 | Ray | Father's instruments, range of values, gracious | — (multiple) | free-appraisal jsonld | **free-appraisal** / inheritance |
| R20 | Amy Vickery | **1979 Guild** appraised in minutes via text | **1979 Guild** | free-appraisal jsonld | **guild-serial** / free-appraisal |
| R21 | Missy | Website form → next-day call → value | — | free-appraisal jsonld | **free-appraisal** — process steps |
| R22 | Kevin Richard Scholl | **Gibson Spirit** serial decode (1983) | **Gibson Spirit** | free-appraisal jsonld | **how-to-read-gibson-serial-numbers** |
| R23 | Steve Hastie | **Stratocaster** value + mods caveat | **Fender Strat** | free-appraisal jsonld | **sell-my-fender** / fender-serial |
| R24 | Mary Chadbourne | Late brother's guitar, Annie callback, insurance | — (collection) | free-appraisal jsonld | **sell-a-guitar-collection** / appraisal |
| R25 | Rich S. | Photos → call → offer + paid shipping | — | free-appraisal jsonld | Homepage / sell — offer process |
| R26 | D. Angelino | **'76 Les Paul Custom** valued by Joe personally | **Gibson Les Paul Custom** | free-appraisal jsonld | **sell-my-gibson** — Les Paul |

**Already placed (do not double-use):** R1–R6 + R4 surfaced on `/sell-my-fender/` testimonials (6-card masonry, Randy/R4 first for Gibson note on sell-gibson). Verify before reusing on a new page.

---

## B. Reverb reviews (2,191) — product-titled, best for guitar-specific sections

The Reverb archive is the richest section-mapping asset because **each review's title is the exact guitar/amp model sold**, so you can match a review to any model-specific section. Full file: `reference/reverb-reviews-body.html` (article structure: `.rv-title` = product, `.rv-meta` = buyer + date, `.rv-body` = optional text). **Do not dump the whole file** — query it for the model you need.

### Brand distribution (by title keyword, archived subset)

| Brand | Count | Use on |
|---|---|---|
| Fender | 339 | sell-my-fender, fender-serial-guide, fender-amp-serial |
| Gibson | ~258 | sell-my-gibson, how-to-read-gibson-serial |
| Epiphone | 95 | Gibson/Epiphone sections, blog |
| Martin | ~85 | sell-my-martin, martin-serial |
| Ibanez | 58 | blog / electric sections |
| Gretsch | 38 | gretsch-serial-lookup |
| Guild | ~36 | guild-serial-lookup |
| PRS | 30 | electric / blog |
| Taylor | 22 | acoustic sections |
| Rickenbacker | 22 | rickenbacker-serial-numbers |
| Schecter | 20 | blog / electric |
| Marshall | 19 | amp sections |
| Boss | 14 | effects/amp |
| Roland | 9 | keys/amp |
| Vox | 8 | amp sections |
| Mesa | 5 | amp sections |

### Sample Reverb reviews per brand (verbatim — quote-ready)

> Most Reverb bodies are short ("Great seller, fast shipping"). Pulled the first 1–2 with substantive text per brand. The model in the title is the section-match anchor.

**Fender**
- Gerard G. — *2001 Fender American Series Stratocaster - Black* — "received as described. Seller A+"
- Rob M. — *Fender '59 Bassman Ltd. - Tweed* — "Great seller, fast shipping, love the amp!!!"

**Gibson**
- Joel H. — *Gibson Les Paul Deluxe Player Plus 2018 - Satin Ocean Blue* — "Really fast shipping! Excellent description of the guitar. Really quick response to offer. Excellent experience!"
- Ed S. — *Gibson SJ-200 Elite 2010 - Natural - Insane QUILT!* — "Very nice for a 2010! Thanks! Good deal. Easy transaction."

**Martin**
- Happy A. — *Martin OM-28V 2005 (Serial # 1111111!)* — "Great seller! Even in a very cold winter, the acoustic guitar arrived intact. Thank you!"
- Nicolas L. — *Martin Mark Knopfler Signature HD-40MK 2002* — "Great seller. Will buy again at this store."

**Gretsch**
- Randy O. — *Gretsch Country Gentleman 1959 - Walnut* — "Shipping was fast! The guitar arrived in great shape, well packed and just as described. I would recommend this seller to anyone."
- Chris K. — *Gretsch Country Club 1955 - Blonde* — "perfect international transaction - thank you for your cooperation!"

**Rickenbacker**
- Matthew R. — *Rickenbacker 325v59 1997 - Mapleglo* — "Great buy! Joe was able to re-route the guitar to my home address... I am now the proud owner of this blonde."
- Scott K. — *Rickenbacker 4001 1978 - Autumnglo* — "Joe's a great guy. Bass came with a damaged case. He made it right. I love the bass."

**Guild**
- John B. — *Guild F-48 1972 - Natural* — "Great Guitar arrived quickly from outstanding seller."
- Dwayne S. — *1996 Guild USA DV-52HG Dreadnought - Natural* — "Better than expected thank you!"

**Epiphone**
- Dan F. — *Epiphone AJ-500RCSNS Masterbilt Slothead 12-Fret Acoustic* — "Great price on an excellent guitar, fast shipping, safe packing. A+ seller!"
- Don S. — *Epiphone Les Paul Standard 1990-2016 - Ebony* — "Great transaction and appreciated!"

**Taylor**
- Adam R. — *Taylor 815ce-L30 2004 30th Anniversary* — "Beautiful guitar in MINT condition at a great price - thanks again!"
- Andrew D. — *Taylor XX-RS 1994 - CLEAN* — "Excellent seller! Description was spot on and great overall experience!"

**Ibanez**
- Nick T. — *MIJ Ibanez AR150 Artist Series 1980's - Blue Burst* — "Guitar just as pictured and described. Best packing job I have seen in a long time!"
- Tidewater V. — *MIJ Ibanez Antoria 2358M Al Caiola 1967-1972 - Natural* — "Always A Pleasure To Deal With"

**PRS**
- Charles N. — *PRS SE A60E Angelus w/ Fishman GT1 2018-2021 - Natural* — "Fast shipping, well packed and as described! TY for SUPER deal"
- Xenophon K. — *PRS Santana SE One Abraxas 2009 - Whitewash* — "I am so happy with this. Thank you so much."

**Marshall**
- Joshuah B. — *2007 Marshall JVM410H 4-Channel 100-Watt Head - Black* — "Just as described, great seller A++"

**Vox**
- Mike G. — *Tube Vox Cambridge Reverb 1960s - Mullard loaded* — "Very responsive and helpful seller. Great packing job! Thank you, Joe."

> ⚠️ **One negative exists:** Dan M. — *MIK Schecter C-1 Plus Red Black Burst* — "Worst seller yet. Broken guitar and no communication." (1 of 2,191 — do NOT surface; noted so it isn't accidentally pulled.)

---

## C. YouTube videos (73 long-form uploads) — Joe's own channel

Channel: https://www.youtube.com/@joesvintageguitars (ID `UCz4TN2DTC8fTKlEZFe0LVAQ`). Embed pattern already used on this site: `<lite-youtube videoid="...">`. Watch URL = `https://www.youtube.com/watch?v=<id>`.

### C1. Education / how-to videos (highest SEO value — pair with reference/guide pages)

| Video ID | Title | Topic | Best-fit page/section |
|---|---|---|---|
| oxvMHi23bZc | Where to Find the Serial Number on a Gibson Guitar | Gibson SN location | **how-to-read-gibson-serial-numbers** (top of page) |
| PIRoB0KHEg0 | Where to Find Fender Serial Numbers, Neck Heel Dates & Pot Codes | Fender SN / dating | **fender-guitars-serial-number-guide** (near decoder tool) |
| WGF-pL6GB38 | Where to Find the Serial Number on a Martin Guitar | Martin SN location | **martin-serial-and-model-numbers** |
| XrlMW385NMM | How to Pack a Guitar for Shipping (Step-by-Step) | Shipping/packing | sell pages "how to ship" + Guide section |
| uSu-Ld-xgnI | Free Vintage Guitar Appraisal \| Joe's Vintage Guitars | Appraisal CTA | **free-appraisal** (intro video block) |
| tVctVqGi7Q0 | Guitar Repair - How To Fix Scratchy Knobs or Pots | Repair | **/repair/** — electronics |
| hiWq_dZ446U | How to Replace Plastic Buttons on Kluson Tuners | Repair | **/repair/** — tuners; fender-sn Kluson section |
| l-YFKJR-l78 | How To Turn A Left-Handed Guitar Into A Right-Handed Guitar | Repair/mod (33k views) | **/repair/** — mods (top performer) |

### C2. Collection-buying / road-trip videos (use on collection + homepage trust sections)

| Video ID | Title | Views | Best-fit section |
|---|---|---|---|
| SFjsaZsEHqI | Buying Over 100 Vintage Fender Amps & Rare Guitars in Arizona! | 11,250 | **sell-a-guitar-collection** / homepage hero proof |
| NTw8EcrS5Y8 | I Spent $100,000 on Guitars in One Week! | 3,310 | sell-a-guitar-collection — "we buy big" |
| 94gPLnh6mkc | Acoustic heaven!! INSANE storage unit guitar collection buy! | 1,964 | sell-a-guitar-collection / estate |
| J18CkPdeup0 | $150 Gibson Pawn Shop Tube Amp! Joe's Guitar Adventures Ep.1 | 2,680 | about-me — "Joe's adventures" |
| uIdtVNUEnZg | Early 1900s J.W. Jenkins Martin-Style Guitar Pawn Find! Ep.2 | 100 | about-me / blog |
| f-BQno75t94 | Antique Show Find! 1961 Fender Telecaster! | 676 | sell-my-fender / blog |
| 239gMipAfF8 | Custom Shop Fender Stratocaster Made for the CEO of NAMM!! | 58 | fender-sn Custom Shop / sell-my-fender |

### C3. Guitar demo videos — by brand (match to model/brand sections)

**Gibson / Epiphone**
| Video ID | Title | Section |
|---|---|---|
| evC7R_V7kko | 1929 Gibson L-5 Demo | sell-my-gibson / archtop |
| aw0v3LoqbcQ | 1948 Gibson L5 — Pick of the Week | sell-my-gibson |
| 1vtFHdKlghA | 1977 Gibson L7 | sell-my-gibson archtop |
| zMd6IJ-6e-8 | 1962 Gibson ES-335 (vintage setlist song) | sell-my-gibson ES section |
| 2g8w2ESDPac | 1985 Gibson ES-335 Dot Reissue — Pick of the Week | sell-my-gibson ES |
| r--i9VFISJY | 1953 Gibson ES175 For Sale | sell-my-gibson archtop |
| rxCaloro9uc | 1939 Gibson ES-150 | sell-my-gibson |
| KJwiW1iRhcE | 1969 Gibson ES-150 Demo | sell-my-gibson |
| cVs7yByanXE | 1941 Gibson L-00 | sell-my-gibson acoustic |
| dVLLo5VgZ2M | 1943 Gibson J45 Banner Headstock | sell-my-gibson J-45 |
| 1sr1AAHYwC4 | 1983 Gibson Explorer Quick Demo | sell-my-gibson Explorer payout card |
| Y1okEWnqyVE | Gibson Les Paul Classic Goldtop Demo | sell-my-gibson Les Paul |
| CMaelWUgiiw | Gibson Mandocello Demo | sell-my-gibson / mandolin |
| 11A1rRLfzWk | 1921 Gibson A-4 Mandolin Quick Demo | sell-my-gibson mandolin / whatwebuy |
| AN1i1P88_ks | 1964 Epiphone Crestwood - PACIFIC BLUE! Review | Epiphone/Gibson |
| HhIMw99BINE | 1980s Epiphone Sheraton Made in Korea (13k views) | Epiphone section |
| VjtX-LIITkw | 1990 Epiphone Les Paul Standard Demo | Epiphone |
| nwN8qEO4aUI | 1989 Epiphone Les Paul Custom Demo | Epiphone |
| cEUmWef4Mns | Rare Vintage Epiphone Pacemaker Amp Demo | Epiphone amp |

**Fender**
| Video ID | Title | Section |
|---|---|---|
| ulW6iSwp6Pk | 1979 Fender Anniversary Stratocaster | sell-my-fender Strat |
| vy67x10lbaU | 1984 Fender American Standard Stratocaster Demo | sell-my-fender Strat |
| 2sIprMm9vrY | 1975 Tele for sale on Reverb | sell-my-fender Tele |
| KT9U2J9-duI | Fender 1973 Deluxe Reverb Jam (62 Tele) | sell-my-fender / amp |
| WtcblIqKgbE | 1966 Fender P-Bass Demo | sell-my-fender bass |
| s6j-3Ix1118 | 1978 Fender Musicmaster Bass Quick Demo | sell-my-fender bass |
| YaAN-cfVjeY | 1976 Fender Starcaster Quick Demo | sell-my-fender |
| n9KhmjrwGo8 | Fender 2016 Duo Sonic Demo (4.6k views) | sell-my-fender |
| vJtazO87V7Q | Vintage 1952 Fender Tweed Pro Demo | fender-amp-serial / amp |

**Gretsch / Rickenbacker / Guild / others**
| Video ID | Title | Section |
|---|---|---|
| 7_vo5gHhCyM | 1962 Gretsch Tennessean Demo | gretsch-serial-lookup |
| UqvGFeyLSs4 | Gretsch G3967 Demo | gretsch-serial-lookup |
| 6okgKGh-wdY | 1990 Gretsch Duo Jet Demo | gretsch-serial-lookup |
| NXB7dmTiZLU | Rickenbacker Electro Spanish Vibrola (2.1k views) | rickenbacker-serial-numbers |
| ILCxFZLwxWU | Rickenbacher Electro Spanish Vibrola w/ Motorized Vibrato | rickenbacker-serial-numbers |
| 8rSMwLPV0Mg | Larrivee P-01 Acoustic Guitar Demo (4k views) | acoustic / blog |
| TPJPmo_C45k | 1962 Martin F-55 Demo (3k views) | sell-my-martin / martin-serial |

**Ibanez / Schecter / misc electric**
| Video ID | Title | Section |
|---|---|---|
| _2NrZN3wqt0 | 1983 Ibanez AS200 Artist Demo | Ibanez / blog |
| wClzqsHM5Ro | 1983 Ibanez AR150 Marine Burst Demo | Ibanez |
| 1i-F-v5p8N0 | 1980s Ibanez Roadstar II | Ibanez |
| QRFXCR1jpl0 | 1980s Ibanez Roadstar II Comet Demo | Ibanez |
| C_0f2wnvDj8 | Ibanez Premium UV71P 7-String (Seymour Duncan) | Ibanez |
| NVrtfS8MC8Y | Schecter Tempest Custom Demo (10.8k views) | Schecter / blog |
| ZvGVEZWSCXo | Squier Standard Jaguar HH Demo | Fender/Squier |
| m_KN1TeY5aM | Greco Les Paul Junior Review (1981) | blog / LP-copies |

**Amps / effects / acoustic / vintage oddities**
| Video ID | Title | Section |
|---|---|---|
| x0VPOgwo2Vk | Vintage Magnatone Custom 260 Hi-Fi Review (3k views) | amp / blog |
| 1KpXP_VEAJI | Univox Hi-Flier Phase 3 Review | blog / vintage electric |
| g5c3Juk_fKg | DeArmond M75T Champagne Sparkle Demo (12k views) | blog (top demo) |
| n0RNHcNO-HE | Silvertone 1446 Chris Isaak Demo (3.6k views) | blog / Silvertone |
| INZvT_-ZdVg | 1961 Silvertone U1 (Danelectro style) | blog |
| EWa_pntWa_Y | G&L ASAT Classic USA Demo | blog / Fender-adjacent |
| FoaeeqtVW8M | 1928 National Style 3 Condition | acoustic / resonator |
| cu0kXzdnGe4 | Roland Fantom G6 | keys (for sale) |
| YwdtEzhae5g | Galanti Guitar Mod Tip | blog / repair |
| 1LyOQkAccV0 | Don Rich / Buck Owens "Tiger By the Tail" flutter lick | blog / technique |
| VKV9JB0xnjI | Cadillac DeVille Radio Fix (1.9k views) | OFF-TOPIC — skip for guitar pages |

**Esteban classical-guitar collection series** (specialty consignment — use on /consignment/ or classical sections)
| Video ID | Title |
|---|---|
| nOiDCkWU6ZY | Kenny Hill Munich Guitar Demo - Esteban |
| bIRrmgc6yhg | Kohno Professional J - Esteban Collection |
| rk7phE5ICp0 | 2003 Francisco Navarro Garcia - Esteban Collection |
| XiFbQUVMeYI | Buscarino Artisan Demo |

---

## Quick lookup: which asset for which page

| Page | Reviews | Videos |
|---|---|---|
| Homepage | R1, R10, R25 + collection-buy hype | SFjsaZsEHqI, NTw8EcrS5Y8 |
| free-appraisal | R8, R9, R11, R18, R19, R21 | uSu-Ld-xgnI |
| sell-my-fender | R23 + Reverb Fender samples | ulW6iSwp6Pk, vy67x10lbaU, f-BQno75t94, 239gMipAfF8 |
| sell-my-gibson | R4, R16, R26 + Reverb Gibson samples | evC7R_V7kko, zMd6IJ-6e-8, dVLLo5VgZ2M, 1sr1AAHYwC4 |
| sell-my-martin | R12, R13 + Reverb Martin samples | WGF-pL6GB38, TPJPmo_C45k |
| sell-a-guitar-collection | R6, R7, R24 | SFjsaZsEHqI, NTw8EcrS5Y8, 94gPLnh6mkc |
| how-to-read-gibson-serial | R22 | oxvMHi23bZc |
| fender-serial-guide | R23 | PIRoB0KHEg0 |
| martin-serial | R13 | WGF-pL6GB38 |
| gretsch-serial-lookup | Reverb Gretsch samples | 7_vo5gHhCyM, UqvGFeyLSs4, 6okgKGh-wdY |
| guild-serial-lookup | R20 + Reverb Guild samples | — |
| rickenbacker-serial | Reverb Ricky samples | NXB7dmTiZLU, ILCxFZLwxWU |
| fender-amp-serial | Reverb Fender/amp samples | vJtazO87V7Q |
| /repair/ | R14 | tVctVqGi7Q0, hiWq_dZ446U, l-YFKJR-l78 |
| /consignment/ | — | Esteban series (4 classical) |
| about-me | R2, R15, R17 | J18CkPdeup0, uIdtVNUEnZg |
