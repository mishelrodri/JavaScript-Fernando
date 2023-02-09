import { pedirCarta } from './';
import { acumularPuntos } from './'
import { crearCarta } from './'
import { determinarGanador } from './'
//Turno de la computadora
/**
 *  
 * @param {Number} puntosMinimos que la computadora necesita pa ganr
 * @param {Array<String>} puntosMinimos que la computadora necesita pa ganr
 */
export const turnoComputadora = (puntosMinimos, deck = [], puntosJugadores, puntosHTML, divCartasjugador) => {
    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios')
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasjugador);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador(puntosJugadores);
};
