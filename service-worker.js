const CACHE_NAME = 'dr-lens-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  'https://i.postimg.cc/hjnB5vts/SFONDO.png',
  'https://i.postimg.cc/nhspsNW4/GIOCATORE.png',
  'https://i.postimg.cc/8CMG4MNs/NEMICO.png',
  'https://i.postimg.cc/Jz9mjPw9/proiettile.png',
  'icon-192x192.png',
  'icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});