
$(document).ready(function(){
var animals = [
  "Cat",
  "Dog",
  "Bird",
  "Rabbit",
  "Shark",
  "Tiger",
  "Bear",
  "Lion",
  "Fish",
  "Flamingo",
  "Cow"
];
function createButton() {
  for (var i = 0; i < animals.length; i++){
  var button = $("<button>");
  button.attr("class", "btn");//class
  button.attr("data-name", animals[i]);//data
  button.css("margin", "5px");  //style
  button.text(animals[i]);
  $("#all-buttons").append(button)

  }
}
createButton();

$("#all-buttons").on("click", function(){

  var queryURL ="";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  //here i think i use the api info and call the query?
}


)
})