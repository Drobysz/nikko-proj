import { textLib } from "../../context/textLib.js";
import { changePage } from "../../helpers/index.js";

export function LogoTitle() {
	textLib.addText(
		"Nikko shrines and temples",
		"logo_title",
		"header"
	);

	return /*html*/ `
	<div
		class="logo_title"
		menu-logo
	>
		<img
			src="../assets/logo.png"
			alt="sm_logo"
			width="56"
			height="56"
			class="header_logo"
		>
		<p
			id="logo_title"
			class="logo_text cinzel-regular"
		>
		</p>
	</div>
	`
}

export function LogoTitleInit(root) {
	const logo = document.querySelector("[menu-logo]");

	if (!logo) return;

	logo.onclick = async()=> {
		await changePage("home");
	}
}