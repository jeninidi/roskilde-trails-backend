module.exports = (sequelize, Sequelize) => {
    const Trail = sequelize.define("trail", {
      trail_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.FLOAT
      },
      est_time: {
        type: Sequelize.STRING
      },
      pos_start: {
        type: Sequelize.FLOAT
      },
      pos_end: {
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.FLOAT
      },
      category: {
        type: Sequelize.STRING
      },
      trail_pic: {
        type: Sequelize.STRING
      }
      
    });
  
    return Trail;
  };