import _ from "underscore";

/**
 *
 * @param {array} tiposCarta
 * @param {array} tiposEspeciales
 * @returns {array}
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta) throw Error("TiposdeCarta es obligatorio");

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
