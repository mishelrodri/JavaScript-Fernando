import './render-add-button.css'
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {()=>void} callback 
 */
// export const renderAddButton = (element, callback) => {
export const renderAddButton = (element) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener('click', () => {
        // ! Con callback desde el padre
        // if (!callback) return;
        // callback();
    })

}