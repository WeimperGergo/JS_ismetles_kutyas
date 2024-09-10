import { kutyaLISTA } from "./model/adat.js";
import Kartya from "./view/Kartya.js";
import Kartyak from "./view/Kartyak.js";

const kivKutyaLISTA = []

const tartalomELEM = $(".tartalom");
const kivELEM = $(".kivalasztott");
new Kartyak(kutyaLISTA, tartalomELEM);

// Rákattintunk a "kiválaszt" gombra, akkor a hozzá tartozó kutya adatai kerüljenek bele a kutyaLISTA-ba
// Feliratkozunk a saját eseményünkre
$(window).on("kivalaszt", (event) => {
    //console.log(event.detail);
    kivKutyaLISTA.push(event.detail);
    new Kartya(event.detail, kivELEM);
})
