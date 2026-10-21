# Live-diff audit â€” prepublish-post-gibson-les-paul-junior-guide

- Live:  http://127.0.0.1:4340/post/gibson-les-paul-junior-guide/
- Local: http://127.0.0.1:4341/post/gibson-les-paul-junior-guide/
- When:  2026-10-21T23:03:03.424Z

## ðŸ”´ Must fix

- **4 heading(s) on live but missing on local:**
  - h1#- Gibson Les Paul Junior: Authentication, Evolution & Value (1954 To 1962)
  - h2#- The Gibson Les Paul TV Model: History, Specs, and Value (1954 to 1959)
  - h2#- 1954 Gibson Les Paul Goldtop Authentication Guide: Every Detail That Matters
  - h2#- Gibson ES-175 Guide: Evolution, Technical Specs, and Market Value


## ðŸŸ¡ Should fix

- **10 heading(s) on local but not on live (extra):**
  - h1#- Gibson Les Paul Junior Dating And Authentication Guide
  - h3#how-can-uv-light-help-identify-a-refinish How Can UV Light Help Identify A Refinish?
  - h3#is-a-repaired-headstock-a-deal-breaker Is A Repaired Headstock A Deal Breaker?
  - h3#which-junior-makes-a-good-players-guitar Which Junior Makes A Good Player’s Guitar?
  - h3#how-much-does-a-vintage-junior-weigh How Much Does A Vintage Junior Weigh?
  - h3#what-string-gauges-suit-a-vintage-junior What String Gauges Suit A Vintage Junior?
  - h3#what-is-a-gibson-factory-order-number What Is A Gibson Factory Order Number?
  - h2#- 1968 Gibson Les Paul Custom: Specs, Dating And Value
  - h2#- 1970 Gibson Les Paul Custom: Specs And Dating Guide
  - h2#- Gibson Les Paul Custom 1968 To 1986: Specs And Dating

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Gibson Les Paul Junior Price, Dating | Joe's Vintage Guitars`
  - local: `Gibson Les Paul Junior Dating And Authentication Guide`

- **meta description differs:**
  - live:  ``
  - local: `Identify vintage Gibson Les Paul Juniors by body shape, serial, P-90 pickup, original finish and hardware, with photos and practical dating checks.`


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): Question, Question, Question, Question, Question, Question, Answer, Answer, Answer, Answer, Answer, Answer


## Summary

- Live headings: 90 | Local: 96
- Live images:   10 | Local: 10
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 9, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.