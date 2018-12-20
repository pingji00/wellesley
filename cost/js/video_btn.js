var joy_video = document.getElementById('joy');
var joy_btn = document.getElementById("joy_btn");

joy_btn.addEventListener("click", toggleJoy);

function toggleJoy() {
    if (joy_video.paused) {
        joy_video.play();
        joy_btn.innerHTML = "&#9612;&#9612;";
        joy_btn.style.fontSize = ".6rem";
    }
    else  {
        joy_video.pause(); 
        joy_btn.innerHTML = "&#9658;";
        joy_btn.style.fontSize = "1rem";
    }
};




var andy_video = document.getElementById('andy');
var andy_btn = document.getElementById("andy_btn");

andy_btn.addEventListener("click", toggleAndy);

function toggleAndy() {
    if (andy_video.paused) {
        andy_video.play();
        andy_btn.innerHTML = "❙❙";
        andy_btn.style.paddingLeft = "0";
    }
    else  {
        andy_video.pause(); 
        andy_btn.innerHTML = "►";
        andy_btn.style.paddingLeft = ".23em";
    }
};