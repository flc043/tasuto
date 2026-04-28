const CACHE_NAME = 'money-app-v2';
const ASSETS = [
  './',
  './money.html',
  'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.global.prod.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});