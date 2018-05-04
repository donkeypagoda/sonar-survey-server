exports.up = function(knex, Promise) {
  return knex.schema.createTable("responses", table =>{
    table.increments();
    table.integer("survey_id").references("surveys.id").notNullable().onDelete('CASCADE');
    table.integer("question_id").references("questions.id").notNullable().onDelete('CASCADE');
    table.integer("user_id").references("users.id").notNullable().onDelete('CASCADE');
    table.string("response_string").defaultTo(null);
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("responses")
};
