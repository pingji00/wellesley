var joy = document.getElementById('joy');
var andy = document.getElementById('andy');

joy.ontimeupdate = function() {joytalk()};
andy.ontimeupdate = function() {andytalk()};

function joytalk() {
    if (joy.currentTime > 0 ) {
        document.getElementById('joy_word').innerHTML = "<span>100%</span>";
    } 
    if (joy.currentTime > 6 ) {
        document.getElementById('joy_word').innerHTML = "";
    } 
    if (joy.currentTime > 9 ) {
        document.getElementById('joy_word').innerHTML = "<span>$70 million</span><br>Need-based financial aid";
    } 
    if (joy.currentTime > 16 ) {
        document.getElementById('joy_word').innerHTML = "";
    } 
    if (joy.currentTime > 19) {
		document.getElementById('joy_word').innerHTML = "<span>$47,000</span><br>Average annual grant";
	}
    if (joy.currentTime > 25 ) {
        document.getElementById('joy_word').innerHTML = "";
    } 
    if (joy.currentTime > 42) {
		document.getElementById('joy_word').innerHTML = "Loan debt well below the national average";
	}
    if (joy.currentTime > 45 ) {
        document.getElementById('joy_word').innerHTML = "";
    } 
}

function andytalk() {
    if (andy.currentTime > 19.1) {
        document.getElementById('andy_word').innerHTML = "<span>Challenged and supported</span>";
    } 
    if (andy.currentTime > 23.51){
        document.getElementById('andy_word').innerHTML = "<span>Horizons expanded</span>";
    }
    if (andy.currentTime > 30.2){
        document.getElementById('andy_word').innerHTML = "<span>Award-winning career education center</span>";
    }
}