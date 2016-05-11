$(document).ready(init);

var obj = {};
var data = []; 
for (var i = 0; i < 100; i++) {
  data.push(i.toString()); 
};

obj = {
  all: data
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
  var page = 1; 
  var index = 0; 
  while(index < data.length && index < page * 10){
    var $item = $("<div>").text(data[index].toString());
    $table.append($item);
    index++; 
  }
  $('#content').append($table);
}