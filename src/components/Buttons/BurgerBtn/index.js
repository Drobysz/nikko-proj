import { burgerLogic } from "./burgerLogic.js";

export function BurgerBtn(){
	return /*html*/`
	<button
		burger-btn
		class="burger_btn"
		type="button"
	>
	</button>
	`
}

export function burgerLogicInit(root) {
	burgerLogic(root);
}