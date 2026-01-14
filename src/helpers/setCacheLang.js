import { appStore } from "../context/appStore.js";

export function setCacheLang() {
	const cacheLanguage = localStorage.getItem("language");
	if (cacheLanguage) {
		appStore.setState({language: cacheLanguage})
	} else {
		localStorage.setItem("language", "en");
	}
}