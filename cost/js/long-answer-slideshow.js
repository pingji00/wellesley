console.log("Hello world!");
$(document).ready(function(){
  $('.long-point-cards').slick({
    dots: true,
    centerMode: true,
    centerPadding: '50px',
    infinite: true,
    // cssEase: 'linear',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          // swipe: true;
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrow: false
          // swipe: true;
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
