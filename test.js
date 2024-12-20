const controller = {};
const { where, Op, fn, col } = require("sequelize");
const { User, Thread, Follow, Like, Comment } = require("../models");

const userData = res.locals.userData;

const userThreads = await Thread.findAll({
  where: { user_id: "92a234c7-fb37-43d7-a4d1-050e52039f1b" },
  include: [
    {
      model: User,
      as: "User",
      attributes: ["username", "profile_picture"],
    },
    {
      model: Like,
      as: "Likes",
      attributes: [],
      required: false, // Allow threads without likes
    },
    {
      model: Comment,
      as: "Comments",
      attributes: [],
      required: false, // Allow threads without comments
    },
  ],
  attributes: [
    "thread_id",
    "content",
    "image_url",
    "createdAt",
    [fn("COUNT", col("Likes.like_id")), "likeCount"],
    [fn("COUNT", col("Comments.comment_id")), "commentCount"],
  ],
  group: ["Thread.thread_id", "User.user_id"],
  order: [["createdAt", "DESC"]], // Order by most recent threads
});

userThreads.forEach((thread) => {
  thread.likeCount = thread.likeCount || 0;
  thread.commentCount = thread.commentCount || 0;
});

console.log(userThreads)
