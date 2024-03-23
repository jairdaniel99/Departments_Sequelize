// Import Sequelize module
const Sequelize = require("sequelize");
// Import our Sequelize object for our "company" database
const sequelize = require("../config");
// Import departmenr
const Department = require("./Department");

// Define the structure of our Employees table
const Employee = sequelize.define(
  "Employee",
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
    DepartmentID: {
      type: Sequelize.INTEGER,
    },
    salary: {
      type: Sequelize.FLOAT,
    },
  },
  // not include UpdatedAt fields
  {
    timestamps: false,
  }
);

// make foreign key from departmentID
Department.hasMany(Employee, {
  foreignKey: "DepartmentID",
  onDelete: "CASCADE",
});

// it needs a belongsTo to work
Employee.belongsTo(Department, {
  foreignKey: "DepartmentID",
});

//Export our employee module
module.exports = Employee;
