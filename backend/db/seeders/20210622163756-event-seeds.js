'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Events', [
      { hostId: 1, gameId: 1, name: faker.lorem.words(2), date: faker.date.recent(4), capacity: 5 },
      { hostId: 1, gameId: 1, name: faker.lorem.words(2), date: faker.date.soon(3), capacity: 5 },
      { hostId: 2, gameId: 2, name: faker.lorem.words(2), date: faker.date.soon(3), capacity: 5 },
      { hostId: 2, gameId: 2, name: faker.lorem.words(2), date: faker.date.recent(5), capacity: 5 },
      { hostId: 3, gameId: 3, name: faker.lorem.words(2), date: faker.date.soon(6), capacity: 5 },
      { hostId: 3, gameId: 3, name: faker.lorem.words(2), date: faker.date.recent(2), capacity: 5 },
      { hostId: 4, gameId: 4, name: faker.lorem.words(2), date: faker.date.soon(7), capacity: 5 },
      { hostId: 4, gameId: 4, name: faker.lorem.words(2), date: faker.date.recent(1), capacity: 5 },
      { hostId: 5, gameId: 5, name: faker.lorem.words(2), date: faker.date.soon(11), capacity: 5 },
      { hostId: 5, gameId: 5, name: faker.lorem.words(2), date: faker.date.recent(8), capacity: 5 },
      { hostId: 1, gameId: 6, name: faker.lorem.words(2), date: faker.date.recent(4), capacity: 5 },
      { hostId: 1, gameId: 6, name: faker.lorem.words(2), date: faker.date.soon(3), capacity: 5 },
      { hostId: 2, gameId: 7, name: faker.lorem.words(2), date: faker.date.soon(3), capacity: 5 },
      { hostId: 2, gameId: 7, name: faker.lorem.words(2), date: faker.date.recent(5), capacity: 5 },
      { hostId: 3, gameId: 8, name: faker.lorem.words(2), date: faker.date.soon(6), capacity: 5 },
      { hostId: 3, gameId: 8, name: faker.lorem.words(2), date: faker.date.recent(2), capacity: 5 },
      { hostId: 4, gameId: 9, name: faker.lorem.words(2), date: faker.date.soon(7), capacity: 5 },
      { hostId: 4, gameId: 9, name: faker.lorem.words(2), date: faker.date.recent(1), capacity: 5 },
      { hostId: 5, gameId: 10, name: faker.lorem.words(2), date: faker.date.soon(11), capacity: 5 },
      { hostId: 5, gameId: 10, name: faker.lorem.words(2), date: faker.date.recent(8), capacity: 5 },
      { hostId: 1, gameId: 11, name: faker.lorem.words(2), date: faker.date.soon(1), capacity: 5 },
      { hostId: 2, gameId: 11, name: faker.lorem.words(2), date: faker.date.recent(14), capacity: 5 },
      { hostId: 3, gameId: 12, name: faker.lorem.words(2), date: faker.date.soon(14), capacity: 5 },
      { hostId: 4, gameId: 12, name: faker.lorem.words(2), date: faker.date.recent(9), capacity: 5 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Events', null, {});
  }
};
