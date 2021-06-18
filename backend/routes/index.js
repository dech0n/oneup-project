const express = require('express');
const router = express.Router();

const apiRouter = require('./api')

router.use('/api', apiRouter);

//! testing only
// router.get('/hello/world', (req, res) => {
//     res.cookie('XSRF-TOKEN', req.csrfToken())
//     res.send('Hello World!');
// });

module.exports = router;
