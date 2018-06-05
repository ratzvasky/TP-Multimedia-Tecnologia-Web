// Inicialização de pacotes
const http = require('http');
const express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');



const hostname = '127.0.0.1'
const port = 3000;

var aplicacao = express();

aplicacao.use(cors()); // faz com que use o middleware cors



// Faz a ligação as routes da nossa aplicação
aplicacao.use(router.initialize());


// Conexão do mongoose
var config = { db: 'mongodb://localhost/dbWeb' };
mongoose.connect(config.db);

const server = http.Server(aplicacao);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});