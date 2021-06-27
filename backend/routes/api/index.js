const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const gamesRouter = require('./games.js')
const platformsRouter = require('./platforms.js')
const eventsRouter = require('./events.js')
const rsvpsRouter = require('./rsvps.js')
const userGamesRouter = require('./userGames.js')
const gamertagsRouter = require('./gamertags.js')

//! testing only
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/games', gamesRouter)

router.use('/platforms', platformsRouter)

router.use('/events', eventsRouter)

router.use('/rsvps', rsvpsRouter)

router.use('/userGames', userGamesRouter)

router.use('/gamertags', gamertagsRouter)

module.exports = router;
