'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    numero_medidor: DataTypes.STRING,
    data_instalacao: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};