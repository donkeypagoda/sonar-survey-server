const express = require("express")
const knex = require("../knex")

const router = express.Router()

// there is one row, per question, per response, per user.

// router.get('/results/:survey_id', (req, res, next) =>{
//   knex("responses").innerJoin("questions", "questions.survey_id", "responses.survey_id")
//     .innerJoin("answers", "questions.id", "answers.question_id")
//     .where("responses.survey_id", req.params.survey_id)
//     .then((responses) => {
//       console.log(responses)
//       res.send({responses})
//     })
//     .catch((err) => next(err))
// })

router.get('/results/:survey_id', (req, res, next) =>{
  knex("surveys").innerJoin("questions", "questions.survey_id", "surveys.id")
    .innerJoin("responses", "responses.question_id", "questions.id")
    .innerJoin("answers", "answers.question_id", "questions.id")
    .where("surveys.id", req.params.survey_id)
    .then((responses) => {
      console.log(responses)
      res.send({responses})
    })
    .catch((err) => next(err))
})

router.post("/results", (req, res, next) => {
  const newResponse = {
    "survey_id": req.body.survey_id,
    "question_id": req.body.question_id,
    "user_id": req.body.user_id,
    "response_string": req.body.response_string,
  }
  knex("responses").insert(newResponse, "*")
    .then((result) => {
      res.send(result)
      console.log(result)
    })
    .catch(err => {
      return next(err)
    })
})

module.exports = router;
