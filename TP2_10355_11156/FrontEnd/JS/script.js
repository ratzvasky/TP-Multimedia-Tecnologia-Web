
var api_key = "yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ";

document.getElementsByClassName("searchButton")[0].addEventListener("click", searchGIF);

document.getElementsByClassName("refreshButton")[0].addEventListener("click", function () { location.reload(); });



// Function that will make a search using giphy api
function searchGIF() 
{
  var url = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + document.getElementsByClassName("searchBar")[0].value + "&limit=10&offset=0&rating=G&lang=en";
  
  $.getJSON(url, function (response) { addGifs(response); });
}



// Fuction that will request dog gif's
function getTrendingGif() {
  var url = "http://localhost:3000/gifs/gifs/cat/5b184ab6835b9944e823d766";

$.getJSON(url, function (response) { addGifsAPI(response); });
}



// Fuction that will request gif's with a given category
function getCategoryGif(category) {
  var url = "http://localhost:3000/gifs/gifs/cat/" + category;


  $.getJSON(url, function (response) { addGifsAPI(response); });
}


// Fuction that will request 10 random gif's 
function getRandomGif(category) {
  var url = "https://api.giphy.com/v1/gifs/random?api_key=yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ&tag=&rating=G"

  $(".gifShowBox").empty();

  for (i = 0; i < 10; i++) { $.getJSON(url, function (response) { addGif(response); }); }
}



// Function that will add one gif to the page
var addGif = function (response) {
  var newGif = document.createElement('img');
  newGif.src = response.data.images.original.url;

  var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
  gifShowBox.appendChild(newGif);
}


// Function that will show gifs on the page
var addGifsAPI = function (response) {
  console.log(response);

  $(".gifShowBox").empty();
  
  for (let index = 0; index < 7; index++)
  {
    console.log(index);
    var newGif = document.createElement('img');
    newGif.src = response[index].url;

    var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
    gifShowBox.appendChild(newGif);
  }
}


// Function that will show gifs on the page
var addGifsAPIRandom = function (response) {
  console.log(response);

  $(".gifShowBox").empty();

  for (let index = 0; index < 7; index++)
  {
    console.log(index);
    var newGif = document.createElement('img');
    newGif.src = response[Math.floor(Math.random() * response.length) + 0  ].url;

    var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
    gifShowBox.appendChild(newGif);
  }

}


// Function that will show gifs on the page
var addGifs = function (response) {
  console.log(response);

  $(".gifShowBox").empty();

  response.data.map(function (gif) {
    var newGif = document.createElement('img');
    newGif.src = gif.images.original.url;

    var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
    gifShowBox.appendChild(newGif);
  });
}


// Function that will request button names
function getButtonsNames()
{
  var url = "http://localhost:3000/gifs/categorias";

  $.getJSON(url, function (response) { console.log(response);changeButtonsValue(response); });
}


// Functions that will change buttons name
function changeButtonsValue(response)
 {

  for (let index = 0; index < response.length; index++) 
  {
    var $new_button = $("<button>");
    $new_button.attr("onClick", "getCategoryGif('" + response[index]._id + "');"); // getCategoryGif.bind(null, response[index]._id));
    $new_button.text(response[index].descricao);
    $(".gifButtons").append($new_button);
  }

}


/*
// Function that will add new buttons to the gifButtons class
var addButtons = function (response) {
  console.log(response);

  response.map(function (button) {
    var newButton = document.createElement('button');
    newButton.value = button.descricao;

    var gifButtons = document.getElementsByClassName('gifButtons')[0];
    gifButtons.appendChild(newButton);
  });
}
*/

// Fuction that will request all the gif's from the BD
function getAllGifs(category) {
  var url = "http://localhost:3000/gifs/gifs"

  $(".gifShowBox").empty();

  $.getJSON(url, function (response) { addGifsAPIRandom(response); });
}


// Fuction that will run when the document is ready
var main = function ()
 {
  getButtonsNames();

  console.log("Document is ready!");

  getAllGifs();
};


$(document).ready(main);