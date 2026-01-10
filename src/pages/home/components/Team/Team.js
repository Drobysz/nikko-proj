import { textLib } from "../../../../context/textLib.js";

export function Team() {
	const teamTitle = "OUR TEAM";
	// const aboutUs = "about us"
	const teamText = `We are a multidisciplinary team of researchers, designers, and cultural historians united by a shared interest in Japan’s architectural heritage. Our work brings together historical research, visual documentation, and digital storytelling.

By combining academic accuracy with modern presentation, we aim to make complex cultural narratives accessible and engaging. Each project is built on careful study, respect for context, and attention to detail.

Our team collaborates closely across disciplines to ensure that history is not only preserved, but also clearly communicated to contemporary audiences.`

	textLib.addText(teamTitle, "team_title");
	textLib.addText(teamText, "addressing_visitors");
	// textLib.addText(aboutUs, "team_btn_text");

	return /*html*/`
	<section class="team_section">
		<div class="team_text">
			<h2
				id="team_title"
				class="team_title_view chivo-mono-bold"
			>
				${teamTitle}
			</h2>
			<div class="team_paragraph">
				<p
					id="addressing_visitors"
					class="addressing_visitors_view b612-regular"
				>
					${teamText}
				</p>
			</div>
		</div>
		<div
			class="team_img"
			alt="team image"
		></div>
	</section>
	`
}

{/* <button
	id="team_btn"
	class="team_btn_view"
>
	<span id="team_btn_text">${aboutUs}</span>
	<img
		src="../assets/arrows/arrow3.svg"
		width="24"
		height="24"
		alt="arrow"
	>
</button> */}