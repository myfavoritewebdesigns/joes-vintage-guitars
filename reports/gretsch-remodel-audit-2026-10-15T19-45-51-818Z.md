# Live-diff audit â€” gretsch-remodel

- Live:  https://www.joesvintageguitarsaz.com/gretsch-serial-number-lookup/
- Local: http://127.0.0.1:4345/gretsch-serial-number-lookup/
- When:  2026-10-15T19:45:51.819Z

## ðŸ”´ Must fix

- **45 heading(s) on live but missing on local:**
  - h1#- Gretsch Serial Numbers Guide
  - h2#- Gretsch Serial Number Lookup
  - h2#gretsch-history-overview A Quick History: Why Gretsch Has So Many Serial Number Systems
  - h3#- Ownership Timeline
  - h2#gretsch-serial-number-lookup Gretsch Serial Number Lookup: Era Quick Reference
  - h2#gretsch-serial-numbers-1939-1966 Era 1: Sequential Numbers (1939 to 1966)
  - h3#- Where to Find the Serial Number (Pre-1966)
  - h3#- Sequential Serial Number Table: 1939 to 1965
  - h2#gretsch-serial-numbers-1966-1972 Era 2: Date-Coded Numbers (1966 to 1972)
  - h3#- How to Read a Date-Coded Serial (No Hyphen)
  - h3#- The “Sequential” Sub-Series (F-Hole Instruments, ~1969 to 1981)
  - h2#gretsch-serial-numbers-1972-1981 Era 3: Hyphenated Date-Codes (1972 to 1981)
  - h2#gretsch-serial-numbers-1989-2002 Era 4: Japan & Korea (1989 to 2002)
  - h2#gretsch-serial-numbers-2003-present Era 5: Fender Era (2003 to Present)
  - h3#- Format Breakdown
  - h3#gretsch-fender-prefix-codes Factory Prefix Codes: Fender Era
  - h2#gretsch-advanced-dating-guide Advanced Dating: Specs, Logos & Hardware Changes
  - h3#gretsch-headstock-logo-changes Headstock Logo Changes by Era
  - h4#- Early Script “Gretsch”: 1930s to early 1950s (“Snakehead” / “Bulb” Headstock Era)
  - h4#- Block “Gretsch” with T-Roof: Mid-1954 onward
  - h4#- Standard Horizontal Logo + Nameplate Era: 1959 onward
  - h4#- Baldwin Era Logo: 1967 to 1981
  - h4#- Japan / Fender Era: 1985 to Present
  - h3#gretsch-label-types Interior Label Identification Guide
  - h3#gretsch-pickup-dating Dating by Pickup Type
  - h4#- DeArmond DynaSonic: ~1949 to 1957
  - h4#- Filter'Tron Humbucker: 1957 / 1958 onward
  - h4#- HiLo'Tron: 1960 onward
  - h4#- Super'Tron: 1964 onward
  - h3#gretsch-fingerboard-inlay-dating Fingerboard Inlay Changes
  - h3#gretsch-body-cutaway-dating Body Shape & Cutaway Changes
  - h4#- 6120 Chet Atkins / Nashville
  - h4#- 6122 Country Gentleman
  - h4#- 6128 Duo-Jet / 6129 SilverJet / 6131 Jet Firebird
  - h4#- 6136 White Falcon
  - h4#- 6134 White Penguin
  - h4#- 6187/6188/6189 Viking
  - h4#- Anniversary (6117/6118/6124/6125)
  - h3#gretsch-bigsby-vibrato-dating Bigsby & Vibrato Changes
  - h3#gretsch-dating-checklist Quick Dating Checklist
  - h4#- Positive markers
  - h4#- Warning flags
  - h2#gretsch-model-number-guide Model Number Guide by Era
  - h2#gretsch-appraisal-phoenix Need a Professional Opinion? Bring It to Joe’s.
  - h2#gretsch-faq Frequently Asked Questions

- **Callout / tip / aside wrapper count mismatch:** live=5, local=0 (diff +5). Live pages typically wrap pro-tip / warning content in styled aside boxes (`.tip`, `.callout`, `.info-box`, `.fusion-alert`, etc.). If local is short, the agent likely extracted prose but skipped wrapper styling. Grep the live HTML for the relevant class and add corresponding `<div class="jvg-callout">` / `jvg-tip` blocks on local.


## ðŸŸ¡ Should fix

- **33 heading(s) on local but not on live (extra):**
  - h1#- Gretsch Serial Number Lookup And Dating Guide
  - h2#- Look Up Your Gretsch Serial
  - h2#- Compare Your Gretsch’s Details
  - h3#- Gretsch Labels And Serial Number Locations
  - h3#- Gretsch Pickup Identification And Dating
  - h3#- Gretsch Bridges, Bigsbys And Tailpieces
  - h3#- Gretsch Knobs, Switches And Control Layouts
  - h3#- Gretsch Body Shapes, Binding And Inlays
  - h3#- Gretsch Headstocks, Logos And Tuners
  - h3#- Gretsch Finish Colors And Originality Checks
  - h3#- Vintage Gretsch Or Reissue? How To Tell
  - h2#- Choose The Correct Serial Number System
  - h2#- Why Gretsch Has Several Dating Systems
  - h2#- Sequential Gretsch Serial Numbers: 1939 To Mid 1960s
  - h3#- The Reused 1957 Labels
  - h2#- Gretsch Date Codes: Mid 1960s To Early 1970s
  - h2#- Baldwin Date Codes And Later Label Exceptions
  - h2#- Japanese Revival And Korean Gretsches: 1989 To 2002
  - h2#- Modern Gretsch Serial Numbers: 2003 Onward
  - h3#gretsch-fender-prefix-codes Documented Factory Prefixes
  - h2#- Check The Features Against The Serial
  - h3#gretsch-headstock-logo-changes Headstock Logos And Tuners
  - h3#gretsch-label-types Label Types And Serial Locations
  - h3#gretsch-pickup-dating Pickups And Replacement Covers
  - h3#gretsch-fingerboard-inlay-dating Fingerboard Inlays
  - h3#gretsch-body-cutaway-dating Bodies, Cutaways And Back Pads
  - h3#gretsch-bigsby-vibrato-dating Bigsbys, Bridges And Tailpieces
  - h2#- A Dating Checklist For Your Guitar
  - h2#- Gretsch Model Numbers And Era Clues
  - h2#- Gretsch Dating Questions
  - h2#- Manufacturer References
  - h2#- Get A Gretsch Appraisal From Joe
  - h2#- Talk With Joe Today

- Structural block extra on local â€” `section`: live=1, local=16 (+15)

- Structural block extra on local â€” `article`: live=1, local=9 (+8)

- Image count extra on local: live=16, local=19 (+3)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Gretsch Serial Number Lookup Tool + Dating Guide`
  - local: `Gretsch Serial Number Lookup & Dating Guide With Photos`

- **meta description differs:**
  - live:  `Free Gretsch serial number lookup tool + complete dating guide. Decode every era from 1939 to present: pre-Baldwin, Baldwin, Japan, and Fender era.`
  - local: `Date your Gretsch with a free serial lookup, vintage charts and photo guides to labels, pickups, hardware and finishes. Compare original guitars and reissues.`

- **6 internal link(s) on local missing trailing slash** (breaks `trailingSlash: 'always'`):
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-dating%2Fclub-label.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-dating%2Fviking-serial.jpg%3ForigWidth%3D5472%26origHeight%3D3648%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-sn%2F1969-gretsch-serial-number.jpg%3ForigWidth%3D2288%26origHeight%3D1519%26origFormat%3Djpg&w=2288&h=1519&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-sn%2F1970s-gretsch-hyphenated-serial-number-scaled.jpg%3ForigWidth%3D2560%26origHeight%3D1707%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-dating%2Freverb-anniversary.jpg%3ForigWidth%3D800%26origHeight%3D533%26origFormat%3Djpg&w=800&h=533&q=90&f=webp
  - /_image?href=%2F%40fs%2FC%3A%2FUsers%2Fjoeda%2FDocuments%2FCodex%2F2026-10-15%2Fle%2Fwork%2Frickenbacker-site%2Fsrc%2Fassets%2Fimages%2Fgretsch-dating%2Fblack-label.jpg%3ForigWidth%3D6240%26origHeight%3D4160%26origFormat%3Djpg&w=2400&h=1600&q=90&f=webp


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, Person, Person


## Summary

- Live headings: 45 | Local: 33
- Live images:   16 | Local: 19
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 18, broken: 0
- Consecutive <figure> runs â€” live: 3 (total 10 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 5 | local: 0
- Structural blocks (live vs local):
  - section: 1 vs 16
  - article: 1 vs 9
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, WebApplication, Offer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.