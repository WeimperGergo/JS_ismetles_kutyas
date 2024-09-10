import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  #szuloELEM;

  constructor(lista, szuloELEM) {
    this.#lista = lista;
    this.#szuloELEM = szuloELEM;
    this.kartyakKiir();
  }

  kartyakKiir() {
    this.#lista.forEach((elem) => {
      new Kartya(elem, this.#szuloELEM);
    });
  }
}
