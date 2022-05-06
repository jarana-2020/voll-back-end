'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      urlImage: {
        allowNull: false,
        field: 'url_image',
        type: Sequelize.STRING,
      },
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('products');
  },
};