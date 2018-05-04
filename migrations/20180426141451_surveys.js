exports.up = function(knex, Promise) {
  return knex.schema.createTable("surveys", table =>{
    table.increments();
    table.string("title").notNullable().unique();
    table.string("url").notNullable().unique();
    table.integer("user_id").references("users.id").notNullable().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("surveys")
};
