import { Todo } from "../classes";
import { todoList } from '../index'
// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')

export const crearTodoHTML = (todo) => {
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//EVENTOS

// agrega el evento CADA VEZ QUE TECLEAMOS
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        //event.target.value
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        // console.log(nuevoTodo);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
    }
})

//DELEGACION DE EVENTOS
divTodoList.addEventListener('click', (event) => {
    const nombreElemento = (event.target.localName)
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoElemento, todoId)

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);

    }

    // console.log(todoList)

});