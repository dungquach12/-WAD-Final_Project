"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.Thread, { foreignKey: 'thread_id' });
      Like.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Like.init(
    {
      like_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      thread_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Like",
      timestamps: false,
      underscored: true,
    }
  );
  return Like;
};
