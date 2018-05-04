const express = require("express")
const knex = require("../knex")

const router = express.Router()

router.get('/questions/:id', (req, res, next) =>{
  knex("questions").where("id", req.params.id)
    .then(question => {
      res.send(question)
    })
    .catch(err => next(err))
})

router.get("questions/:survey_id", req, res, next) => {
  knex('questions').where("survey_id", req.params.id)
    .then(questions => res.send(questions))
    .catch(err => next(err))
}

module.exports = router
