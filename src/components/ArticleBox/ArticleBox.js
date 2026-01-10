export function ArticleBox({
	name, date, img, tag
}) {
	return /*html*/`
	<li
		${tag}
		class="result_article"
	>
		<img
			class="result_article_img"
			src="../assets/buildings/${img}"
			alt="result article"
		>
		<h2 class="result_article_title climate-crisis-regular">${name}</h2>
		<p class="result_date b612-bold">${date}</p>
	</li>
	`
}

export function ArticleBoxInit({root, signal}) {
	
}