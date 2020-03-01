exports.seed = function(knex, Promise) {
  return knex("plants").insert([
    {
      id: 1,
      nickname: "Sammy",
      species: "Cactus",
      h2o_frequency: "Monthly",
      image: "pictureurl",
      user_id: 1
    },
    {
      id: 2,
      nickname: "Fred",
      species: "Fern",
      h2o_frequency: "Weekly",
      image: "pictureurl",
      user_id: 1
    }
  ]);
};
