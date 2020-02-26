const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { genToken } = require("../middleware/gentoken.js");
const {
  findBy,
  insert,
} = require("../models/users-model")

router.post("/register", (req, res, next) => {
  const user = req.body;
  if (user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    insert(req.body)
      .then(user => {
        res
          .status(200)
          .json({ message: "User registration successful." });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/login", (req, res, next) => {
  let { username, password } = req.body;

  if (username && password) {
    findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = genToken(user);
          res.status(200).json({ username: user.username, token: token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
