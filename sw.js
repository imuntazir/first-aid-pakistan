/* First Aid Pakistan — offline-first service worker.
   Pre-caches every app file on first visit; serves from cache when offline. */
var CACHE_NAME = "first-aid-pakistan-v1";
var PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./sw.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192.svg",
  "./icon-512.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var url = new URL(event.request.url);
  if (event.request.method !== "GET") return;

  // Google Fonts (Noto Nastaliq Urdu): cache-first, runtime cache.
  if (url.origin === "https://fonts.googleapis.com" || url.origin === "https://fonts.gstatic.com") {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(event.request).then(function (hit) {
          var network = fetch(event.request).then(function (res) {
            if (res && res.ok) cache.put(event.request, res.clone());
            return res;
          }).catch(function () { return hit; });
          return hit || network;
        });
      })
    );
    return;
  }

  // Same-origin: cache-first, fall back to network, then cached index for navigation.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(function (hit) {
        if (hit) return hit;
        return fetch(event.request).then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
          }
          return res;
        }).catch(function () {
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return new Response("Offline", { status: 503, statusText: "Offline" });
        });
      })
    );
  }
});
