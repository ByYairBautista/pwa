const CACHE_NAME = "dev-coffee-v2";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",

  "./images/coffee1.jpg",
  "./images/coffee2.jpg",
  "./images/coffee3.jpg",
  "./images/coffee4.jpg",
  "./images/coffee5.jpg",
  "./images/coffee6.jpg",
  "./images/coffee7.jpg",
  "./images/coffee8.jpg",
  "./images/cooffe9.jpg",
  "./images/coffee10.jpg",

  "./images/icons/icon-72x72.png",
  "./images/icons/icon-96x96.png",
  "./images/icons/icon-128x128.png",
  "./images/icons/icon-144x144.png",
  "./images/icons/icon-152x152.png",
  "./images/icons/icon-192x192.png",
  "./images/icons/icon-384x384.png",
  "./images/icons/icon-512x512.png"
];

// INSTALACIÓN
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARCHIVOS);
    })
  );

  self.skipWaiting();
});

// ACTIVACIÓN
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

// NETWORK FIRST
self.addEventListener("fetch", (event) => {
  // Solo procesar peticiones GET
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Guardar en caché respuestas válidas
        if (
          networkResponse &&
          networkResponse.ok &&
          new URL(event.request.url).origin === self.location.origin
        ) {
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      })
      .catch(() => {
        // Si falla la red, buscar en caché
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // Si no existe en caché, devolver un error
          return new Response("Sin conexión y recurso no disponible.", {
            status: 503,
            statusText: "Service Unavailable",
            headers: {
              "Content-Type": "text/plain; charset=utf-8"
            }
          });
        });
      })
  );
});