export function getPageName() {
	const page = location.hash.replace(/^#\/?/, "");
	const path = page.split("?")[0];

	if (path.includes('/'))
		return path.split('/')[0] || "home";

	return path || "home";
}

export function getParam() {
	const page = location.hash.replace(/^#\/?/, "");
	const [path, query] = page.split("?");

	if (path.includes('/')) {
		const param = path.split('/')[1];
		return param;
	}

	if (query) {
		return new URLSearchParams(query).get("id") || false;
	}

	return false;
}
