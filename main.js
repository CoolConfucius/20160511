$(document).ready(init);

var obj = {};
var data = []; 
for (var i = 0; i < 100; i++) {
  data.push(i.toString()); 
};

obj = {
  all: []
}

function init(){
  load(); 
}

function load(){
  // alert("load!");
  var $text = $("<h2>");
  $text.text("text");
  $('#content').append($text);
  // $('#content').text("text");
  var $table = $("<div>"); 
}