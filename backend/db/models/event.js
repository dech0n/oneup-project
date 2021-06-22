'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};