import { capitalize } from "../../../../helpers/index.js";
import { pagesLogic } from "./pagesLogic.js";
import { textLib } from "../../../../context/textLib.js";

export function Pages() {
	const pages = ["articles", "souvenirs", "tickets"];
	let content = ``;
	
	pages.forEach((el)=> {
		const pageName = el !== "souvenirs"
			? capitalize(el)
			: capitalize(`${el} (soon)`)
		textLib.addText(
			pageName,
			`${el}_name`);

		content += /*html*/`
		<li
			data-nav="${el}"
			class="page_block"
		>
			<div
				page-img
				class="page_img"
				style="background-image: url(../assets/pages/${el}.jpg);"
			></div>
			<div class="sub_title">
				<img
					width="28"
					height="28"
					src="../assets/arrows/arrow2.svg"
				>
				<h3
					id="${el}_name"
					class="page_name coda-regular"
				>
					${pageName}
				</h3>
			</div>
		</li>
	` });
	
	textLib.addText("Main pages", "pages_section_title");

	return /*html*/`
	<section class="pages_section">
		<h2
			id="pages_section_title"
			class="pages_title chivo-mono-bold"
		>
		</h2>

		<ul
			pages
			class="pages"
		>
			${content}
		</ul>
	</section>
	`
}

export function PagesInit({ signal, root = document }) {
	pagesLogic({ signal, root });
}