import { escapeHtml } from "../../helpers/escapeHtml.js";

export function ScreenTag({
	name = "noname",
	id   = "none",
	date = "none",
	subtitle = "",
	year = "",
	type = "",
	mode = "none"
}) {
	switch (mode) {
		case "none":
			return /*html*/`
			<div
				id="${id}_tag"
				class="screen_tag"
			>
				<h2 class="tag_title cinzel-regular">
					${escapeHtml(name)}
				</h2>
				<p class="tag_link jersey-10-regular">
					ARTICLE
				</p>
			</div>
			`
	
		default:
			return /*html*/`
			<div
				id="article_tag"
				class="article_tag"
			>
				<h2 class="article_title cinzel-regular">
					${escapeHtml(name)}
				</h2>
				${subtitle
					? /*html*/`<p class="article_subtitle inter-regular">${escapeHtml(subtitle)}</p>`
					: ""
				}
				<div class="article_info">
					${type
						? /*html*/`<p class="article_info_text jersey-10-regular">${escapeHtml(type)}</p>`
						: /*html*/`<p class="article_info_text jersey-10-regular">5 min read</p>`
					}
					${year || date
						? /*html*/`
						<span class="round_sep"></span>
						<p class="article_info_text jersey-10-regular">${escapeHtml(year || date)}</p>`
						: ""
					}
				</div>
			</div>
			`
	}
}
