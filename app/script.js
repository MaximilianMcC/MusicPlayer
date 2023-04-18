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
	//TODO: Make a way to do this in settings
	contentTabs.push({
		type: contentTabType.MP3,
		name: "Local MP3 files"
	});
	contentTabs.push({
		type: contentTabType.VIDEO,
		name: "Lofi Hip-Hop Radio",
		url: "https://www.youtube.com/watch?v=jfKfPfyJRdk"
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

			// Switch the content tab
			setContentTab(contentTabs[i]);
		});

		// Append the button to the DOM
		const listItem = document.createElement("li");
		listItem.appendChild(button);
		document.querySelector(".sidebar ul").appendChild(listItem);
	}


});


function setContentTab(contentTab) {
	console.log("\nChanged the content tab to " + contentTab.name);

	// Check for if the content type is a youtube video or local MP3 files
	if (contentTab.type === contentTabType.VIDEO) {

		// Generate the YouTube video URL
		const videoUrl = contentTab.url;
		const videoId = (/[^v=]*$/).exec(videoUrl)[0];
		const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1`;

		// Generate the video embed
		const embed = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;

		// Add the video to the DOM
		document.querySelector(".content-tab").innerHTML = embed;

	} else if (contentTab.type === contentTabType.MP3) {

		//TODO: Get a list of all songs



		document.querySelector(".content-tab").innerHTML = "";
	}

	
}