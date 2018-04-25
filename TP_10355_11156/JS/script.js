
var api_key = "yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ";

document.getElementsByClassName("searchButton")[0].addEventListener("click", searchGIF);

document.getElementsByClassName("trendingButton")[0].addEventListener("click", getTrendingGif);

document.getElementsByClassName("sportsButton")[0].addEventListener("click", function () { getCategoryGif("sports"); });

document.getElementsByClassName("funnyButton")[0].addEventListener("click", function () { getCategoryGif("funny"); });

document.getElementsByClassName("refreshButton")[0].addEventListener("click", function () { location.reload(); });


// Function that will make a search using giphy api
function searchGIF() {
  var url = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + document.getElementsByClassName("searchBar")[0].value + "&limit=12&offset=0&rating=G&lang=en";

  console.log(url); // debug

  $.getJSON(url, function (response) { addGifs(response); });
}



// Fuction that will request 12 trending  gif's
function getTrendingGif() {
  var url = "https://api.giphy.com/v1/gifs/trending?api_key=" + api_key + "&limit=12&rating=G";

  $.getJSON(url, function (response) { addGifs(response); });
}



// Fuction that will request 12 gif's with a given category
function getCategoryGif(category) {
  var url = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + category + "&limit=12&offset=0&rating=G&lang=en";

  $.getJSON(url, function (response) { addGifs(response); });
}


// Fuction that will request 12 random gif's 
function getRandomGif(category) {
  var url = "https://api.giphy.com/v1/gifs/random?api_key=yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ&tag=&rating=G"

  $(".gifShowBox").empty();

  for (i = 0; i < 12; i++) { $.getJSON(url, function (response) { addGif(response); }); }
}



// Function that will add one gif to the page
var addGif = function (response) {
  var newGif = document.createElement('img');
  newGif.src = response.data.images.original.url;

  var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
  gifShowBox.appendChild(newGif);
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


// Fuction that will run when the document is ready
var main = function () {
  console.log("Document is ready!");
  getRandomGif();
};


$(document).ready(main);