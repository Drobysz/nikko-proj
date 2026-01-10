import {
	HomePage, HomePageInit,
	ArticlesPage, ArticlesPageInit,
	TemplePage, TemplePageInit,
	TicketsPage, TicketsPageInit
} from "../pages/index.js";

import {
	closeMenu,
	setPageTitle,
	setPropsToDefault
} from "./index.js";

import { textLib } from "../context/textLib.js";
import { appStore } from "../context/appStore.js";

let pageAC = null;

export async function changePage(name, param = "none") {
	const pages = {
		"home":     [HomePage, HomePageInit],
		"articles": [ArticlesPage, ArticlesPageInit],
		"temple":	[TemplePage, TemplePageInit],
		"tickets":	[TicketsPage, TicketsPageInit]
	};

	if (!(Object.keys(pages).includes(name))) return;

	pageAC?.abort();
	pageAC = new AbortController();

	const [render, init] = pages[name];
	const isParam = param && param != "none";

	const next = name == "temple"
		? `#${name}/${param}`
		: `#${name}`;
	const params = name == "temple"
		? { page: name, param }
		: { page: name };
	history.pushState(params, "", next);

	setPropsToDefault();

	const page = document.getElementById("page");
	page.innerHTML = await render({param: isParam && param});

	textLib.translateAll(appStore.getState());

	closeMenu();
	setPageTitle({
		name: name,
		param: isParam && param
	})

	return await init({
		signal: pageAC.signal,
		root: page
	});
}