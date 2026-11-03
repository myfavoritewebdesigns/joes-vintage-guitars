# Live-diff audit â€” gibson-production

- Live:  https://www.joesvintageguitarsaz.com/post/gibson-shipping-totals-1948-1979/
- Local: http://127.0.0.1:4335/post/gibson-shipping-totals-1948-1979/
- When:  2026-11-03T16:57:16.823Z

## ðŸ”´ Must fix

- **17 heading(s) on live but missing on local:**
  - h1#- Gibson Guitar Production Numbers: Shipping Totals (1948 to 1979)
  - h2#lp-std-52-61 Les Paul Standard Shipping Totals (1952 To 1961)
  - h2#lp-cust-55-61 Les Paul Custom Shipping Totals (1955-1961)
  - h2#lp-jr-tv-54-61 Les Paul Junior & “TV Model” Shipping Totals (1954-1961)
  - h2#lp-spec-55-61 Les Paul Special Shipping Totals (1955-1961)
  - h2#norlin-lp-68-79 Gibson Norlin Era Les Paul Shipping Totals (1968-1979)
  - h2#sg-std-cust-62-78 Gibson SG Standard & Custom Shipping Totals (1962-1978)
  - h2#sg-jr-spec-62-78 Gibson SG Junior & SG Special Shipment Totals (1962-1978)
  - h2#tv-yellow-sg-62-68 Gibson TV Yellow SG Special & Junior (1962-1968)
  - h2#es-semi-58-69 Gibson ES-335,ES-345 & ES-355 Shipping Totals (1958-1969)
  - h2#premier-arch-48-69 Gibson L-5CES, Super 400CES & L-7 McCarty (1948-1969)
  - h2#es-arch-49-79 Gibson ES-175, ES-225, ES-295 & ES-5 Shipping Totals (1949-1979)
  - h2#thinline-arch-48-79 Gibson ES-300, ES-330, ES-350 & Byrdland Shipping Totals (1948-1979)
  - h2#acoustic-arch-48-79 Gibson Acoustic L-4, L-5, L-7 & Super 400 Shipment Totals (1948-1979)
  - h2#firebird-63-69 Gibson Firebird Shipping Totals. (1963-1969)
  - h2#modern-59-79 Gibson Flying V, Explorer & Moderne Shipping Totals (1959-1979)
  - h2#conclusion Conclusion: Leveraging Data for Accurate Appraisals


## ðŸŸ¡ Should fix

- **35 heading(s) on local but not on live (extra):**
  - h1#- Gibson Production Numbers And Shipping Totals (1948 To 1979)
  - h2#shipment-lookup-title Look Up A Model, Year And Finish
  - h2#- What A Gibson Shipping Total Can Tell You
  - h2#- Les Paul Model And Standard Shipping Totals
  - h2#- Les Paul Custom Shipping Totals
  - h2#- Les Paul Junior And TV Model Records
  - h2#- Les Paul Special And Finish Changes
  - h2#- Later Les Pauls, Finish Rows And Left-Handed Guitars
  - h2#- SG Standard And Custom Records
  - h2#- SG Junior And Special Records
  - h2#- The SG TV Category
  - h2#- ES-335, ES-345 And ES-355 Records
  - h2#- L-5CES, Super 400CES And McCarty L-7 Records
  - h2#- ES-175, ES-225, ES-295 And ES-5 Records
  - h2#- ES-300, ES-330, ES-350 And Byrdland Records
  - h2#- Acoustic L-4, L-5, L-7 And Super 400 Records
  - h2#- Firebird Shipping Totals
  - h2#- Flying V, Explorer And Moderne
  - h2#- Additional Models In This Reference
  - h2#- Browse The Model Tables
  - h3#- Solidbody Guitars
  - h3#- Electric Archtops And Thinlines
  - h3#- Acoustic Archtops
  - h3#- Flat-Top Acoustics
  - h3#- Basses
  - h2#- Conflicting Figures And Open Questions
  - h2#- Sources, Definitions And Coverage
  - h2#- Identify Your Gibson Before Comparing Rarity
  - h2#faq Frequently Asked Questions
  - h3#- Are Gibson Shipping Totals The Same As Production Numbers?
  - h3#- How Many 1958 Les Paul Sunbursts Were Made?
  - h3#- Can I Look Up A Gibson By Model And Finish?
  - h3#- Does A Missing Entry Mean Gibson Made None?
  - h3#- How Many Explorers Did Gibson Ship In 1958?
  - h3#- Does A Low Shipment Total Make A Guitar Valuable?

- Structural block extra on local â€” `section`: live=3, local=31 (+28)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **meta description differs:**
  - live:  `Official Kalamazoo shipping totals for Gibson guitars, 1948 to 1979. The production numbers behind an accurate vintage appraisal, model by model.`
  - local: `Look up Gibson shipping totals by model, year and finish, 1948 to 1979. Sourced records for guitars and basses, with conflicting figures clearly identified.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, Person, Person, FAQPage, Question, Question, Question, Question, Question, Question, Answer, Answer, Answer, Answer, Answer, Answer


## Summary

- Live headings: 24 | Local: 42
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 10, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 31
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.