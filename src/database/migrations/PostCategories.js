'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key:'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE'
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key:'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE'
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PostCategories');
  }
};
