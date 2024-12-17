"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let likes = [
      {
        like_id: "adf8b71f-00a0-49f7-9f17-d5d647b6ed7d",
        thread_id: "55bc19b2-0392-4b36-92d5-5955d1e99035", // Replace with actual thread UUID
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b", // Replace with actual user UUID
      },
      {
        like_id: "ea1f8b77-022f-42f1-b71f-5e8b257e21b7",
        thread_id: "a6111a0b-9484-44be-8ce3-fa02750e65b4",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
      },
      {
        like_id: "62b91b68-dc42-4ef8-bc92-25e3130b8d84",
        thread_id: "c1bc19cf-0dd9-4417-acc2-07a99b3140f7",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
      },
      {
        like_id: "89091c4f-48ed-4011-b9d2-4f8ad263c6a3",
        thread_id: "155dcff7-2070-48f0-8304-a514672e5708",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
      },
      {
        like_id: "5d5d563e-bfe2-4425-9ac4-1453c4a11f52",
        thread_id: "305c3c3a-4034-4509-817c-0269919e5d92",
        user_id: "4818ef51-9199-414b-83ea-e22cd8551619",
      },
    ];

    likes.forEach((like) => {
      like.createdAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Likes", likes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
