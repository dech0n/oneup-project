const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const gamesRouter = require('./games.js')
const platformsRouter = require('./platforms.js')
const platformgamesRouter = require('./platformgames.js')

//! testing only
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/games', gamesRouter)

router.use('/platforms', platformsRouter)

router.use('/platformgames', platformgamesRouter)

module.exports = router;
