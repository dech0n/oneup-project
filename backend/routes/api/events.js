const express = require('express')
const asyncHandler = require('express-async-handler');
const { Event, RSVP, Game, User } = require('../../db/models');

const router = express.Router();

// get all events
router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events);
}));

//? for reference: querying joins table
// router.get('/game/:gameId', asyncHandler(async (req, res) => {
//     const {gameId} = req.params;
//     const gamePlatforms = await PlatformGame.findAll({
//         where: {
//             gameId,
//         },
//     });

//     const platformIds = gamePlatforms.map(gamePlatform => gamePlatform.platformId);

//     const platforms = await Platform.findAll({
//         where: {id: platformIds}
//     })

//     return res.json(platforms)
// }))

// get all events for a single game
router.get('/game/:gameId', asyncHandler(async (req, res) => {
    const gameId = +req.params.gameId;
    const events = Event.findAll({
        where: {
            gameId
        }
    })
    return res.json(events)
}))


module.exports = router;
