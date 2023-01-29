// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
import { heroesCiclo, heroesIfAwait, obtenerHeroeAwait, obtenerHeroesArr } from './js/await.js'
import { buscarHeroe, buscarHeroeAsync } from './js/promesas'

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn)


//OTRO CASO
/* buscarHeroe('capi')
    .then(console.log)
    .catch(console.warn)
buscarHeroeAsync('spidey')
    .then(heroe => console.log(heroe))
    .catch(console.warn)
 */

console.time('await')

// obtenerHeroesArr().then(heroes => {
//     console.table(heroes);

//     console.timeEnd('await')

// });
/* obtenerHeroeAwait('cavpi').then(heroe => {
    console.log(heroe);

    console.timeEnd('await')

}).catch(console.warn)
 */
// console.table(heroes)

heroesCiclo();


heroesIfAwait('spidey');