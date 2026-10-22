# Live-diff audit â€” prepublish-post-gibson-es-125-guide

- Live:  http://127.0.0.1:4340/post/gibson-es-125-guide/
- Local: http://127.0.0.1:4341/post/gibson-es-125-guide/
- When:  2026-10-21T23:03:03.068Z

## ðŸ”´ Must fix

- **5 heading(s) on live but missing on local:**
  - h1#- Gibson ES-125 Complete Guide: Every Variant, Era & What to Look For
  - h3#price-tiers-general-guidance Price Tiers (General Guidance)
  - h2#- Identifying the Rare “Electric” Martin: A Look at the D-18E and D-28E Specs
  - h2#- 1966 Gibson ES-335 Authentication Guide: Patent Number Pickups, Trapeze Tailpiece & Every Pre-Norlin Detail
  - h2#- 1954 Gibson Les Paul Goldtop Authentication Guide: Every Detail That Matters


## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h1#- Vintage Gibson ES-125 Dating And Authentication Guide
  - h3#originality-and-condition Originality And Condition
  - h2#- 1968 Gibson Les Paul Custom: Specs, Dating And Value
  - h2#- 1970 Gibson Les Paul Custom: Specs And Dating Guide
  - h2#- Gibson Les Paul Custom 1968 To 1986: Specs And Dating

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Gibson ES-125: Variants, Dating, Authentication And Value`
  - local: `Vintage Gibson ES-125 Dating And Authentication Guide`

- **meta description differs:**
  - live:  `The ES-125 spent nearly 30 years as Gibson’s quiet workhorse: affordable, versatile, and loaded with P-90 character. Here’s everything you need to know to buy, date, and identify one.`
  - local: `Identify a vintage Gibson ES-125 by its construction, original parts and dated components, with repair checks and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 39 | Local: 39
- Live images:   16 | Local: 16
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 15, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.