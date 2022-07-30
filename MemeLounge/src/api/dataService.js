import { removeUser, setUser } from "../utill.js";
import api from "./api.js"
import { endpoint } from "./endpoints.js";

// authorization services
const unauthorizePostRequest = (uri, data) => api.post(uri, data)
    .then(user => {
        setUser(user);
        return user;
    });
const login = (data) => unauthorizePostRequest(endpoint.login, data);
const register = (obj) => unauthorizePostRequest(endpoint.register, obj);
const logout = () => api.get(endpoint.logout)
    .then(() => removeUser());

// common services
const getCatalogData = () => api.get(endpoint.catalogData);
const getById = (id) => api.get(endpoint.catalogGet + id);
const deleteById = (id) => api.del(endpoint.catalogGet + id);
const addData = (data) => api.post(endpoint.catalogPost, data)
const editData = (id, data) => api.put(endpoint.catalogGet + id, data)
const getUserCatalog = (id) => api.get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);

export const dataService = {
    register,
    login,
    logout,
    getCatalogData,
    getById,
    deleteById,
    addData,
    editData,
    getUserCatalog
}