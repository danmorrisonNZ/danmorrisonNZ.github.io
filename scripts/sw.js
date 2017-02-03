self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sickmanu').then(function(cache) {
      console.log("opened cache")
      return cache.addAll([
      '/index.html',
      '/styles/style.css',
      '/scripts/manu.js',
      '/scripts/jquery-3.1.1.min.js',
      '/HOO_.mp4'
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
