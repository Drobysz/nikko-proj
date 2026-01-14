import { textLib } from "../../../../../../context/textLib.js";

export function Period({ period }) {
	const periodId = period.trim().replace(' ', '_') + "_id"

	textLib.addText(
		period,
		periodId
	);

	return /*html*/`
	<div class="period_block">
		<div class="period_elevator">
			<div class="artile_circle">
				<div class="article_inner_circle">
				</div>
			</div>
			<h3
				id="${periodId}"
				class="period_title climate-crisis-regular"
			>
				${period}
			</h3>
		</div>
	</div>
	`
}