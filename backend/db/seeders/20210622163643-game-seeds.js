'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('Games', [
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
        {
          name: faker.random.words(),
          image: faker.image.imageUrl(475, 280, true),
          description: faker.lorem.paragraph(6)
        } ,
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Games', null, {});
  }
};
