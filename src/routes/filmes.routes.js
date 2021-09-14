const express = require("express");
const router = express.Router();
const Filme = require("../models/filme");

router.get("/", (req, res) => {
    res.json({ mensagem: "PEGAR TODOS OS REGISTROS" });
    //Código do back-end
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR TODOS OS REGISTROS COM ID: ${id}` });
});

router.post("/", async (req, res) => {
    try {
        const filme = req.body;
        const response = await new Filme(filme).save();
        res.json({ error: false, filme: response });
    } catch (err) {
        res.json({ error: true, mensagem: err.message });
    }

});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR TODOS OS REGISTROS COM ID: ${id}` });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR TODOS OS REGISTROS COM ID: ${id}` });
});


module.exports = router;