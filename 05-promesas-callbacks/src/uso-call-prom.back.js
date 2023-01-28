// import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'spidey';
const heroeI2 = 'capi';


/* buscarHeroe(heroeId1, (err, heroe1) => {
    // if (err) {
    //     console.error(err)
    // } else {
    //     console.info(heroe)
    // }

    if (err) { return console.error(err); }

    buscarHeroe(heroeI2, (err, heroe2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);


    })

}); */

/* buscarHeroe(heroeId1).then(heroe1 => {
    // console.log(`Enviando a ${heroe.nombre} ala mision`)
    buscarHeroe(heroeI2).then(heroe2 => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);

    })
}); */

// EJECUTANDO PROMESAS EN PARALELO, sigue al then hasta que todas esas promesas se resuelvan
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeI2)])
    // .then(arr => {
    .then(([heroes1, heroes2]) => {
        console.log(`Enviando a ${heroes1.nombre} y ${heroes2.nombre} a la misión`);

    }).catch(err => {
        alert(err)
    }).finally(() => {
        console.log('se termino prmise.all')
    })

console.log('finalizo')