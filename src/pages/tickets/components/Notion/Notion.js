import { textLib } from "../../../../context/textLib.js";

export function Notion () {
	textLib.addText(
		"All tickets can be purchesed",
		"ticket_notion_text"
	);

	textLib.addText("here", "aggragator_link");

	return /* html */ `
	<div class="ticket_notion_body baumans-regular">
		<span
			id="ticket_notion_text"
			class="ticket_notion_text_view"
		>
			All tickets can be purchesed
		</span>
		<a
			id="aggragator_link"
			class="aggragator_link_view"
			href="https://tobu-japantrip-tickets.com/"
			target="_blank"
		>
			here
		</a>
	</div>
	`
}