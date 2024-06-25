'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leituras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_medidor: {
        type: Sequelize.STRING
      },
      data_leitura: {
        type: Sequelize.DATE
      },
      leitura_anterior: {
        type: Sequelize.INTEGER
      },
      leitura_atual: {
        type: Sequelize.INTEGER
      },
      consumo: {
        type: Sequelize.INTEGER
      },
      data_registro: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Leituras');
  }
};