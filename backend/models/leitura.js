'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leitura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leitura.init({
    numero_medidor: DataTypes.STRING,
    data_leitura: DataTypes.DATE,
    leitura_anterior: DataTypes.INTEGER,
    leitura_atual: DataTypes.INTEGER,
    consumo: DataTypes.INTEGER,
    data_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Leitura',
  });
  return Leitura;
};