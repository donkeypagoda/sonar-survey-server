const expres = require("express")
const knex = require("../knex")

router.get("/results/:id" (req, res, next) => {
  knex("responses").where("survey_id", req.params.survey_id)
    .then((results) => {
      res.send(results)
    })
    .catch(err => next(err))
})

router.post("/results/:id" (req, res, next) => {
  newResponse = {
    "survey_id": req.body.survey_id;
    "question_id": req.body.question_id  ///hmmmm this needs to be either an iterative insert, OR MORE LIKELY I NEED TO CHANGE MY DATABASE STRUCTURE!!

  }
  knex("responses").where("sur")
})

module.exports = router
