
/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const generatorAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinish = false;
    do {
        const { value, done } = await heroGenerator.next();
        isFinish = done;
        // if (isFinish) break;

        element.innerHTML = value;

        // console.log({ value, done })


    } while (!isFinish)




}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return ' No hay más'
}



const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}

