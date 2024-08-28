const express = require("express"); //commonjs
//import express from 'express' (ko thể sử dụng câu lệnh này)//es modules
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 8880;
const hostname = process.env.HOST_NAME; //hardcode
const app = express();
const webRouters = require("./routes/web");
// const mysql = require("mysql2");
const connection = require('./config/database');
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mssql",
});

//config req.body
app.use(express.json());//for json
app.use(express.urlencoded({ extended: true }));//for form's data

//config template engine
//app.set("views", "./views/"); => sai
const configViewEngine = require("./config/viewEngine");
configViewEngine(app);

//khai báo route
app.use("/", webRouters);
// app.use("/v2", webRouters);


connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);



//mục đích để /test trước là để chia theo version
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
