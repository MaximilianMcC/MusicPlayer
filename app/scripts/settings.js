// Check for if the menu is being opened
document.querySelector(".hamburger").addEventListener("click", () => {

	// Toggle the visibility of the div
	const settings = document.querySelector(".settings-panel");
	console.log(settings.classList);

	// Hide the menu
	if (settings.classList.contains("show")) {
		settings.classList.remove("show");
		settings.classList.add("hide");
	}

	// Show the menu
	else if (settings.classList.contains("hide")) {
		settings.classList.remove("hide");
		settings.classList.add("show");
	}
});