# Live-diff audit â€” expansion-before-gibson-les-paul-deluxe-authentication-guide

- Live:  https://www.joesvintageguitarsaz.com/post/gibson-les-paul-deluxe-authentication-guide/
- Local: http://127.0.0.1:4325/post/gibson-les-paul-deluxe-authentication-guide/
- When:  2026-11-04T21:59:03.071Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h2#- Check A Claimed Original Deluxe Configuration


## ðŸŸ¡ Should fix

- **4 heading(s) on local but not on live (extra):**
  - h2#- A 1971 Goldtop With Embossed Mini-Humbuckers
  - h2#- A 1969 Deluxe Routed For Full-Size Humbuckers
  - h2#- A Faded Wine-Red Deluxe From 1975
  - h2#- Separate The Pickup Type From The Installation

- Structural block extra on local â€” `section`: live=14, local=17 (+3)

- Image count extra on local: live=14, local=26 (+12)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[2Ã—run-of-2, 1Ã—run-of-3], local=[8Ã—run-of-2, 1Ã—run-of-3] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 26 | Local: 29
- Live images:   14 | Local: 26
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 23, broken: 0
- Consecutive <figure> runs â€” live: 3 (total 7 figures) | local: 9 (total 19 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 14 vs 17
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.