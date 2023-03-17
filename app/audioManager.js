const musicPlayer = document.querySelector("audio");


// Check for if the music needs to be played or paused
const playPauseButton = document.querySelector("#playPauseButton");
let playing = false;

playPauseButton.addEventListener("click", () => {

    // Toggle the button
    playing = !playing;

    // Check for if the audio is playing, or is paused
    if (playing) {

        playPauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
        musicPlayer.play();
    }
    else {
        
        playPauseButton.innerHTML = `<i class="fa-solid fa-play"></i>`
        musicPlayer.pause();
    }

});





// Update the progress bar
musicPlayer.addEventListener("timeupdate", () => {

    // Find out how much of the bar should be filled
    const currentTime = musicPlayer.currentTime;
    const totalDuration = musicPlayer.duration;
    const progressPercentage = (currentTime / totalDuration) * 1000;

    // Update the progress bar
    document.querySelector("#progressBar").value = progressPercentage;
});





