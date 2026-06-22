# Dataset JSON-LD for Joe's Reference Tables

Recommendation pass for adding schema.org `Dataset` markup to the serial / value / spec tables across the Archetype B reference pages. Josh wants more `Dataset` coverage; this section says which tables qualify, gives a concrete block to copy, shows the Astro wiring, and lays out the SEO/AEO rationale.

Cross-checked against `reports/seo/_sections/_db-fact-index.txt` (VG-0001..VG-0112). Where a table's framing touches a verified fact, the VG id is cited inline.

---

## 1. Which tables are genuine "datasets" worth Dataset markup

A `Dataset` should describe a structured, downloadable-in-spirit collection of observations: a serial-range-to-year lookup, a price matrix, a spec timeline. A table that is mostly prose with a couple of year columns is borderline; a true range-to-value or code-to-year lookup is the real thing. Tier them:

### Tier 1 — Strong datasets (mark these)

These are clean lookup tables: a key (serial range / code / year) maps to a value (year / price / spec). They read like reference data, which is exactly what `Dataset` is for, and they are the tables most likely to be cited by an AI assistant answering "what year is Fender serial L12345."

| Page | Table(s) | Why it qualifies | Fact cross-check |
|---|---|---|---|
| `fender-guitars-serial-number-guide.astro` | Bridge-plate (1950–1954), 4/5-digit neck plate (1954–1963), L-Series (1963–1965), F-plate 6-digit (1965–1976), V-prefix, Custom Shop CN/CZ/R, headstock decade-letter (1976–present), Mexican (M-prefix), Made-in-Japan, Crafted-in-Japan | Range→year(s)→era lookups, the canonical "serial decoder" data | Ranges overlap / "no earlier than" caveat is real: VG-0050, VG-0053, VG-0060, VG-0061, VG-0062. Decade letters S/E/N: VG-0063. JV/MIJ/CIJ reuse: VG-0064. Mexico MN/MZ/MX: VG-0065. L-series 1963–65: VG-0067. F-plate CBS: VG-0068. |
| `how-to-read-gibson-serial-numbers.astro` | FON tables (1902–1945, banner era), white-label (1902–1947), A-prefix (1947–1961), ink-stamp solid-body (1952–1960), 1961–1970 reused-number ranges, Norlin-era, modern 8/9-digit YDDDYRRR | Range→year lookups; the 1961–69 overlap table is itself a dataset of documented collisions | 1961–69 unreliable / overlap: VG-0011, VG-0013, VG-0031, VG-0036 (100000–106099 spans 1963 + 1967). FON year-letter A–H: VG-0034. Modern YDDDYRRR: VG-0035, VG-0016. |
| `vintage-fender-amplifier-serial-numbers-how-to-find-the-year.astro` | Tube-chart two-letter date-code table (A=1951 … T=1970, the `tubeChartCodes` array) | Letter→year lookup, the cleanest dataset on the site | Amps not datable by serial, tube chart is the method: VG-0052. |
| `vintage-gibson-les-paul-market-value-guide.astro` | "Vintage Les Paul Values by Model and Year" (`prices[]`, 12 rows of model+year → price range) | Model/year → USD range matrix | Burst $200k–500k+ and 1.5k–1.7k made: VG-0028, VG-0029, VG-0030. Refin ~−40 to 50%: VG-0074, VG-0107. |
| `vintage-fender-stratocaster-value-guide.astro` | "Vintage Stratocaster Values (1954 to 1965)" (Year → Sunburst → Custom Color) | Year → price-by-finish matrix | Custom-color premium / refin penalty: VG-0058, VG-0073, VG-0074. |
| `vintage-fender-telecaster-value-guide.astro` | Value-by-year/finish table | Same shape as Strat guide | Blackguard 1950–mid-54: VG-0069. |
| `martin-d-28-d-18-d-45-dreadnought-value-guide.astro` | Value table(s) for D-28/D-18/D-45 by era | Model/era → price matrix | Herringbone/scalloped pre-war premium: VG-0080. D-45 1942–1968 gap: VG-0081. Herringbone discontinued 1947: VG-0085, VG-0087. Brazilian→Indian rosewood 1969: VG-0088, VG-0089, VG-0109. |

### Tier 2 — Spec timelines (defensible as Dataset, one per page is enough)

The Gibson page's model "Dating by Model and Features" tables (Les Paul / SG / ES-335 finish-by-year, pickup-by-year, hardware-by-year, era spec grids) are spec timelines: feature → year-range → notes. Each one individually is thin, but the **collection** of them per model is a legitimate spec dataset. Recommendation: do NOT mark each little 4-row table; instead emit **one `Dataset` per model section** (e.g. "Gibson Les Paul dating-by-feature dataset") whose `variableMeasured` lists Finish, Pickups, Hardware, Body style, etc., and whose `temporalCoverage` spans the model's run. Same approach for the Fender SN page's "Model-Specific Dating Guides" and "Logo Evolution" timelines.

### Not datasets (skip)

- The condition-grading tables on `/free-appraisal/` — those are a rubric/definition list, not observational data.
- Authentication checklists, "Joe's Tip" callouts, FAQ accordions (already covered by `FAQPage`).
- Single-row or two-cell "comparison" tables (ES-335 vs ES-345 feature table) — too small to be a meaningful Dataset; leave as plain `<table>`.

**Shipping order:** the 10 Fender SN serial tables + the Gibson serial tables + the amp tube-chart table are the highest-value Tier 1 targets (highest query volume, cleanest data, best AI-citation payoff). Do those first; value-guide price matrices second; spec timelines last.

---

## 2. Concrete example: Dataset JSON-LD for one serial table

Below is a ready-to-adapt block for the **Fender L-Series serial table** (`#l-series` on the Fender SN guide). It names Joe as `creator` via his canonical `@id`, points `license` at the permissive photo-license terms already in `site.ts`, declares the measured variables, the year span, and topical keywords.

```js
const lSeriesDataset = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": "https://www.joesvintageguitarsaz.com/fender-guitars-serial-number-guide/#l-series-dataset",
  name: "Fender L-Series Serial Number to Year Lookup (1963 to 1965)",
  description:
    "Serial-number-range to production-year reference for Fender L-prefix neck-plate guitars, covering the final pre-CBS hand-built years through the early CBS transition. Note that Fender pre-stamped neck plates in batches, so a single serial can span two or three years; values give the documented year range, not a single guaranteed year.",
  url: "https://www.joesvintageguitarsaz.com/fender-guitars-serial-number-guide/#l-series",
  isPartOf: {
    "@id": "https://www.joesvintageguitarsaz.com/fender-guitars-serial-number-guide/",
  },
  creator: { "@id": "https://www.joesvintageguitarsaz.com/about-me/#person" },
  publisher: { "@id": "https://www.joesvintageguitarsaz.com/" },
  // Permissive terms already defined in src/config/site.ts (imageLicense.photoLicenseUrl)
  license: "https://www.joesvintageguitarsaz.com/photo-license/",
  isAccessibleForFree: true,
  inLanguage: "en-US",
  temporalCoverage: "1963/1965",
  keywords: [
    "Fender serial numbers",
    "L-series Fender",
    "pre-CBS Fender",
    "vintage Fender dating",
    "Fender neck plate serial",
  ],
  variableMeasured: [
    { "@type": "PropertyValue", name: "Serial number range", description: "L-prefix neck-plate serial range" },
    { "@type": "PropertyValue", name: "Production year(s)", description: "Documented year or year span for the range" },
    { "@type": "PropertyValue", name: "Era", description: "Pre-CBS, Transition, or CBS" },
  ],
};
```

Notes on the field choices:

- **`creator` = Joe's `@id`** reuses `https://www.joesvintageguitarsaz.com/about-me/#person`, the same node every Article on these pages already references (verified in the amp + Les Paul page source). Do not redefine the Person inline; just point at it.
- **`license`** uses the permissive photo-license URL (`imageLicense.photoLicenseUrl` in `site.ts`). Joe authored this reference data and wants reuse-with-credit, matching the content-photo tier. Do NOT use the restrictive brand-assets URL here.
- **`temporalCoverage`** uses ISO interval `1963/1965`. For "to present" tables use an open interval, e.g. `"1976/.."`; for the tube-chart table use `"1951/1970"`.
- **`variableMeasured`** mirrors the table's `<thead>` columns exactly (Serial Range / Year(s) / Era), which is what makes Google read it as a real dataset.
- **`@id` with a `#...-dataset` fragment** keeps each table's Dataset node uniquely addressable and lets `isPartOf` tie it to the page.

For a **price matrix** (e.g. Strat value guide) the shape is the same but `variableMeasured` becomes `[Year, Sunburst value (USD), Custom Color value (USD)]`, `temporalCoverage` is `"1954/1965"`, and add `measurementTechnique: "Completed-sale market analysis"` plus a `dateModified` matching the "Updated March 2026" note in the table. Keep prices framed as ranges (the page already does), consistent with VG-0108 (Reverb price-guide values are estimates from completed sales) and VG-0112 (originality is the dominant value driver).

---

## 3. Wiring it into the Astro Layout `structuredData` prop

`Layout.astro` already accepts `structuredData?: Record<string, unknown> | Record<string, unknown>[]` (line 25) and spreads arrays into the page's `<head>` JSON-LD (lines 207–209). Every reference page already passes an array (`structuredData={[breadcrumbSchema, articleSchema, ...]}` on the Fender page; a mutated `structuredData[]` on the Les Paul page). So adding a Dataset is purely additive — no Layout change needed.

**Pattern A — pages with an inline `structuredData` array** (Fender SN guide, amp page):

```astro
---
// ...existing breadcrumb/article/faq/tool schemas...

const lSeriesDataset = { /* block from section 2 */ };
const bridgePlateDataset = { /* same shape, temporalCoverage "1950/1954" */ };
// ...one per Tier-1 table...
---
<Layout
  ...
  structuredData={[
    articleSchema, breadcrumbSchema, faqSchema, toolSchema, webPageSchema, ogImageSchema,
    lSeriesDataset, bridgePlateDataset, /* ...the rest... */
  ]}
>
```

**Pattern B — pages that `push()` onto a `structuredData` array** (Les Paul value guide already does `structuredData.push(faqSchema)`):

```astro
const valuesDataset = { /* Dataset block, variableMeasured = Model & Year, Value */ };
structuredData.push(valuesDataset);
```

**Keep the data DRY.** The tables are already driven by typed arrays (`neckPlateRows`, `lSeriesRows`, `tubeChartCodes`, `prices`, etc.). Build the Dataset's static metadata by hand (name/description/keywords/variableMeasured), but if you ever want to publish the rows themselves as machine-readable data, you can add a `distribution` with an inline data URL generated from the same array, so the `<table>` and the Dataset never drift:

```js
distribution: [{
  "@type": "DataDownload",
  encodingFormat: "text/csv",
  contentUrl:
    "data:text/csv;charset=utf-8," +
    encodeURIComponent(
      "Serial Range,Year(s),Era\n" +
      lSeriesRows.map((r) => r.join(",")).join("\n")
    ),
}],
```

This is optional; `variableMeasured` + `temporalCoverage` alone is enough for the rich result. The `distribution` mainly helps AI agents that want the raw rows.

**Helper suggestion (optional, reduces boilerplate across 20+ tables):** add a small `buildTableDataset({ id, name, description, anchor, columns, temporalCoverage, keywords })` to `src/lib/` that returns the node with `creator`/`publisher`/`license`/`isPartOf` filled in from `site.ts` (reuse `imageLicense.photoLicenseUrl` and the `#person` `@id`). Each page then calls it once per Tier-1 table instead of hand-writing the full block. Mirrors the existing `buildImageGraph()` pattern in `src/lib/imageLicense.ts`.

**Gate:** after adding, run the page through Google's Rich Results Test and confirm the **Dataset** item parses with 0 errors, and `npm run audit:live-diff` still shows 0 new 🔴 (JSON-LD parity check counts schema types). Dataset rich results are also previewable in Google's Dataset Search.

---

## 4. SEO / AEO rationale

**Google Dataset rich results + Dataset Search.** `Dataset` is one of Google's supported structured-data types; valid markup makes the page eligible for the Dataset rich result and for indexing in [Google Dataset Search](https://datasetsearch.research.google.com/). Serial-number-by-year lookups, price matrices, and spec timelines are exactly the "structured reference data" Dataset Search exists to surface. Almost no competing vintage-guitar site marks these tables up, so this is uncontested SERP real estate for queries like "fender serial number chart" or "les paul value by year."

**AI-citation / AEO.** This is the bigger win. When an assistant (ChatGPT, Gemini, Perplexity, AI Overviews) answers "what's a 1959 Les Paul Standard worth" or "what year is Fender serial L25000," it preferentially grounds on clearly-structured, clearly-attributed data. A `Dataset` node with explicit `creator` (Joe, a named expert with a `#person` E-E-A-T node), `temporalCoverage`, `variableMeasured`, and `license` tells the model: this is curated reference data from an identifiable authority, safe to cite. That maps directly onto the site's existing AEO posture (the WebApplication decoder schema, the author E-E-A-T cards) and turns each table into an independently-citable unit.

**E-E-A-T reinforcement.** Pointing every Dataset's `creator` at the same `/about-me/#person` `@id` compounds the authorship signal already carried by the Article and decoder schemas: one expert, attributed across the decoder tool, the article body, the photos (via the image-license graph), and now the data tables. That consistency is what search and answer engines reward.

**Honesty guardrail (carry into the descriptions).** The serial datasets must not over-promise single-year precision: ranges overlap and serials give a "no earlier than" floor, not an exact date (VG-0050, VG-0053, VG-0060, VG-0061, VG-0062; Gibson 1961–69 collisions VG-0011/0013/0031/0036; amps not serial-datable VG-0052). Bake that caveat into each `description` (the example block does). Price datasets should stay range-based and note they are estimates from completed sales, not quotes (VG-0108), with originality flagged as the dominant driver (VG-0112). This keeps the markup truthful and matches the visible table copy, which is also what protects against a "misleading structured data" manual action.

---

## Quick build checklist

1. Add one `Dataset` node per Tier-1 table on: Fender SN guide (10 tables), Gibson SN guide (serial tables), amp page (tube-chart), Les Paul / Strat / Tele / Martin value guides (price matrices).
2. Add one `Dataset` per **model spec-timeline group** (Tier 2) on the Gibson SN guide and Fender SN model-guides section.
3. Each node: `creator` = `#person` `@id`, `publisher` = site `@id`, `license` = `imageLicense.photoLicenseUrl`, `variableMeasured` = the table's column headers, `temporalCoverage` = ISO interval, `keywords` = topical terms, `isPartOf` = page URL, honest `description`.
4. Spread/`push` into the existing `structuredData` prop — no `Layout.astro` change.
5. Verify each page in Google Rich Results Test (Dataset, 0 errors) and re-run `npm run audit:live-diff`.
