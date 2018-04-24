
var api_key = "yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ"; 






// Function that will make a search using giphy api
document.getElementsByClassName("searchButton").onclick = function searchGIF()
{
  var url = "https://api.giphy.com/v1/gifs/search?" + api_key + "=yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ&q=" + document.getElementsByClassName("searchBar").value; + "&limit=9&offset=0&rating=G&lang=en";

  document.write(url);
}

var main = function()
{
  "use strict";
  searchGIF();
};


$(document).ready(main);