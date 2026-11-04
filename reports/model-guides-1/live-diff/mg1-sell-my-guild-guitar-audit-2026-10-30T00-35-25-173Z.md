# Live-diff audit â€” mg1-sell-my-guild-guitar

- Live:  https://www.joesvintageguitarsaz.com/sell-my-guild-guitar/
- Local: https://jvg-local.test/sell-my-guild-guitar/
- When:  2026-10-30T00:35:25.174Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **5 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  - /images/sell-rickenbacker/prices-icon.svg
  - /images/sell-rickenbacker/classic-icon.svg
  - /images/sell-rickenbacker/guitar-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 15 | Local: 15
- Live images:   12 | Local: 12
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 9 vs 9
  - article: 3 vs 3
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, VideoObject] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, Article, VideoObject]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.