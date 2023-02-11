import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Peding: 'Peding',
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
    console.log(state)
    console.log('init Store ⚡🥑');
}

const loadStore = () => {
    throw new Error('No implementado')
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
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
}

const deleteCompleted = (todoId) => {
    state.todos = state.todos.filter(todo => todo.done)


}

const setFilter = (newFilter = Filters.All) => {
    state.todos = newFilter;


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