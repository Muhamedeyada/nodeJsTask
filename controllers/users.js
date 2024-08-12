const User = require("../models/users");
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  res, send({ message: "User created", user });
};
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res, send({ message: "User created", user });
  };
  