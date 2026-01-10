import { json_request } from "../../helpers/index.js";
import { barLogic } from "./barLogic.js";

export async function ScreenBar() {
	const data = await json_request(
		"../../data_json/articles.json"
	);
	if (!data) return;

	const ln = data.length;
	let lines = ``;

	for (let i = 0; i < ln; i++) {
		lines += /*html*/`<div
			id="line_${i + 1}"
			class="bar_line"
		>
			<span class="fill">
			</span>
		</div>`
	}

	return /*html*/`
	<div
		screen-bar
		class="screen_bar"
	>
		<div
			bar-lines
			class="bar_lines"
		>
			${lines}
		</div>
		<div class="bar_title">
			<h2
				article-title
				class="article_title cinzel-regular"
			>
				No Name
			</h2>
			<p
				article-link
				class="article_link jersey-10-regular"
			>
				ARTICLE
			</p>
		</div>
	</div>
	`
}

export async function ScreenBarInit({ signal, root = document }) {
	await barLogic({ signal, root });
}