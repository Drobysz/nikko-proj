import { capitalize } from "./index.js";

export function setPageTitle({name, param = "none"}) {
	if (name == "home")
		document.title = "Nikko Temples"
	
	else if (name == "temple" && param != "none")
		document.title = capitalize(param);
	
	else
		document.title = capitalize(name)
}