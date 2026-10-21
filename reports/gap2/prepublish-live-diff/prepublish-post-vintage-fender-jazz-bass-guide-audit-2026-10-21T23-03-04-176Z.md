# Live-diff audit â€” prepublish-post-vintage-fender-jazz-bass-guide

- Live:  http://127.0.0.1:4340/post/vintage-fender-jazz-bass-guide/
- Local: http://127.0.0.1:4341/post/vintage-fender-jazz-bass-guide/
- When:  2026-10-21T23:03:04.177Z

## ðŸ”´ Must fix

- **3 heading(s) on live but missing on local:**
  - h1#- Fender Jazz Bass Guide 1960-1975: Year-by-Year Specs, Dating, and Value
  - h2#- Gibson Les Paul Custom 1968 To 1986: Specs And Dating
  - h2#- 1960 Gibson Les Paul Standard: Value, Neck Changes And Specs


## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h1#- Vintage Fender Jazz Bass Dating And Identification Guide
  - h2#- Fender Precision Bass 1957 to 1959: Identification, Specs & Value
  - h2#- 1951 To 1953 Fender Precision Bass Slab-Body Dating Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Fender Jazz Bass Dating And Value | Joe's Vintage Guitars`
  - local: `Vintage Fender Jazz Bass Dating And Identification Guide`

- **meta description differs:**
  - live:  `Date a vintage Fender Jazz Bass from what you can see. Stack knob to three knob, slab to veneer, clay to pearloid, the bound-dot window, and the 1970s changes, 1960 to 1975.`
  - local: `Identify a vintage Fender Jazz Bass by its construction, original parts and dated components, with repair checks and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 37 | Local: 37
- Live images:   19 | Local: 19
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 18, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.