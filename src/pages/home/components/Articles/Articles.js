import { textLib } from "../../../../context/textLib.js";
import { changePage, json_request } from "../../../../helpers/index.js";
import { ScreenTag } from "../../../../components/index.js";

export function Articles() {
	textLib.addText(
		"History articles of shrines and temples",
		"articles_title"
	);
	
	return /*html*/`
	<section class="articles_section">
		<h2
			id="articles_title"
			class="articles_title_view chivo-mono-bold"
		>
		</h2>
		<div class="articles_space"></div>
	</section>
	`
}

export async function ArticlesInit({ signal, root }) {
	const data = await json_request("../../data_json/articles.json");
	const images = ["nikko4.jpg", "nikko1.jpg", "nikko5.jpg"];
	const articleList = root.querySelector(".articles_space");
	
	data.forEach((el, idx) => {
		articleList.insertAdjacentHTML("beforeend", /*html*/`
			<div class="article_list_frame">
				<div
					${el.url_name}-main-list
					class="article_list_img"
					style='background-image: url("../assets/buildings/${images[idx]}")'
				>
				</div>
				${ScreenTag({
					name: el.name,
					id: el.name
				})}
			</div>
		`);

		const article = document.querySelector(`[${el.url_name}-main-list]`);
		article.onclick = async ()=>
			await changePage(
				"temple", el.url_name
			);
	});

	const articles = [...root.querySelectorAll(".article_list_img")];

	const setBlurAll = (val) => {
	  articles.forEach((el) => {
	    el.style.filter = val ? "blur(0.5rem)" : "blur(0px)";
	  });
	};

	articleList.addEventListener(
	  "mouseover",
	  (e) => {
	    const frame = e.target.closest(".article_list_frame");
	    if (!frame || !articleList.contains(frame)) return;

	    const img = frame.querySelector(".article_list_img");
	    if (!img) return;

	    setBlurAll(true);
	    img.style.filter = "blur(0px)";
	  },
	  { signal }
	);

	articleList.addEventListener(
	  "mouseout",
	  (e) => {
	    const frame = e.target.closest(".article_list_frame");
	    if (!frame || !articleList.contains(frame)) return;

	    if (frame.contains(e.relatedTarget)) return;

	    setBlurAll(false);
	  },
	  { signal }
	);
}