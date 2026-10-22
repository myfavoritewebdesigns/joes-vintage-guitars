# Live-diff audit â€” prepublish-post-1959-gibson-es-355-history-value

- Live:  http://127.0.0.1:4340/post/1959-gibson-es-355-history-value/
- Local: http://127.0.0.1:4341/post/1959-gibson-es-355-history-value/
- When:  2026-10-21T23:03:02.281Z

## ðŸ”´ Must fix

- **2 heading(s) on live but missing on local:**
  - h1#- The 1959 Gibson ES-355: History, Authentication, and Value
  - h2#es355-value What a 1959 ES-355 Is Worth


## ðŸŸ¡ Should fix

- **2 heading(s) on local but not on live (extra):**
  - h1#- 1959 Gibson ES-355 History And Authentication Guide
  - h2#es355-value Originality And Collector Appeal

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `1959 Gibson ES-355: History, Dating, Value And Price Guide`
  - local: `1959 Gibson ES-355 History And Authentication Guide`

- **meta description differs:**
  - live:  `The complete vintage 1959 Gibson ES-355 guide: mono ES-355TD versus stereo Vari-tone, split-diamond and ebony specs, serial and FON dating, PAF and Bigsby authentication, refinish and mod red flags, and what a 1959 355 is worth in 2026.`
  - local: `Identify a 1959 Gibson ES-355 by its mono or stereo wiring, pickups, neck, finish and hardware. Compare original details and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 25 | Local: 25
- Live images:   23 | Local: 23
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 22, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.