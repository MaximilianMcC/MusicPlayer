// Check for if a key is pressed
document.addEventListener("keydown", (e) => {

    // Check for what key is pressed
    //TODO: Make this customizable in settings
    switch (e.key) {

        case " ":
            // Play/pause using space
            playPauseButton.click();
            break;
        
        case "ArrowRight":
            //TODO: Skip 10 seconds ahead in the song
            break;
        
        case "ArrowLeft":
            //TODO: Go back 10 seconds in the song
            break;
        
        
    }

});