'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('RSVPs', [
      // there are 24 events
      {// event 1, game 1, platform 1
        eventId: 1,
        gamertagId: 1
      },
      {
        eventId: 1,
        gamertagId: 7
      },
      {
        eventId: 1,
        gamertagId: 13
      },
      { // event 2, game 1, platform 1
        eventId: 2,
        gamertagId: 1
      },
      {
        eventId: 2,
        gamertagId: 13
      },
      { // event 3, game 2, platform 2
        eventId: 2,
        gamertagId: 5
      },
      {
        eventId: 2,
        gamertagId: 11
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
