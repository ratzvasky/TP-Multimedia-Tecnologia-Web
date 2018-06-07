// Contem todas as funções que efectuam operações crud com a db dos gifs
function GifService(GifModel) 
{
    let service =
     {
      create,
      findAll,
      findAllId,
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

  // Devolve todos os gifs com o Id de categoria
  function findAllId(id) {
    return new Promise(function (resolve, reject)
     {
      GifModel.find({ categoriaId: id}, function (err, users) 
      {
        if (err) reject(err);

        resolve(users);
      });
    });
  }

  
    // Devolve um gif pelo id
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
  

    // Encontra um gif pelo ID
    function findById(id)
     {
      return new Promise(function (resolve, reject) 
      {
        GifModel.findById(id, function (err, user)
         {
          if (err) reject(err);

          console.log(id);
          console.log(user);
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
    function save(newGif)
     {
      return new Promise(function (resolve, reject)
       {
        newGif.save(function (err) 
        {
          if (err) reject(err);
  
          resolve('Gif criado!');
        });
      });
    }
  
    return service;
  }

  
  module.exports = GifService;
  