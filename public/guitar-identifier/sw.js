/**
 * Service worker for the Vintage Guitar AI installable app.
 *
 * Deliberately scoped to /guitar-identifier/ by living at that path: it only
 * ever controls this one page, so the rest of joesvintageguitarsaz.com keeps
 * its normal, uncached-by-us behaviour.
 *
 * What it does NOT do, on purpose:
 *   - It never touches /api/identify. That is a POST to Claude, every answer is
 *     unique, and a stale reply would be worse than no reply. Non-GET requests
 *     are passed straight through and /api/ is excluded explicitly as well.
 *   - It does not precache hashed /_astro/ bundles by name. Those filenames
 *     change every build, so they are cached at runtime instead and a stale
 *     precache list can never pin the app to an old build.
 *
 * Bump CACHE_VERSION to force every client onto a fresh cache.
 */

const CACHE_VERSION = "vga-v1";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;

const APP_URL = "/guitar-identifier/";

/** Stable, non-hashed things worth having before the first offline load. */
const PRECACHE = [
  APP_URL,
  "/guitar-identifier/icon-192.png",
  "/guitar-identifier/icon-512.png",
  "/guitar-identifier/manifest.webmanifest",
];

/** Runtime cache-first prefixes: content-hashed or effectively immutable. */
const ASSET_PREFIXES = ["/_astro/", "/images/", "/fonts/", "/styles/"];

const OFFLINE_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vintage Guitar AI is offline</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fffdf8;
       color:#3e2a14;font:16px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;padding:1.5rem}
  div{max-width:22rem;text-align:center}
  h1{font-size:1.25rem;margin:0 0 .5rem}
  p{margin:0;color:#6b5638}
</style></head>
<body><div>
  <h1>You are offline</h1>
  <p>Vintage Guitar AI needs a connection to identify a guitar. Reconnect and try again.</p>
</div></body></html>`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      // addAll is all-or-nothing; cache individually so one 404 cannot abort
      // the whole install.
      await Promise.all(
        PRECACHE.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (res.ok) await cache.put(url, res);
          } catch {
            /* offline at install time is survivable */
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([SHELL_CACHE, ASSET_CACHE]);
      const names = await caches.keys();
      await Promise.all(names.map((n) => (keep.has(n) ? null : caches.delete(n))));
      await self.clients.claim();
    })(),
  );
});

/** Only cache real, complete, same-origin responses. */
function cacheable(res) {
  return res && res.ok && res.status === 200 && res.type === "basic";
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Never interfere with the Claude endpoint or any non-GET traffic.
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // The page itself: network-first so a new build is picked up immediately,
  // with the cached shell as the offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          if (cacheable(fresh)) {
            const cache = await caches.open(SHELL_CACHE);
            cache.put(APP_URL, fresh.clone());
          }
          return fresh;
        } catch {
          const cached = (await caches.match(request)) || (await caches.match(APP_URL));
          return (
            cached ||
            new Response(OFFLINE_HTML, {
              status: 503,
              headers: { "content-type": "text/html; charset=utf-8" },
            })
          );
        }
      })(),
    );
    return;
  }

  // Static assets: cache-first. Hashed bundles make this safe.
  if (ASSET_PREFIXES.some((p) => url.pathname.startsWith(p))) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        try {
          const fresh = await fetch(request);
          if (cacheable(fresh)) {
            const cache = await caches.open(ASSET_CACHE);
            cache.put(request, fresh.clone());
          }
          return fresh;
        } catch {
          return Response.error();
        }
      })(),
    );
  }
});
