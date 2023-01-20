
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

// HERENCIA

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    //sobreescribir un metodo
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`)
        // mandar a llamar el metodo SIN SOBREESCRIBIR
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter', 'spider', 'hey hey');
console.log(spiderman)
console.log(spiderman.quienSoy())