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
        tag: faker.lorem.word()
      },
      {//2
        platformId: 2,
        userId: 1,
        tag: faker.lorem.word()
      },
      {//2
        platformId: 3,
        userId: 1,
        tag: faker.lorem.word()
      },
      {//3
        platformId: 4,
        userId: 1,
        tag: faker.lorem.word()
      },
      {//4
        platformId: 5,
        userId: 1,
        tag: faker.lorem.word()
      },
      {//5
        platformId: 6,
        userId: 1,
        tag: faker.lorem.word()
      },
      {//6
        platformId: 1,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 2,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 3,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 4,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 5,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 6,
        userId: 2,
        tag: faker.lorem.word()
      },
      {//7
        platformId: 1,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//8
        platformId: 2,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//8
        platformId: 3,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//8
        platformId: 4,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//8
        platformId: 5,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//8
        platformId: 6,
        userId: 3,
        tag: faker.lorem.word()
      },
      {//9
        platformId: 1,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//10
        platformId: 2,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//10
        platformId: 3,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//10
        platformId: 4,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//10
        platformId: 5,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//10
        platformId: 6,
        userId: 4,
        tag: faker.lorem.word()
      },
      {//11
        platformId: 3,
        userId: 5,
        tag: faker.lorem.word()
      },
      {//12
        platformId: 4,
        userId: 5,
        tag: faker.lorem.word()
      },
      {//13
        platformId: 1,
        userId: 5,
        tag: faker.lorem.word()
      },
      {//13
        platformId: 2,
        userId: 5,
        tag: faker.lorem.word()
      },
      {//13
        platformId: 5,
        userId: 5,
        tag: faker.lorem.word()
      },
      {//13
        platformId: 6,
        userId: 5,
        tag: faker.lorem.word()
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
