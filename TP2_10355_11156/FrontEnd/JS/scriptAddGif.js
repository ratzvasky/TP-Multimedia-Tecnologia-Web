
document.getElementsByClassName("addGifButton")[0].addEventListener("click", postNewGif);


// Function that will post a new gif
function postNewGif() 
{
  let gifName = document.getElementsByClassName("gifName")[0].value ;
  let gifURL = document.getElementsByClassName("gifURL")[0].value ;
  let gifCategoryID =  document.getElementsByClassName("gifCategory")[0].value;


  var json = { "url": gifURL, "descricao": gifName, "categoriaId": gifCategoryID };

  var url = "http://localhost:3000/gifs/gifs";


  $.post( url, json, function() { console.log("POST!");  }) ; 

  
  document.location.href = "GenericHTML.html";
}


