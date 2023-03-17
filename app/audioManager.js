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