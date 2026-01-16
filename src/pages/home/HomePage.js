import {
	Screen, ScreenInit,
	Pages, PagesInit,
	Quote,
	Team,
	Articles, ArticlesInit,
	About
} from "./components/index.js"

export async function HomePage() {
	return /*html*/`
	${await Screen()}
	${Pages()}
	${About()}
	${Quote()}
	${Articles()}
	${Team()}
	`
}

export async function HomePageInit({ signal, root }) {
	await ScreenInit({ signal, root });
	PagesInit({ signal, root });
	await ArticlesInit({ signal, root });
}