const UserDb = require("../models/users-model")

module.exports = (req, res, next) => {
  const { id } = req.params

  UserDb.findById(id)
    .then((user) => {
      if (user) {
      next()
      } else {
        res.status(404).json({ message: "invalid user id" })
      }
    })
    .catch(() => {
      res.status(500).json({ error: "The information could not be retrieved." })
  })
}