# Live-diff audit â€” prepublish-post-1955-1958-tv-yellow-les-paul-special-guide

- Live:  http://127.0.0.1:4340/post/1955-1958-tv-yellow-les-paul-special-guide/
- Local: http://127.0.0.1:4341/post/1955-1958-tv-yellow-les-paul-special-guide/
- When:  2026-10-21T23:03:01.903Z

## ðŸ”´ Must fix

- **1 heading(s) on live but missing on local:**
  - h1#- Authentic 1955-1958 TV Yellow Les Paul Special: A Collector’s Guide


## ðŸŸ¡ Should fix

- **1 heading(s) on local but not on live (extra):**
  - h1#- 1955 To 1958 TV Yellow Les Paul Special Dating Guide

- **2 image(s) on local missing width/height (CLS risk):**
  - /images/reverb-icon.svg
  - /images/reverb-icon.svg
  _(False-positive risk on Astro <Image> with aspect-ratio CSS â€” see CLAUDE.md.)_

- **<title> differs:**
  - live:  `1955 To 1958 TV Yellow Les Paul Special: Dating And Value`
  - local: `1955 To 1958 TV Yellow Les Paul Special Dating Guide`

- **meta description differs:**
  - live:  `In the ‘Golden Era’ of Gibson production, few instruments carry as much mojo, or as much confusion for collectors, as the 1955 to 1958 single-cutaway Les Paul Special. Finished in TV Yellow, these ‘slab-body’ mahogany guitars sit between the working-man’s Junior and the high-end Standard. But with seventy years of history comes seventy years of modifications. From ‘Bumblebee’ capacitors and original P-90 soapbars to the patina of aged brass tuner posts, we go through the details that tell you what you’ve got. Maybe you’re a longtime collector, or maybe you’re looking to sell a family heirloom. Either way, this guide, backed by personally authenticating over 40 of these models, covers what makes a ‘dead-original’ Special worth holding onto.`
  - local: `Identify TV Yellow Gibson Les Paul Special features and original parts. Compare construction, dating clues, repair details and photographs from my archive.`


## ðŸŸ¢ Acceptable / informational

_None._

## Summary

- Live headings: 40 | Local: 40
- Live images:   27 | Local: 27
- Live <picture><source>: 0 | Local: 0
- Live videos:   0 | Local: 0
- Live iframes:  0 | Local: 0
- Asset URLs on local checked: 26, broken: 0
- Consecutive <figure> runs â€” live: 0 (total 0 figures) | local: 0 (total 0 figures)
- Callout / tip / info-box blocks â€” live: 0 | local: 0
- Structural blocks (live vs local):
  - section: 4 vs 4
  - article: 4 vs 4
  - main: 1 vs 1
  - fusionRow: 0 vs 0
  - elementorSection: 0 vs 0
  - awbToc: 0 vs 0
- JSON-LD types â€” live: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person] | local: [ProfessionalService, ImageObject, QuantitativeValue, PostalAddress, ContactPoint, GeoCoordinates, AdministrativeArea, AdministrativeArea, WebSite, Person, ImageObject, CollegeOrUniversity, Service, AdministrativeArea, Service, AdministrativeArea, BreadcrumbList, ListItem, ListItem, ListItem, ListItem, BlogPosting, ImageObject, ImageObject, Person]

---

> Deterministic checks only. For qualitative visual review (screenshots,
> color rhythm, missing UI blocks), invoke the **live-diff-auditor** agent
> and pass it this report as context.