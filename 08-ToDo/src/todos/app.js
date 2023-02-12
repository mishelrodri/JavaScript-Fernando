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
    ClearCompleted: '.clear-completed',
    FilterDiv: '.filters',
    allFilters: '.filtro',
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
    const clearCompletedButton = document.querySelector(elementIds.ClearCompleted);
    const filterDiv = document.querySelector(elementIds.FilterDiv);
    const allFilters = document.querySelectorAll(elementIds.allFilters);

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


    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filterDiv.addEventListener('click', (event) => {

        /*         if (event.target.className === 'filtro' || event.target.className === 'selected filtro') {
                    // console.log(event.target)
                    renderTodos(elementIds.TodoList, todoStore.getTodos(event.target.text));
                    event.target.classList.add('selected');
                }
        
         */

        //SOLUCION DE FERNANDO
        if (event.target.className === 'filtro' || event.target.className === 'selected filtro') {
            // renderTodos(ElementIDs.TodoList, todoStore.getTodo(event.target.text));
            todoStore.setFilter(event.target.text);
            displayTodos();
            allFilters.forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
        }
    });


}