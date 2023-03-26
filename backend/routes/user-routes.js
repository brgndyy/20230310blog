const express = require("express");
const router = express.Router();
const singUpControllers = require("../controllers/signup-controllers");

router.post("/signup", singUpControllers.signUp);

module.exports = router;
