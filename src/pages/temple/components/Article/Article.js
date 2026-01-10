import { BubbleText } from "../../../../components/BubbleText/BubbleText.js"
import {
	Period,
	Paragraphes
} from "./components/index.js"
import { bindScrollProgress } from "./TimeLineLogic.js";

export function Article({blocks}) {
	return /*html*/`
	<section class="article">
		${BubbleText({text: "Hisrotyline"})}
		<div class="progress-line"></div>
		<section class="article_paragraphes">
			${blocks.map(({period, block_name, paragraphes})=> {
				return /*html*/`
				<section class="article_paragraph">
					${Period({ period: period })}
					${Paragraphes({
						title: block_name,
						prghs: paragraphes
					})}
				</section>
				`
			}).join("")}
		</section>
	</section>
	`
}

export function ArticleInit() {
	const article = document.querySelector(".article");

	bindScrollProgress(article, (p) =>
		article.style.setProperty("--progress", p)
	);
}