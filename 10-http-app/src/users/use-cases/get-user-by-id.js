import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const getUsersById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`

    const resp = await fetch(url);
    const data = await resp.json();

    const user = localhostUserToModel(data);
    // console.log({ user });

    return user;
}