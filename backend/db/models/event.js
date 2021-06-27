'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      getDate() {
        return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm:ss').slice(0, 10);
      },
      getTime() {
        return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm:ss').slice(12);
      }
    },
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Event.associate = function (models) {
    const columnMapping = {
      through: 'RSVPs',
      foreignKey: 'eventId',
      otherKey: 'gamertagId'
    }

    Event.belongsTo(models.User, { foreignKey: 'hostId' });
    Event.belongsTo(models.Game, { foreignKey: 'gameId' });
    Event.belongsTo(models.Platform, { foreignKey: 'platformId' });
    Event.belongsToMany(models.Gamertag, columnMapping);
  };
  return Event;
};
