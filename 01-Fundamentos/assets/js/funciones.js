

function saludar() {
    console.log('Hola Mundo')
}

var saludar = 123;

// console.log(saludar)
//EJECITANDOLA
// saludar()

const saludar2 = function (nombre) {
    console.log('Hola' + nombre)
}

// funciones de flecha

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha')
}


//RETRONO DE FUNCIONES

const saludarFlecha3 = () => {
    console.log('Hola Flecha')

    return ['🍎,🥑,🍏'];

    //esto nunca se va a ejecutar
    console.log('hola')
}

console.log(saludarFlecha3())


const sumar = (a, b) => {
    return a + b;
}


console.log(sumar(1, 2))


const getAleatorio = () => Math.random()

console.log(getAleatorio())