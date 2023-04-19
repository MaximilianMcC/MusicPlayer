# Music player
A music player thats made in Electron. Designed to play both online music from the internet, and offline files on your local pc.

## Planned Features
- [ ] Play/pause
- [ ] Progress bar thing
- [ ] Volume slider
- [ ] Way to add and remove songs
- [ ] Looping songs
- [ ] Way to get all songs on pc from specified directory
- [x] Ability to listen to songs online from places like YouTube Music
- [ ] Twemoji
- [ ] Ability to download the song from online to MP3
- [ ] Different color themes
- [ ] Playlists
- [ ] Shuffle songs
- [ ] Discord Rich presence with settings to show the song name or not
- [ ] ID3 integration
- [ ] Ambient sounds mode. Stuff like rain, ocean, etc
- [ ] Way to add YouTube live-steams
- [ ] Video player (Depends on how much this program is used)
- [ ] Notification telling you what song has started/repeated
- [ ] Full offline support
- [ ] When you open a MP3 file, it will open in this
- [ ] Way to do the right click "open with" thing on MP3 files

## General ideas
Below is a list of general ideas that I have when I'm making the project.
- Customizable themes where you can put in your own hex code or something.
- Very complex, but could be cool if it works. Something that can suggest other songs to you based off the songs you have in your library.
- Way to share songs and playlists between people who also use the program. Could be a friend system, or a file that you send over.

## Cloning/downloading
If you would like to download and use or edit this music player, you must download the specified NodeJS modules:
| Module name       | What it's purpose is/why                 | Install command                 |
|:-----------------:|:----------------------------------------:|:-------------------------------:|
| Electron          | Makes it a desktop app                   | `npm i electron`                |
| Electron Settings | Adds a way to store settings in Electron | `npm i electron-settings`       |
| Discord RPC       | Adds Discord rich presence               | `npm i discord-rich-presence`   |
| Node ID3          | Support for reading and writing ID3 info | `npm i node-id3`                |