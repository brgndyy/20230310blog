const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user-controllers");
const { isLoggedIn, isNotLoggedIn } = require("../middleware/checkLoggedIn");

// isNotLoggedIn 을 통해 로그인을 안한 상태여야지만 signUp과 login 가능
router.post("/signup", isNotLoggedIn, userControllers.signUp);
router.post("/login", isNotLoggedIn, userControllers.login);

router.get("/write", isLoggedIn, (req, res) => {
  res.json({ message: "writePage 입니다." });
});

module.exports = router;
