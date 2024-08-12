const { model, Schema } = require("mongoose");
const { schema } = require("./posts");

const userSchema = new schema(
  { email: String, password: String },
  { timestamps: true }
);
const User = model("User", userSchema);
module.exports = User;
