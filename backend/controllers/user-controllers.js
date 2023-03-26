const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  let newUser;

  try {
    const exUser = await User.findOne({ where: { email: email } });
    if (exUser) {
      const error = new HttpError("이미 존재하는 이메일이에요! ");
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 12);

    newUser = await User.create({
      email,
      password: hashPassword,
    });
  } catch (err) {
    const error = new HttpError("회원가입에 실패하셨어요!");
  }

  res.json({ newUser: newUser });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  let isValidPassword = false;

  try {
    user = await User.findOne({
      where: {
        email: email,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "로그인에 실패하셨습니다. 나중에 다시 시도해주세요!",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      "로그인에 실패하셨어요. 아이디 또는 비밀번호를 다시 확인해주세요!",
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
