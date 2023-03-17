const musicPlayer = document.querySelector("audio");
const progressBar = document.querySelector("#progressBar");




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





// Update the progress bar as the song plays
musicPlayer.addEventListener("timeupdate", () => {

    // Find out how much of the bar should be filled
    const currentTime = musicPlayer.currentTime;
    const totalDuration = musicPlayer.duration;
    const progressPercentage = (currentTime / totalDuration) * 1000;

    // Update the progress bar
    progressBar.value = progressPercentage;
});





// Update the progress bar when it's modified
progressBar.addEventListener("input", () => {

    // Convert the percentage into time in seconds
    const totalDuration = musicPlayer.duration;
    const newTime = (progressBar.value / 1000) * totalDuration;

    // Check for if it's ended. If it has then play it again
    if (musicPlayer.ended) musicPlayer.play();

    // Update the audio time
    musicPlayer.currentTime = newTime;
});