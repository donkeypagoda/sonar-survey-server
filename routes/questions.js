const express = require("express")
const knex = require("../knex")

const router = express.Router()

router.get('/questions/:id', (req, res, next) =>{
  knex("questions").where("id", req.params.id)
    .then(question => res.send(question))
    .catch(err => next(err))
})

router.get("/questions/:survey_id", (req, res, next) => {
  knex('questions').where("survey_id", req.params.id)
    .then(questions => res.send(questions))
    .catch(err => next(err))
})

router.post("/questions", (req, res, next) => {
  const newQuestion = {
    "survey_id": req.body.survey_id,
    "prompt": req.body.prompt,
    "answer_type": req.body.prompt
  }
  return knex("questions").insert(newQuestion, "*")
    .then((result) => {
      res.send(result)
      console.log(result)
    })
    .catch(err => next(err))
})

module.exports = router
