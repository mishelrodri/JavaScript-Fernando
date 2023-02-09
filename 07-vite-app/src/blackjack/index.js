import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta, determinarGanador } from "./usecases";

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





  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
    crearCarta(carta, 0, divCartasjugador);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasjugador);
    } else if (puntosJugador === 21) {
      console.warn("Genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasjugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasjugador);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });


  return {
    nuevoJuego: inicializarJuego,
  };
})();
