
function loadSong() {
	
	// Open up a dialog box to select a song
	const fileInput = document.getElementById("fileInput");
	fileInput.click();

	fileInput.addEventListener("change", () => {
		
		// Get the path of the selected song
		const songPath = fileInput.files[0].path;

		// Get the ID3 values
		const tags = NodeID3.read(songPath);
		console.log(tags.image);

		// Decode the image to base64 and add it to the DOM
		const base64Image = Buffer.from(tags.image.imageBuffer).toString("base64");
		document.querySelector("img").src = `data:image/jpeg;base64,${base64Image}`;


		// Get, then play the song
		audioPlayer.src = songPath;
		play();
	});

}