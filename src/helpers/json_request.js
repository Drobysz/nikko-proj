export async function json_request(path) {
	const url = new URL(
		path,
		import.meta.url
	);

	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(
			`Failed to load
			SM JSON (${res.status} ${res.statusText})
			from ${url}`
		)
	}
	const data = await res.json();
	return data;
}