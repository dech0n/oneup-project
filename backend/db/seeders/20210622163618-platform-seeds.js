'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Platforms', [
      {
        type: 'PC'
      },
      {
        type: 'Playstation 4'
      },
      {
        type: 'Playstation 5'
      },
      {
        type: 'Xbox One'
      },
      {
        type: 'Xbox Series S'
      },
      {
        type: 'Nintendo Switch'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Platforms', null, {});
  }
};
