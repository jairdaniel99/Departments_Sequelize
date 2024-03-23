// Import sequelize module
const Sequelize = require("sequelize");
// Import our sequelize object
const sequelize = require("../config");

// make our table
const Department = sequelize.define(
  "Department",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    Department_Name: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

// export Department
module.exports = Department;
