const CACHE_NAME = 'novena-navidad-dia-4-v5';
const APP_FILES = [
  '', 'index.html', 'css/styles.css', 'js/script.js', 'js/scale-controls.js',
  'villancicos.html', 'css/music.css', 'js/music.js', 'manifest.webmanifest', 'assets/images/icon.svg', 'assets/images/logosena.png',
  'assets/covers/a-belen-pastores.jpg', 'assets/covers/a-la-nanita-nana.jpg',
  'assets/covers/anton.jpg', 'assets/covers/campana-sobre-campana.jpg',
  'assets/covers/el-tamborilero.jpg', 'assets/covers/los-peces-en-el-rio.jpg',
  'assets/covers/mi-burrito-sabanero.jpg', 'assets/covers/noche-de-paz.jpg',
  'assets/covers/pastores-venid.jpg', 'assets/covers/salve-reina-y-madre.jpg',
  'assets/covers/tutaina.jpg', 'assets/covers/vamos-pastores.jpg',
  'assets/covers/vamos-vamos-pastorcitos.jpg', 'assets/covers/zagalillo.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const files = APP_FILES.map(file => new URL(file, self.registration.scope).toString());
    await cache.addAll(files);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('novena-navidad-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (url.pathname.includes('/assets/audio/')) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(new URL('index.html', self.registration.scope).toString(), response.clone());
        }
        return response;
      } catch {
        return (await caches.match(request)) || (await caches.match(new URL('index.html', self.registration.scope).toString()));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && response.status === 200) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      const cached = await caches.match(request);
      if (cached) return cached;
      return Response.error();
    }
  })());
});
