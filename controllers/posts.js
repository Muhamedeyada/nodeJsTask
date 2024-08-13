const Post = require("../models/posts");
const jwtSign = util.promisify(sign);
const util = require("util");
const jwtVerify = util.promisify(verify);
exports.getPosts = async (req, res) => {
  const { authorization: token } = req.headers;
  await jwtVerify(token, "secret");
  const posts = await Post.find();
  res.send(posts);
};
exports.createPost = async (req, res) => {
  const body = req.body;
  const post = new Post({ name: body.name });
  await post.save();
  res.send("Post Created");
};
exports.updatePost = async (req, res) => {
  const oldPost = req.params.name;
  const updatedPost = req.body.name;
  await Post.updateOne({ name: oldPost }, { name: updatedPost });
  res.send("Post Updated");
};
exports.deletePost = async (req, res) => {
  const name = req.params.name;
  await Post.deleteOne({ name: name });
  res.send("Post Deleted");
};
