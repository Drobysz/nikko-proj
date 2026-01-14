// Helpers
import { textLib } from "./context/textLib.js";
import { appStore } from "./context/appStore.js";
import {
  changePage,
  getPageName,
  getParam,
  setListeners
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

const cacheLanguage = localStorage.getItem("language");
if (cacheLanguage) {
  appStore.setState({language: cacheLanguage})
} else {
  localStorage.setItem("language", "en");
}

const fromHash = getPageName();
const param = getParam();

await changePage(fromHash || "home", param && param);

setListeners();

appStore.subscribe(textLib.translateAll);