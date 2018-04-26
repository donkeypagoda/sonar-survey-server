//hashed passwords were created using a WF of 12

const users = [
  {
    'name': 'puppy',
    'email': 'puppy@gmail.com',
    'hashed_password': '$2a$12$xJEHUFKQ0W2hKu5pPmvttetkIpIheqQ0se3juBrN0EaiejgJ3Qmq2'
  }, {
    'name': 'kitty',
    'email': 'kitty@gmail.com',
    'hashed_password': '$2a$12$QOvBdL3pbqxgmOmk9v1nuuI61WgrWIgpRDohe96y9JWeWjRSigHPe'
  }
];

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', 1, false);"
      )
    })
    .then(() => {
      return knex('users').insert(users);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
