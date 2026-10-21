# Live-diff audit â€” prepublish-post-what-guitar-did-johnny-marr-play

- Live:  http://127.0.0.1:4340/post/what-guitar-did-johnny-marr-play/
- Local: http://127.0.0.1:4341/post/what-guitar-did-johnny-marr-play/
- When:  2026-10-21T23:03:06.665Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `What Guitar Did Johnny Marr Play? The Smiths ES-355, The 330, And The Rest | Joe's Vintage Guitars`
  - local: `Johnny Marr Guitars: Gibson ES-355, Fender And More`

- **meta description differs:**
  - live:  `What guitar did Johnny Marr play? The Stein ES-355, the 1982 Rickenbacker 330, the 1971 D-28, and the rest, plus public ranges without the Christie's Marr sticker.`
  - local: `Explore Johnny Marr's Gibson ES-355, Fender Jaguar and other guitars, with model details, vintage value context and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 25 | Local: 25
- Live images:   15 | Local: 15
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 14, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 3 figures) | local: 1 (total 3 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
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