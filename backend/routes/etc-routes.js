const express = require("express");
const router = express.Router();
const etcControllers = require("../controllers/etc-controllers");

router.get("/", etcControllers.getAllEtcPosts);

module.exports = router;
