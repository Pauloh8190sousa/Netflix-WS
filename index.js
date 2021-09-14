
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({ mensagem: "PEGAR TODOS OS REGISTROS" });
    //Código do back-end
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `PEGAR TODOS OS REGISTROS COM ID: ${id}` });
});

app.post("/", (req, res) => {
    const body = req.body;
    res.json(body);
});

app.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `ATUALIZAR TODOS OS REGISTROS COM ID: ${id}` });
});

app.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `DELETAR TODOS OS REGISTROS COM ID: ${id}` });
});





app.listen(3000, () => {
    console.log("Meu servidor está funcionando");
});
