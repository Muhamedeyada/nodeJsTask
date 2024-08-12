const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const port = 3000;
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use((req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
});
app.use("/posts", postsRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  const absPath = path.join(__dirname, "index.html");
  res.sendFile(absPath);
});
mongoose.connect("mongodb://127.0.0.1:27017/post").then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
app.use((req, res, next) => {
  res.status(404).send("not found");
});
