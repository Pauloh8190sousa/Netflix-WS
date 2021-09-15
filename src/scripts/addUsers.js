const database = require("../services/database");

const Usuario = require("../models/usuario");
const usuarioJSON = require("../data/usuarios.json");

const addUsers = async () => {

    try {

        usuarioJSON.map( async item => {

            console.log(`Inserindo: ${item.nome}`);
            await new Usuario(item).save();

        });

        console.log("Final do Script");

    }catch(err) {
        console.log(err.message);
    }
}

addUsers();