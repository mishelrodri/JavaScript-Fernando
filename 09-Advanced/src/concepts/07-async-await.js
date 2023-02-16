
/**
 * 
 * @param {HTMLDivElemet} element 
 */

export const asyncAwait2Component = async (element) => {

    console.time('Start')

    // ! AQUI TARDARÍA MÁS TIEMPO PORQUE ESPERARIA QUE SE RESULVA UN APOR UNA
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await FastPromise();

    // ! LAS PROMESAS SE DISPARAN DE FORMA SIMULTANEA
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        FastPromise()
    ])

    element.innerHTML = `
        value: ${value1} </br>
        value: ${value2} </br>
        value: ${value3} </br>
    `;

    console.timeEnd('Start');

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('sloww Promise')
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('medium Promise')
    }, 1500);
})

const FastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fasttt  Promise')
    }, 1000);
})