const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { RSVP, Event, Gamertag, Game, User } = require('../../db/models');

const router = express.Router();

// get all RSVPs
router.get('/', asyncHandler(async (req, res) => {
    const rsvps = await RSVP.findAll();
    // console.log('RSVP TYPE', typeof rsvps)
    return res.json(rsvps);
}))

// get a single rsvp
router.get('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    const rsvp = await RSVP.findByPk(id);
    return await res.json(rsvp)
}))

// create a single rsvp
router.post('/', asyncHandler(async (req, res) => {
    //! might have to update route to include eventId
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

// delete a single rsvp (might need to delete related RSVPs as well ?)
router.delete('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id

    //? delete all related RSVPs here ??
    /* code to delete RSVPs */

    RSVP.destroy({
        // condition to determine which rsvps to destroy
        where: {
            id
        }
    })
}))

module.exports = router;
