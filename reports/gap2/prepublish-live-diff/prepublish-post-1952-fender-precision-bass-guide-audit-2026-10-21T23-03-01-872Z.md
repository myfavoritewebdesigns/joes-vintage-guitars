# Live-diff audit â€” prepublish-post-1952-fender-precision-bass-guide

- Live:  http://127.0.0.1:4340/post/1952-fender-precision-bass-guide/
- Local: http://127.0.0.1:4341/post/1952-fender-precision-bass-guide/
- When:  2026-10-21T23:03:01.873Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h1#- The 1951, 1952 & 1953 Fender Precision Bass: Slab-Body P-Bass Authentication & Valuation Guide


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h1#- 1951 To 1953 Fender Precision Bass Slab-Body Dating Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `1951 To 1953 Fender Precision Bass Slab-Body Value Guide`
  - local: `1951 To 1953 Fender Precision Bass Slab-Body Dating Guide`

- **meta description differs:**
  - live:  `A collector's guide to the 1951, 1952, and 1953 Fender Precision Bass: the original slab-body P-Bass. Joe Dampt covers every authentication detail: butterscotch nitro finish, tan lines under the hardware, nail holes, the early single-coil pickup with white string wrapping, pressed fiber saddles, Clarostat pots, paper-in-oil capacitor, large flat metal tuner buttons, mismatched neck and body dates, and more. Free appraisals nationwide.`
  - local: `Identify 1951 to 1953 Fender Precision Bass features, original parts and construction. Compare dating clues, repairs and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 51 | Local: 51
- Live images:   31 | Local: 31
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 30, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.