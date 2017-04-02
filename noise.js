//Check out https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API 

//Check to make sure document is fully loaded
document.addEventListener('DOMContentLoaded', addListen, false);

var audio_context = window.AudioContext || window.webkitAudioContext;

var soundMaker = new audio_context();
var oscillator = soundMaker.createOscillator();

//Connect to audio output
oscillator.connect(soundMaker.destination);

//Add event listeners
function addListen(){
	var noiseBox = document.getElementById("noiseBox");
	noiseBox.addEventListener("mousemove", adjustFrequency);
}

//Adjust the frequency of the oscillator based on the mouse's position on the screen
function adjustFrequency(e){
	oscillator.frequency.value = e.clientY;
}

//Start the oscillator
oscillator.start();
