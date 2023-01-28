import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id) {
        // si el id es el que queremos eliminar no lo tomara en cuenta y creara un nuevo array
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();

                // para que salga del ciclo 
                break;
            }
        }
    }

    eliminarCompletados() {
        // va a crear un array con los todo que NO ESTEN COMPLETADOS
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    cargarLocalStorage() {

        // if (localStorage.getItem('todo')) {
        //     //lo volvio a convertir en un objeto
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log("cargarlocalstorage", this.todos)
        //     console.log(typeof this.todos)
        // } else {
        //     this.todos = [];

        // }

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

        // this.todos = this.todos.map(obj => Todo.fromJSON(obj));
        this.todos = this.todos.map(Todo.fromJSON);

    }
}