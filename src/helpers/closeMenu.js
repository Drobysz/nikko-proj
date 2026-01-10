export const closeMenu = ()=> {
	const menu = document.querySelector('.menu');
	const wrapper = document.getElementById("opacity_wrapper");
	const btn = document.querySelector('[burger-btn]');

	btn.classList.add("is_burger_close");
	btn.classList.remove("is_burger_open");

	wrapper.classList.add("wrapper_off");
	wrapper.classList.remove("wrapper_on");

	menu.classList.add("menu_closed");
	menu.classList.remove("menu_open");
	menu.style.height = "42px";
}