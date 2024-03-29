const passport = require("passport");
const User = require("../models/user");
const local = require("./localStrategy");

module.exports = () => {
  passport.serializeUser(async (user, done) => {
    await done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id: id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
};
