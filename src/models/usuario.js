const mongoose = require("mongoose");

const usuario = mongoose.model("Usuario", {

    nome: String,
    email: String,
    senha: String
    
});


module.exports = usuario;