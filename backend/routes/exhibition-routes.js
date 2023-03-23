const express = require("express");
const router = express.Router();
const exhibitionControllers = require("../controllers/exhibition-controllers");

router.get("/", exhibitionControllers.getAllExhibitonPosts);

module.exports = router;
