/**
 * Shared 410 Gone handler for the retired on-site store.
 *
 * The old WordPress/WooCommerce store has no equivalent on the static rebuild
 * (Joe sells through Reverb now): ~140 `/product-page/*` listings, the
 * `/product-category/*` archives, and `/shop`. These pages are gone for good,
 * so returning 410 (rather than letting them 404) tells Google to drop them
 * from the index faster than normal 404 decay. Cloudflare Pages `_redirects`
 * can only emit redirects/404, not 410 — hence these scoped Pages Functions.
 *
 * Wired by the thin re-export files:
 *   functions/product-page/[[path]].ts
 *   functions/product-category/[[path]].ts
 *   functions/shop/[[path]].ts
 * (scoped so the Function only runs for those dead paths, with zero overhead
 * on the rest of the static site.)
 */
const GONE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>No Longer Available | Joe's Vintage Guitars</title>
<style>
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; max-width: 38rem; margin: 4rem auto; padding: 0 1.5rem; line-height: 1.6; color: #3e2a14; background: #eedfc0; }
  h1 { color: #a03a1e; font-size: 1.6rem; }
  a { color: #a03a1e; font-weight: 600; }
</style>
</head>
<body>
<h1>This Listing Is No Longer Available</h1>
<p>Joe's Vintage Guitars no longer runs an on-site store, so this page is gone. To see what Joe currently has, or to buy, sell, or appraise a vintage instrument, head to the <a href="/">homepage</a>.</p>
<p><a href="/free-appraisal/">Get a free appraisal</a> &middot; <a href="/contact-me/">Contact Joe</a></p>
</body>
</html>`;

// No PagesFunction type annotation on purpose: @cloudflare/workers-types is not
// a dependency (tsconfig type-checks all files), so the ambient global isn't
// available. A plain handler returning a Response is all Cloudflare Pages needs.
export const onRequest = () =>
  new Response(GONE_HTML, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
