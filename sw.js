const CACHE='guerre-ia-v21-1';
// Tout est relatif à la portée du service worker : le site peut vivre à la racine d'un domaine
// comme dans un sous-dossier (GitHub Pages).
const BASE=new URL('./',self.location).href;
const ICI=new URL(BASE).pathname;
const STATIQUES=['icon-192.png','icon-512.png','manifest.webmanifest'].map(f=>BASE+f);
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(STATIQUES);const r=await fetch(BASE);const text=await r.clone().text();if(r.ok&&text.includes('name="game-version"'))await cache.put(BASE,r);await self.skipWaiting()})())});
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith('guerre-ia-')&&name!==CACHE)await caches.delete(name);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||url.pathname.startsWith('/api/')||url.pathname.includes('signin')||url.pathname.includes('callback')||url.pathname.includes('signout'))return;if((url.pathname===ICI||url.pathname===ICI+'index.html')&&event.request.mode==='navigate'){event.respondWith((async()=>{try{const r=await fetch(event.request);const text=await r.clone().text();if(r.ok&&text.includes('name="game-version"')){const c=await caches.open(CACHE);await c.put(BASE,r.clone())}return r}catch{return await caches.match(BASE)||new Response('Ouvrez le jeu une première fois en ligne pour le préparer hors connexion.',{headers:{'Content-Type':'text/plain;charset=utf-8'}})}})())}else if(STATIQUES.includes(url.href))event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request)))});
