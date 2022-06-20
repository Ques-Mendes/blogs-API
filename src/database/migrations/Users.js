'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      image: { type: Sequelize.STRING(255) },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

// {
//   "id": 1,
//   "displayName": "Brett Wiltshire",
//   "email": "brett@email.com", // tem quer ser único
//   "password": "123456",
//   "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
// }