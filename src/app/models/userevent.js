'use strict';
const uuid = require('uuid').v4
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    Oid: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid()
    },
    user_id: DataTypes.UUID,
    event_location_id: {
      type:DataTypes.UUID,
      references: {
        model:sequelize.model.EventLocation,
        key: 'Oid'
      }
    },
    event_id: {
      type:DataTypes.UUID,
      references: {
        model:sequelize.model.Event,
        key: 'Oid'
      }
    },
    created_at: DataTypes.DATE
  }, { timestamps: false });
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};