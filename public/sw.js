// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", function (event) {
    event.waitUntil(
      caches.open("my-cache-name").then(function (cache) {
        cache.addAll([
          "/",
          "/index.html",
          "/styles.css",
          "/script.js",
          "/manifest.json",
          "/favicon.ico",
          "/smu-icon-192x192.png",
        ]);
      })
    );
  });
  
  
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener("activate", function (event) {
    console.log("Service worker activated", event);
  });
  
  
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.match(event.request).then(function (res) {
        return res || fetch(event.request);
      })
    );
  });
  
  // For more information on Service Workers, refer to:
  // https://developers.google.com/web/fundamentals/primers/service-workers
  