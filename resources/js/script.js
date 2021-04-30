$(document).ready(function() {

  /* sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    }, {
      offset: '60px;'
  });

  /* scroll on buttons */
  $('.js--scroll-to-pricing').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-family').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });


  /* animations on scroll */
  $('.js--waypoint-1').waypoint(function(direction) {
    $('.js--waypoint-1').addClass('animate__fadeIn');
  },{
    offset: '50%'
  });

  $('.js--waypoint-2').waypoint(function(direction) {
    $('.js--waypoint-2').addClass('animate__fadeInUp');
  },{
    offset: '50%'
  });

  $('.js--waypoint-3').waypoint(function(direction) {
    $('.js--waypoint-3').addClass('animate__fadeInUp');
  },{
    offset: '50%'
  });

  $('.js--waypoint-4').waypoint(function(direction) {
    $('.js--waypoint-4').addClass('animate__pulse');
  },{
    offset: '50%'
  });


  /* Mobile navigation */
  $("#wrapper").click( function () {
    var nav = $('.js--main-nav');
    nav.slideToggle(200);
    $(".icon").toggleClass("close");
  });

});
