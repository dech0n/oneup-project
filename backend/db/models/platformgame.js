'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlatformGame = sequelize.define('PlatformGame', {
    platformId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  PlatformGame.associate = function(models) {
    PlatformGame.belongsTo(models.Platform, {foreignKey: 'platformId'})
    PlatformGame.belongsTo(models.Game, {foreignKey: 'gameId'})
  };
  return PlatformGame;
};
