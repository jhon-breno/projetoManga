'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Faturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER
      },
      data_leitura: {
        type: Sequelize.DATE
      },
      consumo: {
        type: Sequelize.INTEGER
      },
      valor_consumo: {
        type: Sequelize.DECIMAL
      },
      impostos: {
        type: Sequelize.DECIMAL
      },
      total_a_pagar: {
        type: Sequelize.DECIMAL
      },
      status_pagamento: {
        type: Sequelize.STRING
      },
      data_vencimento: {
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
    await queryInterface.dropTable('Faturas');
  }
};