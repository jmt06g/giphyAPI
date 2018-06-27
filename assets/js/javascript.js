
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

$(document).on("click",".btn", function(){

  var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=3RSCCCxAWatg3VcFb5frCs85vo6Wc2iV&q="+$(this).attr("data-name");
  $("#animals").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    for (var i=0; i < response.data.length; i++) {
//adding images to the div
      var image = $("<img>")
      $("#animals").append("<img src=\""+response.data[i].images.original.url+"\">")
    }
console.log(response);

  })

  $(document).on("click", "submit", function(){
    
  }

)
  
  //create a new button when user inputs
  //.val get value
  //add vaulue
  //call function
}


)
})