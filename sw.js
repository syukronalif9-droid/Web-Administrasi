// SCOPE System - PWA Service Worker
const CACHE_NAME = 'scope-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Selalu prioritaskan koneksi network agar data absensi, SPL, dan database Supabase selalu real-time
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
