const NodeID3 = require("node-id3");

// Check for if the picture has been clicked
document.querySelector("img").addEventListener("click", () => {

	// Open a file dialog to get the image
	const imagePicker = document.querySelector("#imageInput");
	imagePicker.click();

	// Get the image
	imagePicker.addEventListener("change", () => {
		const imagePath = imagePicker.files[0].path;

		// Open the audio and extract the ID3 data
		// TODO: Put this in a method
		// TODO: Don't use .replace
		const audioPath = audioPlayer.src.replace("file:///", "");
		const audioData = NodeID3.read(audioPath);
		
		// Update the image
		audioData.image = imagePath;
		NodeID3.write(audioData, audioPath);
	});

});

// Check for if the title has been changed
document.querySelector(".title").addEventListener("change", () => {

	// Get the new text content
	const title = document.querySelector(".title").value;

	// Open the audio and extract the ID3 data
	// TODO: Put this in a method
	const audioPath = audioPlayer.src.replace("file:///", "");
	const audioData = NodeID3.read(audioPath);

	// Update the title
	audioData.title = title;
	NodeID3.write(audioData, audioPath);
});