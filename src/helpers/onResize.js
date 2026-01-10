export function onResize() {
	const menu = document.querySelector(".menu");
	if (menu.classList.contains("menu_open"))
		menu.style.height = "fit-content";
}