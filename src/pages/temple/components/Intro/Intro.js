import { ScreenTag } from "../../../../components/index.js"

export function Intro({ name, date, img }) {
	return /*html*/`
	<section class="article_intro_section">
		<div class="article_image_frame">
			<img
				class="article_image"
				src="../assets/buildings/${img}"
				alt="article intro image"
			>
			${ScreenTag({
				date: date,
				img: img,
				name: name,
				mode: "article"
			})}
		</div>
	</section>
	`
}
