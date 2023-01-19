
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}

fher.imprimir()

function Persona(nombre, edad) {
    console.log('se ejecuto esta linea')

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('melissa', 18);
console.log(maria)