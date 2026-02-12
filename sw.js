const CACHE_NAME = "giorders-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./1FFB8DDC-1EC1-4569-971E-598213CC5587.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
