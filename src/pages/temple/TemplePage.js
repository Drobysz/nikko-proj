import { Intro, Article, ArticleInit } from "./components/index.js";
import { json_request } from "../../helpers/json_request.js"

export async function TemplePage({ param }) {
	const data = await json_request("../../data_json/articles.json");
	const article = data.find(el=> el.url_name == param);
	return /*html*/`
	${Intro({
		name: article.name,
		date: article.date,
		img:  article.img
	})}
	${Article({ blocks: article.blocks })}
	`
}

export function TemplePageInit({signal, root}) {
	ArticleInit();
}