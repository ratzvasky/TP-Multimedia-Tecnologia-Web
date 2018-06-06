// Contem todas as funções que efectuam operações crud com a db das categorias
function CategoriaService(CategoriaModel) 
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
  
    // Cria uma nova categoria
    function create(values)
     {
      let newCategoria = CategoriaModel(values);
      return save(newCategoria);
    }
    
  
    // Devolve todas as categorias
    function findAll()
     {
      return new Promise(function (resolve, reject)
       {
        CategoriaModel.find({}, function (err, users)
         {
          if (err) reject(err);

          resolve(users);
        });
      });
    }
  
  
    // Devolve uma categoria pela descricão
    function findOne(option = {}) 
    {
      return new Promise(function (resolve, reject) {
        CategoriaModel.find({ "descricao": option.id }, function (err, user) 
        {
          if (err) reject(err);

          resolve(user);
        });
      });
    }
  

    // Encontra uma categoria pelo id
    function findById(id)
     {
      return new Promise(function (resolve, reject) 
      {
        CategoriaModel.findById(id, function (err, user)
         {
          if (err) reject(err);

          resolve(user);
        });
      });
    }
  

    // Faz update aos campos de uma categoria
    function update(id, values)
     {
      return new Promise(function (resolve, reject)
       {

        CategoriaModel.findByIdAndUpdate(id, values, function (err, user) 
        {
          if (err) reject(err);
  
          resolve(user);
        });
      });
    }
  

    // Remove uma categoria dada a descrição
    function remove(options) 
    {
      return new Promise(function (resolve, reject)
       {
        CategoriaModel.findOneAndRemove(options, function (err)
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
        CategoriaModel.findByIdAndRemove(id, function (err) 
        {
          if (err) reject(err);
          resolve();
        });
      });
    }
  

    // Guarda uma nova categoria
    function save(newPlayer)
     {
      return new Promise(function (resolve, reject)
       {
        CategoriaModel.save(function (err) 
        {
          if (err) reject(err);
  
          resolve('Categoria criada!');
        });
      });
    }
  
    return service;
  }

  
  module.exports = CategoriaService;
  