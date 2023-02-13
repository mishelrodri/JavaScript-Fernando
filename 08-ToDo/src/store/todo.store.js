import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'Todos',
    Completed: 'Completados',
    Pending: 'Pendientes',
}

const state = {
    todos: [
        new Todo('piedra del alma'),
        new Todo('piedra del infinito'),
        new Todo('piedra del equis'),
    ],
    filter: Filters.All,
}


const initStore = () => {
    // console.log(state)
    loadStore();
    console.log('init Store ⚡🥑');
}

const loadStore = () => {
    // throw new Error('No implementado');

    if (!localStorage.getItem('state')) {
        return;
    }

    const { todos, filter } = JSON.parse(localStorage.getItem('state'))
    state.todos = todos;
    state.filter = filter;
}

const saveStsteLocalStorage = () => {
    // localStorage.setItem('state', 'hola')
    // console.log(JSON.stringify(state));
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not vv.`);
    }
}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('No implementado')
    state.todos.push(new Todo(description));
    saveStsteLocalStorage();


}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    })
    saveStsteLocalStorage();

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
    saveStsteLocalStorage();

}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)


}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveStsteLocalStorage();

}


const getCurrentFilter = () => {
    return state.filter;
}


export default {
    deleteCompleted,
    getTodos,
    deleteTodo,
    getCurrentFilter,
    initStore,
    setFilter,
    toggleTodo,
    loadStore,
    addTodo
}