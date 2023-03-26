const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/post-controllers");

router.get("/music", postControllers.getAllMusicPosts);
router.get("/movie", postControllers.getAllMoviePosts);
router.get("/exhibition", postControllers.getAllExhibitonPosts);
router.get("/etc", postControllers.getAllEtcPosts);
router.get("/book", postControllers.getAllBookPosts);

module.exports = router;
