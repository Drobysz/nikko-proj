import {
	ContactData, contactDataInit,
	MenuItems, menuItemInit
} from "./components/index.js";

import {
	BurgerBtn, burgerLogicInit,
	LogoTitle, LogoTitleInit,
	LangOpt, LangOptInit
} from "../../components/index.js";

export async function Header() {
	return /*html*/ `
		<header>
			<div class="menu">
				<nav>
					${BurgerBtn()}
					${LogoTitle()}
					${LangOpt()}
				</nav>
				<div class="sub_menu">
					${await MenuItems()}
					<div class="sub_menu_spacing"></div>
					${ContactData()}
				</div>
			</div>
		</header>
	`
}

export async function HeaderInit() {
	const menu = document.querySelector('.menu');

	LangOptInit();
	burgerLogicInit(menu);
	await menuItemInit();
	contactDataInit();
	LogoTitleInit(menu);
}