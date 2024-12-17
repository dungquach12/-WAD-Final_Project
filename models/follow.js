"use strict";
const { Model, DataTypes } = require("sequelize")
module.exports = (sequelize) => {
  class Follow extends Model {
    static associate(models) {
      // No associations required since this is a through table
    }
  }
  Follow.init(
    {
      follower_id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      followed_id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Follow",
      timestamps: true,
      underscored: false,
    }
  );
  return Follow;
};