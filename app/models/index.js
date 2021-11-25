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
db.category = require("./category.model.js")(sequelize, Sequelize);
db.completed_trails = require("./completed-trails.model.js")(sequelize, Sequelize);
db.favourite_trails = require("./favourite-trails.model.js")(sequelize, Sequelize);
db.badges = require("./badges.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;