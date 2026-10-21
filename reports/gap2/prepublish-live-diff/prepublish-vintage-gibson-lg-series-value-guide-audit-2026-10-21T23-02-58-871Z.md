# Live-diff audit â€” prepublish-vintage-gibson-lg-series-value-guide

- Live:  http://127.0.0.1:4340/vintage-gibson-lg-series-value-guide/
- Local: http://127.0.0.1:4341/vintage-gibson-lg-series-value-guide/
- When:  2026-10-21T23:02:58.872Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#gibson-lg-values-by-year Gibson LG Values By Year

- **Image count mismatch:** live=10, local=9 (missing 1 on local)

- **JSON-LD @type(s) on live but missing on local:** ImageObject, ImageObject, Person, Person, Question, Answer


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#gibson-lg-values-by-model-and-era Gibson LG Values By Model And Era

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **meta description differs:**
  - live:  `Gibson LG-0, LG-1, LG-2 and LG-3 values by year, with model and era price ranges, original parts, case and repair guidance, and photos from my guitar archive.`
  - local: `Compare vintage Gibson LG-0, LG-1, LG-2 and LG-3 values by model and era, with original parts, bracing, repair details and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 16 | Local: 16
- Live images:   10 | Local: 9
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 8, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 2 vs 2
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Article, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Article, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.