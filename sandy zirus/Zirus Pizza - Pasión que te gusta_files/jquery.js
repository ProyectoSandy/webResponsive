$(window).load(function() {
		$('#slider').nivoSlider({
			effect: 'random',
			animSpeed: 400,
			pauseTime: 6000,
        	startSlide: 0,
        	directionNav: false,
        	directionNavHide: false,
			controlNav: false, // 1,2,3... navigation
        	controlNavThumbs: false,
			pauseOnHover: true
			});
	});