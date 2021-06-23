'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('PlatformGames', [
      { //1
        platformId: 1,
        gameId: 1
      },
      { //2
        platformId: 2,
        gameId: 2
      },
      { //3
        platformId: 3,
        gameId: 3
      },
      {//4
        platformId: 4,
        gameId: 4
      },
      {//5
        platformId: 5,
        gameId: 5
      },
      {//6
        platformId: 6,
        gameId: 6
      },
      {//7
        platformId: 1,
        gameId: 7
      },
      {//8
        platformId: 2,
        gameId: 8
      },
      {//9
        platformId: 3,
        gameId: 9
      },
      {//10
        platformId: 4,
        gameId: 10
      },
      {//11
        platformId: 5,
        gameId: 11
      },
      {//12
        platformId: 6,
        gameId: 12
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('PlatformGames', null, {});
  }
};
