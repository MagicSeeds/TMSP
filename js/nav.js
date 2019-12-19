var disappear = document.getElementsByClassName("disapper");
if(window.innerWidth < 601) {
	for(var i = 0; i < 7; i++) {
		disappear[i].style.display = "none";
	}
	document.getElementById('topnav').style.display = "block";
}
function myFunction() {
	if(disappear[2].style.display == "block") {
		for(var i = 0; i < 7; i++) {
			disappear[i].style.display = "none";
		}
	} else {
		for(var i = 1; i < 7; i++) {
			disappear[i].style.display = "block";
		}
	}
}