import { appStore } from "../../context/appStore.js";

export default function optionsLogic() {
	const label = document.getElementById("curr_lang");
	const options = document.getElementById("lang_opts");
	const selArrow = document.getElementById("selector_arrow");
	const langOptBtn = document.getElementById("lang_selector_btn");

	const openOptions = () => {
		if (!options) return;

		const r = langOptBtn.getBoundingClientRect();
		options.style.left = `${r.left}px`;
		options.style.top  = `${r.bottom + 4}px`;

		options.style.display = "flex";
		options.style.opacity = "0";
		options.style.transform = "translateY(0px)";

		requestAnimationFrame(() => {
			options.style.opacity = "1";
			options.style.transform = "translateY(5px)";
		});
	};

	const closeOptions = () => {
		if (!options) return;
		options.style.opacity = "0";
		options.style.transform = "translateY(0px)";

		const onEnd = (e) => {
			if (e.propertyName !== "opacity") return;
			options.style.display = "none";
			options.removeEventListener("transitionend", onEnd);
		};

		options.addEventListener("transitionend", onEnd);
	};

	const langs = {
		en: 'English',
		fr: 'Français',
		ja: '日本語',
		ru: 'Русский',
		zh: '中国',
		de: 'Deutsch'

	};
	let isOpened = false;
	const currLang = appStore.getState().language;

	options.innerHTML = "";
	label.textContent = langs[currLang];
	options.style.display = "none";

	for (const [lang, name] of Object.entries(langs)) {
		options.insertAdjacentHTML(
			'beforeend',
			`<li
				class="lang_opt inter-regular"
				id="${lang}"
			>
				${name}
			</li>`
		);
	
		const langOpt = document.getElementById(lang);

		if (lang == currLang) {
			langOpt.style.display = "none";
		}

		langOpt.addEventListener(
			"click",
			()=> {
				const currLang = appStore.getState().language;
				const prevLangOpt = document.getElementById(currLang);
				prevLangOpt.style.display = "block";
				
				langOpt.style.display = "none";
				label.textContent = name;
				appStore.setState({language: lang});
				localStorage.setItem("language", lang);

				closeOptions();

				selArrow.style.transform = "rotate(0deg) translate(0)";
				isOpened = !isOpened;
			}
		);
	}

	langOptBtn.onclick = () => {
		isOpened = !isOpened;

		if (!options) return;
	
		if (isOpened) openOptions();
		else 		  closeOptions();

		if (!selArrow) return;
		selArrow.style.transform = isOpened
			? "rotate(180deg) translateY(2px)"
			: "rotate(0deg) translateY(0px)";
	};
}