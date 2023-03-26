const HttpError = require("../error/http-error");

const isLoggedIn = (req, res, next) => {
  // 로그인 중이라면
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("로그인이 필요합니다.", 403);
    return next(error);
  }
};

const isNotLoggedIn = (req, res, next) => {
  // 아직 로그인을 안했다면
  if (!req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("이미 로그인하신 상태입니다.", 403);
    return next(error);
  }
};

exports.isLoggedIn = isLoggedIn;
exports.isNotLoggedIn = isNotLoggedIn;
