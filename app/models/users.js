let db = require('../libs/db_connection')();
let Schema = require('mongoose').Schema;

module.exports = function (app) {
  let user_schema = Schema({
    nome: {type: String, required: true},
    telefone: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
  });

  return db.model('users', user_schema);
};