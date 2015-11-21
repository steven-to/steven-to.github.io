$(document).ready(function(){

  var headerHeight;

  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.navbar ul').toggleClass('showing');
  });

  // Get the offset from the top of each section.
  var aboutFromTop = $("#about").offset().top;
  var blogPreviewFromTop = $('#blog-preview').offset().top;
  var worksFromTop = $('#works').offset().top;
  var connectFromTop = $('#connect').offset().top;

  // Find if any 'a' child has the class of 'active' and remove it, then add the 'active' class to the current 'a' tag.
  // $(".navbar a").on('click', function(event) {
  //   event.preventDefault();
  //   /* Act on the event */
  //   $(".navbar ul li").find('a.active').removeClass('active');
  //   $(this).addClass('active');
  // });

  // $(window).scroll(function() {
  //   var scrollP = $(this).scrollTop();
  //   $('#about').css('top', -scrollP/4);
  //   $('#blog-preview').css('top', -scrollP/3.5);
  //   $('#works').css('top', -scrollP/3);
  //   $('#connect').css('top', -scrollP/2.5);
  // });

  // Animate article's meta when the thumbnail is hovered
  $('.article-preview-thumb').hover(function() {
    $(this).find('.article-preview-meta').animate({top: '0'}, 150);
  }, function() {
    $(this).find('.article-preview-meta').animate({top: '100%'}, 150);
  });


  if ( $(window).width() > 768) {
    headerHeight = 0;
  } else {
    headerHeight = 60;
  }



  $(".about-nav").on('click', function(event) {
    event.preventDefault();
    $('html body').animate({scrollTop : aboutFromTop - (headerHeight + 200)}, 500);
  });

  $(".blog-nav").on('click', function(event) {
    event.preventDefault();
    $('html body').animate({scrollTop : blogPreviewFromTop - headerHeight}, 500);
  });

  $(".works-nav").on('click', function(event) {
    event.preventDefault();
    $('html body').animate({scrollTop : worksFromTop - headerHeight}, 500);
  });

  $(".connect-nav").on('click', function(event) {
    event.preventDefault();
    $('html body').animate({scrollTop : connectFromTop - headerHeight}, 500);
  });

});
