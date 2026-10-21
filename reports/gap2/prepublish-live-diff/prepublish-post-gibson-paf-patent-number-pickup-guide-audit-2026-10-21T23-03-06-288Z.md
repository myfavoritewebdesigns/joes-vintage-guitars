# Live-diff audit â€” prepublish-post-gibson-paf-patent-number-pickup-guide

- Live:  http://127.0.0.1:4340/post/gibson-paf-patent-number-pickup-guide/
- Local: http://127.0.0.1:4341/post/gibson-paf-patent-number-pickup-guide/
- When:  2026-10-21T23:03:06.289Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `Gibson PAF and Patent Number Pickups: History, Authentication, and Value | Joe's Vintage Guitars`
  - local: `Gibson PAF And Patent Number Pickup Value And Dating`

- **meta description differs:**
  - live:  `The complete Gibson PAF and patent number pickup guide: history, stickers, magnets, bobbins, ring stamps, every authentication tell, current values, and why you should never open one.`
  - local: `Identify Gibson PAF and Patent Number pickups features, original parts and construction. Compare dating clues, repairs and photos from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 28 | Local: 28
- Live images:   28 | Local: 28
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 27, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 1
- Structural blocks (live vs local):
  - section: 3 vs 3
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer, Question, Answer]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.