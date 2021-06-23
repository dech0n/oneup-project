const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const gamesRouter = require('./games.js')

//! testing only
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/games', gamesRouter)

module.exports = router;
