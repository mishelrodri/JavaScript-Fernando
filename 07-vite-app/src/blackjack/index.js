import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta } from "./usecases";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;

  let puntosJugadores = [];
  // REFERENCIAS DEL HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo"),
    btnDetener = document.querySelector("#btnDetener"),
    puntosHTML = document.querySelectorAll("small"),
    divCartasjugador = document.querySelectorAll(".divCartas");

  //Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasjugador.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };


  // turno:0 = primer jugador y el ultimo la compu
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imagen = document.createElement("img");
    imagen.src = `assets/cartas/${carta}.png`;
    imagen.classList.add("carta");
    divCartasjugador[turno].append(imagen);
  };

  //Turno de la computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("jugador gana");
      } else {
        alert("Computadora gana");
      }
    }, 100);
  };
  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("Genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  const gano = () => {
    if (puntosJugador > puntosComputadora && puntosJugador <= 21) {
      alert("GANASTE");
    } else {
      alert("NO GANASTE");
    }
  };

  return {
    nuevoJuego: inicializarJuego,
  };
})();
