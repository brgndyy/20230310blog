const express = require("express");
const router = express.Router();
const singUpControllers = require("../controllers/signup-controllers");

router.post("/", singUpControllers.signUp);

module.exports = router;
