exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("name").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("hashed_password").notNullable();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
};
