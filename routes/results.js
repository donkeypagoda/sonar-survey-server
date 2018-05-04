const expres = require("express")
const knex = require("../knex")

// there is one row, per question, per response, per user.

router.get("/results/:survey_id" (req, res, next) => {
  knex("responses").where("survey_id", req.params.survey_id)
    .then((results) => {
      res.send(results)
    })
    .catch(err => next(err))
})

router.get("/results/:user_id" (req, res, next) => {
  knex("responses").where("user_id", req.params.user_id)
    .then((results) => {
      res.send(results)
    })
    .catch(err => next(err))
})

router.get("/results/:question_id" (req, res, next) => {
  knex("responses").where("question_id", req.params.question_id)
    .then((results) => {
      res.send(results)
    })
    .catch(err => next(err))
})

router.post("/results" (req, res, next) => {
  newResponse = {
    "survey_id": req.body.survey_id;
    "question_id": req.body.question_id;
    "user_id": req.body.user_id;
    "response_string": req.body.response_string;
  }
  knex("responses").insert(newResponse, "*")
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      return next(err)
    })
})

module.exports = router
