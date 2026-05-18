import { textLib } from "../../../../context/textLib.js"
import {
	Search, searchInit,
	ArticleBox
} from "../../../../components/index.js";
import { changePage, getArticles } from "../../../../helpers/index.js";

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

	const setStatus = (message)=> {
		resultsBar.innerHTML = /*html*/`
			<li class="articles_status inter-regular">${message}</li>
		`;
	};

	const getArticleImage = (article)=> article.img_url || article.image_url || "";

	const bindImageFallbacks = ()=> {
		const images = root.querySelectorAll("[data-article-image]");

		images.forEach((img)=> {
			img.addEventListener("error", ()=> {
				const fallback = document.createElement("div");
				fallback.className = "result_article_img result_article_img_fallback";
				img.replaceWith(fallback);
			}, { signal });
		});
	};

	const bindArticleNavigation = ()=> {
		const articles = root.querySelectorAll("[data-article-id]");

		articles.forEach((article)=> {
			const goToArticle = async ()=> {
				await changePage("temple", article.dataset.articleId);
			};

			article.addEventListener("click", goToArticle, { signal });
			article.addEventListener("keydown", async (event)=> {
				if (event.key == "Enter" || event.key == " ") {
					event.preventDefault();
					await goToArticle();
				}
			}, { signal });
		});
	};

	const renderArticles = (articles)=> {
		resultsBar.innerHTML = "";

		if (!articles.length) {
			setStatus("No articles found.");
			return;
		}

		articles.forEach(article => {
			resultsBar.insertAdjacentHTML('beforeend', /*html*/`
				${ArticleBox({
					id: article.id,
					title: article.title,
					subtitle: article.subtitle,
					year: article.year,
					type: article.type,
					imageUrl: getArticleImage(article)
				})}
			`);
		});

		bindImageFallbacks();
		bindArticleNavigation();
	};

	try {
		setStatus("Loading articles...");
		const data = await getArticles({ signal });

		if (signal.aborted) return;

		const filterArticles = (val)=> {
			const query = val.trim().toLowerCase();
			const filtered = query
				? data.filter((article)=> [
					article.title,
					article.subtitle,
					article.type,
					article.year
				].some((value)=> String(value || "").toLowerCase().includes(query)))
				: data;

			renderArticles(filtered);
		}

		filterArticles("");

		searchInit({
			func: filterArticles,
			root: root
		});
	} catch (error) {
		if (error.name == "AbortError") return;
		console.error(error);
		setStatus("Unable to load articles. Please try again later.");
	}
}
