$(document).ready(function(){

  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.navbar ul').toggleClass('showing');
  });

  var aboutFromTop = $('#about').offset().top;

  $(window).scroll(function() {
    var scrollP = $(this).scrollTop();
    $('#about').css('top', -scrollP/2);
    $('#blog-preview').css('top', -scrollP/2);
  });

});
