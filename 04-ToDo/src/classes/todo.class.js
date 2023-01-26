
export class Todo {
    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // hora minuto segundo
        this.completado = false;
        this.creado = new Date();
    }
}