"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let comments = [
      {
        comment_id: "00f44cab-88ac-4978-b29b-8ad7857703bc",
        thread_id: "55bc19b2-0392-4b36-92d5-5955d1e99035", // Replace with actual thread UUID
        user_id: "e7fc2cc9-95d6-47b0-9d78-aad54dffacf9", // Replace with actual user UUID
        content: "Great post! Looking forward to more content.",
      },
      {
        comment_id: "f1bc696a-6af2-4d72-bb15-a27122fa6942",
        thread_id: "55bc19b2-0392-4b36-92d5-5955d1e99035",
        user_id: "4818ef51-9199-414b-83ea-e22cd8551619",
        content: "I completely agree with this. Keep it up!",
      },
      {
        comment_id: "d193aff3-7aba-44fb-b962-7fa998fc8953",
        thread_id: "a6111a0b-9484-44be-8ce3-fa02750e65b4",
        user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b",
        content: "Check out dribbble and Behance for design resources.",
      },
      {
        comment_id: "1154f677-d125-4674-ba47-a2df4541a989",
        thread_id: "c1bc19cf-0dd9-4417-acc2-07a99b3140f7",
        user_id: "5c8f9e29-a92e-4cdb-bd82-2ab387bb2306",
        content: "Can’t wait to read your blog post!",
      },
      {
        comment_id: "67129517-4573-49bb-b09e-600e420f1597",
        thread_id: "155dcff7-2070-48f0-8304-a514672e5708",
        user_id: "6bed75ab-dd16-4342-aa14-8a4bce94879c",
        content: "Happy to discuss marketing strategies. Let’s connect!",
      },
    ];

    comments.forEach((comment) => {
      comment.createdAt = Sequelize.literal("NOW()");
    });

    await queryInterface.bulkInsert("Comments", comments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
