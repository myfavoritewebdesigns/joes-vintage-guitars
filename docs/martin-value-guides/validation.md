# Publication Validation

October 26, 2026.

- Production build: 315 pages, completed successfully.
- Astro check: zero errors and zero warnings; 87 existing hints.
- Rendered copy gate: zero hard failures. Warning-tier output reviewed; shared site language remains unchanged.
- Fourteen-guide structural validation: zero errors across 121 table rows and 28 article photographs. Exact approved values and text are preserved.
- Image licensing: 28 content nodes match their rendered image URLs, zero mismatches.
- All new guides have production canonicals, indexable output, sitemap and IndexNow entries, working internal destinations and a working shared contact form.
- All fourteen mobile tables fit at 390px. No horizontal page overflow or broken loaded content images.
- Independent source, rendered-output and desktop/mobile visual review passed. Pre-1920 scope and the final small/early price reduction are intact.

## Intentional Preview-To-Production Differences

The existing deterministic live-diff script compares whole documents, including template chrome. Each of the fourteen preview-to-production reports flags the same three expected changes: the preview-only contact-link panel heading is replaced by the production contact form; picture/source URLs are replaced by the existing Astro responsive image pipeline; and nested Organization schema placeholders are replaced by the main site's ProfessionalService/Person schema references. No article headings, approved prices or content photos are missing. Existing production social icons account for the image-count warning. Production canonicals and standard title suffixes are intentional.

These are the same documented template adaptations used when publishing the Martin authentication histories. Reports are retained in reports/martin-values-*-audit-*.md; the comparison summary is preview-comparison.json. There are no unresolved content, asset or layout blockers.
