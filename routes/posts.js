// const fs = require("fs/promises");
const express = require("express");
const router = express.Router();
const {
  getPsot,
  CreatePost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.get("/",getPosts);
router.post("/",createPost);
router.patch("/:name",updatePost);
router.delete("/:name",deletePost);

module.exports = router;
