"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notifications = [
      {
        notification_id: "3d8f905a-ff7f-42f2-89b5-5c178dfed1c7", // UUID
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b", // User receiving the notification
        type: "like",
        source_user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9", // User performing the action
        thread_id: "55bc19b2-0392-4b36-92d5-5955d1e99035", // Optional: Thread associated with the notification
        is_read: false,
      },
      {
        notification_id: "763b0e0a-12db-4535-b4f7-cbe6996b6e56",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        type: "comment",
        source_user_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        thread_id: "a6111a0b-9484-44be-8ce3-fa02750e65b4",
        is_read: true,
      },
      {
        notification_id: "b21b1b4d-c28b-4874-bf33-e7d788b8ae29",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
        type: "follow",
        source_user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        thread_id: null,
        is_read: false,
      },
      {
        notification_id: "e5220f93-5f7b-4320-9753-9a86d3974a65",
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9",
        type: "like",
        source_user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        thread_id: "155dcff7-2070-48f0-8304-a514672e5708",
        is_read: false,
      },
      {
        notification_id: "663b07c9-d5cf-4e7c-9405-3cf4db458aad",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        type: "follow",
        source_user_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        thread_id: null,
        is_read: true,
      },
    ];

    notifications.forEach((notifications) => {
        notifications.createdAt = Sequelize.literal("NOW()");
      });
      
    await queryInterface.bulkInsert("Notifications", notifications, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notifications", null, {});
  },
};
