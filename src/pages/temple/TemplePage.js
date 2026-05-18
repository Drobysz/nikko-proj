import { Intro, Article, ArticleInit } from "./components/index.js";
import { getArticle } from "../../helpers/api.js";
import { escapeHtml } from "../../helpers/escapeHtml.js";

function getArticleIdFromRoute() {
	const hash = window.location.hash.replace(/^#\/?/, "");
	const queryId = new URLSearchParams(window.location.search).get("id");

	if (hash.includes("/")) {
		return decodeURIComponent(hash.split("/")[1].split("?")[0] || "");
	}

	if (hash.includes("?")) {
		return new URLSearchParams(hash.split("?")[1]).get("id") || queryId || "";
	}

	return queryId || "";
}

function ArticleState(message) {
	return /*html*/`
		<section class="temple_state_section">
			<p class="temple_state inter-regular">${escapeHtml(message)}</p>
		</section>
	`
}

function getArticleImage(article) {
	return article.img_url || article.image_url || "";
}

function bindImageFallbacks(root, signal) {
	const images = root.querySelectorAll("[data-article-image]");

	images.forEach((img)=> {
		img.addEventListener("error", ()=> {
			const fallback = document.createElement("div");
			fallback.className = "article_image article_image_fallback";
			img.replaceWith(fallback);
		}, { signal });
	});
}

export async function TemplePage() {
	return /*html*/`
		<div data-temple-content>
			${ArticleState("Loading article...")}
		</div>
	`
}

export async function TemplePageInit({signal, root}) {
	const content = root.querySelector("[data-temple-content]");
	const id = getArticleIdFromRoute();

	if (!id) {
		content.innerHTML = ArticleState("Article id is missing.");
		return;
	}

	try {
		content.innerHTML = ArticleState("Loading article...");
		const article = await getArticle(id, { signal });

		if (signal.aborted) return;

		if (!article) {
			content.innerHTML = ArticleState("Unable to load this article.");
			return;
		} else {
			document.title = article.title || "Article";
		}

		content.innerHTML = /*html*/`
			${Intro({
				title: article.title,
				subtitle: article.subtitle,
				year: article.year,
				type: article.type,
				imageUrl: getArticleImage(article)
			})}
			${Article({
				paragraphs: article.paragraphs || [],
				timelines: article.timelines || []
			})}
		`;

		bindImageFallbacks(root, signal);
		ArticleInit({ root, signal });
	} catch (error) {
		if (error.name == "AbortError") return;
		console.error(error);
		content.innerHTML = ArticleState("Unable to load this article.");
	}
}
