export default class Kartya {
  //adattag
  #kutyaAdat = {}; // objektum -> ha objektum, inicializálni kell
  #szuloELEM; // HTML dom elem
  //constructor
  constructor(adat, szuloELEM) {
    this.#kutyaAdat = adat;
    this.#szuloELEM = szuloELEM;
    this.kutyaKiir();

    // Létrehozzuk a gomb elemet
    this.gombELEM = $(".kiv:last"); // Hogy ne az összeset adja hozzá a következő elemhez
    //const gombELEM = $(".card:last-child .card-body button");  -> Így is lehet
    this.gombKattint();
  }

 
  //tagfüggvény
  kutyaKiir() {
    // Nem kell paraméter, mert a tagfüggvény az adatagokon dolgozik
    //const tartalomELEM = $(".tartalom");
    this.#szuloELEM.append(`
                <div class="card col-lg-4 col-md-6 col-12">
                    <div class="card-header"><h3>Név:\t${this.#kutyaAdat.nev}</h3></div>
                    <div class="card-body"><p>Kor:\t${this.#kutyaAdat.kor}</p></div>
                    <div class="card-body"><p>Nem:\t${this.#kutyaAdat.nem}</p></div>  
                    <button class="card-footer kiv btn btn-success">Kiválaszt</button>
                </div>         
            `);               // H Á Z I -> Tetszőleges objektumot lehessen megjeleníteni
  }

  gombKattint(){
    /*
      Nyílfüggvény, és function névtelen függvény között különbség a this használatában van: 
      function esetében a this azt az elemet jelenti, amelyik az eseményt kiváltotta (jelen esetben a gombot),
      nyílfüggvény esetében a nyílfüggvényt körülvelő osztály példányára fog mutatni.
      FONTOS - Interjú kérdés gyakran.
    */
    // this.gombELEM.on("click", function() {   -> ki: gomb html elem 
    this.gombELEM.on("click", () => {  // -> ki: objektum
      // console.log(this);
      // saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat
      const esem1 = new CustomEvent("kivalaszt", {detail: this.#kutyaAdat}); // 1. param esemény neve, 2. átadásra kerülő adat
      window.dispatchEvent(esem1);
    })
  }
}
