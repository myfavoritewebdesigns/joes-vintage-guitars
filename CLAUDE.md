# Joe's Vintage Guitars — Astro Rebuild

Project handoff doc. Read this first when picking up the project in a new session.

## What this repo is

The static Astro 7 + Tailwind 4 site for joesvintageguitarsaz.com (Joe Dampt, buys vintage guitars; sell-my-X pages, serial-number and value guides, blog). It replaced the WordPress + Avada site at the 2026-06-12 cutover and deploys to Cloudflare Pages (preview host `joes-vintage-guitars.pages.dev`, GitHub `myfavoritewebdesigns/joes-vintage-guitars`). Goal: parity with the original where Joe has not approved a change, so do not normalize design quirks without asking. Joe works by prompt and pull request (`CLIENT.md`): feature branch plus PR, never a push to `main`.

## This site follows the WP-to-Astro kit. The kit's rules are not repeated here.

Read the kit's rules before writing code: `C:\Users\joshj\projects\wp-to-astro-kit\CLAUDE.md`, section "⚠️ Must-follow rules (read before writing code)". Then open the playbook file for the task. All playbook files are in `C:\Users\joshj\projects\wp-to-astro-kit\docs\playbook\`.

| Task | Playbook file |
|---|---|
| Building or auditing a finished page against live | `live-diff-auditor-agent.md`, `layout-spacing-card-fidelity.md`, `background-fidelity.md` |
| Two or more sibling images | `image-gallery-primitive.md` |
| Swapping hot-linked images, blurry images | `image-migration.md`, `image-resolution-fidelity.md` |
| Interactive widget, bespoke section, builder HTML | `porting-wordpress-widgets.md`, `html-first-extraction.md`, `page-builder-source.md` |
| Astro CSS, `set:html`, schema oddities | `astro-gotchas.md` |
| Redirects, blog migration, sitemap, pre-launch SEO | `seo-migration.md` |
| Forms and the contact endpoint | `form-migration.md`, `contact-form-security.md` |
| Lead tracking, tags, GTM, WhatConverts, CallRail | `lead-tracking-and-first-party-tagging.md` |
| Cloudflare Pages deploy or cutover | `deploying-cloudflare-pages.md` |
| Launch audit | `launch-audit-checklist.md` (and `AI_LAUNCH_CHECKLIST.md` at the kit root) |
| Screenshots, stuck after 2 attempts, cross-model review | `tooling-decisions.md`, `known-limitations-cross-model-review.md`, `new-tools-mcp-servers.md` |

Audit and checklist methodology lives in `mfwd-debug-tooling` (`projects\<specialist>\PROJECT_INSTRUCTIONS.md`), not in this repo. Do not free-hand an audit checklist.

## Site facts

- **Commands** (pnpm@11.7.0, Node >=22.12): `pnpm run dev` (localhost:4321), `pnpm run build` (also writes the image sitemap and the IndexNow manifest), `pnpm run verify` (= build + `astro check` + `audit:copy`). Audits: `audit:live-diff`, `audit:section-crops`, `audit:a11y`, `audit:copy`; `test:indexnow`. The check-copy GitHub Action runs `audit:copy` on every PR.
- **Prefix and tokens:** CSS prefix `jvg-` (`.jvg-img2`, `.jvg-comp-grid`, `data-jvg-contact-form`); per-page prefixes `fsn-` (Fender serial pages), `smf-` (sell-my-fender). Design tokens are `@theme` colors, fonts and `--container-site` in `src/styles/global.css` (palette and fonts in `docs/SITE_NOTES.md`).
- **Single sources:** `src/config/site.ts` holds `SITE_URL`, contact, hrefs, nav, socials and `imageLicense`; never hard-code those in a component. `src/layouts/Layout.astro` owns chrome, global JSON-LD and the tracking tags.
- **Where things live:** pages `src/pages/`; blog `src/content/blog/` with its images in `src/assets/blog/<slug>/`; value guides `src/content/value-guides/`; serial and guide data `src/data/` and `src/lib/`; forms `src/scripts/contact-form.ts` posting to `functions/api/contact.ts` (also `upload-photos.ts`, `serial-report.ts`; Mailgun, `MAILGUN_*` env, Web APIs only); redirects `public/_redirects`; headers `public/_headers`; scraped live HTML `reference/` (ground truth); audit output `reports/`.
- **Tracking (non-secret IDs):** WhatConverts is hardcoded and idle-deferred in `Layout.astro`; phone profile 97949, form profile 97950, form set 65952; form leads go through `window.jvgWcTrack()` (never `$wc_leads.track.form`). CallRail company 480262361 loads early and async, never deferred. GTM `GTM-TKN5P7S` is retired; GA4, Google Ads, Meta Pixel 934500208412401 and Bing UET run in Cloudflare Zaraz. hCaptcha loads on first form interaction.
- **Photos:** Joe shot every content photo. New content photos use `LicensedImage` or `buildImageGraph` (`src/lib/imageLicense.ts`); verify with `node scripts/verify-image-license.mjs`.
- **Fender serial tool v2:** after any edit to `src/data/fender-serials.ts` or `public/scripts/fsn-tool.js`, `node scripts/verify-fsn-parity.mjs` must exit 0.
- **Not installed here:** the kit's `audit:launch-onpage`, `audit:images`, `audit:media`, `audit:bg`, `audit:chrome`, `audit:image-names` and `audit:pre-launch` scripts and its `validate` script are absent from `package.json`; use `verify` as the gate and see the kit before adding them.
- **Page types:** Archetype A (conversion pages with `PageHero`) and Archetype B (reference pages, no hero, header backdrop bands). Details, scaffolds and class names are in `docs/SITE_NOTES.md`.

## Deviations from the kit (each is in DECISIONS.md with its reasons)

- **Legacy image URLs retained, 2026-06-20** (cross-model consult, adopted in the decision log): serve or 301 old `/wp-content/uploads/*` to stable `/images/...` paths, never to hashed `/_astro` files, and keep the image sitemap in robots.txt and Search Console.
- **Zero-dash copy, 2026-06** (SEO v2 pack): no dashes in rendered copy; `audit:copy` must exit 0; exceptions are listed in `reports/seo-v2/copy-allowlist.json`.
- **Contrast fixes over parity, 2026-06-12** (Josh-approved): footer copyright links and `.mtg-col__h4` stay darker than the retired site. Do not revert to "match live".
- **GTM retired, 2026-07-20** (Josh's call): Zaraz plus hardcoded WhatConverts and CallRail. Do not add `fbevents.js` or `bat.js` to the hardcoded list.
- **Smartypants stays on, 2026-07-03:** do not set `markdown: { smartypants: false }`.
- **Design preferences, 2026-05 (user preference):** "Every Guitar Has A Story" stays a separate full-width strip; the contact section stays solid `#aa3d1c` with no background image.
- **Fender serial tool ships the decoder alone (Option A), Josh's call 2026-07-12.**
- **Blog images** live in `src/assets/blog/<slug>/`, never `public/images/blog/` (2026-07 convention).

## Where the rest is

- `DECISIONS.md`: every approved deviation and design call, newest first. Check it before "fixing" anything that looks off, and add a row in the same commit as any new deliberate deviation.
- `docs/SITE_NOTES.md`: component map, design system, page archetypes, Fender tool notes, image gallery primitive, image licensing, launch checklist, old handoffs, plus the generic rules the kit lacks (review list at the end).
- Old references: comments in `src/` and `scripts/` that cite "CLAUDE.md decision log" mean `DECISIONS.md`; "CLAUDE.md, Scoped vs. global CSS for widget HTML" means the kit's `astro-gotchas.md`; "CLAUDE.md rule 1" means kit rule 7 (images local the same session).
