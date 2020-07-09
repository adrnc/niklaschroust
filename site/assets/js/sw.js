// {{ cond hugo.IsProduction now "" }} hugo template

self.addEventListener('fetch', event => {
	event.respondWith(
		(async () => {
			const cache = await caches.match(event.request);
			if (cache) return cache;

			const response = await fetch(event.request);
			if (response.ok && response.status == 200 && /^https?:\/\/[^\/]+\/(js|css)\//g.test(response.url)) {
				(await caches.open('app')).put(event.request, response.clone());
			}
			return response;
		})()
	);
});
