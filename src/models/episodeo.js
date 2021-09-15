const mongoose = require("mongoose");

const episodeo = mongoose.model("Episodeo", {

    temporada_id: {
        type: mongoose.Types.ObjectId,
        ref: "Temporada"
    },
    titulo: String,
    descricao: String,
    numero: Number,
    capa: String

    
});


module.exports = episodeo;