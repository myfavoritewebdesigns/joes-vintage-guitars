# Live-diff audit â€” prepublish-vintage-fender-stratocaster-value-guide-1959

- Live:  http://127.0.0.1:4340/vintage-fender-stratocaster-value-guide/1959/
- Local: http://127.0.0.1:4341/vintage-fender-stratocaster-value-guide/1959/
- When:  2026-10-21T23:03:07.968Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **meta description differs:**
  - live:  `1959 Fender Stratocaster value guide: $20,000 to $28,000. Compare early maple-board and later slab-board guitars, originality and custom colors.`
  - local: `1959 Fender Stratocaster value guide: $18,000 to $26,000. Compare early maple-board and later slab-board guitars, originality and custom colors.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 15 | Local: 15
- Live images:   7 | Local: 7
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 6, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 9 vs 9
  - article: 6 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.