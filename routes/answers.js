const express = require("express")
const knex = require("../knex")

const router = express.Router()

router.get("/answers/:id", (req, res, next) => {
  knex('answers').where("question_id", req.params.id)
    .then(answers => res.send(answers))
    .catch((err) => next(err))
})

router.post("/answers", (req, res, next) => {
  knex("answers").insert({
      "question_id": req.body.question_id,
      "answer_array": re.body.answer_array
    }, '*')
    .then((result) => {
      res.send(result)
      console.log(result)
    })
    .catch(err => next(err))

})

module.exports = router;
