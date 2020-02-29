exports.seed = function(knex) {
    return knex('plants')
      .del()
      .then(function() {
        return knex('plants').insert([
          {
            nickname: 'Sammy',
            species: "Cactus",
            h2o_frequency: "Monthly",
            image: "pictureurl",
            user_id: 1
          },
          {
            nickname: 'Fred',
            species: "Fern",
            h2o_frequency: "Weekly",
            image: "pictureurl",
            user_id: 1
          }
        ]);
      });
  };
  