const express = require("express");
const router = express.Router();
const controller = require("../controllers/profileController");

router.get("/:username", 
    controller.getUserProfile,
    controller.getUserThreads
);

module.exports = router;
