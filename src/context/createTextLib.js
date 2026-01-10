import { translate, getPageName } from "../helpers/index.js"
import { appStore } from "./appStore.js";

export default function createTextLib() {
	const textsTable = {};

	return {
		addText: (text, id, pgName = getPageName())=> {
			// console.log(text, pgName)
			if (!textsTable[pgName]) textsTable[pgName] = {};

			textsTable[pgName][id] = text;
		},
		getText: (id)=> textsTable[id],
		currLang: ()=> appStore.getState().language,
		translate: async (t)=> {
			const currLang = appStore.getState().language; 
			const translated = await translate(currLang, [t]);

			return translated[0];
		},
		translateAll: async (state)=> {
			const pgName = getPageName();
			// if (!textsTable[pgName]) return;
			const elements = {...textsTable["header"], ...textsTable[pgName]};
			const currLang = state.language;
			let counter = 0;

			const translations = currLang != 'en'
				? await translate(
					currLang,
					Object.values(elements)
				  )
				: [];

			Object.keys(elements).forEach(id=> {
				const el = document.getElementById(id);

				if (currLang == 'en'){
					const text = elements[id];
					el.textContent = text;
				} else {
					const translated = translations[counter];
					el.textContent = translated;
				}
				counter += 1;
			})
		}
	}
}