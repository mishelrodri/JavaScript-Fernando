import './styles.css';
import { Todo, TodoList } from './classes/'
import { crearTodoHTML } from './js/componentes';

// exportamos la clase
export const todoList = new TodoList();
const tarea = new Todo('Aprender Java Script');


todoList.nuevoTodo(tarea)


crearTodoHTML(tarea);