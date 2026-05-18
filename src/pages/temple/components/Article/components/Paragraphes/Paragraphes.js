import { textLib } from "../../../../../../context/textLib.js"
import { escapeHtml } from "../../../../../../helpers/escapeHtml.js";

export function Paragraphes({ title, prghs = [], translateText = true }) {
	const safeTitleText = String(title || "");
	const paragraphs = Array.isArray(prghs)
		? prghs
		: prghs.en || [];
	const title_id = `paragraph_title_${safeTitleText.replace(" ", "_")}`

	if (translateText) {
		textLib.addText(safeTitleText, title_id);
	}

	return /*html*/`
	<article class="article_block">
		<h3
			class="article_block_title cinzel-regular"
			${translateText ? `id="${title_id}"` : ""}
		>
			${escapeHtml(safeTitleText)}
		</h3>
		<ul class="article_block_prghs">
			${paragraphs.map((p, index)=>{
					const paragraphText = String(p || "");
					const idx = paragraphText.slice(0, 6).replace(" ");

					if (translateText) {
						textLib.addText(paragraphText, idx);
					}

					return /*html*/`
					<p
						${translateText ? `id="${idx}"` : `data-paragraph="${index}"`}
						class="article_prgh inter-regular"
					>
						${escapeHtml(paragraphText)}
					</p>`
				}).join("")
			}
		</ul>
	</article>
	`
}
