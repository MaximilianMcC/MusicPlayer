function loadSong() {
	
	// Open up a dialog box to select a song
	const fileInput = document.getElementById("fileInput");
	fileInput.click();

	fileInput.addEventListener("change", () => {
		
		// Get the path of the selected song
		const songPath = fileInput.files[0].path;

		// Load the song
		audioPlayer.src = songPath;
		play();
	});

}