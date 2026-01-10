export function ScreenTag({
	name = "noname",
	id   = "none",
	date = "none",
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
					${name}
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
					${name}
				</h2>
				<div class="article_info">
					<p class="article_info_text jersey-10-regular">5 min read</p>
					<span class="round_sep"></span>
					<p class="article_info_text jersey-10-regular">${date}</p>
				</div>
			</div>
			`
	}
}