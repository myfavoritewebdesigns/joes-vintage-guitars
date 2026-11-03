# Live-diff audit â€” mg2-olympic-photo-auth

- Live:  https://149e237b.joes-vintage-guitars.pages.dev/post/epiphone-olympic-authentication-guide/
- Local: http://127.0.0.1:4338/post/epiphone-olympic-authentication-guide/
- When:  2026-11-02T20:15:42.717Z

## ðŸ”´ Must fix

- **4 heading(s) on live but missing on local:**
  - h2#- A Kalamazoo Olympic From Joe’s Archive
  - h3#- Double Cutaway With A Three-A-Side Headstock
  - h2#- Serial 84467 And The Limits Of A Lookup
  - h3#- Five Digits On The Rear Headstock


## ðŸŸ¡ Should fix

- **5 heading(s) on local but not on live (extra):**
  - h2#- Olympic Photos From Joe’s Shop
  - h3#- 1940s Yellow-Burst Olympic Archtop
  - h3#- 1965 Sunburst Single-Pickup Olympic
  - h2#- Olympic Labels And Serial Systems
  - h3#- The New York Acoustic Olympic Label

- Image count extra on local: live=16, local=22 (+6)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-2, 1Ã—run-of-5], local=[1Ã—run-of-2, 1Ã—run-of-5, 1Ã—run-of-6] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 38 | Local: 39
- Live images:   16 | Local: 22
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 15, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 7 figures) | local: 3 (total 13 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 14 vs 14
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.