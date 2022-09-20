/*require("dotenv").config();

import express, { query } from "express";
import cors from "cors";
import mongo from "mongodb";
import { uzgajivaci } from "./uzgajivacidb.js";
import { legla } from "./legladb.js";
import { dogs } from "./psidb.js";

const port = 3000; // port na kojem će web server slušati
app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");
const path = require("path");

const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

console.log(dogs);*/
require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const app = express();
app.use(express.json());
const database = mongoose.connection;

const routes = require('./routes');
app.use('/api', routes)
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


app.post("/adddog", async (req, res) => {
  let data = req.body;

  let result = await connect.collection("dogs").insertOne(data);

  if (result) {
    res.json(result);
  } else {
    res.json({ status: "Failed" });
  }
});
/*app.post("/adddog", async (req, res) => {
    let data = req.body;
  
    let time = new Date().getTime();
    data.postedAt = new Date(time).toISOString().substring(0, 10);
  
    let db = await connect();
    let result = await db.collection("Dogs").insertOne(data);
  
    if (result) {
      res.json(result);
    } else {
      res.json({ status: "Nije spremljeno" });
    }
  });

app.get("/dog", async (req, res) => {
  let db = await connect();
  let query = req.query;
  let selekcija = {};
      dogName: "",
      dogSex: "",
      dogBirth: "",
      dogKennel: "",
      dogCacib: "",
      dogCac: "",
      dogMother: "",
      dogFather: "",
      dogGrandmaMother: "",
      dogGrandpaMother: "",
      dogGrandmaFather: "",
      dogGrandpaFather: "",
  if (query._any) {
    let search = query._any;
    let terms = search.split(" ");

    selekcija = {
      $and: [],
    };

    terms.forEach((term) => {
      let or = {
        $or: [],
      };

      atributi.forEach((atribut) => {
        or.$or.push({ [atribut]: new RegExp(term) });
      });

      selekcija.$and.push(or);
    });
  }

  let cursor = await db.collection("Dogs").find(selekcija);
  let results = await cursor.toArray();

  res.send(results);
});
*/
