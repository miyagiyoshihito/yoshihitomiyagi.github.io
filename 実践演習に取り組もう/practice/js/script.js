$(function(){
    $("#slider").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 2000,
      dots: true,
      fade: true
    });
    $('.faq-title').on('click', function(){
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
    });

