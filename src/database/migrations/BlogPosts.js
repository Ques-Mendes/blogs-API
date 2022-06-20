'use strict';

const { TIMESTAMP } = require("mysql2/lib/constants/types");
const Users = require("./Users");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      content: {
        type: Sequelize.STRING(255)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: Users,
          id: 'id'
        }
      },
      published: { type: Sequelize.DATE },
      updated: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BlogPosts');
  }
};
