# Live-diff audit â€” acoustic-hub-l-family-final

- Live:  https://www.joesvintageguitarsaz.com/vintage-gibson-acoustic-value-guide/
- Local: http://127.0.0.1:4328/vintage-gibson-acoustic-value-guide/
- When:  2026-10-30T00:33:32.313Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **9 heading(s) on local but not on live (extra):**
  - h2#choose-your-gibson-acoustic-model Choose Your Gibson Acoustic Model
  - h3#gavhub-j45-title Gibson J-45
  - h3#gavhub-j200-title Gibson J-200 / SJ-200
  - h3#gavhub-hummingbird-title Gibson Hummingbird
  - h3#gavhub-dove-title Gibson Dove
  - h3#gavhub-southern-jumbo-title Gibson Southern Jumbo
  - h3#gavhub-country-western-title Gibson Country Western
  - h3#gavhub-l-0-l-00-title Gibson L-0 & L-00
  - h3#gavhub-lg-title Gibson LG-0, LG-1, LG-2 & LG-3

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 13 | Local: 22
- Live images:   7 | Local: 7
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 6, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 2 vs 2
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Article, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Article, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.