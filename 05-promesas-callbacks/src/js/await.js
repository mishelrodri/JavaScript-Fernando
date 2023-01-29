import { buscarHeroe, buscarHeroeAsync } from './promesas'


const heroesIDs = ['capi', 'spidey'];
const heroesPromesas = heroesIDs.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    return await Promise.all(heroesIDs.map(buscarHeroe));

    // const heroesArr = [];


    // for (const id of heroesIDs) {
    //WAIT
    // const heroe = await buscarHeroe(id);

    //     heroesArr.push(buscarHeroe(id));
    // heroesArr.push(heroe);
    // }

    // setTimeout(() => {
    //     console.log('obtener heroes')
    //     console.table(heroesArr)
    // }, 1000);

    // return await Promise.all(heroesArr);
}


export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    } catch (error) {
        console.log('catch!!!')
        //para que el errorlo manejamos en el index
        // throw error;

        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
}

export const heroesCiclo = async () => {
    console.time('Heroes ciclo')
    //  heroesPromesas.forEach(async (p) => console.log(await p));

    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }

    // const heroes = await Promise.all(heroesPromesas)
    // console.log(heroes)
    // heroes.forEach(heroe => console.log(heroe))
    console.timeEnd('Heroes ciclo')
}


export const heroesIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'peter') {
        console.log('si es')
    } else {
        console.log('naaaa')
    }
}