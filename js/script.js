(function() {
  // Carousels.
  $(document).ready(function() {
    $('.testimonial-slider').slick({
      autoplay: true,
      arrows: false,
    });

    $('.partner-logos').slick({
      autoplay: true,
      arrows: false,
      slidesToShow: 4
    });

    $('.support-logos').slick({
      autoplay: true,
      arrows: false,
      slidesToShow: 3
    });
  });

  // Photo slides.
  var slider = new IdealImageSlider.Slider({
    selector: '#slider',
    height: 400,
    interval: 2500
  });
  slider.start();
})();
