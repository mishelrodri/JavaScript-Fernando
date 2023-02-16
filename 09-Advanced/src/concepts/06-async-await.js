
/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const asyncAwaitComponent = async (element) => {

    const id1 = '5d86371f2343e37870b91ef1*'
    const id2 = '5d86371f1efebc31def272e2'

    try {
        const { name: name1 } = await findHero(id1); // espera que se termine de ejecutar
        const hero2 = await findHero(id2);
        element.innerHTML = `${name1} / ${hero2.name}`

    } catch (error) {
        element.innerHTML = error;

    }
    // findHero(id).then(elem => element.innerHTML = elem)

}

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id)
    if (!hero)
        throw 'Hero NOT FOUND'

    return hero;

}