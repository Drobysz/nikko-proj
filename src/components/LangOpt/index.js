import optionsLogic from "./optionsLogic.js";

export function LangOpt() {
	return /*html*/ `
		<div class="lang_selector">
			<button id="lang_selector_btn">
				<label
					id="curr_lang"
					class="baumans-regular"
				>
				</label>
				<img
					src="../assets/arrows/arrow1.svg"
					id="selector_arrow"
					width="18"
					height="18"
					alt="arrow"
				>
			</button>
			<ul
				id="lang_opts"
				class="lang_opt_block"
			>
			</ul>
		</div>
		`
	}

export function LangOptInit() {
	optionsLogic();
}