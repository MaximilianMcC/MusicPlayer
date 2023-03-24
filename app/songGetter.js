const fileSystem = require("fs");
const path = require("path");
const id3 = require("node-id3");

// Music directory location
//TODO: Make this editable in settings
const musicPath = "C:\\Users\\max\\Music";
const songs = [];

// Get all of the files in the music directory
fileSystem.readdir(musicPath, (error, files) => {

    // Check for errors
    if (error) {
        throw error;
    }

    files.forEach(file => {

        // Check for if the file is an MP3
        if (!file.endsWith(".mp3")) return;

        // Get the ID3 info, and the song URI/location
        const filePath = path.join(musicPath, file);
        const id3Information = id3.read(filePath);

        // Add the song to the list of songs
        songs.push({
            fileName: file.replace(".mp3", ""),
            filePath: filePath,
            title: id3Information.title,
            artist: id3Information.artist,
            coverImage: id3Information.image
        });

    })
});

console.log(songs);




function loadSong(song) {
    
    // Load, then play the song
    const musicPlayer = document.querySelector("audio");
    musicPlayer.src = song.filePath;
    musicPlayer.play();


    // Change the title, and app title
    let title = song.fileName;
    if (song.title != undefined) title = song.title;
    document.querySelector("#title").innerHTML = title;
    document.querySelector("title").innerHTML = "Music Player - " + title;

    // Change the artist
    let artist = "No artist specified";
    if (song.artist != undefined) artist = song.artist;
    document.querySelector("#artist").innerHTML = artist;

    // Convert the cover image to base64 so it can be added to the DOM
    //TODO: Could possibly get the first image result for the filename instead of showing the missing image
    let image = "../assets/img/missing.png";
    if (song.coverImage != undefined) image = `data:image/jpeg;base64,` + Buffer.from(song.coverImage.imageBuffer).toString("base64");
    document.querySelectorAll("#coverImage").forEach(currentImage => {
        currentImage.src = image;
    });
}