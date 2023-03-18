const fileSystem = require("fs");
const path = require("path");
const id3 = require("node-id3");

// Music directory location
//TODO: Make this editable in settings
const musicPath = "C:\\Users\\max\\Music";


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

        // Get all of the ID3 info
        const filePath = path.join(musicPath, file);
        const id3Information = id3.read(filePath);
        console.log(id3Information.title);
    })
});