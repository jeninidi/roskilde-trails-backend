module.exports = (sequelize, Sequelize) => {
    const Badges = sequelize.define("badges", {
      badge_id: {
        type: Sequelize.INTEGER
      },
      badge_value: {
        type: Sequelize.STRING
      },
      badge_pic: {
        type: Sequelize.STRING
    },
    });
  
    return Badges;
  };