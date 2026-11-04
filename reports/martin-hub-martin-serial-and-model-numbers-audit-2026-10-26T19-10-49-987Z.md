# Live-diff audit â€” martin-hub-martin-serial-and-model-numbers

- Live:  http://127.0.0.1:58071/martin-serial-and-model-numbers/
- Local: http://127.0.0.1:50735/martin-serial-and-model-numbers/
- When:  2026-10-26T19:10:49.988Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h2#martin-model-histories-title Martin Model Histories And Year Changes
  - h3#- Dreadnoughts
  - h3#- Orchestra Models
  - h3#- Small Bodies, Nylon And Four Strings
  - h3#- 12-Strings, Archtops And Electrics

- Structural block extra on local â€” `section`: live=11, local=12 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 23 | Local: 28
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 11 vs 12
  - article: 6 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, Article, ImageObject, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, Article, ImageObject, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.