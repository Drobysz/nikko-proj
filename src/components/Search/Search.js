export function Search() {
	return /*html*/`
	<input
		type="text"
		id="search_bar"
		class="search_bar_view"
		name="search"
		maxlength="20"
		size="10"
		placeholder="Search of articles"
	/>
	`
}

export function searchInit({ func, root }) {
	const search = root.querySelector("#search_bar");

	search.onchange = (e)=> func(e.target.value);
}