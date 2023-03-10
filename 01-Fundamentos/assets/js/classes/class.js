
class Persona {
    // variables estaticas
    static _conteo = 0;
    //Nos permite usarlas sin instaciar la CLASE
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        //   this.nombre;  Da undefinden porque no podemos hacer uso de las variables ya que estos metodos son estaticos
        console.log('Hola todos des un metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre, codigo = "valor por defecto", frase) {
        if (!nombre) throw Error('necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        //el constructor se ejecuta cada que se crea una clase

        Persona._conteo++;

    }
    // METODOS
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.codigo}`)
    }
    // GETTERS & SETTERS

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es: ${this.comida} `;
    }

}

const spiderman = new Persona('Peter');
console.log(spiderman)
spiderman.quienSoy()
spiderman.miFrase()
spiderman.setComidaFavorita = 'El pie de Cereza';

// cosas malas que pueden suceder en JavaScript
// spiderman.comida = 'duende verde'
spiderman.nuevaVar = 'esto no se deberia permitir'
console.log(spiderman.getComidaFavorita)

// console.log('Conteo estatico ' + Persona._conteo)
console.log(Persona.conteo)

Persona.propiedaExterna = "Crea variable estatica de esta manera"
Persona.mensaje()