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
	//Allow div to be clickable
	noiseBox.setAttribute("tabindex",0)
	//For use like a theramin
	noiseBox.addEventListener("mousemove", adjustFrequency);
	//For use like a keyboard
	noiseBox.addEventListener("keydown", keyboardFrequency);
}

//Adjust the frequency of the oscillator based on the mouse's position on the screen
function adjustFrequency(e){
	oscillator.frequency.value = e.clientY;
}

//Adjust frequency with keyboard press
function keyboardFrequency(e){
	if(e.key == "z"){
		//c4 note
		oscillator.frequency.value = 261.63;
	} else if (e.key == "x"){
		//d4 note
		oscillator.frequency.value = 293.66;
	} else if (e.key == "c"){
		//e4 note
		oscillator.frequency.value = 329.63;
	} else if (e.key == "v"){
		//f4 note
		oscillator.frequency.value = 349.23;
	}

}

//Start the oscillator
oscillator.start();
