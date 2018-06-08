
document.getElementsByClassName("addCategoryButton")[0].addEventListener("click", postNewCategory);


// Functions that will post a new category
function postNewCategory() 
{
    let categoryName =  document.getElementsByClassName("categoryName")[0].value;
  
    console.log(categoryName);

    var json = { "descricao": categoryName };
  
    var url = "http://localhost:3000/gifs/categorias/";
  
  
    $.post(url, json, function() { console.log("POST!"); document.location.href = "GenericHTML.html";  }) ; 
  

    
}
