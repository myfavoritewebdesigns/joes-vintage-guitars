# Live-diff audit â€” mg2-deluxe-photo-auth

- Live:  https://27589c91.joes-vintage-guitars.pages.dev/post/epiphone-deluxe-authentication-guide/
- Local: http://127.0.0.1:4338/post/epiphone-deluxe-authentication-guide/
- When:  2026-11-02T18:32:38.877Z

## ðŸ”´ Must fix

_None._

## ðŸŸ¡ Should fix

- **2 heading(s) on local but not on live (extra):**
  - h3#- 1933 Masterbilt DeLuxe With A Blonde Refinish
  - h3#- Refinish, Shaved Bridge And Pickup Mounting Holes

- Image count extra on local: live=13, local=19 (+6)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **Figure-run pattern differs:** live=[2Ã—run-of-2], local=[2Ã—run-of-2, 2Ã—run-of-3] â€” verify gallery layout matches.


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, Person, Person, Person, Person, Person, Person


## Summary

- Live headings: 36 | Local: 38
- Live images:   13 | Local: 19
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 17, broken: 0
- Consecutive <figure> runs â€” live: 2 (total 4 figures) | local: 4 (total 10 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 15 vs 15
  - article: 1 vs 1
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, FAQPage, Question, Answer, Question, Answer, Question, Answer, Question, Answer, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.