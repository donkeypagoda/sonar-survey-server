exports.up = function(knex, Promise) {
  return knex.schema.createTable("answers", table => {
    table.increments();
    table.integer("question_id").references("questions.id").notNullable().onDelete('CASCADE');
    table.json("answer_array")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("answers")
};
