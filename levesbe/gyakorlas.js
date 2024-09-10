// Ismétlés...
//import { kutyaKiir } from "./fuggvenyek.js";
import { kutyaLISTA } from "./adat.js";
import Kartya from "./Kartya.js";

let cim = "Minden amit a kutyákról tudni kell!"; // globális, blokkszintű {}
cim = "Minden, ami kutyákkal kapcsolatos!";

const nev = "Szilárd"; // globális, blokkszintű {}

// var globális, függvény szintű

const cimELEM = $("header");
cimELEM.append(`<p>${cim}</p>`);
// Kutya adatait szeretném tárolni, név, kor, nem

const tartalomELEM = $(".tartalom");
// kutya1 = {nev: "Morzsi"} -> ilyet nem lehet mert új memóriacímet adna a kutya1 konstans értéknek.
// kutya1.nev = "Morzsi";
