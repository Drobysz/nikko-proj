import { textLib } from "../../../../context/textLib.js";
import { PromotionsLogic } from "./PromotionsLogic.js";

export function Promotions() {
	const tariffTitle = "3 tarrifs";

	textLib.addText(
		tariffTitle,
		"promotions_title"
	);

	return /*html*/`
	<section class="promotions_section_view">
		<h1
			id="promotions_title"
			class="promotions_title_view climate-crisis-regular"
		>
			${tariffTitle}
		</h1>
		<ul
			id="tarrifs"
			class="tarrifs_view"
		></ul>
	</section>
	`
}

export async function PromotionsInit() {
	await PromotionsLogic();
}