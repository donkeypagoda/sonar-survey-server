const surveys = [
  {
    "title": "customer satisfaction",
    "url": "customer_satisfaction",
    "user_id": 1
  }, {
    "title": "lets talk politics",
    "url": "lets_talk_politics",
    "user_id": 2
  }
]


exports.seed = function(knex, Promise) {
  return knex('surveys').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('surveys_id_seq', 1, false);"
      )
    })
    .then(() => {
      return knex('surveys').insert(surveys);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('surveys_id_seq', (SELECT MAX(id) FROM surveys));"
      );
    });
};
