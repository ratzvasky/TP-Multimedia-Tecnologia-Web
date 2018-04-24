var api_key = "yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ"; 


document.getElementsByClassName("searchButton")[0].addEventListener("click",searchGIF);



// Function that will make a search using giphy api
 function searchGIF()
{
  var url = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + document.getElementsByClassName("searchBar")[0].value + "&limit=9&offset=0&rating=G&lang=en";

  console.log(url); // debug

  $.getJSON(url, function(response) { addGifs(response); });

}

// Function that will show gifs on the page
var addGifs = function(response)
{
console.log(response);

response.data.map(function(gif){
  var newGif  = document.createElement('div');
  newGif.classList.add('gif');
  newGif.style.backgroundImage = "url('" + gif.embed_url + "')";


  var gifShowBox = document.getElementsByClassName('gifShowBox')[0];
  gifShowBox.appendChild(newGif);
});
}



$(document).ready( function() { console.log( "Document is ready!" ); });