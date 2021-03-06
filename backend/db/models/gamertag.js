'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gamertag = sequelize.define('Gamertag', {
    platformId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {});
  Gamertag.associate = function(models) {
    const columnMapping = {
      through: 'RSVPs',
      foreignKey: 'gamertagId',
      otherKey: 'eventId'
    }

    Gamertag.belongsTo(models.User, {foreignKey: 'userId'});
    Gamertag.belongsTo(models.Platform, {foreignKey: 'platformId'});
    Gamertag.belongsToMany(models.Event, columnMapping)
  };
  return Gamertag;
};
