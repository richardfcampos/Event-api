'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserEvents', {
      Oid: {
        type: Sequelize.UUID,
        allowNull:false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      event_location_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'EventLocations',
          key:'Oid'
        }
      },
      event_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Events',
          key:'Oid'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserEvents');
  }
};