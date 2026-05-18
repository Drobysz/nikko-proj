import { BubbleText } from "../../../../components/BubbleText/BubbleText.js"
import {
	Period,
	Paragraphes,
	PeriodTexts
} from "./components/index.js"
import { bindScrollProgress } from "./TimeLineLogic.js";

export function Article({
	blocks,
	paragraphs = [],
	timelines = []
}) {
	const sortedParagraphs = [...(paragraphs || [])].sort(
		(a, b) => Number(a.order || 0) - Number(b.order || 0)
	);
	const sortedTimelines = [...(timelines || [])].sort(
		(a, b) => Number(a.year || 0) - Number(b.year || 0)
	);
	const contentBlocks = blocks || sortedParagraphs.map((paragraph, index)=> ({
		period: paragraph.order ? `Part ${paragraph.order}` : `Part ${index + 1}`,
		block_name: paragraph.title,
		paragraphes: [paragraph.text]
	}));

	return /*html*/`
	<section class="article">
		<section class="article_history">
			${BubbleText({text: "History"})}
			<section class="article_history_blocks">
			${contentBlocks.map(({period, block_name, paragraphes})=> {
				return /*html*/`
				<section class="article_history_block">
					${Paragraphes({
						title: block_name,
						prghs: paragraphes,
						translateText: Boolean(blocks)
					})}
				</section>
				`
			}).join("")}
		</section>
		</section>
		${sortedTimelines.length
			? /*html*/`
			<section class="article_timeline">
				${BubbleText({text: "Timeline"})}
				<div class="progress-line"></div>
				<section class="article_paragraphes">
					${sortedTimelines.map(({ year, event })=> /*html*/`
						<section class="article_paragraph">
							${Period({
								period: String(year || ""),
								translateText: false
							})}
							${PeriodTexts({
								text: event,
								translateText: false
							})}
						</section>
					`).join("")}
				</section>
			</section>`
			: ""
		}
	</section>
	`
}

export function ArticleInit({ root = document, signal } = {}) {
	const article = root.querySelector(".article_timeline");

	if (!article) return;

	const cleanup = bindScrollProgress(article, (p) =>
		article.style.setProperty("--progress", p)
	);

	signal?.addEventListener("abort", cleanup, { once: true });
}
