
/**
 * 
 * @param {HTMLDivElemet} element 
 */

export const PromiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }
    Promise.race([
        slowPromise(),
        mediumPromise(),
        FastPromise(),
    ])
        //solo resulve la mas rapida
        .then(renderValue)
}


const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('sloww Promise')
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('medium Promise')
    }, 3500);
})

const FastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fasttt  Promise')
    }, 3000);
})