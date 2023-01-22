

class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        // console.log(Singleton.instancia)
        /*  const a = undefined;
         console.log(a)
         console.log(!a)
         console.log(!!a) */

        // si ya existe una instancia que la RETORNEE
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        // return this;
    }
}


const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('spidey');
const instancia3 = new Singleton('panther');
console.log('el nombre de la instancia 1 es : ' + instancia1.nombre)
console.log('el nombre de la instancia 2 es : ' + instancia2.nombre)
console.log('el nombre de la instancia 3 es : ' + instancia3.nombre)