import { textLib } from "../../../../../../context/textLib.js";
import { escapeHtml } from "../../../../../../helpers/escapeHtml.js";

export function Period({ period, translateText = true }) {
	const periodText = String(period || "");
	const periodId = periodText.trim().replace(' ', '_') + "_id"

	if (translateText) {
		textLib.addText(
			periodText,
			periodId
		);
	}

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
				${escapeHtml(periodText)}
			</h3>
		</div>
	</div>
	`
}
