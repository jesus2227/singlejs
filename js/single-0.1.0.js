(function($) {

	$.fn.single = function() {

		return this.each(function(){

			// Get the instance
			var element = $(this);

			// Resize the "data-target" divs
			changeCSS(element);

			// Bind the method to the resize window event
			$(window).bind("resize", function(){  
				changeCSS(element);  
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

})(jQuery);