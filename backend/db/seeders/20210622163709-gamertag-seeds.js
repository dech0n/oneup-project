'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Gamertags', [
      { //1
        platformId: 1,
        userId: 1,
        tag: faker.lorem.word(1)
      },
      {//2
        platformId: 3,
        userId: 1,
        tag: faker.lorem.word(1)
      },
      {//3
        platformId: 5,
        userId: 1,
        tag: faker.lorem.word(1)
      },
      {//4
        platformId: 6,
        userId: 1,
        tag: faker.lorem.word(1)
      },
      {//5
        platformId: 2,
        userId: 2,
        tag: faker.lorem.word(1)
      },
      {//6
        platformId: 4,
        userId: 2,
        tag: faker.lorem.word(1)
      },
      {//7
        platformId: 1,
        userId: 3,
        tag: faker.lorem.word(1)
      },
      {//8
        platformId: 6,
        userId: 3,
        tag: faker.lorem.word(1)
      },
      {//9
        platformId: 3,
        userId: 4,
        tag: faker.lorem.word(1)
      },
      {//10
        platformId: 4,
        userId: 4,
        tag: faker.lorem.word(1)
      },
      {//11
        platformId: 2,
        userId: 5,
        tag: faker.lorem.word(1)
      },
      {//12
        platformId: 4,
        userId: 5,
        tag: faker.lorem.word(1)
      },
      {//13
        platformId: 1,
        userId: 5,
        tag: faker.lorem.word(1)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Gamertags', null, {});
  }
};
