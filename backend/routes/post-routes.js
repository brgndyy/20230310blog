const express = require("express");
const router = express.Router();
const musicControllers = require("../controllers/music-controllers");
const movieControllers = require("../controllers/movie-controllers");
const exhibitionControllers = require("../controllers/exhibition-controllers");
const etcControllers = require("../controllers/etc-controllers");
const bookControllers = require("../controllers/book-controllers");

router.get("/music", musicControllers.getAllMusicPosts);
router.get("/movie", movieControllers.getAllMoviePosts);
router.get("/exhibition", exhibitionControllers.getAllExhibitonPosts);
router.get("/etc", etcControllers.getAllEtcPosts);
router.get("/book", bookControllers.getAllBookPosts);

module.exports = router;
