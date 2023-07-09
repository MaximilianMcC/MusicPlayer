// Get the canvas information
const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

// Get the audio information
const audioContext = new AudioContext();
const audioSource = audioContext.createMediaElementSource(audioPlayer);
const analyser = audioContext.createAnalyser();

// Add the analyser to the audio source
audioSource.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 256;

// Store all of the frequency things in the song
const barCount = 18;
const audioData = new Uint8Array(barCount);

// Store the previous data so that it can be displayed when the music is paused
const previousAudioData = audioData;

// Bar settings
const barColor = "green";
const backgroundColor = "#081926";
const barWidth = (width / barCount) + 1;
let barHeight;
let x;

function renderFrame() {
	requestAnimationFrame(renderFrame);
	
	// Get the frequency data from the analyser
	analyser.getByteFrequencyData(audioData);
	
	// Check for if the audio is paused, and if it is then get the previous audio data
	if (audioPlayer.paused) audioData = previousAudioData;

	// Clear and reset the canvas
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillRect(0, 0, width, height);
	x = 0;

	// Loop over every bar and draw it
	for (let i = 0; i < barCount; i++) {

		// Get the height of the bar and calculate its Y position
		barHeight = audioData[i] * 0.5; // 0.5 makes the things smaller so its not just one huge block
		let y = height - barHeight;

		// Draw the bar
		canvasContext.fillStyle = barColor;
		canvasContext.fillRect(x, y, barWidth, barHeight);

		// Update the x for the next bar
		x += barWidth - 1;
	}
}

renderFrame();