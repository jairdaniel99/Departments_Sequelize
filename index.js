const express = require("express");

// import our sequelize object for the company database
const sequelize = require("./config");

// making a chain statement that wait's for the tables to generate before enabling a connection
sequelize
  .sync()
  .then(() => console.log("connected!"))
  .catch((error) => console.log(error));

const app = express();

// make our code listen to server
app.listen(3000, function () {
  console.log("Listening to server!");
});
