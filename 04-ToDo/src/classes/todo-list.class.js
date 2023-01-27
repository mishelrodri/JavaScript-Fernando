
export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        // si el id es el que queremos eliminar no lo tomara en cuenta y creara un nuevo array
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                // para que salga del ciclo 
                break;
            }
        }
    }

    eliminarCompletados() {

    }
}