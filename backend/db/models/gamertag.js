'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gamertag = sequelize.define('Gamertag', {
    platformId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {});
  Gamertag.associate = function(models) {
    // rsvp, user, platform
    Gamertag.belongsTo(models.User, {foreignKey: 'userId'});
    Gamertag.belongsTo(models.Platform, {foreignKey: 'platformId'});
    Gamertag.hasMany(models.RSVP, {foreignKey: 'gamertagId'})
  };
  return Gamertag;
};
