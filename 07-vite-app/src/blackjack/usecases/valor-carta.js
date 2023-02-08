
/**
 * 
 * @param {string} carta 
 * @returns 
 */

export const valorCarta = (carta) => {
    // el valor substring(se incluye, no se incluye)
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
