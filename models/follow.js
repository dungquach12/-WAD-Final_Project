"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Follow extends Model {
    static associate(models) {
      // No associations required since this is a through table
    }
  }
  Follow.init(
    {
      follower_id: {
        type: 'UUID',
        primaryKey: true,
      },
      followed_id: {
        type: 'UUID',
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Follow",
      timestamps: false,
      underscored: true,
    }
  );
  return Follow;
};
