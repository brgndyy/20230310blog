const HttpError = require("../error/http-error");

const isLoggedIn = (req, res, next) => {
  console.log(req.isAuthenticated());
  // 로그인 된 사람들만 접근할수 있도록
  if (req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("로그인이 필요합니다.", 403);
    return next(error);
  }
};

const isNotLoggedIn = (req, res, next) => {
  // 로그인 안된 사람들만 접근 할 수 있도록
  if (!req.isAuthenticated()) {
    next();
  } else {
    const error = new HttpError("이미 로그인하신 상태입니다.", 403);
    return next(error);
  }
};

exports.isLoggedIn = isLoggedIn;
exports.isNotLoggedIn = isNotLoggedIn;
