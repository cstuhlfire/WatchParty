const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Parties extends Model {}

Parties.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    party_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    party_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    stream_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    show_name: {
      type: DataTypes.STRING,
     },
    show_type:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'parties',
  }
);

module.exports = Parties;
