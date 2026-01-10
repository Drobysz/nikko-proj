export function getPageName() {
	const page = location.hash.replace(/^#\/?/, "");

	if (page.includes('/')) 
		return page.split('/')[0] || "home";

	return page || "home";
}

export function getParam() {
	const page = location.hash.replace(/^#\/?/, "");

	if (page.includes('/')) {
		const param = page.split('/')[1];
		return param;
	}
	return false;
}