import express, { query } from "express";
import cors from "cors";
import mongo from "mongodb";
import {dogs} from "./store.js"
const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati
app.use(express.json());
app.use(cors());
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

console.log(dogs)
app.get("/dog", (req, res) => {
  let psi = dogs
  res.json(dogs)
}
)
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

app.listen(port, () => console.log(`Slušam na portu ${port}!`))
