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
  var elem1 = $("#secret1_img");
  var elem2 = $("#secret2_img");
  var site = $("#main");

  site.hide();
  elem1.show();
  elem2.show();

  elem1.animate({top: '-=100px'}, "slow");
  elem1.animate({left: '+=100px'}, "fast");
  elem1.animate({left: '-=100px'}, "slow");
  elem1.animate({left: '+=10000px'}, "fast");

  if (text == 'adventure') {

  }
  else {
  }
});

$("#return_btn" ).click(function() {
  var site = $("#main");
  var elem1 = $("#secret_img");

  site.show();
  elem1.hide();
  elem1.css("bottom", "0");
  elem1.css("left", "0")
});
