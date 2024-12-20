const controller = {};
const { where, fn, col } = require("sequelize");
const { User, Thread, Follow, Like, Comment } = require("../models");

controller.getUserProfile = async (req, res, next) => {
  try {
    const username = req.params.username;

    const userData = await User.findOne({
      where: { username },
      attributes: ["user_id", "username", "email", "bio", "profile_picture"],
    });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    const threadCount = await Thread.count({
      where: { user_id: userData.user_id },
    });
    const followerCount = await Follow.count({
      where: { followed_id: userData.user_id },
    });
    const followingCount = await Follow.count({
      where: { follower_id: userData.user_id },
    });

    userData.threadCount = threadCount;
    userData.followerCount = followerCount;
    userData.followingCount = followingCount;

    res.locals.userData = userData;
    next();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    next(error);
  }
};

controller.getUserThreads = async (req, res) => {
  try {
    const userData = res.locals.userData;

    const userThreads = await Thread.findAll({
      where: { user_id: userData.user_id },
      include: [
        {
          model: Like,
          as: "Likes",
          attributes: [], // We don't need to include the individual likes, just the count
          required: false,
        },
        {
          model: Comment,
          as: "Comments",
          attributes: [], // We don't need to include the individual comments, just the count
          required: false,
        },
        {
          model: User,
          as: "User",
          attributes: ["user_id", "username", "profile_picture"], // Include User fields
        },
      ],
      attributes: [
        "thread_id",
        "content",
        "image_url",
        "createdAt",
        [fn("COUNT", col("Likes.like_id")), "likeCount"],
        [fn("COUNT", col("Comments.comment_id")), "commentCount"],
        [col("User.username"), "username"],
        [col("User.profile_picture"), "profile_picture"],
      ],
      group: [
        "Thread.thread_id",
        "Thread.content",
        "Thread.image_url",
        "Thread.createdAt",
        "User.user_id",
        "User.username",
        "User.profile_picture",
      ],
      order: [["createdAt", "DESC"]],
      raw: true,
    });

    if (!userThreads.length) {
      return res.status(404).json({ error: "No threads found for this user" });
    }

    userThreads.forEach((thread) => {
      thread.likeCount = thread.likeCount || 0;
      thread.commentCount = thread.commentCount || 0;
    });

    res.render("userProfile", {
      threadData: userThreads,
    });
  } catch (error) {
    console.error("Error fetching user threads:", error);
    res.status(500).send("Cannot fetch user threads");
  }
};

controller.getEditPage = async (req, res) => {
  try {
    const username = req.params.username;

    const userData = await User.findOne({
      where: { username },
      attributes: ["user_id", "username", "email", "bio", "profile_picture"],
    });

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.render("userProfileEditor", { userData });
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).send("Cannot fetch user information");
  }
};

controller.updateProfile = async (req, res) => {
  // Access the POST data
  const { user_id, username, bio, email } = req.body;

  try {
    await User.update({
      username,
      bio,
      email,
    },
    {
      where: { user_id },
    }
  );
  res.redirect(`/profile/${username}`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Can not update user!");
  }
};

module.exports = controller;
