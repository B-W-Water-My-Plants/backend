const express = require("express");
const router = express.Router();
const Plants = require("../models/plants-model.js");
const UserDb = require('../models/users-model.js')

router.post('/:id/plants', validateUserId, (req, res) => {
  Plants.insert({ user_id: req.params.id, ...req.body })
    .then((newPlant) => {
      res.status(201).json(newPlant)
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error, new plant was not created"})
    })
})

router.get("/:id/plants", validateUserId, (req, res, next) => {
  Plants.findByUser(req.params.id) 
    .then(plant => {
      res.status(200).json(plant);
    })
    .catch(err => {
      next(err);
    });
});

router.get(":id/plants/:plantId", validateUserId, (req, res, next) => {
  Plants.findById(req.params.plantId)
    .then(plant => {
      res.status(200).json(plant);
    })
    .catch(err => {
      next(err);
    });
  })

// router.put("/:id", (req, res, next) => {
//   Plants.update(req.params.id, req.body) 
//     .then(updated => {
//       res.status(200).json(updated);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// router.delete("/:id", (req, res, next) => {
//   Plants.remove(req.params.id)
//     .then(removed => {
//       res.status(200).json(removed);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

function validateUserId(req, res, next) {
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
      res.status(500).json({ error: "The project information could not be retrieved." })
  })
}

module.exports = router;
