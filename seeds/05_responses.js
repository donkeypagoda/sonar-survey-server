const responses = [
  {
    "survey_id": 1,
    "question_id": 1,
    "user_id": 1,
    "response_string": true
  }, {
    "survey_id": 1,
    "question_id": 2,
    "user_id": 1,
    "response_string": 7
  }, {
    "survey_id": 1,
    "question_id": 3,
    "user_id": 1,
    "response_string": "chicken"
  }, {
    "survey_id": 1,
    "question_id": 4,
    "user_id": 1,
    "response_string": "cheese"
  }, {
    "survey_id": 1,
    "question_id": 5,
    "user_id": 1,
    "response_string": "give me free food"
  }, {
    "survey_id": 1,
    "question_id": 1,
    "user_id": 2,
    "response_string": false
  }, {
    "survey_id": 1,
    "question_id": 2,
    "user_id": 1,
    "response_string": 2
  }, {
    "survey_id": 1,
    "question_id": 3,
    "user_id": 2,
    "response_string": "beef"
  }, {
    "survey_id": 1,
    "question_id": 4,
    "user_id": 2,
    "response_string": "salsa"
  }, {
    "survey_id": 1,
    "question_id": 5,
    "user_id": 2,
    "response_string": "nothing, you're my heros!"
  }, {
    "survey_id": 2,
    "question_id": 1,
    "user_id": 1,
    "response_string": true
  }, {
    "survey_id": 2,
    "question_id": 2,
    "user_id": 1,
    "response_string": true
  }, {
    "survey_id": 2,
    "question_id": 3,
    "user_id": 1,
    "response_string": "Commie"
  }, {
    "survey_id": 2,
    "question_id": 4,
    "user_id": 1,
    "response_string": "Father John Misty"
  }, {
    "survey_id": 2,
    "question_id": 1,
    "user_id": 2,
    "response_string": false
  }, {
    "survey_id": 2,
    "question_id": 2,
    "user_id": 2,
    "response_string": false
  }, {
    "survey_id": 2,
    "question_id": 3,
    "user_id": 2,
    "response_string": "Nazi"
  }, {
    "survey_id": 2,
    "question_id": 4,
    "user_id": 2,
    "response_string": "SATAN"
  }
]

exports.seed = function(knex, Promise) {
  return knex('responses').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('responses_id_seq', 1, false);"
      )
    })
    .then(() => {
      return knex('responses').insert(responses);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM responses));"
      );
    });
};
