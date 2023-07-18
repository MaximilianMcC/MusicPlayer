const NodeID3 = require("node-id3");
const path = require("path");


// When the program loads
document.addEventListener("DOMContentLoaded", () => {

	// Update all text areas
	document.querySelectorAll("textarea").forEach(textarea => {
		updateTextarea(textarea);
	});

	// Add all of the keyboard shortcuts
	const shortcutsList = document.querySelector(".keyboard-shortcuts");
	const shortcuts = [
		{
			shortcut: ["Ctrl", "o"],
			description: "Load song"
		},
		{
			shortcut: ["Alt", "F4"],
			description: "Exit"
		},
		{
			shortcut: ["⮕"],
			description: "Skip Forwards"
		},
		{
			shortcut: ["⬅"],
			description: "Skip Backwards"
		}
	]
	shortcuts.forEach(shortcut => {
		
		// Make the HTML
		let shortcutHtml = shortcut["shortcut"].map(key => `<kbd>${key}</kbd>`).join(" + ");
		const html = `<div class="shortcut-item"><p class="shortcut">${shortcutHtml}</p><p>${shortcut["description"]}</p></div>`;

		// Add the shortcut to the DOM
		shortcutsList.innerHTML += html;
	});
});


// Clamp a number between a minimum value and a maximum value
function clamp(value, min, max) {

	return Math.max(min, Math.min(value, max));
}


// Check for if a keyboard shortcut is being pressed
document.addEventListener("keydown", (e) => {

	// ctrl + o
	if (e.ctrlKey && e.key === "o") loadSong();
});




// Make a text area expand on the y as more content is added
function updateTextarea(textarea) {
	textarea.style.height = `${textarea.scrollHeight}px`;
}

document.querySelector("textarea").addEventListener("input", (e) => {
	updateTextarea(e.target)
});