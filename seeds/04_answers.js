const answers = [
  {
    "question_id": 1,
    "answer_array": null
  }, {
    "question_id": 2,
    "answer_array": null
  }, {
    "question_id": 3,
    "answer_array": JSON.stringify(["chicken", "beef", "beans", "pork"])
  }, {
    "question_id": 4,
    "answer_array": JSON.stringify(["salsa", "cheese", "sour cream", "guacamole"])
  }, {
    "question_id": 5,
    "answer_array": null
  }, {
    "question_id": 6,
    "answer_array": null
  }, {
    "question_id": 7,
    "answer_array": null
  }, {
    "question_id": 8,
    "answer_array": JSON.stringify(["Republican", "Democrat", "Nazi", "Commie"])
  }, {
    "question_id": 9,
    "answer_array": null
  }
]

exports.seed = function(knex, Promise) {
  return knex('answers').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('answers_id_seq', 1, false);"
      )
    })
    .then(() => {
      return knex('answers').insert(answers);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('answers_id_seq', (SELECT MAX(id) FROM answers));"
      );
    });
};
