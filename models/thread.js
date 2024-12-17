"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      Thread.belongsTo(models.User, { foreignKey: 'user_id' });
      Thread.hasMany(models.Comment, { foreignKey: 'thread_id' });
      Thread.hasMany(models.Like, { foreignKey: 'thread_id' });
    }
  }
  Thread.init(
    {
      thread_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Thread",
      timestamps: true,
      underscored: false,
    }
  );
  return Thread;
};