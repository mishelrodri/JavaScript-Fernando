import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users"

const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage = async () => {
    // throw new Error('No implementado')
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}


const loadPreviousPage = async () => {
    // throw new Error('No implementado')
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.users = users;

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
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}