const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
class Showing extends Model {}
Showing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    show_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_id:{
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genres',
        key: 'id',
        unique: false,
      },
    },
    show_type:{
      type: DataTypes.STRING,
      allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'showing',
  }
);
module.exports = Showing;