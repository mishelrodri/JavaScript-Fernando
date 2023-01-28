
export class Todo {
    // convirtiendo el JSON a instancias
    static fromJSON({ id, tarea, completado, creado }) {
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // hora minuto segundo
        this.completado = false;
        this.creado = new Date();
    }
}