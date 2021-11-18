$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
  $('.materialboxed').materialbox();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.collapsible').collapsible();
  $('.carousel').carousel();
  $('.scrollspy').scrollSpy();
});


var dropdown = $("#projects-btn");
dropdown.alignment("right");


$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$('#textarea1').val('');
M.textareaAutoResize($('#textarea1'));
