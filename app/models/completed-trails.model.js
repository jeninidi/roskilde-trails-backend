module.exports = (sequelize, Sequelize) => {
    const CompletedTrails = sequelize.define("completed_trails", {
      trail_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
          type: Sequelize.INTEGER
      }
    });
  
    return CompletedTrails;
  };