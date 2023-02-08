// ESTA FUNCION ME PERMITE TOMAR UNA CARTA

/**
 * 
 * @param {array<string>} deck 
 * @returns {string} Devuelve un valor del deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    return deck.pop();
};
