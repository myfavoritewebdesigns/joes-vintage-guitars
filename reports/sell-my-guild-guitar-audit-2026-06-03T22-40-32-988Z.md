# Live-diff audit â€” sell-my-guild-guitar

- Live:  https://www.joesvintageguitarsaz.com/sell-my-guild-guitar/
- Local: http://localhost:4321/sell-my-guild-guitar/
- When:  2026-06-03T22:40:32.988Z

## ðŸ”´ Must fix

- **2 heading(s) on live but missing on local:**
  - h2#- Sell My Vintage Guild Guitar
  - h3#- Get in Touch!

- **Structural block mismatch â€” `fusionRow`:** live=8, local=0 (missing 8 on local)

- **Image count mismatch:** live=8, local=6 (missing 2 on local)

- **2 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2022/05/0a6f08_ecfd1a0f540740709abb1dcdefc1ffa2_mv2-200x133.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Person, Person, Person, Article, SpeakableSpecification, SpeakableSpecification, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service, Review, Review, Review, Rating, Rating, Rating


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h2#- Talk WithJoe Today

- Structural block extra on local â€” `section`: live=3, local=4 (+1)

- Structural block extra on local â€” `article`: live=0, local=3 (+3)

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- Callout / tip / aside count differs slightly: live=1, local=0 (diff +1). May be a single overlooked aside, or acceptable noise (e.g. a live `.warn` rendered as a bullet list on local).


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 5 | Local: 4
- Live images:   8 | Local: 6
- Live <picture><source>: 2 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 5, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 4
  - article: 0 vs 3
  - main: 1 vs 1
  - fusionRow: 8 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, SpeakableSpecification, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea, Review, Person, Rating, Review, Person, Rating, Review, Person, Rating] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.