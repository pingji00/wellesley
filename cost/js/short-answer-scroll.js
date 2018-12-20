$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll("p.short-answer-card");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
});

//
//
//
// $(document).ready(function() {
//     // Get media - with autoplay disabled (audio or video)
//     var shortAnswerScroll = $(".short-answer-scroll");
//     var tolerancePixel = 200;
//
//     function shortScroll(){
//         // Get current browser top and bottom
//         var scrollTop = $(window).scrollTop() + tolerancePixel;
//         var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
//
//         shortAnswerScroll.each(function(index, el) {
//             var yTopMedia = $(this).offset().top;
//             var yBottomMedia = $(this).height() + yTopMedia;
//
//             if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
//                 console.log($(this).get(0));
//                 // $(this).get(0).css("opacity", "0.5");
//             } else {
//                 $(this).get(0).css("opacity", "1");
//             }
//         });
//
//         //}
//     }
//     $(document).on('scroll', shortScroll);
// });
