module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      user_id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      profile_pic: {
        type: Sequelize.STRING
      },
      completed_trails: {
        type: Sequelize.INTEGER
      },
      badge_id: {
        type: Sequelize.INTEGER
      },
      saved_trails_id: {
        type: Sequelize.INTEGER
      },
      km_walked: {
        type: Sequelize.FLOAT
      }
    });
  
    return User;
  };