// Helpers
import { textLib } from "./context/textLib.js";
import { appStore } from "./context/appStore.js";
import {
  changePage,
  getPageName,
  getParam,
  onResize
} from "./helpers/index.js";

// Layout components/Initializators
import { Header, HeaderInit } from "./layout_components/Header/Header.js";
import { Footer } from "./layout_components/Footer/Footer.js";

const root = document.getElementById("root");

const pageContent = /*html*/`
${await Header()}
<main id="page"></main>
${await Footer()}
`
root.innerHTML = pageContent;

await HeaderInit();

const fromHash = getPageName();
const param = getParam();
await changePage(fromHash || "home", param && param);

window.addEventListener("popstate", async () => {
  const page = getPageName();
  const param = getParam();

  await changePage(page || "home", param && param);
});

window.addEventListener("resize", onResize);
appStore.subscribe(textLib.translateAll);