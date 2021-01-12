"{{ now }}"; // hugo template

self.addEventListener('fetch', event => {
	event.respondWith(
		(async () => {
			const cache = await caches.match(event.request);
			if (cache) return cache;

			const url = new URL(event.request);
			const response = await fetch(event.request);
			if (location.origin == url.origin && response.ok && response.status == 200 && /^\/(js|css)\//g.test(url.pathname)) {
				(await caches.open('app')).put(event.request, response.clone());
			}
			return response;
		})()
	);
});
