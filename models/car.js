'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    picture: DataTypes.STRING,
    rent_price: DataTypes.FLOAT,
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    year: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    deletedBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};