
class Rectangulo {
    // variables privadas
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;

    }
}

const rectangulo = new Rectangulo(10, 10)
// rectangulo.#area = 100;
console.log(rectangulo)