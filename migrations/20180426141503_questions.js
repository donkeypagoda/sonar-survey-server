exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", table => {
    table.increments();
    table.integer("survey_id").references("surveys.id").notNullable().onDelete('CASCADE'); // this means if the survey is deleted the question is too
    table.string("prompt").notNullable().unique();
    table.string("answer_type").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("questions")
};
