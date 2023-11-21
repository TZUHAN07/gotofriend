const express = require("express");
const path = require("path");

require('dotenv').config({ path: path.resolve(__dirname, '../..', '.env') });

//view engine
const app = express();
// const mongoose = require("../connection/db");
const uploadRoute = require("../routes/uploadRoute");

//view engine
// const app = express();
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

//Middleware
app.use(express.static("src/public"));

//routes
app.use("/upload", uploadRoute);

app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/home",(req, res)=>{
    res.render("home");
});

app.get("/chat",(req, res)=>{
    res.render("chat");
});

module.exports = app;