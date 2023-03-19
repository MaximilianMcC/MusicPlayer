// const id3 = require("node-id3");

document.querySelector("#generate").addEventListener("click", () => {

    const songLocation = document.querySelector("#song").value;
    const name = document.querySelector("#name").value;
    const artist = document.querySelector("#artist").value;
    const image = document.querySelector("#image").value;

    // Get the song
    const song = Buffer.from("../test.mp3");

    // Generate the ID3 tags using the specified values
    const tags = {
        title: name,
        artist: artist,
        APIC: "../test.jpg"
    }
    if (id3.write(tags, song)) console.log("Saved ID3");
    else console.log("Error while saving ID3");

});