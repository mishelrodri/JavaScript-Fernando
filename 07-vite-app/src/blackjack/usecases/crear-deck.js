import _ from "underscore";

/**
 *Esta funcion crea un nuevo deck
 * @param {array<string>} tiposCarta Ejemplo ["C", "D", "H", "S"]
 * @param {array<string>} tiposEspeciales
 * @returns {array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || tiposCarta.length === 0) throw Error("TiposdeCarta es obligatorio como un arr de strings");
  if (!tiposEspeciales || tiposEspeciales.length === 0) throw Error("tiposEspeciales es obligatorio como un arr de strings");
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  // console.log(deck); // deck sin ordenar
  deck = _.shuffle(deck);
  //console.log(deck);

  return deck;
};

// export default crearDeck;
