# Live-diff audit â€” martin-serial-and-model-numbers

- Live:  https://www.joesvintageguitarsaz.com/martin-serial-and-model-numbers/
- Local: http://localhost:4321/martin-serial-and-model-numbers/
- When:  2026-06-03T18:51:32.898Z

## ðŸ”´ Must fix

- **2 heading(s) on live but missing on local:**
  - h4#- Share This Story, Choose Your Platform!
  - h3#- Get in Touch!

- **Structural block mismatch â€” `fusionRow`:** live=10, local=0 (missing 10 on local)

- **Image count mismatch:** live=17, local=13 (missing 4 on local)

- **10 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/01/Model-Name-Serial-Number-Martin.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/Martin-wartime-tuners-plastic-buttons-no-bushings-scaled.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/martin-tuners-waverly-round-end-scaled.jpeg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/martin-tuners-hexagonal-kluson-scaled.jpeg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/martin-kluson-waffle-back-tuners-scaled.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/martin-back-of-body-logo-stamp.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/martin-guitar-back-of-headstock-stamp-scaled.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2026/02/2003-martin-d-35-sunburst-683x1024.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2024/03/joe-dampt-img-200x130.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Article, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service, HowTo, HowTo, HowToStep, HowToStep, HowToStep, HowToStep, HowToStep, HowToStep, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Dataset, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization, Organization


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- Talk WithJoe Today

- Structural block extra on local â€” `section`: live=3, local=11 (+8)

- **8 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  - /images/martin-serial/Martin-wartime-tuners-plastic-buttons-no-bushings-scaled.jpg
  - /images/martin-serial/martin-tuners-waverly-round-end-scaled.jpeg
  - /images/martin-serial/martin-tuners-hexagonal-kluson-scaled.jpeg
  - ... and 3 more
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- Callout / tip / aside count differs slightly: live=1, local=0 (diff +1). May be a single overlooked aside, or acceptable noise (e.g. a live `.warn` rendered as a bullet list on local).


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 44 | Local: 43
- Live images:   17 | Local: 13
- Live <picture><source>: 10 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 12, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 11
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 10 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea, HowTo, HowToStep, HowToStep, HowToStep, Dataset, Organization, Organization, ImageObject, Organization, HowTo, HowToStep, HowToStep, HowToStep, Dataset, Organization, Organization, ImageObject, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization, Dataset, Organization] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.