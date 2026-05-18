import { textLib } from "../../../../../../context/textLib.js"
import { escapeHtml } from "../../../../../../helpers/escapeHtml.js";

export function PeriodTexts({ text = [], translateText = true }) {
    const paragraphText = String(text || "");
    const idx = paragraphText.slice(0, 6).replace(" ");

    if (translateText) {
        textLib.addText(paragraphText, idx);
    }

    return /*html*/`
    <article class="article_block">
        <li class="article_block_prghs">
            <p
                ${translateText ? `id="${idx}"` : `data-paragraph="${idx}"`}s
                class="article_prgh inter-regular"
            >
                ${escapeHtml(paragraphText)}
            </p>
        </li>
    </article>
    `
}