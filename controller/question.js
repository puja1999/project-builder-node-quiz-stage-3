const express = require('express')
var router = express.Router();

const {Question} = require('../Model/question')
const ObjectId = require('mongoose').Types.ObjectId

// retrieving all the records from database
router.get('/', (req, res) => {

    Question.find((err, questions) => {
        if (err) res.status(500).json({ error: "The question information could not be retrieved." })
        else res.send(questions)
    })
})


// retriving ques as per the matched question id 
router.get('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Question.findById(id, (err, ques) => {
            if (err) res.status(500).json({ errorMessage: "questions could not be retrieved." })
            else {
                if (ques) res.send(questions)

                else res.status(404).json({ message: "ques with the specified ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid id' })
    }
})

// adding new document to the database
router.post('/', (req, res) => {

    if (req.body.question) {

        // ques details
        const ques = new Question({
            question:req.body.question
        })

        //saving data into database
        ques.save((err, ques) => {
            if (err) {
                res.status(500).json({ errorMessage: "There was an error while saving the ques to the database" })
            }
            else res.status(201).json({ Created_Question: ques })
        })
    } else {
        res.status(400).json({ error: 'Please provide question for ques' })
    }
})


// updating question document
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const updatedQuestion={
        question:req.body.question
    }
    Question.findByIdAndUpdate(req.params.id,{$set:updatedQuestion},{new:true},(err, questions)=>{
        if(err){
            res.status(500).send({errorMessage: "Question could not be updated." })
        }
        res.send(questions)
    })
})


// deleting the ques document if the specified ques id is found 
router.delete('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Question.findByIdAndRemove(id, (err, ques) => {
            if (err) res.status(500).json({ errorMessage: "questions could not be deleted." })
            else {
                if (ques) res.status(201).json({ message: "Question was deleted Successfully" })

                else res.status(404).json({ message: "ques with the specified ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid id' })
    }
})


module.exports = router