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

// Get the frequency stuff
const bufferLength = analyser.frequencyBinCount;
const audioData = new Uint8Array(bufferLength);

// Bar settings
const padding = 1;
const barColor = "#ffffff";
const barWidth = (width / bufferLength) * 2.5;
let barHeight;
let x;


function renderFrame() {
	requestAnimationFrame(renderFrame);
	
	// Get the frequency data from the analyser
	analyser.getByteFrequencyData(audioData);
	
	// Clear and reset the canvas
	canvasContext.fillStyle = "#000000";
	canvasContext.fillRect(0, 0, width, height);
	x = 0;

	// Loop over every bar and draw it
	for (let i = 0; i < bufferLength; i++) {
		
		// Get the height of the bar
		barHeight = audioData[i];
		
		// Draw the bar
		canvasContext.fillStyle = barColor;
		canvasContext.fillRect(x, (height - barHeight), barWidth, barHeight);

		// Update the x for the next bar
		x += barWidth + padding;
	}
}

renderFrame();