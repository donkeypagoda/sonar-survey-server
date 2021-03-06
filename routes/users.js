const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const knex = require("../knex")

const router = express.Router()

router.post('/users', (req, res, next) => {
  knex('users').where('email', req.body.email).first()
    .then((row) => {
      if (row) {
        return next(console.log('Email is already registered to a user.'));
      }
      bcrypt.hash(req.body.password, 12)
        .then((hashed_pass) => {
          const newUser = {'name': req.body.name, 'email': req.body.email,'hashed_password': hashed_pass};
          return knex('users').insert(newUser, '*')
        })
        .then((result) => {
          result = result[0];
          delete result.password;
          console.log(result)
          res.send(result);
        })
        .catch((err) => {
          return next(err);
        })
    })
    .catch((err) => {
      return next(err);
    })
})

router.get('/users/:id', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then((user) => {
      res.send(user)
    })
    .catch((err) => next(err))
})

module.exports = router;
