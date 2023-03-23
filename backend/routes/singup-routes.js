const express = require("express");
const router = express.Router();
const signupControllers = require("../controllers/signup-controllers");

router.post("/", signupControllers.signup);

module.exports = router;
