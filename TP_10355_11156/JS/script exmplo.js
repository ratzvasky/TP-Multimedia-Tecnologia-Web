
var api_key = "yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ"; 




var addImage = function(element) {
  element.style.backgroundImage = "url('https://ipca.pt/wp-content/uploads/2016/07/IPCA-Logo_rgb_v2.png')";
};

var click = function(body) {
  return function() {
    alert(body);
  }
}


var addComments = function(response) {
  console.log(response);
  response.map(function(comment){
    var newComment  = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = comment.email;

    //newComment.addEventListener('click', click.bind(null, comment.body));
    newComment.addEventListener('click', click(comment.body));

    addImage(newComment);
    var comments = document.getElementsByClassName('comments')[0];
    comments.appendChild(newComment);
  });
}

// Function that will make a search using giphy api
document.getElementsByClassName("searchButton").onclick = function searchGIF()
{
  var url = "https://api.giphy.com/v1/gifs/search?" + api_key + "=yykxhG0faSdVIZ1j5zdSZ6l0gxCHbJiQ&q=" + document.getElementsByClassName("searchBar").value; + "&limit=9&offset=0&rating=G&lang=en";

  document.write(url);
}

function getExternal() {
  var url = "https://jsonplaceholder.typicode.com/comments";
 /* $.getJSON(url, function (response) {
    console.log(response);
  });*/

  $.ajax({
    url: url,
    data: {},
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(response) { addComments(response); },
    error: function() { alert('Failed!'); }
    //beforeSend: setHeader
  });
}

var main = function(){
  "use strict";
  getExternal();
};

var html = '<div>sdjfsdfsd</div>';

$(document).ready(main);