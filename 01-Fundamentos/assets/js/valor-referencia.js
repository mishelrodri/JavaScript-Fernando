
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

/** El valor de que almacenan ambas variables
 * hacen referencia al mismo objeto en memoria
 * y por eso se modifica el valor de juan solo una vez en el objeto XD
 */
let juan = { nombre: 'Juan' }
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana })

/// SPREAD

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre: 'peter' }
let tony = cambiaNombre(peter)

console.log({ peter, tony })

// ARREGLOS usando SLICE Y SPREAD


const frutas = ['🍎', '🍏', '🥑']

/* con [] creamos un nuevo arreglo y con el spread separaa los elemntos */
console.time('SPREAD')
let otrasFrutas = [...frutas]
console.timeEnd('SPREAD')

/* metodo de arreglo que corta el areglo y regresa los elementos que yo especifico y como no manda ningun argumento DEVUELVE UN NUEVO ARREGLO  */
console.time('SLICE')
let otrasFrutas2 = frutas.slice()
console.timeEnd('SLICE')


otrasFrutas.push('mango')
otrasFrutas2.push('mango2')

console.table({ frutas, otrasFrutas, otrasFrutas2 })

