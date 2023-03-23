const express = require("express");
const router = express.Router();
const movieControllers = require("../controllers/movie-controllers");

router.get("/", movieControllers.getAllMoviePosts);

module.exports = router;
