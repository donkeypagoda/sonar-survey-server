const questions = [
  {
    "survey_id": 1,
    "prompt": "Have you eaten our tacos?",
    "answer_type": "boolean"
  }, {
    "survey_id": 1,
    "prompt": "How much do you like our tacos?",
    "answer_type": "range"
  }, {
    "survey_id": 1,
    "prompt": "What's your favorite taco filling?",
    "answer_type": "multiple_choice"
  }, {
    "survey_id": 1,
    "prompt": "What's your favorite topping?",
    "answer_type": "multiple_choice"
  }, {
    "survey_id": 1,
    "prompt": "What can we do better?",
    "answer_type": "string"
  }, {
    "survey_id": 2,
    "prompt": "How Much Does Trump suck?",
    "answer_type": "range"
  }, {
    "survey_id": 2,
    "prompt": "Is fake news fake?",
    "answer_type": "boolean"
  }, {
    "survey_id": 2,
    "prompt": "What's your political party of choice?",
    "answer_type": "multiple_choice"
  }, {
    "survey_id": 2,
    "prompt": "Who would you like to see as president?",
    "answer_type": "string"
  }
]


exports.seed = function(knex, Promise) {
  return knex('questions').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('questions_id_seq', 1, false);"
      )
    })
    .then(() => {
      return knex('questions').insert(questions);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));"
      );
    });
};
