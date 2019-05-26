window.onload = function() {
	document.getElementById('email-form').addEventListener('submit', function(event) {
		event.preventDefault();
		emailjs.sendForm('sendgrid', 'seeds_send', this);
		document.getElementById('email-form').reset();
		document.getElementById('contact-h1').innerHTML = "Sent";
		document.getElementById('contact-h1').style.color = "green";
		setTimeout(function() {
			document.getElementById('contact-h1').innerHTML = "Contact Us";
			document.getElementById('contact-h1').style.color = "black";
		}, 1800);
	});
}