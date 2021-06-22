'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    const platformColumnMapping = {
      through: 'PlatformGames',
      foreignKey: 'gameId',
      otherKey: 'platformId'
    }

    const userColumnMapping = {
      through: 'UserGames',
      foreignKey: 'gameId',
      otherKey: 'userId'
    }

    Game.hasMany(models.Event, {foreignKey: 'gameId'});
    Game.belongsToMany(models.Platform, platformColumnMapping)
    Game.belongsToMany(models.User, userColumnMapping)
  };
  return Game;
};
