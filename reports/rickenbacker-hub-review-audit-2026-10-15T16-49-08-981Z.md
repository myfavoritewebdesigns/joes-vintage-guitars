# Live-diff audit â€” rickenbacker-hub-review

- Live:  https://www.joesvintageguitarsaz.com/rickenbacker-serial-numbers/
- Local: http://127.0.0.1:4345/rickenbacker-serial-numbers/
- When:  2026-10-15T16:49:08.982Z

## ðŸ”´ Must fix

- **48 heading(s) on live but missing on local:**
  - h1#- Rickenbacker Serial Numbers
  - h2#- Rickenbacker Serial Numbers
  - h3#- Quick Decoder Tool
  - h2#- Era Guide: Pre-1961 (Model-Specific Numbers)
  - h3#- Solidbody Combo Guitars: 1954 to Late 1958
  - h3#- Hollowbody Capri and F-Series: 1958 to October 1960
  - h3#- The JK / JL Transition: November to December 1960
  - h2#- Era Guide: 1961 to 1986 (Two-Letter Code)
  - h4#- First Letter = Year of Production
  - h4#- Second Letter = Month of Production
  - h2#- Era Guide: 1987 to 1998 (Letter + Digit)
  - h3#- 1987 to 1996: Month Letters A to L
  - h3#- 1997 to 1998: Month Letters M to Y (skipping O)
  - h2#- Era Guide: 1999 to Present (Year + Week)
  - h2#- Exceptions and Edge Cases
  - h3#- XX Replacement Jackplates
  - h3#- 1965 Headstock Sticker Serials
  - h3#- Vibrato-Equipped 425 (1965 to 1967)
  - h3#- Pre-1961 Numbers Without Date Information
  - h2#- Advanced Dating by Specs and Features
  - h2#- Pickups
  - h3#- Horseshoe Pickup: 1932 to 1971
  - h3#- Toaster Pickup: 1957 to 1974
  - h3#- Hi-Gain Pickup: 1968 to Present
  - h2#- Control Knobs
  - h2#- Tuning Machines
  - h3#- Grover Sta-Tite: 1956 to 1959/1960
  - h3#- Kluson Deluxe: 1954 to 1982
  - h3#- Grover Slimline (Bass): 1969 to 1974 and 1982 to 1983
  - h3#- Grover Rotomatic (360 Guitar): September 1971 to Early 1985
  - h3#- Schaller M6 / Mini M6 to 1985 to 1996
  - h2#- Fingerboard Inlays
  - h3#- Dot Inlays: Standard Trim
  - h3#- Triangle Inlays: Deluxe Trim Models
  - h2#- Body Styles, Binding, and Construction
  - h3#- Thin Hollowbody (Capri) Body Styles
  - h3#- Soundholes
  - h3#- Pickguards
  - h2#- Tailpieces
  - h3#- Trapeze Tailpiece: 1958 to 1965
  - h3#- Kauffman Vibrola: 1958 to ~1961
  - h3#- Accent Vibrato: ~1961 onward
  - h3#- "R" Tailpiece: October 1964 to Present
  - h2#- Control Configurations
  - h2#- Finishes
  - h2#- Headstock Logo and Spelling
  - h2#- Quick-Reference Dating Cheat Sheet
  - h2#- Related Guides

- **2 figure(s) in 1 consecutive run(s) on local (1Ã—run-of-2), but live has none** â€” live likely wraps them in a grid container (e.g. `.img2`/`.img3`/`.comp-grid`). Wrap in `<div class="jvg-img2">` / `<div class="jvg-img3">` (see CLAUDE.md "Image gallery primitive"). Stacking vertical figures where the live site groups them is the JVG fender-SN bug class.

- **Callout / tip / aside wrapper count mismatch:** live=9, local=4 (diff +5). Live pages typically wrap pro-tip / warning content in styled aside boxes (`.tip`, `.callout`, `.info-box`, `.fusion-alert`, etc.). If local is short, the agent likely extracted prose but skipped wrapper styling. Grep the live HTML for the relevant class and add corresponding `<div class="jvg-callout">` / `jvg-tip` blocks on local.

- **JSON-LD @type(s) on live but missing on local:** ImageObject, TechArticle, Organization, Organization, WebPage, WebPage, Thing, Thing


## ðŸŸ¡ Should fix

- **31 heading(s) on local but not on live (extra):**
  - h1#- Rickenbacker Serial Number Lookup
  - h2#jvg-s-1-quick-decoder-tool Find Your Rickenbacker’s Date
  - h2#jvg-s-16-advanced-dating-by-specs-and-features Rickenbacker Dating Photo Guides
  - h3#- Pickups
  - h3#- Tuners
  - h3#- Knobs And Controls
  - h3#- Body, Binding And Inlays
  - h3#- Bridges And Tailpieces
  - h3#- Finish Colors
  - h2#- Where To Find A Rickenbacker Serial Number
  - h2#- Rickenbacker Serial Number Formats
  - h2#jvg-s-2-era-guide-pre-1961-model-specific-numbers Era Guide: Pre-1961 (Model-Specific Numbers)
  - h3#jvg-s-3-solidbody-combo-guitars-1954-to-late-1958 Solidbody Combo Guitars: 1954 To Late 1958
  - h3#jvg-s-4-hollowbody-capri-and-f-series-1958-to-october-1960 Hollowbody Capri And F-Series: 1958 To October 1960
  - h3#jvg-s-5-the-jk-jl-transition-november-to-december-1960 The JK / JL Transition: November To December 1960
  - h2#jvg-s-6-era-guide-1961-to-1986-two-letter-code Era Guide: 1961 To 1986 (Two-Letter Code)
  - h4#- First Letter = Year Of Production
  - h4#- Second Letter = Month Of Production
  - h2#jvg-s-7-era-guide-1987-to-1998-letter-digit Era Guide: 1987 To 1998 (Letter + Digit)
  - h3#jvg-s-8-1987-to-1996-month-letters-a-to-l 1987 To 1996: Month Letters A To L
  - h3#jvg-s-9-1997-to-1998-month-letters-m-to-y-skipping-o 1997 To 1998: Month Letters M To Z (Skipping O And Q)
  - h2#jvg-s-10-era-guide-1999-to-present-year-week Era Guide: 1999 To Present (Year + Week)
  - h2#jvg-s-11-exceptions-and-edge-cases Exceptions And Edge Cases
  - h3#jvg-s-12-xx-replacement-jackplates Replacement Jackplates And Z Prefixes
  - h3#jvg-s-13-1965-headstock-sticker-serials 1965 Headstock Sticker Serials
  - h3#jvg-s-14-vibrato-equipped-425-1965-to-1967 Vibrato-Equipped 425 (1965 To 1967)
  - h3#jvg-s-15-pre-1961-numbers-without-date-information Pre-1961 Numbers Without Date Information
  - h2#- Cross-Check The Serial Date
  - h2#- Rickenbacker Serial Number Questions
  - h2#- Get Help With Your Rickenbacker
  - h2#- Talk With Joe Today

- Structural block extra on local â€” `section`: live=1, local=8 (+7)

- Structural block extra on local â€” `article`: live=0, local=6 (+6)

- Image count extra on local: live=12, local=16 (+4)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Rickenbacker Serial Number Decoder + Dating Guide`
  - local: `Rickenbacker Serial Number Lookup And Dating Guide`

- **meta description differs:**
  - live:  `Decode any Rickenbacker serial number from 1954 to today. Full era guide, interactive decoder tool, and advanced dating by pickups, tuners, knobs, and body specs.`
  - local: `Look up a Rickenbacker guitar or bass serial number, find its date format, and compare pickups, tuners, knobs, body details, tailpieces and finishes.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): Person, WebApplication, Offer, FAQPage, Question, Question, Question, Question, Question, Answer, Answer, Answer, Answer, Answer


## Summary

- Live headings: 48 | Local: 31
- Live images:   12 | Local: 16
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 12, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 9 | local: 4
- Structural blocks (live vs local):
  - section: 1 vs 8
  - article: 0 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, Person, Organization, ImageObject, ImageObject, WebPage, Thing, TechArticle, Person, Organization, ImageObject, ImageObject, WebPage, Thing, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.