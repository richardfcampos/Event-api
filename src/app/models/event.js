'use strict';
const uuid = require('uuid').v4
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    Oid: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid()
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    name: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};