'use strict';
module.exports = (sequelize, DataTypes) => {
  const RSVP = sequelize.define('RSVP', {
    eventId: DataTypes.INTEGER,
    gamertagId: DataTypes.INTEGER
  }, {});
  RSVP.associate = function(models) {
    // associations can be defined here
  };
  return RSVP;
};