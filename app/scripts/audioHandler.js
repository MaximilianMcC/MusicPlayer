function loadSong() {
	
	// Open up a dialog box to select a song
	const fileInput = document.getElementById("fileInput");
	fileInput.click();

	fileInput.addEventListener("change", () => {
		
		// Get the path of the selected song
		const file = fileInput.files[0];
		const songPath = URL.createObjectURL(file);

		// Load the song
		audioPlayer.src = songPath;
	});

}