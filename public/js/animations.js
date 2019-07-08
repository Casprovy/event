var animLate = document.querySelector('animLate');
document.body.classList.add('js-loading');
animLate.addEventListener('load', function() {
	document.body.classList.remove('js-loading');
});
