export function setPropsToDefault() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "white";
	
	sessionStorage.setItem("isMenuOpen", false)
}