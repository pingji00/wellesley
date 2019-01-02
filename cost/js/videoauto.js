$(document).ready(function() {

  // Get media - with autoplay disabled (audio or video)
  var media = $("video").not("[autoplay='autoplay']");
  var tolerancePixelVideo = 200;

  // Get shortAnswerScroll - fade in/out lines effect
  var shortAnswerScroll = $(".short-answer-scroll");
  var midAnswerScroll = $(".mid-answer-scroll");
  // var number = $('#number');
 
  // console.log(midAnswerScrollNumber);

  var tolerancePixelScroll = 250;

  function scrollInteract(){

    // Get current browser top and bottom
    var scrollTopVideo = $(window).scrollTop() + tolerancePixelVideo;
    var scrollBottomVideo = $(window).scrollTop() + $(window).height() - tolerancePixelVideo;


    media.each(function(index, el) {
      var yTopMedia = $(this).offset().top;
      var yBottomMedia = $(this).height() + yTopMedia;

      if(scrollTopVideo < yBottomMedia && scrollBottomVideo > yTopMedia){
          $(this).get(0).play();
      } else {
          $(this).get(0).pause();
      }
    });

    // Get current browser top and bottom
    var scrollTopShort = $(window).scrollTop() + tolerancePixelScroll;
    var scrollBottomShort = $(window).scrollTop() + $(window).height() - tolerancePixelScroll;

    shortAnswerScroll.each(function(index, el) {
      var yTopMedia = $(this).offset().top;
      var yBottomMedia = $(this).height() + yTopMedia;

      if(scrollTopShort < yBottomMedia && scrollBottomShort > yTopMedia){
        $(this).css({"opacity": "1", "transform:": "scale(0.8)", "transition": "all .3s ease-out"});
      } else {
        $(this).css({"opacity": ".2", "transform:": "scale(1)", "transition": "all .3s ease-out"});
      }
    });

    midAnswerScroll.each(function(index, el) {
      var yTopMedia = $(this).offset().top;
      var yBottomMedia = $(this).height() + yTopMedia;

      if(scrollTopShort < yBottomMedia && scrollBottomShort > yTopMedia){
        $(this).css({"opacity": "1", "transform:": "scale(0.8)", "transition": "all .3s ease-out"});
      } else {
        $(this).css({"opacity": ".2", "transform:": "scale(1)", "transition": "all .3s ease-out"});
      }
      // if(scrollTopShort < yBottomMedia && scrollBottomShort > yTopMedia){
      //   number.css({"opacity": "1",  "transition": "all .3s ease-out"});
      // } else {
      //   number.css({"opacity": "0",  "transition": "all .3s ease-out"});
      // }
    });




  }

  $(document).on('scroll', scrollInteract);


});
