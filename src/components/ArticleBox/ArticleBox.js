import { escapeHtml } from "../../helpers/escapeHtml.js";

export function ArticleBox({
	id,
	name,
	title,
	subtitle,
	date,
	year,
	type,
	img,
	imageUrl,
	tag
}) {
	const articleTitle = title || name || "Untitled article";
	const articleImage = imageUrl || img || "";
	const articleYear = year || date || "";
	const articleType = type || "";
	const articleSubtitle = subtitle || "";
	const articleAttr = id !== undefined && id !== null
		? `data-article-id="${escapeHtml(id)}"`
		: escapeHtml(tag || "");
	const isExternalImage = /^https?:\/\//.test(articleImage);
	const imageSrc = isExternalImage || !articleImage
		? articleImage
		: `../assets/buildings/${articleImage}`;
	const safeTitle = escapeHtml(articleTitle);

	return /*html*/`
	<li
		${articleAttr}
		class="result_article"
		role="button"
		tabindex="0"
	>
		<div class="result_article_image_frame">
			${imageSrc
				? /*html*/`
				<img
					data-article-image
					class="result_article_img"
					src="${escapeHtml(imageSrc)}"
					alt="${safeTitle}"
				>`
				: /*html*/`<div class="result_article_img_fallback"></div>`
			}
		</div>
		<div class="result_article_content">
			<h2 class="result_article_title climate-crisis-regular">${safeTitle}</h2>
			<div class="result_article_info">
				${articleSubtitle
					? /*html*/`<p class="result_article_subtitle inter-regular">${escapeHtml(articleSubtitle)}</p>`
					: ""
				}
				${articleYear
					? /*html*/`<p class="result_date b612-bold">est ${escapeHtml(articleYear)}</p>`
					: ""
				}
				${articleType
					? /*html*/`<p class="result_type b612-bold">${escapeHtml(articleType)}</p>`
					: ""
				}
			</div>
		</div>
	</li>
	`
}

export function ArticleBoxInit({root, signal}) {
	
}
