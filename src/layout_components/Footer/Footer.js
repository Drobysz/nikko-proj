import { SM } from "../../components/SM/SM.js"

export async function Footer() {
	return /*html*/ `
		<footer>
			${await SM()}
			<a href="#top">
				<img
					src="../assets/logo.png"
					alt="sm_logo"
					width="56"
					height="56"
					class="footer_logo"
				>
			</a>
			<p class="copyright inter-semibold">
				copyright 2025 - Lix team
			</p>
		</footer>
	`
}