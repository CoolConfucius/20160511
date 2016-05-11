$(document).ready(init);

var obj = {};

obj = {
  all: []; 
}

function init(){
  load(); 
}

function load(){
  alert("load!");
  var $text = $("h2").text("H2 text");
  $('#content').append($text);
}