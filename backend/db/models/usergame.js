'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGame = sequelize.define('UserGame', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  UserGame.associate = function(models) {
    // associations can be defined here
  };
  return UserGame;
};