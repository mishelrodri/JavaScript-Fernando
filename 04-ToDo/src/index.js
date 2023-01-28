import './styles.css';
import { Todo, TodoList } from './classes/'
import { crearTodoHTML } from './js/componentes';

// exportamos la clase
export const todoList = new TodoList();
// const tarea = new Todo('Aprender Java Script');

// todoList.nuevoTodo(tarea)
// crearTodoHTML(tarea);

/* 
localStorage.setItem('mi-key', 'ABC123');
sessionStorage.setItem('mi-key', 'ABC123');
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500); */

todoList.todos.forEach(todo => {
    crearTodoHTML(todo);
});

// ESTE LO USAMOS CUANDO RECONSTRUIMOS INSTANCIAS
/* const newTodo = new Todo('aprender jojo');
todoList.nuevoTodo(newTodo)
console.log(todoList) */
// ESTO ES LO MISMO PERO SOLO SI ES UN ARGUMENTO!!!
//todoList.todos.forEach(crearTodoHTML);