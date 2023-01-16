
/**
 * Dias de semana abrimos a las 11,
 * peros losfines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0; // domingo
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, esta cerrado , abrimos a las XX

// if (dia === 0 || dia === 6) {
/* if ([0, 6].includes(dia)) {
    console.log('Fin de semana')
} else {
    console.log('Dia de semana')
    horaApertura = 11;
}
 */

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

/* if (horaActual >= horaApertura) {
    mensaje = 'Está abierto'
} else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`
} */

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje })


// OTROS USOS

// const elMayor = (a, b) => {
//     return (a > b) ? a : b;
// }


const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '$2' : '$5';

console.log(elMayor(10, 15))
console.log(tieneMembresia(false))

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),
    elMayor(10, 15)
]

console.log(amigosArr)

const nota = 65; // A+,A, B
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
                nota >= 75 ? 'C' :
                    nota >= 70 ? 'C+' : 'F';

console.log({ nota, grado });