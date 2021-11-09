const Sequelize = require("sequelize");
const sequelize = new Sequelize('trailsDB', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trail = require("./trail.model.js")(sequelize, Sequelize);

module.exports = db;