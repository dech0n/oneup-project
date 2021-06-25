const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { Event, RSVP, Game, User } = require('../../db/models');

const router = express.Router();

// get all events
router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events);
}));

// get all events for a single game
router.get('/game/:gameId', asyncHandler(async (req, res) => {
    const gameId = +req.params.gameId;
    const events = await Event.findAll({
        where: {
            gameId,
        },
    })
    return await res.json(events)
}))

router.post('/', asyncHandler(async (req, res) => {
    console.log('***REQ***', req)
    const hostId = 0; //! get actual userId from state.session
    const {
        gameId,
        name,
        date,
        capacity
    } = req.body;

    Event.create({
        hostId,
        gameId,
        name,
        date,
        capacity
    })

}))

module.exports = router;
