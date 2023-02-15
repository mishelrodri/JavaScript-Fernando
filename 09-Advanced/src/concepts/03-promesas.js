
/**
 * 
 * @param {HTMLDivElemet} element 
 */

import { heroes } from "../data/heroes"

export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    }


    const renderError = (error) => {
        element.innerHTML = `<h3 style="color:red;">${error}</h3>`;

    }
    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f2343e37870b91ef1';

    Promise.all([
        findHeroe(id1),
        findHeroe(id2),
    ])
        // [] desestructuracion de arreglos
        .then(([hero1, hero2]) => renderTwoHeros(hero1, hero2))
        .catch(renderError)


    // !FORMA 1 de resolver + 2 promesas

    /*     findHeroe(id1)
            // .then(superHero => renderHero(superHero));
            .then((hero1) => {
    
                findHeroe(id2)
                    .then(hero2 => {
                        renderTwoHeros(hero1, hero2)
                    })
                    .catch(renderError);
    
            })
            .catch(renderError);
    
    } */


    // !FORMA 2 de resolver + 2 promesas
    //     let hero1;

    // findHeroe(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHeroe(id2)
    //     }).then(hero2 => {
    //         renderTwoHeros(hero1, hero2);
    //     }).catch(renderError)

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