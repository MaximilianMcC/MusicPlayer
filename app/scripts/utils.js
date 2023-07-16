const NodeID3 = require("node-id3");
const path = require("path");


// When the program loads
document.addEventListener("DOMContentLoaded", () => {

	// Update all text areas
	document.querySelectorAll("textarea").forEach(textarea => {
		updateTextarea(textarea);
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