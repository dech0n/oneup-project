const faker = require('faker')
const bcrypt = require('bcryptjs');
const { lorem } = require('faker');
const randomNumber = (num) => Math.floor(Math.random() * Math.floor(num) + 1)
/* USER SEED FUNCTION  */
const seedUsers = (num) => {
  let i = 0
  while (i < num) {
    const user = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      hashedPassword: bcrypt.hashSync(faker.internet.password())
    }
    console.log(user, ',')
    i++
  }
}
// seedUsers(10)

/* GAME SEED FUNCTION */
const seedGames = (num) => {
    let i = 0
    while (i < num) {
        const game = {
            name: faker.random.words(),
            image: faker.image.imageUrl(),
            description: faker.lorem.paragraph(6)
    }
        console.log(game, ',')
        i++
    }
}
seedGames(10)

/* PLATFORM SEED FUNCTION */
const seedPlatforms = (num) => {
    let i = 0
    while (i < num) {
        const platform = {
            type: faker.lorem.word()
        }
        console.log(platform, ',')
        i++
    }
}
// seedPlatforms(6)

/* GAMERTAG SEED FUNCTION */
const seedGamertags = (num) => {
  let i = 0
  while (i < num) {
    const gamertag = {
        platformId: i,
        userId: i,
        tag: faker.internet.userName()
    }
    console.log(gamertag, ',')
    i++
  }
}
// seedGamertags(10)

/* EVENT SEED FUNCTION */
const seedEvents = (num) => {
    let i = 0
    while (i < num) {
      const event = {
          hostId: 1,
          gameId: 1,
          name: faker.lorem.words(2),
          date: null,
      }
      console.log(event, ',')
      i++
    }
  }
// seedEvents(2)
