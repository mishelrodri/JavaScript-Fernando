
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generationFunctionComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next())

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`
    }

    button.addEventListener('click', renderButton)


}
function* idGenerator() {
    let currentId = 0;
    while (true) {
        // ! pa que primero incremente y despues me de el VALOR
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction() {

    //! es como un return - PAUSADO
    yield 'Primer VALOR';
    yield 'Segundo VALOR';
    yield 'Tercer VALOR';
    yield 'Cuarto VALOR';

    return 'No hay más valores';
    yield 'Ya no puedes hacer nada';

}