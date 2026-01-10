import { json_request } from "../../../../helpers/index.js";
import { textLib } from "../../../../context/textLib.js";
import { menuItemLogic } from "./menuItemLogic.js";

export async function MenuItems () {
	let pages = ``;
	const data = await json_request("../../data_json/pages.json");
	data.forEach(({page, _}) => {
		pages += /*html*/`
			<li
				data-nav="${page}"
				id="list_${page}"
				class="submenu_item climate-crisis-regular"
			>
			</li>
		`

		textLib.addText(
			page,
			`list_${page}`,
			"header"
		);
	});

	textLib.addText(
		"Information on page",
		"submenu_description",
		"header"
	);

	return /*html*/`
	<div class="menu_items_half">
		<ul
			menu-item-list
			class="menu_items_list"
		>
			${pages}
		</ul>
		<p
			submenu-description
			id="submenu_description"
			class="submenu_item_description b612-regular"
		>
		</p>
	</div>
	`
}

export function menuItemInit() {
	menuItemLogic();
}