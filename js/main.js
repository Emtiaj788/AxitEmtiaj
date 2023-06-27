$(document).ready(function () {
  $(window).scroll(function(){
    if ($(this).scrollTop()>70){
      $(".top-header").addClass("sticky");
      $('.scroll_icn').css('display','block');
    }else{
      $(".top-header").removeClass("sticky");
      $('.scroll_icn').css('display','none');
    }
  })

  $('.scroll_icn').on('click',function(){
    $("html,body").animate({
      scrollTop:0
    })

  })
  

  $('.main-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: 874,
  });

  $('#transition-area').owlCarousel({
    dots: true,
    loop: true,
    items: 1,
    margin: 0,
  });

  // $('#transition-area').slick({
  //   // slidesToShow: 4,
  //   // slidesToScroll: 4,
  //   // arrows: false,
  //   // dots: true,
  //   // infinite: false,
  //   // fade: true,
  //   // speed: 4000,

  // });

  $(function () {
    $('.pricing-count span').rCounter({
      duration: 30,
    });
  });
});
