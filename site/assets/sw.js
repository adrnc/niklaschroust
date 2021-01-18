self.addEventListener('install', event => {
	event.respondWith(
		caches.delete('app')
	);
});

/*

self.addEventListener('fetch', event => {
	event.respondWith(
		(async () => {
			const cache = await caches.match(event.request);
			if (cache) return cache;

			const response = await fetch(event.request);
			if (response.ok && response.status == 200) {
				const url = new URL(response.url);
				if (location.origin == url.origin && /^\/(js|css)\//g.test(url.pathname)) {
					const cache = await caches.open('app');
					cache.put(event.request, response.clone());
				}
			}
			return response;
		})()
	);
});

*/
