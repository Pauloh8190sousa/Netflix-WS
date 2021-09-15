const mongoose = require("mongoose");

const temporada = mongoose.model("Temporada", {

    filme_id: {
        type: mongoose.Types.ObjectId,
        ref: "Filme"
    },
    titulo: String

    
});


module.exports = temporada;