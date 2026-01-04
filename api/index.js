const express = require("express");
const path = require("path");

const app = express();

const router = require("../routes/router");
const connectdb = require("../config/database");

connectdb();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "../public")));

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// routes
app.use("/", router);

// ❌ NO app.listen
module.exports = app;
