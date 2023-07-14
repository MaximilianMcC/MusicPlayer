
function loadSong() {
	
	// Open up a dialog box to select a song
	const fileInput = document.getElementById("fileInput");
	fileInput.click();

	fileInput.addEventListener("change", () => {
		
		// Get the path of the selected song
		const songPath = fileInput.files[0].path;

		// Get the ID3 values
		const tags = NodeID3.read(songPath);

		// Clear all of the values
		// TODO: Maybe add image
		// TODO: Don't reference title and artist and image multiple times. Store in variable
		document.querySelector(".title").innerHTML = "";
		document.querySelector(".artist").innerHTML = "";

		// Create an error in a single message to make everything more organized
		let errorMessage = "";

		// Decode the image to base64 and add it to the DOM
		try {
			const base64Image = Buffer.from(tags.image.imageBuffer).toString("base64");
			document.querySelector("img").src = `data:image/jpeg;base64,${base64Image}`;

		} catch {

			errorMessage += "No album cover supplied. Using default one.\n";
			document.querySelector("img").src = "../assets/img/default-cover.png";
		}

		// Add the title
		if (tags.title !== undefined) document.querySelector(".title").innerHTML = tags.title;
		else {
			
			// Use the filename
			errorMessage += "No title supplied. Using filename\n";
			document.querySelector(".title").innerHTML = path.basename(songPath, path.extname(songPath));
		}

		// Add the artist
		if (tags.artist !== undefined) document.querySelector(".artist").innerHTML = tags.artist;
		else {

			errorMessage += "No artist supplied.\n";
			document.querySelector(".artist").innerHTML = "No artist supplied.";
		}

		// Log the error messages
		console.error(errorMessage);

		// Get, then play the song
		audioPlayer.src = songPath;
		play();
	});

}