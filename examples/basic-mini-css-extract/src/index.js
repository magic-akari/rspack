import names from "./style.module.css";

import("./async");

function render() {
	const button = document.getElementById("root");
	button.className = names.btn;

	button.innerText = "Hello World";
}
render();
