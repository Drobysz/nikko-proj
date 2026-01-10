import { json_request } from "../../helpers/index.js";

export async function barLogic({ signal, root }) {
	const data = await json_request("../../data_json/articles.json");
	const fills = [...root.querySelectorAll(".fill")];
	let i = 0;

	function start(idx){
		const el = fills[idx];
		el.classList.remove("run");
		el.style.width = "0%";
		void el.offsetWidth;
		el.classList.add("run");

		const frame = root.querySelector("[screen-frame]");
		if (!frame) return;
		frame.style.backgroundImage = `url(../assets/buildings/${data[idx]["img"]})`;

		const title = root.querySelector("[article-title]");
		title.textContent = data[idx]["name"]
	}

	fills.forEach((el, idx) => {
		el.addEventListener("animationend", () => {
			el.classList.remove("run");
			el.style.width = "0%";
			i = (idx + 1) % fills.length;
			start(i);
		}, { signal });
	});

	start(0);
}