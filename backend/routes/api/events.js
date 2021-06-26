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

// create a single event
router.post('/', asyncHandler(async (req, res) => {
    const {
        hostId,
        gameId,
        name,
        date,
        capacity,
        description
    } = req.body;

    Event.create({
        hostId,
        gameId,
        name,
        date,
        capacity,
        description
    })
}))

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

// get a single event
router.get('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    const event = await Event.findByPk(id);
    return await res.json(event)
}))

// update a single event
router.put('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id
    const {
        hostId,
        gameId,
        name,
        date,
        capacity,
        description
    } = req.body;

    Event.update({
        // attributes to update
        hostId,
        gameId,
        name,
        date,
        capacity,
        description
    }, {
        // condition to determine which events to update
        where: {
            id
        }
    })
}))

// delete a single event (might need to delete related RSVPs as well ?)
router.delete('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id

    //? delete all related RSVPs here ??
    /* code to delete RSVPs */

    Event.destroy({
        // condition to determine which events to destroy
        where: {
            id
        }
    })
}))

module.exports = router;
