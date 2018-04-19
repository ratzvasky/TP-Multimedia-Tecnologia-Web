
var addComments = function(response) {
  console.log(response);
  response.map(function(comment){
    var newComment  = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = comment.email;
    $(".comments").append(newComment);
  });
}

function getExternal() {
  var url = "https://jsonplaceholder.typicode.com/comments";
 /* $.getJSON(url, function (response) {
    console.log(response);
  });*/

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments',
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

