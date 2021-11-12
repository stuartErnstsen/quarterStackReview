require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const authCtrl = require("./controllers/authController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/login", authCtrl.login);
app.get("/colors", authCtrl.getColors);

app.listen(SERVER_PORT, () =>
  console.log(`Hippity Hoppity your server is poppity on port: ${SERVER_PORT}`)
);
