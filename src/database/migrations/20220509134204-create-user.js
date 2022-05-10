'use strict'

module.exports = {
  //método executado no momento em que a migration é realizada
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'manager', 'developer'),
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('active', 'archived'),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  //método executado pra desfazer essa migration
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  },
}
