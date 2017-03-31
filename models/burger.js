var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var Burger = sequelize.define("burgers", {
  name: {
    type: Sequelize.STRING    
  }
}, {
  timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

Burger.sync();

// Export the database functions for the controller (catsController.js).
module.exports = Burger;
