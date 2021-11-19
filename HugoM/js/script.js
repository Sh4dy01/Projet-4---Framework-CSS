$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
  $('.materialboxed').materialbox();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.collapsible').collapsible();
  $('.carousel').carousel();
});

$('#textarea1').val('');
  M.textareaAutoResize($('#textarea1'));

$("#secret_btn" ).click(function() {
  var text = $("#secret_text").val();
  var elem = $("#secret_img");
  var site = $("#main");

  site.hide();
  elem.show();
  elem.animate({top: '-=100px'}, "slow");
  elem.animate({left: '+=100px'}, "fast");
  elem.animate({left: '-=100px'}, "slow");
  elem.animate({left: '+=10000px'}, "fast");

  if (text == 'adventure') {

  }
  else {
  }
});

$("#return_btn" ).click(function() {
  var site = $("#main");
  var elem = $("#secret_img");

  site.show();
  elem.hide();
  elem.css("bottom", "0");
  elem.css("left", "0")
});
