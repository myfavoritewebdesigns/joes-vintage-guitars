/**
 * Service worker for the guitar identifier PWA.
 *
 * Registered with scope /guitar-identifier/ ONLY (see guitar-identifier.ts),
 * so it can never intercept the rest of the site: no stale-cache risk for the
 * SEO pages, ever. The file lives at the site root because a worker's maximum
 * scope is its own directory; registration narrows it down.
 *
 * Strategy, deliberately boring:
 * - /api/* and non-GET: never touched — the chat always hits the network.
 * - In-scope page navigations: network-first, cached copy as offline fallback,
 *   tiny inline message if we've never cached it.
 * - Reference photos (serial-locate, fender-sn, pwa icons): cache-first, since
 *   they change ~never and make replies feel instant.
 */
const CACHE = "gid-v1";
const PHOTO_PATHS = /^\/images\/(serial-locate|fender-sn|pwa)\//;

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          return (
            cached ||
            new Response(
              "<h1>Offline</h1><p>The guitar identifier needs a connection. Reconnect and try again.</p>",
              { headers: { "content-type": "text/html" }, status: 503 }
            )
          );
        })
    );
    return;
  }

  if (PHOTO_PATHS.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(
        (cached) =>
          cached ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
            return res;
          })
      )
    );
  }
});
