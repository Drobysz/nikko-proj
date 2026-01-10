import { textLib } from "../../../../context/textLib.js";

export function Intro() {
	const ticketIntroTitle = "Welcome to the ticket page";

	textLib.addText(
		ticketIntroTitle,
		"intro_ticket_title"
	);

	return /*html*/`
	<section class="intro_ticket_section">
		<img
			class="intro_ticket_img"
			src="../assets/other/temple.png"
			alt="intro ticket image of temple"
		>
		<h1
			id="intro_ticket_title"
			class="intro_ticket_title_view jim-nightshade-regular"
		>
			${ticketIntroTitle}
		</h1>
	</section>
	`
}