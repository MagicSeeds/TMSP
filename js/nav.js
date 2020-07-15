var modal = document.getElementById('modal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
TimeMe.initialize({
    currentPageName: "home-page",
    idleTimeoutInSeconds: 30
});
TimeMe.startTimer("home-page");
TimeMe.callAfterTimeElapsedInSeconds(16, function(){
	modal.style.display = "block";
});
var disappear = document.getElementsByClassName("disapper");
if(window.innerWidth < 601) {
	for(var i = 0; i < 8; i++) {
		disappear[i].style.display = "none";
	}
	document.getElementById('topnav').style.display = "block";
}
function myFunction() {
	if(disappear[2].style.display == "block") {
		for(var i = 0; i < 8; i++) {
			disappear[i].style.display = "none";
		}
	} else {
		for(var i = 1; i < 8; i++) {
			disappear[i].style.display = "block";
		}
	}
}