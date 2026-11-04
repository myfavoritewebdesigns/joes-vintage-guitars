# Live-diff audit â€” mg2-olympic-photo-value

- Live:  https://149e237b.joes-vintage-guitars.pages.dev/post/epiphone-olympic-value-guide/
- Local: http://127.0.0.1:4338/post/epiphone-olympic-value-guide/
- When:  2026-11-02T20:15:41.755Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- The Olympic Examples In These Photos

- Structural block extra on local â€” `section`: live=8, local=9 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 21 | Local: 22
- Live images:   8 | Local: 8
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 7, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 8 vs 9
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.