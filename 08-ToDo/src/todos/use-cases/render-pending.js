import todoStore, { Filters } from "../../store/todo.store";

let element;
export const renderPending = (elementId) => {
    // console.log(elementId)
    if (!element) {
        element = document.querySelector(elementId)
    }
    if (!element) throw new Error('Element NOT FOUND')

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;

}