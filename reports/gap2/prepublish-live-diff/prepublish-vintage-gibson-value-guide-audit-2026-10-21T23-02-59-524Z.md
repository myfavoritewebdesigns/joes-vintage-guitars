# Live-diff audit â€” prepublish-vintage-gibson-value-guide

- Live:  http://127.0.0.1:4340/vintage-gibson-value-guide/
- Local: http://127.0.0.1:4341/vintage-gibson-value-guide/
- When:  2026-10-21T23:02:59.525Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h3#- Byrdland

- Image count extra on local: live=26, local=27 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **meta description differs:**
  - live:  `Find your Gibson model and open its value guide, with Les Paul, SG, ES, archtop and acoustic references, condition notes and photos from Joe's own archive.`
  - local: `Find your Gibson model and open its value guide, with Les Paul, SG, ES, archtop and acoustic references, condition notes and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, Person, ListItem


## Summary

- Live headings: 28 | Local: 29
- Live images:   26 | Local: 27
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 25, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 6 vs 6
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, CollectionPage, ItemList, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, CollectionPage, ItemList, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.