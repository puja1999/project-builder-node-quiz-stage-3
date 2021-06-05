const mongoose = require('mongoose'), Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    ques: String
    
})


const Question = mongoose.model("ques", QuestionSchema)

module.exports = {Question};