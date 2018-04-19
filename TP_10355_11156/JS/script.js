

// get data in other API 
function getExternal() {
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
                  "tags=dogs&format=json&jsoncallback=?";
  $.getJSON(url, function (flickrResponse) {
  // we'll simply print the response to the console // for the time being console.log(flickrResponse);
    console.log(flickrResponse);
    // iterrate response and add for each item one line -- see html
    // .map is different the for each because if you want another array  like  var usaMap = apagaImpares.map(function(arrayCell){ return arrayCell*2; });
    flickrResponse.items.map(function(word) {
        var $new_comment=$("<p>");
        $new_comment.text(word.tags);
        $(".comments").append($new_comment);
    });
  });
}

var main = function(){
  "use strict";

    var list = function(words) {
      words.map(function(word) {
        var $new_comment=$("<p>");
        $new_comment.text(word);
        $(".comments").append($new_comment);
      });
    }

    var add = function() {
      var $new_comment=$("<p>");
      var comment_text=$("input[name=word]").val();
      $new_comment.text(comment_text);
      $(".comments").append($new_comment);
    }

    $("input[type=button]").click(add);

    //list(data);
    getExternal();
};

// if you want delete some propierty
/* 

delete item.contents;//RETORNA TRUE E NÃO APAGA O ARRAY, APENAS A PROPRIEDADE QUE O CHAMAVA

*/


$(document).ready(main);

