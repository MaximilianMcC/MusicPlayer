class MusicPlayer {

    static instance = null;

    #audio = document.querySelector("audio");
    #playing = false;



    // Music player singleton
    static getInstance() {
        
        // If there is not an instance, create one
        if (!MusicPlayer.instance) MusicPlayer.instance = new MusicPlayer();
        return MusicPlayer.instance;
    }


    // Play music
    static play() {

        // Get the play/pause button
        const button = document.querySelector("#playPauseButton");

        // Toggle the play state
        this.playing = !this.playing;

        // Check for if the audio is playing, or is paused
        if (playing) {

            button.innerHTML = `<i class="fa-solid fa-pause"></i>`
            this.audio.play();
        }
        else {
            
            button.innerHTML = `<i class="fa-solid fa-play"></i>`
            this.audio.pause();
        }


    }
}

// Add the music player class
export default MusicPlayer;