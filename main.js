$(document).ready(init);

var obj = {};
var data = []; 
for (var i = 0; i < 100; i++) {
  data.push(i.toString()); 
};

obj = {
  pagesint: 1,
  all: data
}
var datacursor = 0; 
var page = 1; 
while (datacursor < data.length){
  obj[page.toString()] = [];
  for (var i = 0; i < 10; i++) {
    if (datacursor < data.length) {   
      obj[page.toString()].push(data[datacursor]);
      datacursor++; 
    };
  };
  page++; 
}
obj.pagesint = page - 1; 



function init(){
  pagination();
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

function pagination(){
  var $pages = $("<div>")
  for (var i = 1; i <= obj.pagesint; i++) {
    $pages.append("<div>").addClass("btn").text(i.toString());
  };
  $('#content').append($pages);
}