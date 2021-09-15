
const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/filmes.routes");
const database = require("./src/services/database");
const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);


app.listen(3000, () => {
    console.log("Meu servidor está funcionando");
});
