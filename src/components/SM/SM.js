import { json_request } from "../../helpers/index.js";

export async function SM() {
	const data = await json_request("../../data_json/sm.json")

	let social_medias = `
	<div class="social_media">
	`;
	data.forEach(
		({name, link})=>
			social_medias += `
				<a 
					href="${link}"
					target="_blank"
				>
					<img
						src="../assets/smbar_icons/${name}.svg"
						alt="sm_logo_${name}"
						class="sm_icon"
						width="45"
						height="45"
					>
				</a>
			`
	)
	social_medias += `</div>`

	return social_medias
}