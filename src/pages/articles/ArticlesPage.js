import {
	SearchBar, SearchBarInit,
	Results
} from "./components/index.js";

export async function ArticlesPage() {
	return `
		${await SearchBar()}
		${Results()}
	`
}

export async function ArticlesPageInit({ signal, root }) {
	await SearchBarInit({ signal, root });
}