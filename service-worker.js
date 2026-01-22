
// Cache-busting: bump CACHE_NAME and update the hashed asset list whenever filenames change.
const CACHE_NAME="greek-trainer-cache-v6";
const URLS_TO_CACHE=["./","./index.html","./app.6f2c3a1.js","./manifest.json","./service-worker.js","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(URLS_TO_CACHE)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME&&caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
