const express = require('express')
var router = express.Router();

const {Answer} = require('../Model/answer')
const ObjectId = require('mongoose').Types.ObjectId

// retrieving all the records from database
router.get('/', (req, res) => {

    Answer.find((err, answers) => {
        if (err) res.status(500).json({ error: "The answer information could not be retrieved." })
        else res.send(answers)
    })
})

// retriving ans as per the matched ans id 
router.get('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Answer.findById(id, (err, ans) => {
            if (err) res.status(500).json({ errorMessage: "answers could not be retrieved." })
            else {
                if (ans) res.send(answers)

                else res.status(404).json({ message: "ans with the specified ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid ans id' })
    }
})



// adding new answer into database
router.post('/', (req, res) => {

    if (req.body.answer) {

        // answer details
        const ans = new Answer({
            answer: req.body.answer
        })

        //saving answer into database
        ans.save((err, ans) => {
            if (err) {
                res.status(500).json({ errorMessage: "There was an error while saving the answer to the database" })
            }
            else res.status(201).json({ Created_Answer: ans })
        })
    } else {
        res.status(400).json({ error: 'Please provide valid ans for the ans' })
    }
})


// updating answer
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const newAnswer={
        answer:req.body.answer
    }
    Answer.findByIdAndUpdate(req.params.id,{$set:newAnswer},{new:true},(err, answers)=>{
        if(err){
            res.status(500).send({errorMessage: "Answer could not be updated." })
        }
        res.send(answers)
    })
})

// deleting ans if the specified ans id is found 
router.delete('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Answer.findByIdAndRemove(id, (err, ans) => {
            if (err) res.status(500).json({ errorMessage: "ans could not be retrieved." })
            else {
                if (ans) res.status(201).json({ message: "Answer was deleted Successfully" })

                else res.status(404).json({ message: "ans with the specified ans ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid ans id' })
    }
})


module.exports = router