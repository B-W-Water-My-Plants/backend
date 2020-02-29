const express = require('express');

const authRouter = require("../routers/auth-router.js");
const plantsRouter = require("../routers/plants-router.js");
const restricted = require("../middleware/auth-restricted.js");

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter);
server.use("/api", restricted, plantsRouter);

server.get("/", (req, res) => {
  res.json({ message: "Welcome to Water My Plants" });
});

module.exports = server;