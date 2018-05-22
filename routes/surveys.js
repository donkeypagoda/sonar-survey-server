const express = require('express')
const jwt = require("jsonwebtoken")
const knex = require("../knex")

const router = express.Router()

router.get('/survey', (req, res, next) =>{
  knex('surveys').then((surveys) => {
    console.log(surveys)
    res.send({surveys})
  })
  .catch((err) => next(err))
})

router.get('/survey/:id', (req, res, next) =>{
  knex('surveys').where("id", req.params.id)
    .then((survey) => {
      res.send(survey)
    })
    .catch((err) => next(err))
})

router.get('/survey/q_and_a/:id', (req, res, next) =>{
  knex("surveys").innerJoin("questions", "questions.survey_id", "surveys.id")
    .innerJoin("answers", "questions.id", "answers.question_id")
    .where("surveys.id", req.params.id)
    .then((qAndA) => {
      console.log(qAndA)
      res.send(qAndA)
    })
    .catch((err) => next(err))
})


router.post('/survey', (req, res, next) => {
  knex("surveys").where("title", req.body.title).andWhere("user_id", req.body.user_id)
    .then((row) => {
      if (row) return next(console.log("There is already a survey with this title created by this user"))
      const newSurvey ={
        "title": req.body.title,
        "url": req.body.url,
        "user_id": req.body.user_id
      }
      return knex("surveys").insert(newSurvey, '*')
      .then((result) =>{
        console.log(result)
        res.send(result)
      })
      .catch((err) =>{
        return next(err)
      })
    })
    .catch((err) =>{
      return next(err)
    })
})

module.exports = router;
