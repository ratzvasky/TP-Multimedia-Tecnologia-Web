const express = require('express');
let GifAPI = require('./server/gifsRoutes');


// Inicializa o caminho das routes
function initialize() 
{
  let api = express();

  api.use('/gifs', GifAPI()); 

  return api;
}

module.exports = {
  initialize: initialize,
};