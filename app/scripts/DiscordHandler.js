const discord = require("discord-rpc");

const rpcEnabled = true;
let currentStatus = {};

const clientId = "1130369366341455872";
const rpc = new discord.Client({ transport: "ipc" });
discord.register(clientId);

// Set the song of the rich presence
async function setSongRichPresence(songName) {

	if (rpcEnabled === false || rpc == false) return;

	// Get the song title
	let info = "Listening to music";
	if (songName) info = ("Listening to " + songName);

	// Set the activity
	currentStatus = {
		details: info,
		largeImageKey: "walter_white"
	};

	rpc.setActivity(currentStatus);
	console.log(currentStatus);
}


// When the rich presence client loads
rpc.on("ready", async () => {

	setSongRichPresence();
	console.log("RPC started");
});


// Login/start the client
rpc.login({ clientId }).catch(error => console.error(error));