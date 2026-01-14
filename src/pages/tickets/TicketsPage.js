import {
	Intro,
	Promotions, PromotionsInit,
	Notion
} from "./components/index.js";

export async function TicketsPage() {
	const body = document.querySelector("body");

	body.style.backgroundColor = "#2E2A2A";
	return /*html*/`
	${Intro()}
	${Promotions()}
	${Notion}
	`
}

export async function TicketsPageInit({ signal, root }) {
	await PromotionsInit();
}