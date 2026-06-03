# Live-diff audit â€” fender-amp-serial

- Live:  https://www.joesvintageguitarsaz.com/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/
- Local: http://localhost:4321/vintage-fender-amplifier-serial-numbers-how-to-find-the-year/
- When:  2026-06-03T22:27:29.111Z

## ðŸ”´ Must fix

- **2 heading(s) on live but missing on local:**
  - h4#- Share This Story, Choose Your Platform!
  - h3#- Get in Touch!

- **Structural block mismatch â€” `section`:** live=3, local=1 (missing 2 on local)

- **Structural block mismatch â€” `fusionRow`:** live=9, local=0 (missing 9 on local)

- **Image count mismatch:** live=17, local=12 (missing 5 on local)

- **9 <picture><source> URL(s) on live but missing on local:**
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Princeton-Tube-Chart.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Princeton-Edited.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/brownface-edited.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/blonde-edited.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Blackface-Edited.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Silverface-Edited.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/08/Speaker-Codes-scaled.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2024/03/joe-dampt-img-200x130.jpg.webp
  - https://www.joesvintageguitarsaz.com/wp-content/uploads/2025/02/chat-icon.png.webp

- **JSON-LD @type(s) on live but missing on local:** Place, PostalAddress, MusicStore+Organization, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, ImageObject, WebSite, BreadcrumbList, ListItem, ListItem, WebPage, WebPage, Person, Article, ProfessionalService, OpeningHoursSpecification, Offer, Offer, Offer, Offer, Service, Service


## ðŸŸ¡ Should fix

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- Callout / tip / aside count differs slightly: live=1, local=0 (diff +1). May be a single overlooked aside, or acceptable noise (e.g. a live `.warn` rendered as a bullet list on local).


## ðŸŸ¢ Acceptable / informational

- JSON-LD @type(s) on local but not live (extra): SearchAction, LocalBusiness, AdministrativeArea, AdministrativeArea


## Summary

- Live headings: 13 | Local: 11
- Live images:   17 | Local: 12
- Live <picture><source>: 9 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 11, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 1 | local: 0
- Structural blocks (live vs local):
  - section: 3 vs 1
  - article: 0 vs 0
  - main: 1 vs 1
  - fusionRow: 9 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, Place, GeoCoordinates, PostalAddress, MusicStore+Organization, PostalAddress, ImageObject, WebSite, ImageObject, BreadcrumbList, ListItem, ListItem, WebPage, Person, ImageObject, Article, ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, Offer, Service, Offer, Service, Offer, Service, Offer, Service, ProfessionalService, OpeningHoursSpecification, AdministrativeArea, AdministrativeArea] | local: [ProfessionalService, QuantitativeValue, AggregateRating, OpeningHoursSpecification, PostalAddress, ContactPoint, GeoCoordinates, WebSite, SearchAction, MusicStore+Organization, PostalAddress, LocalBusiness, PostalAddress, GeoCoordinates, AdministrativeArea, AdministrativeArea, Place, GeoCoordinates, PostalAddress, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, Article, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.