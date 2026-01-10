import { textLib } from "../../../../context/textLib.js"
import {
	Search, searchInit,
	ArticleBox
} from "../../../../components/index.js";
import { changePage, json_request } from "../../../../helpers/index.js";

export function SearchBar() {
	textLib.addText(
		"Articles",
		"articles_page_title"
	);

	return /*html*/`
	<section class="searchbar_section">
		<h1
			id="articles_page_title"
			class="articles_page_title_view jersey-10-regular"
		></h1>
		${Search()}
	</section>
	`
}

export async function SearchBarInit({signal, root}) {
	const resultsBar = root.querySelector("[articles-list]");
	const data = await json_request("../../data_json/articles.json");

	const filterArticles = (val)=> {
		const filtered = val && val != ""
			? data.filter(el=> el.name
				.toLowerCase()
				.includes(val.toLowerCase()))
			: data
		
		resultsBar.innerHTML = "";
		filtered.forEach(el => {
			resultsBar.insertAdjacentHTML('beforeend', /*html*/`
				${ArticleBox({
					name: el.name,
					date: el.date,
					img:  el.img,
					tag:  el.url_name
				})}
			`);

			const article = root.querySelector(`[${el.url_name}]`)
			article.onclick = async ()=>
				await changePage(
					"temple", el.url_name
				);
		});
	}

	filterArticles("");

	searchInit({
		func: filterArticles,
		root: root
	});
}