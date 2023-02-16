import { loadUsersByPage } from "../use-cases/load-users"

const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {
    // throw new Error('No implementado')
    await loadUsersByPage(state.currentPage + 1);
}


const loadPreviousPage = async () => {
    throw new Error('No implementado')
}


const onUserChanged = async () => {
    throw new Error('No implementado')
}


const reloadPage = async () => {
    throw new Error('No implementado')
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,

}