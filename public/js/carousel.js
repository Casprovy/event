document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, {
		duration: 100,
		dist: -50,
		numVisible: 12,
		shift: 20,
		indicators: true
	});

	// var instance = M.Carousel.getInstance('.carousel');
	// instance.next()
});
