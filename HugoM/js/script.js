$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
  $('.materialboxed').materialbox();
  $('input#input_text, textarea#textarea2').characterCounter();
  $('.collapsible').collapsible();
});

$('#textarea1').val('');
 M.textareaAutoResize($('#textarea1'));
