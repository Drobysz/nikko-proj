const API_BASE_URL = "https://digital-harbor.shop/nikko_api";

export async function fetchJson(url, options = {}) {
	const response = await fetch(url, {
		...options,
		headers: {
			Accept: "application/json",
			...(options.headers || {}),
		},
	});

	if (!response.ok) {
		throw new Error(`Request failed with status ${response.status}`);
	}

	return response.json();
}

export async function getArticles(options = {}) {
	const json = await fetchJson(`${API_BASE_URL}/articles`, options);
	return json.data || [];
}

export async function getArticle(id, options = {}) {
	const json = await fetchJson(`${API_BASE_URL}/articles/${id}`, options);
	return json.data;
}
