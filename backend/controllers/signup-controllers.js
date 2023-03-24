const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");

const signUp = async (req, res, next) => {
  res.json({ message: "회원가입페이지입니다." });
};

exports.signUp = signUp;
