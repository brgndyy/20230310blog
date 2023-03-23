const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/book-controllers");

router.get("/", bookControllers.getAllBookPosts);

module.exports = router;
