# Live-diff audit â€” prepublish-post-gibson-byrdland-authentication-guide

- Live:  http://127.0.0.1:4340/post/gibson-byrdland-authentication-guide/
- Local: http://127.0.0.1:4341/post/gibson-byrdland-authentication-guide/
- When:  2026-10-21T23:03:03.045Z

## ðŸ”´ Must fix

- **3 heading(s) on live but missing on local:**
  - h1#- Gibson Byrdland Authentication Guide: How to Date & Identify Any Example (1955 to Present)
  - h2#- Authentic 1955-1958 TV Yellow Les Paul Special: A Collector’s Guide
  - h2#- Bob Denton’s 1955 Gibson J-200


## ðŸŸ¡ Should fix

- **3 heading(s) on local but not on live (extra):**
  - h1#- Vintage Gibson Byrdland Dating And Authentication Guide
  - h2#- 1968 Gibson Les Paul Custom: Specs, Dating And Value
  - h2#- 1970 Gibson Les Paul Custom: Specs And Dating Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Gibson Byrdland: Dating, Authentication And Value Guide`
  - local: `Vintage Gibson Byrdland Dating And Authentication Guide`

- **meta description differs:**
  - live:  `How to identify and authenticate any Gibson Byrdland, from the first Kalamazoo prototypes in 1955 through the current Custom Shop era. Covers every major construction change: cutaway shape, pickups, solid vs. pressed back, neck lamination, nut width, labels, serial numbers, hardware, and more.`
  - local: `Identify a vintage Gibson Byrdland by its construction, original parts and dated components, with repair checks and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 68 | Local: 68
- Live images:   25 | Local: 25
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 24, broken: 0
- Consecutive <figure> runs â€” live: 5 (total 12 figures) | local: 5 (total 12 figures)
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