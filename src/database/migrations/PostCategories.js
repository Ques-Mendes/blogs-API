'use strict';

module.exports = {
  async p(queryInterface, Sequelize) {
    await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          id:'id'
        },
        primaryKey: true,
        onDelete: 'CASCADE'
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          id:'id'
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
