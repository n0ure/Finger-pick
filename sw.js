const CACHE = 'finger-pick-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon-180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request);
    if (cached) return cached;
    try {
      const res = await fetch(e.request);
      if (res && res.ok && (url.origin === location.origin)) {
        cache.put(e.request, res.clone());
      }
      return res;
    } catch (err) {
      return cached || Response.error();
    }
  })());
});
