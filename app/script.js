const audioPlayer = document.getElementById("musicPlayer");
audioPlayer.src = "../assets/test.mp3";




// When the play/pause button is pressed
const playPauseButton = document.getElementById("playPauseButton");
playPauseButton.addEventListener("click", (event) => {

	// Play/pause the audio
	if (audioPlayer.paused) {

		playPauseButton.querySelector("svg path").setAttribute("d", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z");
		audioPlayer.play();
	}
	else {
		playPauseButton.querySelector("svg path").setAttribute("d", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z");
		audioPlayer.pause();
	}

});


// Update the progress bar as the song plays
const progressBar = document.getElementById("progressBar");
audioPlayer.addEventListener("timeupdate", () => {

	// Find out how much of the bar should be filled
	const currentTime = audioPlayer.currentTime;
	const totalDuration = audioPlayer.duration;
	const progressPercentage = (currentTime / totalDuration) * 1000;

	// Update the progress bar
	progressBar.value = progressPercentage;
});

// Update the progress bar when it's changed by the user
progressBar.addEventListener("input", () => {

    // Convert the new percentage into time in seconds
    const totalDuration = musicPlayer.duration;
    const newTime = (progressBar.value / 1000) * totalDuration;

    // Check for if the song has ended. If it has then play it again
    if (musicPlayer.ended) musicPlayer.play();

    // Update the audio time
    musicPlayer.currentTime = newTime;
});