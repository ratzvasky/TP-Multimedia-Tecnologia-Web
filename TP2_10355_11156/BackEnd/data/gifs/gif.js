let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Cria o Schema da DB
let GifSchema = new Schema({
    url: { type: String, required: true},
    descricao: { type: String, required: true, unique: true}, // Cada descrição tem que ser unica
    categoriaId: { type: String, required: true},
});


// Cria um modelo para usarmos o schemma
let Gif = mongoose.model('GifCollection', GifSchema);


module.exports = Gif;