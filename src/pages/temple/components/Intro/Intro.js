import { ScreenTag } from "../../../../components/index.js"
import { escapeHtml } from "../../../../helpers/escapeHtml.js";

export function Intro({
	name,
	title,
	subtitle,
	date,
	year,
	type,
	img,
	imageUrl
}) {
	const articleTitle = title || name || "Untitled article";
	const articleImage = imageUrl || img || "";
	const isExternalImage = /^https?:\/\//.test(articleImage);
	const imageSrc = isExternalImage || !articleImage
		? articleImage
		: `../assets/buildings/${articleImage}`;

	return /*html*/`
	<section class="article_intro_section">
		<div class="article_image_frame">
			${imageSrc
				? /*html*/`
				<img
					data-article-image
					class="article_image"
					src="${escapeHtml(imageSrc)}"
					alt="${escapeHtml(articleTitle)}"
				>`
				: /*html*/`<div class="article_image article_image_fallback"></div>`
			}
			${ScreenTag({
				date: date,
				year: year,
				type: type,
				name: articleTitle,
				subtitle: subtitle,
				mode: "article"
			})}
		</div>
	</section>
	`
}
