import {
	changePage,
	getPageName,
	getParam
} from "./index.js";

export function onResize() {
	const menu = document.querySelector(".menu");
	if (menu.classList.contains("menu_open"))
		menu.style.height = "fit-content";
}

export function setListeners () {
	window.addEventListener("popstate", async () => {
	  const page = getPageName();
	  const param = getParam();
	
	  await changePage(page || "home", param && param);
	});

	window.addEventListener("resize", onResize);
}