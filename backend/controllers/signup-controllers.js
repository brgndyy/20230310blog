const signup = (req, res) => {
  const { userId, password } = req.body;

  res.json({ userId: userId, password: password });
};

exports.signup = signup;
