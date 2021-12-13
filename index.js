require("dotenv-expand")(require("dotenv").config());
const express = require("express");
const router = require("./routes");
const routes = require ("./routes");
const cors = require ("cors")

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/uploads",express.static("uploads"));

app.listen(process.env.API_PORT, () =>{
    console.log(`Servidor rodando na porta ${process.env.API_PORT }`);
});
