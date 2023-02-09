// que lo importe en crudo
import html from './app.html?raw'
/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //se va ejecutar cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

}