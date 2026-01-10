import { ScreenBar, ScreenBarInit } from "../../../../components/ScreenBar/ScreenBar.js";

export async function Screen() {

	return /*html*/`
	<section class="screen_section">
		<div
			screen-frame
			class="screen_frame"
		>
			${await ScreenBar()}
		</div>
	</section>
	`
}

export async function ScreenInit({ signal, root }) {
	await ScreenBarInit({ signal, root });
}