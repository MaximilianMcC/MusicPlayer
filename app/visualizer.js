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

// Bar settings
const barColor = "transparent";
const backgroundColor = "#081926";
const barWidth = (width / barCount) + 1;
let barHeight;
let x;

function renderFrame() {
	requestAnimationFrame(renderFrame);
	
	// Get the frequency data from the analyser
	analyser.getByteFrequencyData(audioData);
	
	// Clear and reset the canvas
	// canvasContext.clearRect(0, 0, width, height);
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillRect(0, 0, width, height);
	x = 0;

	// Loop over every bar and draw it
	for (let i = 0; i < barCount; i++) {
		
		// Get the height of the bar and calculate its Y position
		barHeight = audioData[i] * 0.5; // 0.5 makes the things smaller so its not just one huge block
		let y = height - barHeight;

		// Draw the bar
		canvasContext.globalCompositeOperation = "destination-out";
		canvasContext.fillStyle = "rgba(0, 0, 0, 1)";
		canvasContext.fillRect(x, y, barWidth, barHeight);
		canvasContext.globalCompositeOperation = "source-over";

		// Update the x for the next bar
		x += barWidth - 1;
	}
}

renderFrame();