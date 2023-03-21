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
        return;
    }

    files.forEach(file => {

        // Check for if the file is an MP3
        if (!file.endsWith(".mp3")) return;

        // Get the ID3 info, and the song URI/location
        const filePath = path.join(musicPath, file);
        const id3Information = id3.read(filePath);

        // Add the song to the list of songs
        songs.push({
            filePath: filePath,
            title: id3Information.title,
            artist: id3Information.artist,
            coverImage: id3Information.image
        });

    })
});

console.log(songs);