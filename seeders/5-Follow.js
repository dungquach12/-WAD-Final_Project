"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let follows = [
      {
        follower_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9", // Replace with actual user UUID
        followed_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
      },
      {
        follower_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        followed_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
      },
      {
        follower_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        followed_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
      },
      {
        follower_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        followed_id: "4818ef51-9199-414b-83ea-e22cd8551619",
      },
      {
        follower_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        followed_id: "6bed75ab-dd16-4342-aa14-8a4bce94879c",
      },
    ];

    follows.forEach((follow) => {
      follow.createdAt = Sequelize.literal("NOW()");
      follow.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Follows", follows, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Follows", null, {});
  },
};
