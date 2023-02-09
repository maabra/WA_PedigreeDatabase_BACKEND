const express = require("express");
const { db } = require("./model");
const router = express.Router();

const MongoDB = require('mongodb');
const ObjectId = MongoDB.ObjectId;

module.exports = router;
const Model = require("./model");


//Delete by ID Method
/*router.delete("/delete/:id", (req, res) => {
  
  await Model.findById(req.params.id);
  res.send("Delete by ID API");
});
*/
//Get by ID Method

router.get("/getOne/:id", async (req, res) => {

  const dog = await Model.findById(req.params.id);
  res.json(dog);
  });
/*

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);

  
   //delete dogs.dogName;
    delete dogs.dogSex;
    delete dogs.dogBirth;
    //delete dogs.dogKennel;
    delete dogs.dogCacib;
    delete dogs.dogCac;
    delete dogs.dogMother;
    delete dogs.dogFather;
    delete dogs.dogGrandmaMother;
    delete dogs.dogGrandpaMother;
    delete dogs.dogGrandmaFather;
    delete dogs.dogGrandpaFather;
    //delete dogs.dogPedNr;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getOne/:id", async (req, res) => {
  const _id = req.params.id;
  Model.findOne({ _id: _id }, (error, dog) => {
    if (error) {
      res.json(error);
    } else {
      res.json(dog);
    }
  });
});

  });
});*/

//Post model
router.post("/postDog", async (req, res) => {
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
    dogPedNr: req.body.dogPedNr,
  });

  try {
    const dataToSave = await db.collection("dogs").insertOne(data);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);

  
   /* //delete dogs.dogName;
    delete dogs.dogSex;
    delete dogs.dogBirth;
    //delete dogs.dogKennel;
    delete dogs.dogCacib;
    delete dogs.dogCac;
    delete dogs.dogMother;
    delete dogs.dogFather;
    delete dogs.dogGrandmaMother;
    delete dogs.dogGrandpaMother;
    delete dogs.dogGrandmaFather;
    delete dogs.dogGrandpaFather;
    //delete dogs.dogPedNr;*/
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    
    let data = req.body;
    console.log(id);
    console.log(data);
    delete data.pas_id;

    /*const updatedData = new Model({
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
      dogPedNr: req.body.dogPedNr,
    });*/
    const updatedData = { $set: data };
    const options = { new: true };
//console.log(data._id);
    await Model.findByIdAndUpdate(id, updatedData, options);


    res.status(200).json(`Podatci o psu imena <${data.dogName}> su ažurirani!`);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).json(`Podatci o psu imena <${data.dogName}> su izbrisani!`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
