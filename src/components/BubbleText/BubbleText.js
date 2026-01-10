export function BubbleText({ text }) {
	return /*html*/`
	<h2 class="bubble_title">
		${text.split("").map(child => (
			/*html*/`
			<span class="bubble_text inter-semibold">
				${child}
			</span>
			`
		)).join("")}
	</h2>
	`
}