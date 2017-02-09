self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sickmanu').then(function(cache) {
      return cache.addAll([
      '/',
      "sw.js",
      '/styles/style.css',
      '/scripts/manu.js',
      '/scripts/jquery-3.1.1.min.js',
      '/images/chea_hooey.png',
      '/HOO_.mp4',
      "images/touch/manufy_128.png",
      "images/touch/manufy_144.png",
      "images/touch/manufy_152.png",
      "images/touch/manufy_192.png",
      "images/touch/manufy_256.png",
      "images/touch/manufy_512.png"
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
  })
  );
});
