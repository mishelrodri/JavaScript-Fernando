/**
 * 2C = Two of Clubs (Tréboles)
 * 2C = Two of Diamonds (Tréboles)
 * 2C = Two of Hearts (Tréboles)
 * 2C = Two of Spades (Tréboles)
 */



let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// REFERENCIAS DEL HTML
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const jugadorCartas = document.querySelector('#jugador-cartas');
const computadoraCartas = document.querySelector('#computadora-cartas');

// esta funcion crea un nuevo DECK
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    // console.log(deck); // deck sin ordenar
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}


// ESTA FUNCION ME PERMITE TOMAR UNA CARTA

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}


const valorCarta = (carta) => {
    // el valor substring(se incluye, no se incluye)
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // isNaN() = is not a  number?
    // if (isNaN(valor)) {
    //     puntos = (valor === 'A') ? 11 : 10;
    //} else {
    //console.log('Es un número')

    //  puntos = valor * 1;
    //}

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;


}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        // console.log(carta)
        puntosComputadora += valorCarta(carta);
        console.log(puntosComputadora);
        puntosHTML[1].innerText = puntosComputadora;

        const imagen = document.createElement('img');
        imagen.src = `assets/cartas/${carta}.png`
        imagen.classList.add('carta');
        computadoraCartas.append(imagen)

        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 100);

}


crearDeck();
//Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    // console.log(carta)
    puntosJugador += valorCarta(carta);
    console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;

    const imagen = document.createElement('img');
    imagen.src = `assets/cartas/${carta}.png`
    imagen.classList.add('carta');
    jugadorCartas.append(imagen)

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);


    }

})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

})

btnNuevo.addEventListener('click', () => {
    deck = [];
    crearDeck();
    jugadorCartas.innerHTML = '';
    computadoraCartas.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    // puntosHTML[0].innerText = puntosJugador;
    // puntosHTML[1].innerText = puntosComputadora;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

})


const gano = () => {
    if (((puntosJugador > puntosComputadora) && puntosJugador <= 21)) {
        alert('GANASTE')
    } else {
        alert('NO GANASTE')

    }
}