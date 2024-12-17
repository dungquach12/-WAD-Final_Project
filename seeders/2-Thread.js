"use strict";

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    let threads = [
      {
        thread_id: "55bc19b2-0392-4b36-92d5-5955d1e99035",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b", // Replace with actual user UUID
        content: "This is my first thread. Excited to be here!",
        image_url: null,
      },
      {
        thread_id: "a6111a0b-9484-44be-8ce3-fa02750e65b4",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        content: "Does anyone know good design resources?",
        image_url: "https://example.com/image1.jpg",
      },
      {
        thread_id: "c1bc19cf-0dd9-4417-acc2-07a99b3140f7",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
        content: "Writing a blog post about travel tips. Stay tuned!",
        image_url: null,
      },
      {
        thread_id: "155dcff7-2070-48f0-8304-a514672e5708",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
        content: "Looking for advice on marketing strategies.",
        image_url: "https://example.com/image2.jpg",
      },
      {
        thread_id: "305c3c3a-4034-4509-817c-0269919e5d92",
        user_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        content: "Excited to share my new data visualization project!",
        image_url: null,
      },
    ];

    threads.forEach((thread) => {
      thread.createdAt = Sequelize.literal("NOW()");
      thread.updatedAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Threads", threads, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Threads", null, {});
  },
};
