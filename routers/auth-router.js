const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { genToken } = require("../middleware/genToken.js");
const {
  findBy,
  insert,
} = require("../models/users-model")

router.post("/register", (req, res) => {
  let user = req.body;
  if (user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    insert(user)
      .then(user => {
        console.log(user)
        res.status(200).json({ message: "User registration successful." });
      })
      .catch(err => res.status(500).json({ message: "Error", error: err }))
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (username && password) {
    findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = genToken(user);
          res.status(200).json({ id: user.id, username: user.username, token: token });
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
