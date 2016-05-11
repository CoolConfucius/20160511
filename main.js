$(document).ready(init);

var obj = {};
var data = []; 
for (var i = 0; i < 100; i++) {
  data.push(i.toString()); 
};

obj = {
  all: data
}
var datacursor = 0; 
var page = 1; 
while (datacursor < data.length){
  obj[page.toString()] = [];
  for (var i = 0; i < 10; i++) {
    if (datacursor < data.length) {
      if (page === 1) {
        console.log(data[datacursor]);
        console.log(obj[page.toString()]);
      };
      obj[page.toString()].push(data[datacursor]);
      datacursor++; 
    };
  };
  ++page; 
}


for (var i = 0; i < data.length; i++) {
  var page = 1; 
  obj[page.toString()] = [];
  // data[i]
};


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