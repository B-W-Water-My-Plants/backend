exports.up = function(knex) {
  return knex.schema.createTable("plants", plants => {
    plants.increments();
    plants
      .string("nickname", 255)
      .unique()
      .notNullable();
    plants.string("species", 255).notNullable();
    plants.string("h2o_frequency", 255).notNullable();
    plants.string("image", 255)
    plants
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("plants");
};