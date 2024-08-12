// const fs = require("fs/promises");
const express = require("express");
const router = express.Router();
const { signup, login, refreshToken } = require("../controllers/user");

router.post("/signup", validation(createUser), signup);
router.post("/login", validation(loginUser), login);

router.post("/refresh-token", refreshToken);

module.exports = router;
module.exports = router;
