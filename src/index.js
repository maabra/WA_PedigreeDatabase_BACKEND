import express from "express";
import uzgajivaci from "./uzgajivacidb.js";
import legla from "./legladb.js";
import uzgajivacnice from "./uzgajivacnicedb.js";
import psi from "./psidb.js";
import cors from "cors";

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status:
      "Početna stranica Pedigree Databasea, dostupne stranice: /uzgajivaci_lista, /leglo_lista, /pas, /uzgajivacnice, /unosvlasnika, /unospsa, /unosuzgajivacnice, /brisanjepsa",
  });
});

app.get("/uzgajivaci_lista", (req, res) => {
  res.json(uzgajivaci);
});

app.get("/leglo_lista", (req, res) => {
  res.json(legla);
});

app.get("/uzgajivacnice", (req, res) => {
  res.json(uzgajivacnice);
});

app.get("/psi", (req, res) => {
  res.json(psi);
});

app.get("/unos_vlasnika", (req, res) => {
  res.json({
    status: "Unos podataka vlasnika se vrši ovdje i biti će POST",
  });
  res.send();
});

app.get("/unos_psa", (req, res) => {
  res.json({
    status: "Unos podataka psa se vrši ovdje i biti će POST",
  });
  res.send();
});

app.get("/unos_uzgajivacnice", (req, res) => {
  res.json({
    status: "Unos podataka uzgajivačnice se vrši ovdje i biti će POST",
  });
  res.send();
});

app.get("/unos_legla", (req, res) => {
  res.json({
    status: "Unos podataka legla se vrši ovdje i biti će POST",
  });
  res.send();
});

app.get("/azuriranje_psa", (req, res) => {
  res.json({
    status: "Ažuriranje podataka psa se vrši ovdje i biti će PUT",
  });
  res.send();
});
app.get("/azuriranje_vlasnika", (req, res) => {
  res.json({
    status: "Ažuriranje podataka vlasnika se vrši ovdje i biti će PUT",
  });
  res.send();
});
app.get("/azuriranje_uzgajivacnice", (req, res) => {
  res.json({
    status: "Ažuriranje podataka uzgajivačnice se vrši ovdje i biti će PUT",
  });
  res.send();
});
app.get("/azuriranje_legla", (req, res) => {
  res.json({
    status: "Ažuriranje podataka legla se vrši ovdje i biti će PUT",
  });
  res.send();
});
app.get("/brisanje_psa", (req, res) => {
  res.json({
    status: "Brisanje podataka psa se vrši ovdje i biti će DELETE",
  });
  res.send();
});
app.use(function (req, res, next) {
  var err = new Error("Ne postoji");
  err.status = 404;
  next(err);
});

/*
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});
*/
app.listen(port, () =>
  console.log(`\n\n[DONE] Backend: http://localhost:${port}/\n\n`)
);
