'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlatformGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      platformId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlatformGames');
  }
};
