# Live-diff audit â€” mg2-triumph-photo-auth

- Live:  https://dc644352.joes-vintage-guitars.pages.dev/post/epiphone-triumph-authentication-guide/
- Local: http://127.0.0.1:4338/post/epiphone-triumph-authentication-guide/
- When:  2026-11-02T19:07:35.237Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **4 heading(s) on local but not on live (extra):**
  - h2#- More Triumph Photos From Joe’s Shop
  - h3#- 1940s Sunburst Triumph
  - h3#- 1950s Sunburst Triumph With Repair History
  - h3#- Blonde Triumph Tenor

- Structural block extra on local â€” `section`: live=13, local=14 (+1)

- Image count extra on local: live=13, local=26 (+13)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[1Ã—run-of-4], local=[3Ã—run-of-4, 1Ã—run-of-5] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 35 | Local: 39
- Live images:   13 | Local: 26
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 21, broken: 0
- Consecutive <figure> runs â€” live: 1 (total 4 figures) | local: 4 (total 17 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 13 vs 14
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.