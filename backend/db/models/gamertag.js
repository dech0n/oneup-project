'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gamertag = sequelize.define('Gamertag', {
    platformId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {});
  Gamertag.associate = function(models) {
    // associations can be defined here
  };
  return Gamertag;
};