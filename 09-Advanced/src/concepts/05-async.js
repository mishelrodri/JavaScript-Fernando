import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElemet} element 
 */


export const asyncComponent = (element) => {

    const id = "5d86371f2343e37870b91ef1";
    console.log('inicio componnete')
    findHero(id)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)
    console.log('fin componenete')
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw ` Hero with ${id} NOT FOUND`

    // return hero?.name;
    return hero.name;

    // ! CON TRY CATCH
    /*     try {
            const hero = heroes.find(hero => hero.id === id);
            return hero.name;
        } catch (error) {
    
            throw ` Hero with ${id} NOT FOUND`;
        } */
}