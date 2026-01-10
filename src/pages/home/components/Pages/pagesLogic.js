import { changePage } from "../../../../helpers/index.js";

export function pagesLogic({ signal, root }) {
	const pages = [...root.querySelectorAll(".page_block")];
	const pagesSection = root.querySelector("[pages]");

	pagesSection.onmouseenter = ()=> {
		const sub_titles = [...root.querySelectorAll(".sub_title")];

		sub_titles.forEach((st)=> {
			st.style.opacity = "0";
		});
	}

	pagesSection.onmouseleave = ()=> {
		const sub_titles = [...root.querySelectorAll(".sub_title")];

		sub_titles.forEach((st)=> {
			st.style.opacity = "1";
		});
	}

	pages.forEach(p=> {
		const st = p.querySelector(".sub_title");

		p.onmouseenter = ()=> {
			st.style.opacity = "1";
			p.classList.add("is-active")
		}

		p.onmouseleave = ()=> {
			st.style.opacity = "0";
			p.classList.remove("is-active")
		}
	});

	pagesSection.addEventListener("click", async (e)=> {
		const target = e.target.closest("[data-nav]");
		if (!target) return;

		const page = target.dataset.nav;
		if (!page || page == "souvenirs") return;

		await changePage(page);
	}, { signal });
}