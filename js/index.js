var slideIndex = 0;
var extra = "";
showSlides();
if(window.innerWidth < 1200) {
	document.getElementById('slideshow').style.display = "none";
	document.getElementById('slideshow2').style.display = "block";
	extra = "2";
}
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides" + extra);
	var dots = document.getElementsByClassName("dot" + extra);
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}