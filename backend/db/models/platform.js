'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    type: DataTypes.STRING
  }, {});
  Platform.associate = function(models) {
    const columnMapping = {
      through: 'PlatformGames',
      foreignKey: 'platformId',
      otherKey: 'gameId'
    }

    Platform.belongsToMany(models.Game, columnMapping)
    Platform.hasMany(models.Gamertag, {foreignKey: 'platformId'});
  };
  return Platform;
};
