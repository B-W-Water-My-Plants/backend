const express = require('express');

const authRouter = require("../routers/auth-router.js");

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
  res.json({ message: "Welcome to Water My Plants" });
});

module.exports = server;