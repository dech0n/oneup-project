'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('UserGames', [
      { //1
        userId: 1,
        gameId: 1,
      },
      { //2
        userId: 1,
        gameId: 6,
      },
      { //3
        userId: 1,
        gameId: 11,
      },
      { //4
        userId: 2,
        gameId: 2,
      },
      { //5
        userId: 2,
        gameId: 7,
      },
      { //6
        userId: 2,
        gameId: 11,
      },
      { //7
        userId: 3,
        gameId: 3,
      },
      { //8
        userId: 3,
        gameId: 8,
      },
      { //9
        userId: 3,
        gameId: 12,
      },
      { //10
        userId: 4,
        gameId: 4,
      },
      { //11
        userId: 4,
        gameId: 9,
      },
      { //12
        userId: 4,
        gameId: 12,
      },
      { //13
        userId: 5,
        gameId: 5,
      },
      { //14
        userId: 5,
        gameId: 10,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('UserGames', null, {});
  }
};
