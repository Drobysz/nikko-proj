export function BubbleText({ text }) {
	return /*html*/`
	<h2 class="bubble_title">
		${text.split("").map(child => (
			/*html*/`
			<span class="inter-regular bubble_text">
				${child}
			</span>
			`
		)).join("")}
	</h2>
	`
}