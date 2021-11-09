module.exports = (sequelize, Sequelize) => {
    const Trail = sequelize.define("trail", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      }
    });
  
    return Trail;
  };