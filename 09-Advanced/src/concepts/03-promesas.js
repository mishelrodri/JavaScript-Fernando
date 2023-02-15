
/**
 * 
 * @param {HTMLDivElemet} element 
 */

import { heroes } from "../data/heroes"

export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }


    const renderError = (error) => {
        element.innerHTML = `<h3 style="color:red;">${error}</h3>`;

    }
    const id1 = '5d86371f9f80b591f499df32***';
    findHeroe(id1)
        // .then(superHero => renderHero(superHero));
        .then(renderHero)
        .catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHeroe = (id) => {

    // const promise = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {


        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`)
    });

    // return promise;

}