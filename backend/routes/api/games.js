const express = require('express')
const asyncHandler = require('express-async-handler');
const { Game } = require('../../db/models');

const router = express.Router();

// get all games
router.get('/', asyncHandler(async (req, res) => {
    const games = await Game.findAll();
    return res.json(games)
}));

// get one game
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const game = await Game.findByPk(id);
    return res.json(game);
}));

// // get all platforms for the game
// router.get('/:id/platforms', asyncHandler(async (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const gamePlatforms = null;

// }))

// create new game
router.post('/', asyncHandler(async (req, res) => {
    //
}))

// delete game
router.delete('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const game = await Game.findByPk(id);
    delete game;
}))

module.exports = router;
