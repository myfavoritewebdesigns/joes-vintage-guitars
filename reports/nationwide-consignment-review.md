# Nationwide Consignment Preview

Prepared on October 30, 2026 from main commit 505d4dc. Joe explicitly approved the final preview, including the bulk FedEx discount copy, for production publication.

## Changes

- Rebuild /consignment/ as a nationwide conversion page using Carter's consignment page as structural reference: https://cartervintage.com/consign.
- Keep the existing title, route, header, footer and contact handler.
- Use Joe's supplied commission schedule: 18.5% below $3,000; 15% from $3,000 to below $50,000; 12% from $50,000 to below $100,000; 10% at $100,000 and above.
- Apply one rate to each instrument's whole final sale price, with cent rounding. Display retained amounts before agreed expenses.
- Include Joe's bulk FedEx discount advantage in the shipping section and matching visible/schema FAQ.
- Feature Joe's Zero Risk Shipping Process in the hero, dedicated shipping section, process, FAQ and final contact prompt. Nationwide service and no shipping risk are Joe's supplied business statements.
- Preserve the distinction between consignment payment after a sale and an outright purchase. Do not import Carter's separate charges, contract duration, payment deadlines or performance claims.
- Replace the obsolete 8% references in the Martin dreadnought, Stratocaster and Telecaster value guides.
- Use existing owned photographs with matching ImageObject license nodes.

## Validation

- Production build: 383 pages.
- Rendered copy check: zero hard failures; existing sitewide advisory warnings remain. No consignment page warnings.
- Astro check: zero errors and zero warnings; 90 existing hints.
- Image licenses: three content-photo nodes, zero mismatches.
- Browser widths: 1920, 1280, 768, 390 and 320 pixels. No horizontal overflow, missing images, broken fragment links, logo/title overlap or page JavaScript errors.
- Calculator: boundary and adjacent-cent checks at $3,000, $50,000 and $100,000, invalid-input handling, and browser interaction checks pass.
- FAQ click and keyboard interaction pass. Existing form integration is preserved; no test lead was submitted.
- Axe checks on remodeled content: zero WCAG A/AA violations at the five widths.
- Mobile floating contact buttons are hidden only on this page to keep the calculator unobscured.
- The self-contained HTML review copy includes fonts, images, calculator and FAQ behavior. Its form is explicitly disabled for review.

## Live-Diff Disposition

The live-diff script's two must-fix categories are expected consequences of the explicitly requested complete remodel: replaced legacy headings and 12 instead of 16 article blocks. The decision log records these as intentional. Added photos, sections, schema and the replaced 8% description are intentional. Two dimension warnings refer to unchanged shared Reverb SVG icons, which use CSS sizing. All seven locally referenced image assets responded successfully.

## Deliverables

Source stays in this isolated checkout on codex/nationwide-consignment. The standalone review copy is in the chat's outputs/consignment-preview.html. Desktop/mobile and section screenshots are in outputs/. Production publication is authorized; the deployment result will be verified on the live URL.

