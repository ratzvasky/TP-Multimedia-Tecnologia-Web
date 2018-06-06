// Contem todas as funções que efectuam operações crud com a db dos gifs
function GifService(GifModel) 
{
    let service =
     {
      create,
      findAll,
      findOne,
      findById,
      update,
      remove,
      removeById
    };
  
    // Cria um novo Gif
    function create(values)
     {
      let newGif = GifModel(values);
      return save(newGif);
    }
    
  
    // Devolve todos os gifs
    function findAll()
     {
      return new Promise(function (resolve, reject)
       {
        GifModel.find({}, function (err, users)
         {
          if (err) reject(err);

          resolve(users);
        });
      });
    }
  
  
    // Devolve um gif pela descricão
    function findOne(option = {}) 
    {
      return new Promise(function (resolve, reject) {
        GifModel.find({ "descricao": option.id }, function (err, user) 
        {
          if (err) reject(err);

          resolve(user);
        });
      });
    }
  

    // Encontra um gif pelo id
    function findById(id)
     {
      return new Promise(function (resolve, reject) 
      {
        GifModel.findById(id, function (err, user)
         {
          if (err) reject(err);

          resolve(user);
        });
      });
    }
  

    // Faz update aos campos de um gif
    function update(id, values)
     {
      return new Promise(function (resolve, reject)
       {

        GifModel.findByIdAndUpdate(id, values, function (err, user) 
        {
          if (err) reject(err);
  
          resolve(user);
        });
      });
    }
  

    // Remove um gif dada a descrição
    function remove(options) 
    {
      return new Promise(function (resolve, reject)
       {
        GifModel.findOneAndRemove(options, function (err)
         {
          if (err) reject(err);
  
          resolve();
        });
      });
    }
  
    // Remove um gif dado um id
    function removeById(id) {
      return new Promise(function (resolve, reject)
       {
        GifModel.findByIdAndRemove(id, function (err) 
        {
          if (err) reject(err);
          resolve();
        });
      });
    }
  

    // Guarda um novo gif
    function save(newPlayer)
     {
      return new Promise(function (resolve, reject)
       {
        GifModel.save(function (err) 
        {
          if (err) reject(err);
  
          resolve('Gif criado!');
        });
      });
    }
  
    return service;
  }

  
  module.exports = GifService;
  