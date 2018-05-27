exports.up = function(knex, Promise) {
  return knex.schema.createTable("answers", table => {
    table.increments();
    table.integer("question_id").references("questions.id").notNullable().onDelete('CASCADE');
    table.specificType("answer_array", "array")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("answers")
};
