const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = (app) => {
  //set view để hiển thị
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //config static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
