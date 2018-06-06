let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let PlayerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
});

// the schema is useless so far
// we need to create a model using it
let Player = mongoose.model('User', PlayerSchema);

// make this available to our users in our Node applications
module.exports = Player;