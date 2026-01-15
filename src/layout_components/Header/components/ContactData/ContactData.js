import { textLib } from "../../../../context/textLib.js";
import { contactDataLogic } from "./contactDataInit.js";

export function ContactData() {
	const contacts = {
		map: "map",
		phone: "0654679076",
		email: "nikko_shrines@gmail.com",
		share: "share"
	}

	let contact_html_list = '';

	Object.entries(contacts).forEach(([c, d])=> {
		if (["map", "share"].includes(c))
			textLib.addText(c, `${c}_title`, "header");
		
		contact_html_list += /*html*/`
		<li
			${c}-list
			id="${c}_list"
		>
			${c == "map"
				? `<a
				id="map_link"
				href="https://www.google.com/maps/place/Nikk%C5%8D+Shrine+Temples+Cultural+Property+Preservation+Society/@36.759684,139.614743,14z/data=!4m6!3m5!1s0x601fa6daf98bd3fd:0xa7e1218f4de2fc4d!8m2!3d36.7563082!4d139.5979758!16s%2Fg%2F11btrq_hqj?hl=en&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
				target="_blank">`
				: ""
			}
			<img
				src="../assets/contact/${c}.svg"
				alt="${c}"
				width="34"
				height="34"
			>
			<p
				id="${c}_title"
				class="inter-regular"
			>${d}</p>
			${c == "map" ? `</a>` : ""}
		</li>
		`

	});


	return /*html*/`
	<div
		class="contact_data_half"
	>
		<div class="map">
			<iframe
				class="map_frame"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13895.130610243139!2d139.58659063914808!3d36.7578041805095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601fa6daf98bd3fd%3A0xa7e1218f4de2fc4d!2sNikk%C5%8D%20Shrine%20Temples%20Cultural%20Property%20Preservation%20Society!5e0!3m2!1sen!2sfr!4v1768512381387!5m2!1sen!2sfr"
				width="400"
				height="300"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade">
			</iframe>
		</div>
		<ul class="contacts">
			${contact_html_list}
		</ul>
	</div>
	`
}

export function contactDataInit() {
	contactDataLogic();
}