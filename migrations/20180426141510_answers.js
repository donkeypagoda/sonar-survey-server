exports.up = function(knex, Promise) {
  return knex.schema.createTable("answers", table => {
    table.increments();
    table.integer("question_id").references("question_id").notNullable().onDelete('CASCADE');
    table.json("answer_array").defaultTo([])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("answers")
};
