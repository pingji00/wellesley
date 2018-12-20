$(document).ready(function() {
  var realpay = $("#realpay");
  var acost = $("#acost");

  function barprogress01() {
    var scrollTop = $(window).scrollTop();
    var scrollBottom = $(window).scrollTop() + $(window).height();
    realpay.each(function(index, el) {
      var yTopBar = $(this).offset().top;
      var yBottomBar = $(this).height() + yTopBar;
      if (scrollTop < yBottomBar && scrollBottom > yTopBar) {
        $(this).css({"width":"33vw","padding-right":".5em","transition":"all 1s"});
      } else {
        $(this).css({"width":"0","padding-right":"0","transition":"all 1s"});
      }
    });
  }

  function barprogress02() {
    var scrollTop = $(window).scrollTop();
    var scrollBottom = $(window).scrollTop() + $(window).height();
    acost.each(function(index, el) {
      var yTopBar = $(this).offset().top;
      var yBottomBar = $(this).height() + yTopBar;
      if (scrollTop < yBottomBar && scrollBottom > yTopBar) {
        $(this).css({"width":"80vw","padding-right":".5em","transition":"all 1s"});
      } else {
        $(this).css({"width":"0","padding-right":"0","transition":"all 1s"});
      }
    });
  }

  $(document).on('scroll', barprogress01);
  $(document).on('scroll', barprogress02);
});
