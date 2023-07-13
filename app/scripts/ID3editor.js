
// Check for if the picture has been clicked
document.querySelector("img").addEventListener("click", () => {

	// Open a file dialog to get the image
	const imagePicker = document.querySelector("#imageInput");
	imagePicker.click();

	// Get the image
	imagePicker.addEventListener("change", () => {

		const imagePath = imagePicker.files[0].path;
		setTag("image", imagePath);
	});

});

// Check for if the title has been changed
document.querySelector(".title").addEventListener("change", () => {

	// Get the new text content
	const title = document.querySelector(".title").value;
	setTag("title", title);
});

// Check for if the artist has been changed
document.querySelector(".artist").addEventListener("change", () => {

	// Get the new text content
	const artist = document.querySelector(".artist").value;
	setTag("artist", artist);
});





// Change an element in the ID3 tags of the song
function setTag(tag, value) {

	// Open the audio and extract the ID3 data
	// TODO: Don't use .replace
	const audioPath = audioPlayer.src.replace("file:///", "");
	const audioData = NodeID3.read(audioPath);

	// Update the thing
	audioData[tag] = value;
	NodeID3.write(audioData, audioPath);
}