const connection = require("../config/database");

const getHomePage = (req, res) => {
  //   let users = [];
  // connection.query("SELECT * FROM Users u", function (err, results, fields) {
  //   let users = results;
  //   console.log(results); // results contains rows returned by server
  //   // res.send(JSON.stringify(users))
  //   // console.log(fields); // fields contains extra meta data about results, if available
  // });
  return res.render('sample.ejs');
};

const getABC = (req, res) => {
  res.send("check ABC");
};
const image = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  res.send("Fuck create-user");
  console.log(req.body);
}
module.exports = {
  getHomePage,
  getABC,
  image,
  postCreateUser
};
