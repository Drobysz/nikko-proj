import {
	sleep,
	json_request,
	changePage
} from "../../../../helpers/index.js";
import { textLib } from "../../../../context/textLib.js";

export async function menuItemLogic() {
	const data           = await json_request("../../data_json/pages.json");
	const descriptor     = document.getElementById("submenu_description");
	const menu_item_list = document.querySelector("[menu-item-list]");

	data.forEach(({page, description}) => {
		const page_item = document.getElementById(`list_${page}`);
		if (!page_item) return;
		let cached_translations = {};

		page_item.onmouseenter = async ()=> {
			const currLang = textLib.currLang();
			let translated_description = "";

			if (currLang === 'en' || (currLang in cached_translations)) {
				translated_description = currLang == 'en'
					? description
					: cached_translations[currLang]
			} else {
				translated_description = await textLib.translate(description);
				cached_translations[currLang] = translated_description;
			}

			descriptor.textContent = translated_description
		}

		menu_item_list.onmouseleave = async ()=> {
			const currLang = textLib.currLang();
			const text     = "Information on page";

			sleep(2000);

			descriptor.textContent = currLang == 'en'
				? text
				: await textLib.translate(text)
		}

		page_item.onclick = async ()=> {
			const page = page_item.dataset.nav;
			if (page && page != "about us")
				await changePage(page);
		}
	});
}