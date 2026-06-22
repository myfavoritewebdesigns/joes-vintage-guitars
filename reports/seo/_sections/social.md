# Social Embed Candidates — Joe's Vintage Guitars

Fresh scrape: 2026-06-22 via Apify (Instagram, YouTube, Facebook, Pinterest). TikTok and Reverb could not be scraped — see NEEDS JOSH at bottom.

## Embed-Type Support (Reference)

| Platform | Official oEmbed/Embed? | Notes |
|---|---|---|
| YouTube | YES — official `<iframe>` embed | Most reliable. Both long videos and Shorts embed via `/embed/<id>`. **Best embed target.** |
| Instagram | YES — official oEmbed (`/embed`) | Requires the Instagram embed script (`//www.instagram.com/embed.js`) or a Facebook Graph API token for oEmbed since 2020. Reels and image posts both embeddable. |
| TikTok | YES — official oEmbed + blockquote+`embed.js` | Standard `<blockquote class="tiktok-embed">`. But see NEEDS JOSH (profile not found). |
| Pinterest | PARTIAL — pin/board/profile widgets via `pinit.js` | No true oEmbed; uses Pinterest widget builder data attributes. Works but heavier; pins here are SEO promo graphics, low embed value. |
| Facebook | PARTIAL — official Page/Post embed via SDK (`fb-root` + `sdk.js`) | Requires the FB JS SDK. Reels embed inconsistently; Page-post embeds are more reliable than Reel embeds. FB content here largely duplicates Instagram Reels — prefer the IG/YT version of the same guitar. |

**Recommendation:** prioritize **YouTube** embeds (cleanest, no token) and **Instagram Reels** (strong storytelling captions) for the guides/value/sell pages. Use Facebook/Pinterest only where no IG/YT equivalent exists.

---

## Priority A — Brand/Model Demos That Map Directly to Serial Guides & Value Guides

These show a specific guitar of the exact brand/model a guide page covers — highest embed value (proof + dwell time on the money pages).

| # | Platform | URL / Permalink | Guitar / Topic | Fits Page / Section |
|---|---|---|---|---|
| A1 | YouTube | https://www.youtube.com/watch?v=PIRoB0KHEg0 | "Where to Find Fender Serial Numbers, Neck Heel Dates & Pot Codes" (1.9K views) | **fender-guitars-serial-number-guide** — hero/how-to section. Best-fit asset on the site. |
| A2 | YouTube | https://www.youtube.com/watch?v=oxvMHi23bZc | "Where to Find the Serial Number on a Gibson Guitar" (1.4K) | **how-to-read-gibson-serial-numbers** — how-to section |
| A3 | YouTube | https://www.youtube.com/shorts/WGF-pL6GB38 | "Where to Find the Serial Number on a Martin Guitar" (Short) | **martin-serial-and-model-numbers** — how-to section |
| A4 | Instagram | https://www.instagram.com/reel/DYxoKglzlFt/ | 1965 Candy Apple Red Stratocaster, late-'64 neck date, transitional logo (398 likes) | **vintage-fender-stratocaster-value-guide** — dating/era example; also **sell-my-fender-guitar** |
| A5 | Instagram | https://www.instagram.com/p/DYxr1Xslv5i/ | Close-ups of 1965 CAR Stratocaster (#macromonday) | **vintage-fender-stratocaster-value-guide** — condition/detail gallery |
| A6 | YouTube | https://www.youtube.com/watch?v=f-BQno75t94 | "1961 Fender Telecaster" antique-show find (676) | **vintage-fender-telecaster-value-guide** |
| A7 | Instagram | https://www.instagram.com/reel/DXrwn2QEyso/ | 2003 Gibson R9 — 1959 Les Paul Standard Reissue, sunburst (49) | **vintage-gibson-les-paul-market-value-guide** |
| A8 | YouTube | https://www.youtube.com/shorts/BWF6bVzMfJ0 | "2003 Gibson R9 Les Paul Reissue" (1.3K) | **vintage-gibson-les-paul-market-value-guide** |
| A9 | Instagram | https://www.instagram.com/reel/DXe-nBMj0j8/ | 1958 Les Paul Special, P-90 (153) | **vintage-gibson-les-paul-market-value-guide**; **sell-my-gibson-guitar** |
| A10 | Instagram | https://www.instagram.com/reel/DYC_sZozn6B/ | 1964 Gretsch Country Club (388) | **sell-my-gretsch-guitar**; **gretsch-serial-number-lookup** |
| A11 | YouTube | https://www.youtube.com/shorts/qV8P2lrwsn0 | "1967 Gretsch Viking" (1.2K) | **sell-my-gretsch-guitar**; **gretsch-serial-number-lookup** |
| A12 | Facebook | https://www.facebook.com/reel/35258366570413354/ | 1967 Gretsch Viking — detailed model writeup (56 reactions) | **sell-my-gretsch-guitar** — text-rich, good for a spec callout |
| A13 | Instagram | https://www.instagram.com/reel/DZdgmtvSsfi/ | 1956 Gibson Byrdland, one-owner, original-owner provenance (1.2K) | **sell-my-gibson-guitar**; **how-to-read-gibson-serial-numbers** |
| A14 | YouTube | https://www.youtube.com/watch?v=rsAijn3qjbY | "A LEGENDARY 1956 one owner Gibson Byrdland" (1.1K) | **sell-my-gibson-guitar** (provenance story) |
| A15 | Instagram | https://www.instagram.com/reel/DXhrDdfgRgV/ | 1959 Fender Mandocaster (107) | **sell-my-fender-guitar** (rare Fender); novelty proof |
| A16 | YouTube | https://www.youtube.com/shorts/4eaqJ2HM8TI | "1959 Fender Mandocaster" (1.5K) | **sell-my-fender-guitar** |
| A17 | YouTube | https://www.youtube.com/shorts/NI4xTQulXTU | "1930 Martin 0-18" (2.9K — top-performing Short) | **martin-d-28-d-18-d-45-dreadnought-value-guide**; **sell-my-martin-guitar**; **martin-serial-and-model-numbers** |
| A18 | YouTube | https://www.youtube.com/shorts/9QrrOvZHwUU | "Martin 2-1/2-17 (1860s) — Museum Condition" (101) | **martin-serial-and-model-numbers** (early Martin dating); **sell-my-martin-guitar** |

---

## Priority B — Brand Demos for Sell Pages & General Brand Pages

Strong brand-match content for the "sell my [brand]" pages and amp/effect page.

| # | Platform | URL / Permalink | Guitar / Topic | Fits Page / Section |
|---|---|---|---|---|
| B1 | YouTube | https://www.youtube.com/watch?v=SFjsaZsEHqI | "Buying Over 100 Vintage Fender Amps & Rare Guitars..." (11.3K — top channel video) | **sell-an-amplifier-or-effect**; **sell-a-guitar-collection**; homepage social-proof |
| B2 | Instagram | https://www.instagram.com/reel/DXKXljRkyEB/ | 1980s modded Gibson Flying V, crackle finish (370) | **sell-my-gibson-guitar** |
| B3 | Instagram | https://www.instagram.com/reel/DXezUkJExav/ | First-year Gibson ES-335, original Lifton case (372) | **sell-my-gibson-guitar** |
| B4 | Instagram | https://www.instagram.com/reel/CyGejsbL2Iw/ | 1966 Gibson ES-345, one-owner Greenwich CT (1.3K) | **sell-my-gibson-guitar** (provenance) |
| B5 | Instagram | https://www.instagram.com/reel/CxwRxtqPRDN/ | 1919 Gibson L-3 "cowboy preacher" provenance (1.7K) | **sell-my-gibson-guitar**; **sell-a-guitar-collection** (story-driven) |
| B6 | Instagram | https://www.instagram.com/reel/DXhqmnRgfrl/ | 1965 Gibson J-200 (132) | **sell-my-gibson-guitar** |
| B7 | Instagram | https://www.instagram.com/reel/DXpRqiqD0Ii/ | 1970 Gibson ES-175 walnut finish (143) | **sell-my-gibson-guitar** |
| B8 | Instagram | https://www.instagram.com/reel/DXuRq5cT7Zy/ | 1970s modded/custom-painted Fender Stratocaster (49) | **sell-my-fender-guitar**; **vintage-fender-stratocaster-value-guide** |
| B9 | Instagram | https://www.instagram.com/reel/DXwvnY5zE89/ | 1992 Jackson USA Soloist "Lightning" (32) | general / brand variety (no dedicated page; homepage feed) |
| B10 | YouTube | https://www.youtube.com/shorts/vUM8_6xyQSQ | "1966 Fender Jaguar" (1.6K) | **sell-my-fender-guitar** |
| B11 | YouTube | https://www.youtube.com/shorts/BZfDjnNRE3M | "Gibson J-45 Madagascar (2009)" (1.2K) | **sell-my-gibson-guitar** |
| B12 | Facebook | https://www.facebook.com/reel/1478227297005400/ | 1941 Gibson L-4 archtop (26) | **sell-my-gibson-guitar** (FB-only; no IG/YT equiv found) |
| B13 | YouTube | https://www.youtube.com/watch?v=evC7R_V7kko | "1929 Gibson L-5 Demo" (278) | **sell-my-gibson-guitar** (early archtop) |

---

## Priority C — Process / Trust / Brand-Story Assets (Homepage, About, Shipping, Appraisal)

| # | Platform | URL / Permalink | Topic | Fits Page / Section |
|---|---|---|---|---|
| C1 | YouTube | https://www.youtube.com/watch?v=uSu-Ld-xgnI | "Free Vintage Guitar Appraisal \| Joe's Vintage Guitars" (234) | **free-appraisal** — hero/explainer |
| C2 | YouTube | https://www.youtube.com/watch?v=XrlMW385NMM | "How to Pack a Guitar for Shipping (Step-by-Step)" (236) | **jvg-shipping-process** / **jvg-shipping-process-2** |
| C3 | YouTube | https://www.youtube.com/watch?v=s9OvOhv78gk | "How To Extract a Broken Stratocaster Tremolo Arm" (1.2K) | **repair** page |
| C4 | YouTube | https://www.youtube.com/watch?v=NTw8EcrS5Y8 | "I Spent $100,000 on Guitars in One Week!" (3.3K) | **sell-a-guitar-collection**; **about-me**; homepage social-proof |
| C5 | YouTube | https://www.youtube.com/watch?v=94gPLnh6mkc | "INSANE storage unit guitar collection buy!" (2K) | **sell-a-guitar-collection** |
| C6 | Instagram | https://www.instagram.com/reel/DXj5kFlkzLg/ | "Picking through a hoarder house...find treasures" (1.1K) | **sell-a-guitar-collection**; **about-me** |
| C7 | Instagram | https://www.instagram.com/p/DYz-G_jluKS/ | "A few gems that just hit our Reverb" — '49/'60/'51 Martins, '62/'71 ES-335s (68) | **consignment**; homepage "new arrivals"; links to Reverb |
| C8 | Instagram | https://www.instagram.com/p/DZGgqQrj1Cv/ | 1960s Gibson fretless bass conversion now on Reverb (2.4K — top IG post) | **consignment** / Reverb cross-link |

---

## Priority D — Pinterest (Low Embed Value, SEO Promo Graphics)

Pinterest profile = 30 pins, almost all **promotional graphics linking to joesvintageguitarsaz.com**, not unique guitar demos. Low embed value vs IG/YT, but the topical pins below loosely map to pages if a board/pin widget is wanted. Most map to home/sell/appraisal generically.

| # | Platform | URL / Permalink | Topic | Fits Page / Section |
|---|---|---|---|---|
| D1 | Pinterest | https://www.pinterest.com/pin/952581758707357740/ | "Trusted Guitar Appraisal Professionals" | **free-appraisal** (promo graphic) |
| D2 | Pinterest | https://www.pinterest.com/pin/952581758698112045/ | "Guitar Consignment Made Easy" | **consignment** |
| D3 | Pinterest | https://www.pinterest.com/pin/952581758694427566/ | "Vintage Guitar Repairs at Joe's" | **repair** |
| D4 | Pinterest | https://www.pinterest.com/pin/952581758702341766/ | "Top Prices Paid for Guitar Collections" | **sell-a-guitar-collection** |
| D5 | Pinterest | https://www.pinterest.com/pin/952581758673228049/ | "Jazzmaster from 1959" (one of few real-guitar pins) | **sell-my-fender-guitar** |
| D6 | Pinterest | https://www.pinterest.com/pin/952581758666718560/ | "1951 ES-300" (real-guitar pin) | **sell-my-gibson-guitar** |

**Pinterest verdict:** prefer linking to the profile (https://www.pinterest.com/joesvintageguitars0087/) rather than embedding individual promo pins. Not a priority embed source.

---

## NEEDS JOSH

- **TikTok — cannot scrape, handle appears invalid.** The task handle `@joesvintageguitar` returned `NOT_FOUND` ("This profile/hashtag does not exist"). Retried `@joesvintageguitars` (with trailing s) — also `NOT_FOUND`. **Action needed:** confirm the correct live TikTok URL/handle (or whether the account exists at all). If it exists, re-scrape; TikTok DOES support official oEmbed/blockquote embeds, so once the handle is confirmed, video embeds are straightforward.
- **Reverb — not scraped.** Reverb (https://reverb.com/shop/joe-s-gear-emporium-4) is the live inventory and the natural target for "new arrivals" / sell-page cross-links, but it has **no official social-embed widget** (no oEmbed). Reverb listings can only be deep-linked, not iframe-embedded. **Action needed:** decide whether to (a) link out to specific Reverb listings from value/sell pages, or (b) pull listings via Reverb's API/affiliate feed for an on-site "current inventory" module. Several IG/FB posts above already cross-promote Reverb (C7, C8) and can carry the Reverb link.
- **Instagram embed token.** IG oEmbed has required a Facebook Graph API token since Oct 2020. The blockquote+`embed.js` method still renders without a token in most cases but is not officially supported. **Action needed:** confirm whether MFWD's FB app/token is available for proper IG oEmbed, or accept the script-based blockquote embeds.
- **Facebook embeds need the JS SDK** and Reel-embeds are inconsistent. Most FB posts here duplicate the Instagram Reel of the same guitar — recommend embedding the IG or YouTube version instead and skipping FB except B12 (1941 Gibson L-4, FB-only).
