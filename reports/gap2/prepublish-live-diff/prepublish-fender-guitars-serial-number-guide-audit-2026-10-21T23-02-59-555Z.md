# Live-diff audit â€” prepublish-fender-guitars-serial-number-guide

- Live:  http://127.0.0.1:4340/fender-guitars-serial-number-guide/
- Local: http://127.0.0.1:4341/fender-guitars-serial-number-guide/
- When:  2026-10-21T23:02:59.556Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **meta description differs:**
  - live:  `Decode any Fender serial number, then confirm the year with neck heel dates and pot codes. Free lookup plus year-by-year charts from a vintage Fender appraiser.`
  - local: `Decode any Fender serial number, then confirm the year with neck heel dates and pot codes. Free lookup plus year-by-year charts from a Fender appraiser.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 35 | Local: 35
- Live images:   40 | Local: 40
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 30, broken: 0
- Consecutive <figure> runs â€” live: 3 (total 10 figures) | local: 3 (total 10 figures)
- Callout / tip / info-box blocks â€” live: 2 | local: 2
- Structural blocks (live vs local):
  - section: 11 vs 11
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, Article, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, VideoObject, Clip, Clip, Clip, Clip, Clip, Clip, Clip, Clip, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, WebApplication, Offer, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, Article, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, WebPage, VideoObject, Clip, Clip, Clip, Clip, Clip, Clip, Clip, Clip, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, WebApplication, Offer, BreadcrumbList, ListItem, ListItem, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.