import { textLib } from "../../../../context/textLib.js";
import { json_request } from "../../../../helpers/index.js";

export async function PromotionsLogic() {
	const data = await json_request("../../data_json/tarrifs.json");
	const tarrifList = document.getElementById("tarrifs");
	const imgs = [
		'b1', 'b2', 'b5'
	];

	data.forEach((el, card_idx) => {
		let services = '';

		el.services.forEach((service, idx)=> {
			services += /*html*/`
				<li
					id="serv_${card_idx}_${idx}"
					class="tarrif_service"
				>
					${service}
				</li>
			`;
		})

		tarrifList.insertAdjacentHTML("beforeend", /*html*/`
			<li
				style="background-image: url('../assets/background/${imgs[card_idx]}.svg')"
				class="tarrif_container ${el.recommended && 'recommended'}"
			>
				<h2 class="tarrif_container_title coda-extrabold">
					${el.name}
					<span class="price">${el.price}€</span>
				</h2>
				<ul class="services_list inter-regular">
					${services}
				</ul>
			</li>
		`);
		
		el.services.forEach((service, idx) => {
			textLib.addText(service, `serv_${card_idx}_${idx}`);
		});
	});
}