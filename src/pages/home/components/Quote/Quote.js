import { textLib } from "../../../../context/textLib.js";

export function Quote() {
	const dirName = "Hiroshi Takayama"
	const positionName = "Executive Director of Nikko Shrines and Temples"
	const quote = `Dear visitors, Nikko is not only a place to see, but a place to feel.
		As you walk through our shrines and temples, we invite you to slow down,
		listen to the silence, and sense the harmony between nature, history,
		and human devotion that has been preserved here for centuries.
		Your presence becomes part of this living heritage.`

	textLib.addText(dirName, "director_name");
	textLib.addText(
		positionName,
		"position_name"
	);
	textLib.addText(
		quote,
		"quote"
	);

	return /*html*/`
	<section class="quote_section">
		<div class="official_data">
			<h2
				id="director_name"
				class="director_name_view climate-crisis-regular"
			>
				${dirName}
			</h2>
			<p
				id="position_name"
				class="position_name_view inter-regular"
			>
				${positionName}
			</p>
		</div>
		<p class="quote_text coda-regular">
			<b><span class="p_quote">«</span></b>
			<span id="quote">${quote}</span>
			<b><span class="p_quote">»</span></b>
		</p>
	</section>
	`
}