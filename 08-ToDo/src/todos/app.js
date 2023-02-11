import todoStore from '../store/todo.store';
// que lo importe en crudo
import html from './app.html?raw'
import { renderTodos } from './use-cases';
/**
 * 
 * @param {String} elementId 
 */


const elementIds = {
    TodoList: '.todo-list',
}
export const App = (elementId) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        // console.log(todos);
        renderTodos(elementIds.TodoList, todos);
    }

    //se va ejecutar cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}