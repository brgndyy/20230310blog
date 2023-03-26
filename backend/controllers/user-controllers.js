const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");

const signUp = async (req, res, next) => {
  res.json({ message: "회원가입페이지입니다." });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  let isValidPassword = false;

  try {
    existingUser = await User.findOne({
      where: {
        email: email,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "로그인에 실패하셨습니다. 아이디 또는 비밀번호를 다시 확인해주세요.",
      500
    );
    return next(error);
  }

  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("비밀번호를 다시 입력해주세요", 500);
    return next(error);
  }

  res.json({ message: "로그인에 성공하셨습니다." });
};

const getWrite = (req, res, next) => {
  res.json({ message: "글쓰기 페이지입니다." });
};

exports.signUp = signUp;
exports.login = login;
exports.getWrite = getWrite;
