# IndexNow Production Notifications

The build creates `dist/indexnow-manifest.json` from the page sitemap. Each
indexable URL has a SHA-256 fingerprint of its main content and search metadata
(title, description, canonical, robots, social tags and JSON-LD). Header, footer,
shared contact form, CSS, executable scripts and Astro scope attributes are
excluded. A malformed sitemap, missing page or invalid JSON-LD fails the build.
The manifest also records the deployment commit from `CF_PAGES_COMMIT_SHA`.

The workflow `.github/workflows/indexnow.yml` runs after a successful Cloudflare
Pages check, every six hours, and on manual dispatch. This repository currently
reports Cloudflare deployments as check runs, not GitHub deployment events.
Check-triggered runs require the deployed manifest's revision to match that
check's commit. Preview and superseded deployments therefore cannot submit.
The scheduled run reconciles the currently live site if an event is missed or
the production domain was still switching when the check completed.

## Submission And State

- Only `https://www.joesvintageguitarsaz.com/indexnow-manifest.json` is fetched.
  Every URL is validated against that origin. No preview host is accepted.
- The first run submits the live sitemap once. Later runs submit only new or
  changed fingerprints and confirmed removals, in batches of at most 10,000.
- Removed URLs must return 404, 410, a redirect with a Location header, or a
  successful response with a noindex directive. HTTP redirects are not followed.
- An indexable HTTP 200, server failure or timeout leaves a removed URL pending
  for the next run. A missing or empty manifest never becomes a mass deletion.
- Before posting, the live key file must return the configured key. A 200 or 202
  IndexNow response is accepted; 202 still means key validation is pending, not
  indexing success. Any rejected batch fails the run without advancing state.
- Saved state is a small `indexnow-production-state` Actions artifact. It comes
  only from this workflow running on main. Runs are serialized. Each successful
  run refreshes its 90-day retention, including runs with no changes. A read or
  download error fails the run rather than silently resetting state.
- If all state is deleted or expires after a long pause, the next run submits
  the live sitemap once again. No state branch or additional Cloudflare build
  is created. Artifacts avoid the shorter eviction window of Actions caches.

The key is a public ownership-verification file, not a secret credential.
It is configured in `scripts/indexnow-config.json` and served from
`public/3df11ef7750025bf64f2508054c2d577.txt`. The workflow needs only the standard
GitHub token's read access to contents and Actions artifacts; it does not need
Cloudflare credentials or an external paid service.

## Verification

Run `pnpm run test:indexnow`, `pnpm run build`, `pnpm exec astro check` and
`pnpm run audit:copy`. The IndexNow tests use mocked HTTP responses and never
notify search engines. They cover content change detection, sitemap traversal,
noindex pages, removal retries, invalid data, key checks, failures, 202 responses,
preview isolation, dry runs, and the 10,000-URL batch limit.

After merge and the production deployment:

1. Confirm the live key URL returns its key as plain text and the manifest's
   revision matches the deployed commit.
2. Open Actions, select **IndexNow production notifications**, and run it on
   **main** with `dry_run` checked to inspect the change counts without posting.
3. Run again without `dry_run` if the automatic deployment run has not already
   submitted. Inspect the HTTP response and saved state artifact.
4. Run again: an unchanged site should report zero new/changed and zero removed
   URLs. Deferred removals remain listed until their live status is confirmed.

Dry runs never post and never write/upload state. The workflow cannot execute
from a pull-request branch. Production submission can only be verified after
this workflow and the public key are merged and deployed.

IndexNow improves change discovery for participating engines. Submission does
not guarantee indexing, rankings or inclusion in an AI answer.

References: [IndexNow protocol](https://www.indexnow.org/documentation),
[IndexNow FAQ](https://www.indexnow.org/faq), and
[GitHub check-run events](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#check_run).
