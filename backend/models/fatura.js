'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fatura.init({
    clienteId: DataTypes.INTEGER,
    data_leitura: DataTypes.DATE,
    consumo: DataTypes.INTEGER,
    valor_consumo: DataTypes.DECIMAL,
    impostos: DataTypes.DECIMAL,
    total_a_pagar: DataTypes.DECIMAL,
    status_pagamento: DataTypes.STRING,
    data_vencimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Fatura',
  });
  return Fatura;
};