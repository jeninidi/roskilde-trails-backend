module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        category_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        }
    });
  
    return Category;
  };