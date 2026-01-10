export function burgerLogic(root = document) {
	const wrapper = document.getElementById("opacity_wrapper");
	const btn = document.querySelector('[burger-btn]');

	for (let line_nb = 0; line_nb < 2; line_nb++) {
		btn.insertAdjacentHTML('beforeend',
		`<hr
			id="line_${line_nb + 1}"
			class="burger_line"
		>`) 
	}

	btn.classList.add("is_burger_close");
	wrapper.classList.add("wrapper_off");
	root.classList.add("menu_closed");
	root.style.height = "42px";

	btn.onclick = ()=> {
		let isOpened = sessionStorage.getItem("isMenuOpen") == "true";
		isOpened = !isOpened;
		sessionStorage.setItem("isMenuOpen", isOpened);

		btn.classList.toggle("is_burger_open", isOpened);
		btn.classList.toggle("is_burger_close", !isOpened);

		wrapper.classList.toggle("wrapper_on", isOpened);
		wrapper.classList.toggle("wrapper_off", !isOpened);


		root.classList.toggle("menu_open", isOpened);
		root.classList.toggle("menu_closed", !isOpened);

		root.style.height = isOpened
			? root.scrollHeight + "px"
			: "42px";
	}
}