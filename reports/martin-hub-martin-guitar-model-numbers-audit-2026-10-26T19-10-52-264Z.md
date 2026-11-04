# Live-diff audit â€” martin-hub-martin-guitar-model-numbers

- Live:  http://127.0.0.1:58071/martin-guitar-model-numbers/
- Local: http://127.0.0.1:50735/martin-guitar-model-numbers/
- When:  2026-10-26T19:10:52.265Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h2#martin-model-histories-title Martin Model Histories And Year Changes
  - h3#- Dreadnoughts
  - h3#- Orchestra Models
  - h3#- Small Bodies, Nylon And Four Strings
  - h3#- 12-Strings, Archtops And Electrics

- Structural block extra on local â€” `section`: live=12, local=13 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 13 | Local: 18
- Live images:   10 | Local: 10
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 9, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 12 vs 13
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.