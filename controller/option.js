const express = require('express')
var router = express.Router();

const {Option} = require('../Model/option')
const ObjectId = require('mongoose').Types.ObjectId

// retrieving all the records from database
router.get('/', (req, res) => {

    Option.find((err, opt) => {
        if (err) res.status(500).json({ error: "The opt information could not be retrieved." })
        else res.send(options)
    })
})

// retriving opt as per the matched opt id 
router.get('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Option.findById(id, (err, opt) => {
            if (opt) res.status(500).json({ errorMessage: "options could not be retrieved." })
            else {
                if (opt) res.send(options)

                else res.status(404).json({ message: "opt with the specified ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid id' })
    }
})


// adding new option into database
router.post('/', (req, res) => {

    if (req.body.optionA && req.body.optionB && req.body.optionC && req.body.optionD) {

        // opt details
        const opt = new Option({
            optionA:req.body.optionA,
            optionB:req.body.optionB,
            optionC:req.body.optionC,
            optionD:req.body.optionD
        })

        //saving data into database
        opt.save((err, opt) => {
            if (err) {
                res.status(500).json({ errorMessage: "There was an error while saving opt to the database" })
            }
            else res.status(201).json({ Created_Option: opt })
        })
    } else {
        res.status(400).json({ error: 'Please provide valid option' })
    }
})
   

// updating options
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const newOption={
        optionA:req.body.optionA,
        optionB:req.body.optionB,
        optionC:req.body.optionC,
        optionD:req.body.optionD
    }
    Option.findByIdAndUpdate(req.params.id,{$set:newOption},{new:true},(err, options)=>{
        if(err){
            res.status(500).send({errorMessage: "Option could not be updated." })
        }
        res.send(options)
    })
})

// deleting opt as per specified opt id  
router.delete('/:id', (req, res) => {
    const id = req.params.id

    if (ObjectId.isValid(id)) {

        Option.findByIdAndRemove(id, (err, opt) => {
            if (err) res.status(500).json({ errorMessage: "options could not be retrieved." })
            else {
                if (opt) res.status(201).json({ message: "Option was deleted Successfully" })

                else res.status(404).json({ message: "opt with specified ID does not exist." })
            }
        })

    } else {
        res.status(400).json({ error: 'Please enter valid opt id' })
    }
})

module.exports = router