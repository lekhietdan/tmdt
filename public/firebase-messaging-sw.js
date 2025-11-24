// Empty service worker to prevent 404 errors
// This file can be removed if not using Firebase messaging

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

