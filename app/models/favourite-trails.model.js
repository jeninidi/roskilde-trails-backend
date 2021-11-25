module.exports = (sequelize, Sequelize) => {
    const FavouriteTrails = sequelize.define("favourite_trails", {
      saved_trails_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      trail_id: {
        type: Sequelize.INTEGER
    },
    });
  
    return FavouriteTrails;
  };