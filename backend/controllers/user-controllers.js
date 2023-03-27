const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../error/http-error");
const passport = require("passport");

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

  try {
    req.login(newUser, { session: true }, (err) => {
      if (err) {
        const error = new HttpError(
          "회원가입은 됐는데 로그인에 실패하셨습니다."
        );
        return next(error);
      }
      return res.status(201).json({ newUser: newUser });
    });
  } catch (err) {
    const error = new HttpError("알수 없는 에러", 500);
    return next(error);
  }
};

const login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      const error = new HttpError(
        "로그인 중 문제가 발생했습니다. 다시 로그인 해주세요",
        500
      );
      return next(error);
    }
    if (!user) {
      const error = new HttpError("로그인에 실패했습니다!", 500);
      return next(error);
    }

    return req.login(user, (loginError) => {
      if (loginError) {
        const error = new HttpError("로그인에 실패하셨습니다!", 500);
        return next(error);
      }
      res.cookie("user", user, { httpOnly: true });
      res.json({ user: user, cookie: res.cookie });
    });
  })(req, res, next);
};

const getWrite = (req, res, next) => {
  res.json({ message: "글쓰기 페이지입니다." });
};

exports.signUp = signUp;
exports.login = login;
exports.getWrite = getWrite;
