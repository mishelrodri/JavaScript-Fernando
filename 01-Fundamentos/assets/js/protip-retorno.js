
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const crearPersona2 = (nombre, apellido) => { return { nombre, apellido } }
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido })

console.log(crearPersona2('Pedro', 'Escalante'))


// ESTO SOLO FUNCIONA EN FUNCIONES TRADICIONALES

function imprimeArgumentos() {
    console.log(arguments)
}


// SU EQUIVALENTE EN F . FLECHAS SERIA

const imprimeArgumentos2 = (edad, ...args) => {
    console.log(...args)
    return args
}

// imprimeArgumentos('hola', true)
// imprimeArgumentos2('hola,', true)


const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Herrera')

console.log({ casado, vivo, nombre, saludo })

const { apellido: nuevoApellido } = crearPersona3('mishel', 'rodriguez')

console.log(nuevoApellido)

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    console.log({ nombre })
    console.log({ codeName })
    console.log({ vivo })
    console.log({ edad })
    console.log({ trajes })
}

imprimePropiedades(personaje)