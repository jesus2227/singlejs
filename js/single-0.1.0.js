(function($) {

	$.fn.single = function(options) {

		var opts = $.extend({}, $.fn.single.defaults, options);

		return this.each(function(){

			// Get the instance
			var element = $(this);

			// Resize the "data-target" divs
			changeCSS(element);

			// Bind the methods changeCSS and changeIMG to the resize window event
			$(window).bind("resize", function(){  
				changeCSS(element);  
				changeIMG();
			});

			// Bind the method click to the data-link
			$("[data-link]").bind("click", function(event){  
				event.preventDefault();
				goToSection(this, opts);  
			});

		});

	};

	// function to resize all the "data-target" divs
	function changeCSS(element) {

		// Grab the screen resolution
		var windowWidth 	= $(window).width();
		var windowHeight	= $(window).height();
		// Count how many targets the div has
		var targetsSize		= $("[data-target]").size();

		if (targetsSize > 1) {
			windowWidth = windowWidth - 17;
		}

		// Resize the parent div
		$(element).css({
			"width" : windowWidth,
			"height": windowHeight * targetsSize
		});

		// Resize all the targets div
		$(element).children("div[data-target]").each(function(){
			$(this).css({
				"width" : windowWidth,
				"height": windowHeight
			});
		});

	}

	// function to resize the images
	function changeIMG() {
		
	}

	// function to scroll the page to a section
	function goToSection(link, opts) {

		var goingTo 		= $(link).attr('data-link'); // get the data-link value
		var targetPosition 	= $('[data-target="'+goingTo+'"]').position().top; // get the position of the target

		// jQuery Easing animation
		$("html, body").animate({
			scrollTop: targetPosition
		}, {
			duration: opts.speed,
			easing: opts.animation
		});

	}

	// Plugin defaults
	$.fn.single.defaults = {
		speed: 2000,
		animation: "easeOutExpo"
	};

})(jQuery);