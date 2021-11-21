// DEPENDENCIES
//      -----Routes-------
const express = require("express");
const path = require("path");

//      -----Handlebars-------
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

//      -----Database-------
const mysql = require("mysql2");
//const sequelize = require("./config/connection.js");

// Define PORT, initialize app
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
//  set Handlebars as front-end engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//  use static folder for css, some js
app.use(express.static(path.join(__dirname, "public")));

//  use body parsing with json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  use "controllers" folder for routes
app.use(require("./controllers"));

// START SERVER
app.listen(PORT, console.log(`App listening on http://localhost:${PORT}`));
