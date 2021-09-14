const express = require("express");
const api = express.application;

api.get("/");

api.listen(3000);