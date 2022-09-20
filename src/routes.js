const express = require('express');
const { db } = require('./model');
const router = express.Router()

module.exports = router;
const Model = require('./model');

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post model
router.post('/postDog', async (req, res) => {
    const data = new Model({
        dogName: req.body.dogName,
        dogSex: req.body.dogSex,
        dogBirth: req.body.dogBirth,
        dogKennel: req.body.dogKennel,
        dogCacib: req.body.dogCacib,
        dogCac: req.body.dogCac,
        dogMother: req.body.dogMother,
        dogFather: req.body.dogFather,
        dogGrandmaMother: req.body.dogGrandmaMother,
        dogGrandpaMother: req.body.dogGrandpaMother,
        dogGrandmaFather: req.body.dogGrandmaFather,
        dogGrandpaFather: req.body.dogGrandpaFather,
        dogPedNr: req.body.dogPedNr
    })

    try {
        const dataToSave = await db.collection("dogs").insertOne(data);
        res.status(200).json(dataToSave)
      
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})