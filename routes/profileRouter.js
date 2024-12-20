const express = require("express");
const router = express.Router();
const controller = require("../controllers/profileController");

router.get("/:username", controller.getUserProfile, controller.getUserThreads);

router.get("/:username/edit", controller.getEditPage);

router.post("/:username/edit", controller.updateProfile);

module.exports = router;
