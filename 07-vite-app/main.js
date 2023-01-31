import _ from "underscore";
import "./style.css";

const miModulo = (() => {
  "use strict";
  /**
   * 2C = Two of Clubs (Tréboles)
   * 2C = Two of Diamonds (Tréboles)
   * 2C = Two of Hearts (Tréboles)
   * 2C = Two of Spades (Tréboles)
   */

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
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasjugador.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // esta funcion crea un nuevo DECK
  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    // console.log(deck); // deck sin ordenar
    // deck = _.shuffle(deck);
    //console.log(deck);

    return _.shuffle(deck);
  };

  // ESTA FUNCION ME PERMITE TOMAR UNA CARTA

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };

  const valorCarta = (carta) => {
    // el valor substring(se incluye, no se incluye)
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
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
      const carta = pedirCarta();
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
    const carta = pedirCarta();
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
