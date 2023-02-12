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
    NewTodoInput: '.new-todo',
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

    //REFERENCIAS abajo porque arriba se crea apenas la estructura del HTML

    const newDescription = document.querySelector(elementIds.NewTodoInput);
    const todoListUL = document.querySelector(elementIds.TodoList);

    newDescription.addEventListener('keyup', (event) => {
        // console.log(event);
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const elemt = event.target.closest('[data-id]');

        // if (event.target.classList.value === 'destroy') {
        if (event.target.className === 'destroy') {
            todoStore.deleteTodo(elemt.getAttribute('data-id'));
            displayTodos();
            return;
        }
        // console.log()

        todoStore.toggleTodo(elemt.getAttribute('data-id'));
        displayTodos();
    });


}