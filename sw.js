var CACHE_NAME = 'rooster-cache-v2.0.0';
var urlsToCache = [
  '/',
  '/rooster/',
  '/rooster/index.html',
  '/rooster/ploeg2.html',
  '/rooster/ploeg3.html',
  '/rooster/ploeg4.html',
  '/rooster/index.js',
  '/rooster/css/style.css',
  '/rooster/img/rooster-solid.svg',
  '/rooster/js/highlightDay.js',
  '/rooster/js/bootstrap.min.js',
  '/rooster/css/bootstrap.min.css',
  '/rooster/js/popper.min.js',
  '/rooster/js/jquery-3.3.1.slim.min.js'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

  // Cache and return requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

  // Update service worker
self.addEventListener('activate', function(event) {

  var cacheWhitelist = 'rooster-cache-v2.0.0';

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
