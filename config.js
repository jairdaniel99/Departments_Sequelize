const Sequelize = require("sequelize");

let host = "localhost";
let database = "company";
let user = "root";
let password = "hola";

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mariadb",
});

module.exports = sequelize;
