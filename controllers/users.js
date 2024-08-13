const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwtSign = util.promisify(sign);
const { sign } = require("jsonwebtoken");
const Joi = require("joi");

const validationSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().alphanum().min(8),
});
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res, send({ message: "User created", user });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("user not found ");
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    const token = await jwtSign({ userId: user._id }, "secret", {
      expireIn: "2d",
    });
    res.send({ message: "User Logged in ", token });
  } else {
    res.status(401).send({ message: "Invalid email or  or password" });
  }
};
