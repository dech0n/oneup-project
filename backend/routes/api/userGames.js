const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { UserGame, RSVP, Event, Gamertag, Game, User, Platform } = require('../../db/models');

const router = express.Router();

// get all userGames
router.get('/', asyncHandler(async (req, res) => {
    const userGames = await UserGame.findAll();
    return res.json(userGames);
}))

// get a single userGame
router.get('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    const userGame = await UserGame.findByPk(id);
    return await res.json(userGame)
}))

// create a single userGame
router.post('/', asyncHandler(async (req, res) => {
    const {
        userId,
        gameId
    } = req.body;

    // if things get hairy, look at the RSVP version of this route

   return await UserGame.create({
        userId,
        gameId
    })
}))

// get all userGames for a single game
router.get('/game/:gameId', asyncHandler(async (req, res) => {
    const gameId = +req.params.gameId;
    const userGames = await UserGame.findAll({
        where: {
            gameId,
        },
    })
    return await res.json(userGames)
}))

// get all userGames for a single user
router.get('/user/:userId', asyncHandler(async (req, res) => {
    const userId = +req.params.userId;
    const userGames = await UserGame.findAll({
        where: {
            userId,
        },
    })
    return await res.json(userGames)
}))

// delete a single userGame (might need to delete related stuffs as well ?)
router.delete('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id

    //? delete all related stuffs here ??
    /* code to delete stuffs */

    await UserGame.destroy({
        // condition to determine which userGames to destroy
        where: {
            id
        }
    })
}))

module.exports = router;
