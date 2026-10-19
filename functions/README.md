# Pages Functions

`public/_routes.json` lists the only paths that run Functions: `/api/*` and the retired store paths
(`/product-page`, `/product-category`, `/shop`). Every other request is served as a static file and
does not count against the account's Workers request quota.

**Adding a new Function? Add its path to `include` in `public/_routes.json`,** or it will never run.

`_middleware.ts` runs only on those paths now. Its test-hostname redirect is also handled by a
Cloudflare redirect rule at the edge (test.joesvintageguitarsaz.com answers before reaching Pages).
