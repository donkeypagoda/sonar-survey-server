exports.up = function(knex, Promise) {
  return knex.schema.createTable("surveys", table =>{
    table.increments();
    table.string("title").notNullable().unique();
    table.string("url").notNullable().unique();
    table.integer("user_id").references("users.id") //.notNullable().onDelete('CASCADE'); - I think I want to be able to delete a user without deleting their survey
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("surveys")
};
