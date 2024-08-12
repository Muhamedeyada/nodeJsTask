const { model } = require("mongoose");
const Post = model("Post", { name: String });
module.exports = Post;
