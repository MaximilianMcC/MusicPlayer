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
// let barCount = Math.floor(analyser.frequencyBinCount / 5);
const barCount = 30;
const audioData = new Uint8Array(barCount);

// Bar settings
const barColorEnd = "105, 184, 240";
const barColorMiddle = "8, 25, 38";
const barWidth = width / barCount;
let barHeight;
let x;

function renderFrame() {
	requestAnimationFrame(renderFrame);
	
	// Get the frequency data from the analyser
	analyser.getByteFrequencyData(audioData);
	
	// Clear and reset the canvas
	canvasContext.clearRect(0, 0, width, height);
	x = 0;

	// Loop over every bar and draw it
	for (let i = 0; i < barCount; i++) {
		
		// Get the height of the bar and calculate its Y position
		barHeight = audioData[i];
		let y = (height - barHeight) / 2;

		// Create a gradient at the ends of the bars
        const gradient = canvasContext.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(${barColorEnd}, 0)`);
		gradient.addColorStop(0.5, `rgba(${barColorMiddle}, 1)`);
		gradient.addColorStop(1, `rgba(${barColorEnd}, 0)`);


		// Draw the bar
		canvasContext.fillStyle = gradient;
		canvasContext.fillRect(x, y, barWidth, barHeight);

		// Update the x for the next bar
		x += barWidth;
	}
}

renderFrame();