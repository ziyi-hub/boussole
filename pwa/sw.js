self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('store').then((cache) => cache.addAll([
            '/boussole/pwa/',
            '/boussole/pwa/index.html',
            '/boussole/pwa/index.js',
            '/boussole/pwa/icon.png'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});