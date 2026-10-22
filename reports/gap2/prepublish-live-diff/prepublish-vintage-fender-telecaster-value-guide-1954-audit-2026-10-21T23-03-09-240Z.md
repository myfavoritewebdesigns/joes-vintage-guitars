# Live-diff audit â€” prepublish-vintage-fender-telecaster-value-guide-1954

- Live:  http://127.0.0.1:4340/vintage-fender-telecaster-value-guide/1954/
- Local: http://127.0.0.1:4341/vintage-fender-telecaster-value-guide/1954/
- When:  2026-10-21T23:03:09.241Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `1954 Fender Telecaster Value Guide: Price & Specs`
  - local: `1954 Fender Telecaster Value Guide: Prices And Specs`

- **meta description differs:**
  - live:  `1954 Fender Telecaster value guide: $40,000 to $60,000. Compare blackguard and whiteguard values, bridge changes, originality and condition.`
  - local: `1954 Fender Telecaster value guide: $36,000 to $54,000. Compare blackguard and whiteguard values, bridge changes, originality and condition.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 16 | Local: 16
- Live images:   9 | Local: 9
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 8, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 2 figures) | local: 1 (total 2 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 10 vs 10
  - article: 6 vs 6
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, Article, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.