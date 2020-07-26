'use strict';
const uuid = require('uuid').v4
module.exports = (sequelize, DataTypes) => {
  const EventLocation = sequelize.define('EventLocation', {
    Oid: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:() => uuid()
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    name: DataTypes.STRING
  }, {});
  EventLocation.associate = function(models) {
    // associations can be defined here
  };
  return EventLocation;
};