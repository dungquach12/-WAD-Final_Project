"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Thread, { foreignKey: 'user_id' });
      User.hasMany(models.Comment, { foreignKey: 'user_id' });
      User.hasMany(models.Like, { foreignKey: 'user_id' });
      User.hasMany(models.Notification, { foreignKey: 'user_id' });
      User.belongsToMany(models.User, {
        as: 'Followers',
        through: 'Follows',
        foreignKey: 'followed_id',
      });
      User.belongsToMany(models.User, {
        as: 'Following',
        through: 'Follows',
        foreignKey: 'follower_id',
      });
    };
  };
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      bio: DataTypes.TEXT,
      profile_picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,  // Enables createdAt and updatedAt
      underscored: false, // Use snake_case for column names (created_at, updated_at)
    }
  );
  return User;
};