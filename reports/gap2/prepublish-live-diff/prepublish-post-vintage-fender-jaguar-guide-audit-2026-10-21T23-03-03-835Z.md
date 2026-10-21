# Live-diff audit â€” prepublish-post-vintage-fender-jaguar-guide

- Live:  http://127.0.0.1:4340/post/vintage-fender-jaguar-guide/
- Local: http://127.0.0.1:4341/post/vintage-fender-jaguar-guide/
- When:  2026-10-21T23:03:03.836Z

## ðŸ”´ Must fix

- **4 heading(s) on live but missing on local:**
  - h1#- Vintage Fender Jaguar Authentication Guide
  - h3#the-fullerplast-layer-1963-onward The Fullerplast Layer (1963 Onward)
  - h2#- Fender Jazz Bass Guide 1960-1975: Year-by-Year Specs, Dating, and Value
  - h2#- The Fender Mustang: History, Authentication, and Value

- **Image count mismatch:** live=24, local=23 (missing 1 on local)


## ðŸŸ¡ Should fix

- **4 heading(s) on local but not on live (extra):**
  - h1#- Vintage Fender Jaguar Dating And Authentication Guide
  - h3#the-fullerplast-layer-from-mid-1962 The Fullerplast Layer (From Mid-1962)
  - h2#- Vintage Fender Jazz Bass Dating And Identification Guide
  - h2#- 1963 Fender Stratocaster: Authentication & Dating Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Fender Jaguar Dating And Value | Joe's Vintage Guitars`
  - local: `Vintage Fender Jaguar Dating And Authentication Guide`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 83 | Local: 83
- Live images:   24 | Local: 23
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 22, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 9 vs 9
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, Thing, Thing, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, Thing, Thing, Thing, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.