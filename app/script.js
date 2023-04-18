// Imports
const path = require("path");
const fileSystem = require("fs");

// All of the apps content tabs
let contentTabs = [];
const contentTabType = {
	MP3: 1,
	VIDEO: 2
};


document.addEventListener("DOMContentLoaded", () => {

	console.log("Hello, World!");

	// Add all of the content tabs
	contentTabs.push({
		type: contentTabType.MP3,
		name: "Local MP3 files"
	});
	contentTabs.push({
		type: contentTabType.VIDEO,
		name: "Lofi Hip-Hop Radio",
		url: "https://www.youtube.com/watch?v=I-SW8x-54Ro"
	});
	contentTabs.push({
		type: contentTabType.VIDEO,
		name: "Star Wars Lofi",
		url: "https://www.youtube.com/watch?v=I-SW8x-54Ro"
	});

	// Generate all of the content tabs
	for (let i = 0; i < contentTabs.length; i++) {

		// Create a new button element
		const button = document.createElement("button");

		// Add the appropriate icon and name
		if (contentTabs[i].type === contentTabType.VIDEO) {
			button.innerHTML = `<i class="fa-brands fa-youtube"></i> ${contentTabs[i].name}`;
		} else {
			button.innerHTML = `<i class="fa-solid fa-music"></i> ${contentTabs[i].name}`;
		}

		// Add an event listener to change the tab
		button.addEventListener("click", () => {
			console.log(i);
		});

		// Append the button to the DOM
		const listItem = document.createElement("li");
		listItem.appendChild(button);
		document.querySelector(".sidebar ul").appendChild(listItem);
	}


});