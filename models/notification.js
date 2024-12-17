"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
      Notification.belongsTo(models.User, { as: 'SourceUser', foreignKey: 'source_user_id' });
      Notification.belongsTo(models.Thread, { foreignKey: 'thread_id' });
    }
  }
  Notification.init(
    {
      notification_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source_user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      thread_id: DataTypes.UUID,
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Notification",
      timestamps: false,
      underscored: false,
    }
  );
  return Notification;
};