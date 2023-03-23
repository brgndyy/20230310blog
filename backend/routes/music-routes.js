const express = require("express");
const router = express.Router();
const musicControllers = require("../controllers/music-controllers");

router.get("/", musicControllers.getAllMusicPosts);

module.exports = router;
