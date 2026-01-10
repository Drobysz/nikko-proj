import { textLib } from "../../../../../../context/textLib.js"

export function Paragraphes({ title, prghs }) {
	const title_id = `paragraph_title_${title.replace(" ", "_")}`
	textLib.addText(title, title_id);

	return /*html*/`
	<article class="article_block">
		<h3
			class="article_block_title cinzel-regular"
			id="${title_id}"
		>
			${title}
		</h3>
		<ul class="article_block_prghs">
			${prghs.en.map(p=>{
					const idx = p.slice(0, 6).replace(" ");
					textLib.addText(p, idx);

					return /*html*/`
					<p
						id="${idx}"
						class="article_prgh inter-regular"
					>
						${p}
					</p>`
				}).join("")
			}
		</ul>
	</article>
	`
}