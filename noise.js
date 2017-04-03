//Check out https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API 

//Check to make sure document is fully loaded
document.addEventListener('DOMContentLoaded', addListen, false);

var audio_context = window.AudioContext || window.webkitAudioContext;

var soundMaker = new audio_context();
var oscillator = soundMaker.createOscillator();
var lf_oscillator = soundMaker.createOscillator();
var lf_amp = soundMaker.createGain();
var off = true;

lf_amp.gain.value = 100;

//Connect low frequency oscillator to gain
lf_oscillator.connect(lf_amp)
//Connect gain to main oscillator
lf_amp.connect(oscillator.frequency);


//Add event listeners
function addListen(){
	var noiseBox = document.getElementById("noiseBox");
	//For use like a theramin
	noiseBox.addEventListener("mousemove", adjustFrequency);
	//To stop
	noiseBox.addEventListener("mousedown", stopTheNoise);
}

//Adjust the frequency of the oscillator based on the mouse's position on the screen
function adjustFrequency(e){
	oscillator.frequency.value = e.clientY * 0.5;
	lf_oscillator.frequency.value = e.clientX-400;
}

//Toggle sound on and off with click
function stopTheNoise(e){
	if(off){
		//Connect to audio output
		oscillator.connect(soundMaker.destination);
	}else{
		//Disconnect from audio output
		oscillator.disconnect(soundMaker.destination);
	}
	off = !off;
}

//Start up the oscillators
oscillator.start();
lf_oscillator.start();

