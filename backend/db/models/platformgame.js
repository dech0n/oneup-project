'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlatformGame = sequelize.define('PlatformGame', {
    platformId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  PlatformGame.associate = function(models) {
    // associations can be defined here
  };
  return PlatformGame;
};