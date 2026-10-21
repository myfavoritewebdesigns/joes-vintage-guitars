# Live-diff audit â€” prepublish-rickenbacker-finish-colors

- Live:  http://127.0.0.1:4340/rickenbacker-finish-colors/
- Local: http://127.0.0.1:4341/rickenbacker-finish-colors/
- When:  2026-10-21T23:03:04.473Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Rickenbacker Colors: Fireglo, Mapleglo & Jetglo`
  - local: `Rickenbacker Finish Colors: Fireglo, Mapleglo And Jetglo`

- **meta description differs:**
  - live:  `Compare Rickenbacker Fireglo, Mapleglo, Jetglo, Azureglo and Autumnglo finishes. See color photos and learn what finish can tell you about age and originality.`
  - local: `Identify Rickenbacker Fireglo, Mapleglo and Jetglo finishes. Compare colors, finish wear and period details with photographs of guitars from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 6 | Local: 6
- Live images:   10 | Local: 10
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 8, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, TechArticle, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.