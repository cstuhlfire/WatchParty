const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class PartyLink extends Model {}

PartyLink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        unique: false,
      },
    },
    party_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'parties',
        key: 'id',
        unique: false,
      },
    },
    user_id: {
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
    modelName: 'party_link',
  }
);

module.exports = PartyLink;
