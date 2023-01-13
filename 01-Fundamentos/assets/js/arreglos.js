

const arre = [
    true,
    123,
    'fernando',
    1 + 2,
    function () { },
    () => { },
    { a: 1 },
    ['x', 'megaman', 'zero'],
]

console.log(arre[7][2]);

// METODOS DE ARREGLOS

let juegos = ['Zelda', 'Mario', 'Meritoid']
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2]
let ultimo = juegos[juesgos.length - 1]

console.log({ primero, ultimo })

juegos.forEach((elemento, index, arr) => {
    console.log({ elemento, index, arr })
})

// agregamos al final del array
let nuevaLongitud = juegos.push('none')
console.log({ nuevaLongitud, juegos })


// agregamos al inicio
nuevaLongitud = juegos.unshift('fire embled')
console.log({ nuevaLongitud, juegos })

let juegoBorrado = juegos.pop()
console.log({ juegoBorrado, juegos })

// remueve elementos de una posicion y cuantos elementos a partir de esa posición

let pocision = 1;

console.log(juegos)

let juegosBorrados = juegos.splice(pocision, 2)
console.log({ juegosBorrados, juegos })


// encontrando el index de un valor
let metroidIndex = juegos.indexOf('Metroid')
console.log({ metroidIndex })

// TODO: kakakka

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);