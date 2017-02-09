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
      "images/touch"
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
