# Live-diff audit â€” photo-refresh-martin-000-18-authentication-guide

- Live:  https://0c9dcb45.joes-vintage-guitars.pages.dev/post/martin-000-18-authentication-guide/
- Local: http://127.0.0.1:4328/post/martin-000-18-authentication-guide/
- When:  2026-11-06T18:18:56.968Z

## ðŸ”´ Must fix

- **4 heading(s) on live but missing on local:**
  - h2#- Inspect Joe’s Wartime 000-18 Photographs
  - h3#- Top, Back And Headstock
  - h2#- Read The Model And Date Without Filling In Digits
  - h3#- The Stamp In Joe’s 1944 000-18


## ðŸŸ¡ Should fix

- **6 heading(s) on local but not on live (extra):**
  - h2#- Compare Joe’s 1938, 1951 And 1960 000-18s
  - h3#- Headstock And Open-Gear Tuners
  - h3#- A Clean Top Still Needs A Neck-Angle Check
  - h2#- Read The Model And Serial On Two Dated Guitars
  - h3#- The 1938 Martin 000-18
  - h3#- The 1960 Martin 000-18

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-5], local=[2Ã—run-of-2] â€” verify gallery layout matches.

- **meta description differs:**
  - live:  `Identify a vintage Martin 000-18 using its neck stamp, scale, bracing and repairs. Compare Joe’s 1944 and 1960 guitars with later reissues and OMs.`
  - local: `Identify a vintage Martin 000-18 using its neck stamp, scale, bracing and repairs. Compare Joe’s 1938, 1951 and 1960 guitars with later recreations.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 30 | Local: 32
- Live images:   14 | Local: 14
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 13, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 5 figures) | local: 2 (total 4 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 13 vs 13
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.