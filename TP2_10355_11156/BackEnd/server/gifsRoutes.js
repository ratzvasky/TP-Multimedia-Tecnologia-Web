 /*
  * Diversas routes do projecto
  * 
  */
 
  
const express = require('express');
const Gifs = require('../data/gifs');
const Categorias = require('../data/Categorias');
const bodyParser = require('body-parser');


function Router() {
  let router = express();

  // Aumenta o limite do request body size  e o tipo de biblioteca para o parsing
  router.use(bodyParser.json({ limit: '100mb' }));
  router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));


  // Pede todos os gifs
  router.route('/gifs')
    .get(function (req, res, next) {
      console.log('Get all gifs.');
      Gifs.findAll()
        .then((gifs) => {
          res.send(gifs);
          next();
        })
        .catch((err) => {
          next();
        });
    })

    // Envia um gif
    .post(function (req, res, next) {
      console.log('Faz um pedido Post de um gif');
      let body = req.body;
      console.log(req.body);
      Gifs.create(body)
        .then(function () {
          console.log(body);
          console.log('Post efectuado com sucesso!');
          res.status(200);
          res.send(body);
          next();
        })

        .catch((err) => {
          console.log('Erro no pedido Post!');
          err.status = err.status || 500;
          res.status(401).send('O post não correu bem!'); // Unauthorized
          next();
        });
    });



  // Redefine uma nova route e faz um pedido Get pelo ID do gif
  router.route('/gifs/cat/:categoriaId')
    // Pede todos os gifs com o seguinte id
    .get(function (req, res, next) 
    {
      let categoriaId = req.params.categoriaId;
      console.log('Get todos os gifs com o id:'+ categoriaId);

      Gifs.findAllId(categoriaId)
        .then((gifs) => 
        {
          res.send(gifs);
          next();
        })
        .catch((err) => 
        {
          next();
        });
    })  

    
  // Redefine uma nova route e faz um pedido Get pelo ID do gif
  router.route('/gifs/:gifId')
    .get(function (req, res, next) {
      console.log('Gif com o Gif ID');
      let gifId = req.params.gifId;
      Gifs.findById(gifId)
        .then((gif) => {
          res.status(200);
          res.send(gif);
          next();
        })

        .catch((err) => {
          res.status(404); // Not found
          next();
        });
    })

    // Update a um gif pelo ID 
    .put(function (req, res, next) {
      console.log('Put de um gif pelo ID!');
      let gifId = req.params.gifId;
      let body = req.body;

      Gifs.update(gifId, body)
        .then((gif) => {
          res.status(200);
          res.send(gif);
          next();
        })
        .catch((err) => {
          res.status(404); // Not found
          next();
        });
    })

    // Apaga um Gif dado um ID
    .delete(function (req, res, next) {
      console.log('Remove de um Gif pelo ID');
      let gifId = req.params.gifId;
      Gifs.removeById(gifId)
        .then(() => {
          console.log('Gif Removido com sucesso!');
          res.status(200);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    });


  /*
  *  Routes para categorias
  */


  // Pede todos os categorias
  router.route('/categorias')
    .get(function (req, res, next) {
      console.log('Get todas as categorias.');
      Categorias.findAll()
        .then((categorias) => {
          res.send(categorias);
          next();
        })
        .catch((err) => {
          next();
        });
    })

    // Envia uma categoria
    .post(function (req, res, next) {
      console.log('Faz um pedido Post de uma categoria');
      let body = req.body;
      Categorias.create(body)
        .then(function () {
          console.log(body);
          console.log('Post efectuado com sucesso!');
          res.status(200);
          res.send(body);
          next();
        })

        .catch((err) => {
          console.log('Erro no pedido Post!');
          err.status = err.status || 500;
          res.status(401).send('O post não correu bem!'); // Unauthorized
          next();
        });
    });

  // Redefine uma nova route e faz um pedido Get pelo ID da categoria
  router.route('/categorias/:categoriaId')
    .get(function (req, res, next) {
      console.log('Pede uma categoria pelo ID');
      let categoriaId = req.params.categoriaId;
      console.log(categoriaId);
      Categorias.findById(categoriaId)
        .then((categorias) => {
          res.status(200);
          res.send(categorias);
          next();
        })

        .catch((err) => {
          res.status(404); // Not found
          next();
        });
    })

    // Update a uma categoria pelo ID 
    .put(function (req, res, next) {
      console.log('Put de um categoria pelo ID!');
      let categoriaId = req.params.categoriaId;
      let body = req.body;

      console.log(body);

      Categorias.update(categoriaId, body)
        .then((categoria) => {
          res.status(200);
          res.send(categoria);
          next();
        })
        .catch((err) => {
          res.status(404); // Not found
          next();
        });
    })

    // Apaga uma categoria dado um ID
    .delete(function (req, res, next) {
      console.log('Remove de uma categoria pelo ID');
      let categoriaId = req.params.categoriaId;
      Categorias.removeById(categoriaId)
        .then(() => {
          console.log('Categoria removida com sucesso!');
          res.status(200);
          next();
        })
        .catch((err) => {
          res.status(404);
          next();
        });
    });




  return router;
}

// Exporta a função GifRouter
module.exports = Router;