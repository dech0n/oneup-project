const express = require('express')
const asyncHandler = require('express-async-handler');
const { camelize } = require('sequelize/types/lib/utils');
const { Game } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const games = await Game.findAll();
    return res.json(games)
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const game = await Game.findByPk(id);
    return res.json(game);
}));

router.post('/', asyncHandler(async (req, res) => {
    //
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const game = await Game.findByPk(id);
    delete game;
}))
