$(document).ready(function () {
  console.log("document loaded")
  //$(".footer").mouseenter(console.log("enter"))
  $( '.footer_fascade' ).mouseenter(
    function() {
      $('.footer').css('transform','translateY(0px)');
    }
  );
  $('.footer').mouseleave(function() {
      $('.footer').css('transform','translateY(30px)');
    });
});