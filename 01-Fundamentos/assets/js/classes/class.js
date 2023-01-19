
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre, codigo = "valor por defecto", frase) {
        if (!nombre) throw Error('necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }
}

const spiderman = new Persona('Peter');
console.log(spiderman)