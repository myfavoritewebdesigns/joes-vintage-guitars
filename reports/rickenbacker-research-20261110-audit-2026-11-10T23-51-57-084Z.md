# Live-diff audit â€” rickenbacker-research-20261110

- Live:  https://www.joesvintageguitarsaz.com/rickenbacker-serial-numbers/
- Local: http://127.0.0.1:4328/rickenbacker-serial-numbers/
- When:  2026-11-10T23:51:57.085Z

## ðŸ”´ Must fix

- **3 heading(s) on live but missing on local:**
  - h3#jvg-s-9-1997-to-1998-month-letters-m-to-y-skipping-o 1997 To 1998: Month Letters M To Z (Skipping O And Q)
  - h2#jvg-s-10-era-guide-1999-to-present-year-week Era Guide: 1999 To Present (Year + Week)
  - h3#jvg-s-12-xx-replacement-jackplates Replacement Jackplates And Z Prefixes


## ðŸŸ¡ Should fix

- **14 heading(s) on local but not on live (extra):**
  - h3#jvg-s-9-1997-to-1998-month-letters-m-to-y-skipping-o 1997 To 1998: Month Letters M To Y (Skipping O)
  - h2#jvg-s-10-era-guide-1999-to-present-year-week Era Guide: Late 1998 To Present (Year + Week)
  - h3#jvg-s-12-xx-replacement-jackplates Replacement Jackplates, XX And Z Prefixes
  - h2#- Model-Specific Serial Numbers And Locations
  - h3#short-scale-numbers Short-Scale V Numbers: Student Guitars And Capris
  - h3#early-basses Early 4000 Bass B Numbers
  - h3#capri-specials Individual Capri And F-Series Exceptions
  - h3#early-steels Frying Pans, Bakelite Steels And Pre-1954 Instruments
  - h3#early-spanish Prewar Fretted Spanish Guitars
  - h3#early-mandolins Mandolins And Other Uncommon Models
  - h2#reissue-and-export-numbers Reissues, Export Models And Edition Numbers
  - h2#source-conflicts Why Rickenbacker Date Charts Disagree
  - h3#amplifier-numbers Amplifier Numbers Need Their Own Rules
  - h3#rickenbacker-tool-coverage What This Lookup Covers

- Structural block extra on local â€” `section`: live=8, local=9 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 31 | Local: 42
- Live images:   18 | Local: 18
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 15, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 4 | local: 4
- Structural blocks (live vs local):
  - section: 8 vs 9
  - article: 6 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, TechArticle, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.