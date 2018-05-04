const express = require ("express")
const bodyParser = require ("body-parser")
const users = require ("./routes/users")
const token = require("./routes/token")
const results = require("./routes/results")
const questions = require('./routes/questions')
const answers = require("./routes/answers")
const cors = require ("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(users)
app.use(token)
app.use(results)
app.use(questions)
app.use(answers)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("sonar survey server is listening on", port)
})
