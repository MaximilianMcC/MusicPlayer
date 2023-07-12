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
		const audioPath = audioPlayer.src.replace("file:///", "");
		const audioData = NodeID3.read(audioPath);
		
		// Update the image
		audioData.image = imagePath;
		NodeID3.write(audioData, audioPath);
	});

});