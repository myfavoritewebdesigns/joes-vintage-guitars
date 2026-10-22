# Live-diff audit â€” prepublish-how-to-read-gibson-serial-numbers

- Live:  http://127.0.0.1:4340/how-to-read-gibson-serial-numbers/
- Local: http://127.0.0.1:4341/how-to-read-gibson-serial-numbers/
- When:  2026-10-21T23:03:06.785Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- Structural block extra on local â€” `section`: live=21, local=22 (+1)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 59 | Local: 59
- Live images:   24 | Local: 24
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 20, broken: 0
- Consecutive <figure> runs â€” live: 5 (total 13 figures) | local: 5 (total 13 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 21 vs 22
  - article: 23 vs 23
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, Organization, ImageObject, Person, ImageObject, CollegeOrUniversity, Article, ImageObject, BreadcrumbList, ListItem, ListItem, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, Organization, ImageObject, Person, ImageObject, CollegeOrUniversity, Article, ImageObject, BreadcrumbList, ListItem, ListItem, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, Organization, ImageObject, Person, ImageObject, CollegeOrUniversity, Article, ImageObject, BreadcrumbList, ListItem, ListItem, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, Organization, ImageObject, Person, ImageObject, CollegeOrUniversity, Article, ImageObject, BreadcrumbList, ListItem, ListItem, WebApplication, Offer, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, VideoObject, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.