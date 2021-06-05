const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {mongoose} = require('./connection/db.js')
const ques = require('./controller/question.js')
const opt = require('./controller/option.js')
const ans = require('./controller/answer.js')

var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.get("/", (req,res)=>{
  res.send("Server Started")
});

app.listen(3000, () => console.log('Server Started at port 3000'))

app.use("/questions", ques);
app.use("/options", opt);
app.use("/answers", ans);