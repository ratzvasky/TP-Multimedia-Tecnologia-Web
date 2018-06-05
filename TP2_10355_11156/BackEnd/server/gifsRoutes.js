const express = require('express');
const Gifs = require('../data/gifs');
const bodyParser = require('body-parser');


function GifRouter ()
{
    let router = express();

    // Aumenta o limite do request body size  e o tipo de biblioteca para o parsing
    router.use(bodyParser.json({ limit: '100mb' }));
    router.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

    // Pede todos os gifs
    router.route('/gifs')
    .get(function (req, res, next) 
    {
      console.log('Get all gifs.');
      Gifs.findAll()
        .then((gifs)=>
         {
          res.send(gifs);
          next();
        })
        .catch((err) => 
        {
          next();
        });
    })

    // Envia um gif
    .post(function (req, res, next) 
    {
        console.log('Faz um pedido Post');
        let body = req.body;
        Gifs.create(body)
          .then(function() 
          {
            console.log('Post efectuado com sucesso!');
            res.status(200);
            res.send(body);
            next();
          })

          .catch((err) => 
          {
             console.log('Erro no pedido Post!');
             err.status = err.status || 500;
             res.status(401).send('O post não correu bem!');
             next();
          });
      });

      // Redefine uma nova route e faz um pedido Get pelo ID de GIF
      router.route('/gifs/:gifId')
      .get(function (req, res, next) {
        console.log('Pede um Gif pelo ID');
        let gifId = req.params.gifId; // !!!! VERIFICAR SE O ULTIMO CAMPO ESTÁ CORRECTO
        console.log(gifId);
        Players.findById(gifId)
          .then((gif) => {
            res.status(200);
            res.send(player);
            next();
          })
          .catch((err) =>
           {
            res.status(404);
            next();
          });
      })

}