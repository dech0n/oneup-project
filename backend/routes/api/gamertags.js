//! This file is unused
const express = require('express')
const asyncHandler = require('express-async-handler');
// const sequelize = require('sequelize')
const { RSVP, Event, Gamertag, Game, User, Platform } = require('../../db/models');

const router = express.Router();

// get all gamertags
router.get('/', asyncHandler(async (req, res) => {
    const gamertags = await Gamertag.findAll();
    res.json(gamertags)
}))

// get specific gamertag
// router.get('/:id', asyncHandler(async (req, res) => {
//     //
// }))

module.exports = router;
