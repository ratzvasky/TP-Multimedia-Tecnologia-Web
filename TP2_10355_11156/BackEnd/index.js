// Inicialização de pacotes
const http = require('http');
const express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');



const hostname = '127.0.0.1'
const port = 3000;

var aplicacao = express();

aplicacao.use(cors()); // faz com que use o middleware cors


aplicacao.use(router.initialize());


// falta configuração do moongose


const server = http.Server(aplicacao);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});