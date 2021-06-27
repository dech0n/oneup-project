const express = require('express')
const asyncHandler = require('express-async-handler');
const { Platform, PlatformGame} = require('../../db/models');

const router = express.Router();

// get all platforms
router.get('/', asyncHandler(async (req, res) => {
    const platforms = await Platform.findAll();
    return await res.json(platforms);
}))

// get all platforms for a specific game
router.get('/game/:gameId', asyncHandler(async (req, res) => {
    const {gameId} = req.params;
    const gamePlatforms = await PlatformGame.findAll({
        where: {
            gameId,
        },
    });

    const platformIds = gamePlatforms.map(gamePlatform => gamePlatform.platformId);

    const platforms = await Platform.findAll({
        where: {id: platformIds}
    })

    return res.json(platforms)
}))


module.exports = router;
