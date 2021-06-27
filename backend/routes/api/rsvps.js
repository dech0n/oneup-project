const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { RSVP, Event, Gamertag, Game, User, Platform } = require('../../db/models');

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
    const {
        userId,
        platformId,
        eventId,
        // gamertagId
    } = req.body;

    //TODO: take the userId & platformId, use them to create a query for the user's gamertag on the given platform


    const gamertag = await Gamertag.findAll({
        where: {
            platformId,
            userId
        },
        // include: Platform, User
    })

    const gamertagId = gamertag.id;
    console.log('GAMERTAGID', gamertagId)

    await RSVP.create({
        eventId,
        gamertagId // retrieved from the above TODO query instead of the payload
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

    await RSVP.destroy({
        // condition to determine which rsvps to destroy
        where: {
            id
        }
    })
}))

module.exports = router;
