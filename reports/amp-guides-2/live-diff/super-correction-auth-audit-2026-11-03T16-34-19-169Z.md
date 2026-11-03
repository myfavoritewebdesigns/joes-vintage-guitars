# Live-diff audit â€” super-correction-auth

- Live:  https://82cb87d2.joes-vintage-guitars.pages.dev/post/fender-super-reverb-authentication-guide/
- Local: http://127.0.0.1:4328/post/fender-super-reverb-authentication-guide/
- When:  2026-11-03T16:34:19.170Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h3#- 1963 To 1967 Fender Super Reverb


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h3#- 1965 Fender Super Reverb

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 36 | Local: 36
- Live images:   17 | Local: 17
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 13, broken: 0
- Consecutive <figure> runs â€” live: 4 (total 9 figures) | local: 4 (total 9 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 12 vs 12
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.