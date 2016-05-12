$(document).ready(init);

var obj = {};
var data = []; 
var currentpage = 1; 
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
  $('.pagebtn').on("click", pageclick);
  $('#pageinputgo').click(pageinputgoclick);
}

function load(){
  // alert("load!");
  // var $text = $("<h2>");
  // $text.text("text");
  // $('#content').append($text);
  // $('#content').text("text");
  var $table = $("<div>"); 
  $table.addClass("table");
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
    var $page = $("<div>");
    $page.addClass("btn btn-success pagebtn");
    $page.text(i.toString());
    if (i !== 1 && i !== obj.pagesint) {
      $page.hide(); 
    };
    $pages.append($page);
  };
  var $pageinput = $("<input>"); 
  $pageinput.attr("id", "pageinput");
  var $pageinputgo = $("<div>"); 
  $pageinputgo.attr("id", "pageinputgo").addClass("btn btn-success").text("Go");
  $('#content').append($pages, $pageinput, $pageinputgo);
}

function pageclick() {
  var btnnum = $(this).text(); 
  if (btnnum === "1") {
    console.log("First page");
  };
  if (btnnum === obj.pagesint.toString()) {
    console.log("Last page");
  };
  currentpage = btnnum; 
  console.log(currentpage);
  display(); 
}

function pageinputgoclick() {
  var val = $("#pageinput").val(); 
  if (val <= 0 || val > obj.pagesint) {
    console.log("Not a valid input");
    return; 
  };
  currentpage = val; 
  console.log(currentpage);
  display(); 
}

function display() {
  $('.table').remove(); 
  var $table = $("<div>"); 
  $table.addClass("table"); 
  for (var i = 0; i < obj[currentpage.toString()].length; i++) {
    var $item = $("<div>").text(obj[currentpage.toString()][i].toString());
    $table.append($item);
  };
  $('#content').append($table);
}