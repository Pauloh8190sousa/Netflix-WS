const mongoose = require("mongoose");

const filme = mongoose.model("Filme", {

    titulo: {
        type: String,
        required: true
    },
    atores: [String],
    ano: Number,
    detalhes: Object,
    premiacoes: [Object]
});


module.exports = filme;