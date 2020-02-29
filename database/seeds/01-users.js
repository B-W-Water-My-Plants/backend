const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
    return knex('users')
      .del()
      .then(function() {
        return knex('users').insert([
          {
            username: 'test',
            password: bcrypt.hashSync("testing", 12),
          },
        ]);
      });
  };
  