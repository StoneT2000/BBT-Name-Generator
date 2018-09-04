$(document).ready(function () {
  $( '.footer_fascade' ).mouseenter(
    function() {
      $('.footer').css('transform','translateY(0px)');
    }
  );
  $('.footer').mouseleave(function() {
      $('.footer').css('transform','translateY(30px)');
    });
});