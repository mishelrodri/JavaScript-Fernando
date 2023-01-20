
class Animal {

    nombre = '';
    grupo = '';
    color = '';

    constructor(nombre = "no tiene nombre", grupo, color) {

        this.nombre = nombre;
        this.grupo = grupo;
        this.color = color;
    }

}


const animal = new Animal('Perro', 'Mamifero', "Color");
console.log(animal)