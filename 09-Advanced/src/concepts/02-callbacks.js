import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElemet} element 
 */

export const callBacksComponent = (element) => {

    const id = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f9f80b591f499df32';
    findHeroe(id, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay Heroe';
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHeroe(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;

        });

        // element.innerHTML = hero1.name;

    });

}

/**
 * 
 * @param {String} id 
 * @param {(error:String|null,hero: Object)=>void} callback 
 */
const findHeroe = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero width id ${id} not found`);
        return;// regresar undefined
    }

    // callback(hero); // fallaria si lo dejamos asi 1 error
    callback(null, hero); // fallaria si lo dejamos asi 1 error

}