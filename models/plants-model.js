const db = require("../database/dbConfig.js");

function findByUser(user_id) {
  return db("plants").where({ user_id: user_id });
};

function findById(id) {
  return db("plants")
    .where({ id })
    .first();
};

function insert(newPlant) {
  return db("plants")
    .insert(newPlant, "id")
    .then(id => {
      return findById(id[0]);
    });
};

async function update(id, changes) {
  await db("plants")
    .where({ id })
    .first()
    .update(changes);
  return findById(id);
}

// const update = (id, updates) => {
//   return db("plants")
//     .where({ id })
//     .update(updates)
//     .then(id => {
//       console.log(id)
//       return findById(id);
//     });
// };

function remove(id) {
  return db("plants")
    .where("id", id)
    .del();
};

module.exports = {
  findByUser,
  findById,
  insert,
  update,
  remove
};
