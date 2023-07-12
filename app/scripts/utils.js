// Clamp a number between a minimum value and a maximum value
function clamp(value, min, max) {

	return Math.max(min, Math.min(value, max));
}


// Check for if a keyboard shortcut is being pressed
document.addEventListener("keydown", function (event) {

	// ctrl + o
	if (event.ctrlKey && event.key === "o") loadSong();
});



// Make the text area expand on the y as more content is added
document.querySelector("textarea").addEventListener("input", (e) => {
	const textarea = e.target;
	textarea.style.height = `${textarea.scrollHeight}px`;
});