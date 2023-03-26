const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");

const signUp = async (req, res, next) => {
  res.json({ message: "회원가입페이지입니다." });
};

const login = async (req, res, next) => {
  res.json({ message: "로그인 페이지입니다." });
};

exports.signUp = signUp;
exports.login = login;
