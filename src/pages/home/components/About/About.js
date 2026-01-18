import { textLib } from "../../../../context/textLib.js";

export function About() {
	const nikkoTitle = "Sacred Nikko";
	const nikkoText = `The Nikko Shrines and Temples complex is a unique cultural landscape where Shinto and Buddhist traditions have coexisted for centuries. Set in the forested mountains of Tochigi Prefecture, the site reflects the close connection between architecture, nature, and ritual. Richly decorated sanctuaries and more restrained sacred spaces together express the spiritual, historical, and artistic legacy of Nikko.`;

	textLib.addText(nikkoTitle, "nikko_title");
	textLib.addText(nikkoText, "nikko_desc");

	return /*html*/`
	<section class="nikko_section">
		<div
			class="nikko_img"
			alt="nikko image"
		></div>
		<div class="nikko_text">
			<h2
				id="nikko_title"
				class="nikko_title_view chivo-mono-bold"
			>
				${nikkoTitle}
			</h2>
			<div class="complex_paragraph">
				<p
					id="nikko_desc"
					class="nikko_desc_view b612-regular"
				>
					${nikkoText}
				</p>
			</div>
		</div>
	</section>
	`
}
