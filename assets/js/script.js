$(document).ready(function(){

  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.navbar ul').toggleClass('showing');
  });

  var aboutFromTop = $("#about").offset().top;
  var blogPreviewFromTop = $('#blog-preview').offset().top;
  var worksFromTop = $('#works').offset().top;
  var connectFromTop = $('#connect').offset().top;

  $(".navbar a").on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(".navbar ul li").find('a.active').removeClass('active');
    $(this).addClass('active');
  });

  $(".about-nav").on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop : aboutFromTop - 150}, 500);
  });

  $(".blog-nav").on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop : blogPreviewFromTop}, 500);
  });

  $(".works-nav").on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop : worksFromTop}, 500);
  });

  $(".connect-nav").on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop : connectFromTop}, 500);
  });




  // $(window).scroll(function() {
  //   var scrollP = $(this).scrollTop();
  //   $('#about').css('top', -scrollP/4);
  //   $('#blog-preview').css('top', -scrollP/3.5);
  //   $('#works').css('top', -scrollP/3);
  //   $('#connect').css('top', -scrollP/2.5);
  // });

  // Animate article's meta when the thumbnail is hovered
  $('.article-preview-thumb').hover(function() {
    $(this).find('.article-preview-meta').animate({top: '0'}, 200);
  }, function() {
    $(this).find('.article-preview-meta').animate({top: '100%'}, 200);
  });

});
