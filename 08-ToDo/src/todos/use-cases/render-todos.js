import { createTodoHTML } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    if (!element)
        element = document.querySelector(elementId);
    // console.log(todos)
    if (!element) throw new Error('no encontrado el elemento')
    //TODO: referencia

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
}