let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Cria o Schema da DB
let CategoriaSchema = new Schema({
    descricao: { type: String, required: true, unique: true}, // Cada descrição tem que ser unica
});


// Cria um modelo para usarmos o schemma
let Categoria = mongoose.model('CategoriasCollection', CategoriaSchema);


module.exports = Categoria;