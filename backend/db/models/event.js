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
    const columnMapping = {
      through: 'RSVPs',
      foreignKey: 'eventId',
      otherKey: 'gamertagId'
    }

    Event.belongsTo(models.User, {foreignKey: 'hostId'});
    Event.belongsTo(models.Game, {foreignKey: 'gameId'});
    Event.belongsToMany(models.Gamertag, columnMapping);
  };
  return Event;
};
