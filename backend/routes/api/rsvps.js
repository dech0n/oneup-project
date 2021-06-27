const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { RSVP, Event, Gamertag, Game, User } = require('../../db/models');

const router = express.Router();

// get all RSVPs
router.get('/', asyncHandler(async (req, res) => {
    const rsvps = await RSVP.findAll();
    console.log('EVENT TYPE', typeof rsvps)
    return res.json(rsvps);
}))

// get a single rsvp
router.get('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    const rsvp = await RSVP.findByPk(id);
    return await res.json(rsvp)
}))

// create a single rsvp
router.post('/event/:eventId', asyncHandler(async (req, res) => {
    const {
        eventId,
        gamertagId
    } = req.body;

    RSVP.create({
        eventId,
        gamertagId
    })
}))

// get all rsvps for a single event
router.get('/event/:eventId', asyncHandler(async (req, res) => {
    const eventId = +req.params.eventId;
    const rsvps = await RSVP.findAll({
        where: {
            eventId,
        },
    })
    return await res.json(rsvps)
}))

module.exports = router;
