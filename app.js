const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

const ordenRoutes = require("./routes/orden.routes");

// Import de las routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require("dotenv").config();

// Configuracion de la conexion a la bd
mongoose
//.connect("mongodb+srv://dbGoldenFork:Goldenfork2021@cluster0.qle6c.mongodb.net/GoldenFork?retryWrites=true&w=majority")
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Estamos conectados a nuestra BD");
    })
    .catch(() => {
        console.log("Houston tenemos un problema");
    });

app.use("/api/orden", ordenRoutes);

module.exports = app;